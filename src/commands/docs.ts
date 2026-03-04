import { hasBinary } from "../agents/skills.js";
import { formatCliCommand } from "../cli/command-format.js";
import { runCommandWithTimeout } from "../process/exec.js";
import type { RuntimeEnv } from "../runtime.js";
import { formatDocsLink } from "../terminal/links.js";
import { isRich, theme } from "../terminal/theme.js";

const SEARCH_TIMEOUT_MS = 30_000;
const DEFAULT_SNIPPET_MAX = 220;
const LOCAL_DOCS_TARGETS = ["docs", "README.md"] as const;

type DocResult = {
  title: string;
  link: string;
  snippet?: string;
};

function normalizeSnippet(raw: string | undefined): string {
  const cleaned = (raw ?? "").replace(/\s+/g, " ").trim();
  if (!cleaned) {
    return "";
  }
  if (cleaned.length <= DEFAULT_SNIPPET_MAX) {
    return cleaned;
  }
  return `${cleaned.slice(0, DEFAULT_SNIPPET_MAX - 3)}...`;
}

function parseLocalSearchOutput(raw: string): DocResult[] {
  const lines = raw
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const results: DocResult[] = [];
  for (const line of lines) {
    const match = /^([^:]+):(\d+):(.*)$/.exec(line);
    if (!match) {
      continue;
    }
    const [, file, lineNo, text] = match;
    const snippet = normalizeSnippet(text);
    results.push({
      title: `${file}:${lineNo}`,
      link: `./${file}#L${lineNo}`,
      snippet: snippet || undefined,
    });
  }
  return results;
}

function escapeMarkdown(text: string): string {
  return text.replace(/[()[\]]/g, "\\$&");
}

function buildMarkdown(query: string, results: DocResult[]): string {
  const lines: string[] = [`# Docs search: ${escapeMarkdown(query)}`, ""];
  if (results.length === 0) {
    lines.push("_No results._");
    return lines.join("\n");
  }
  for (const item of results) {
    const title = escapeMarkdown(item.title);
    const snippet = item.snippet ? escapeMarkdown(item.snippet) : "";
    const suffix = snippet ? ` - ${snippet}` : "";
    lines.push(`- [${title}](${item.link})${suffix}`);
  }
  return lines.join("\n");
}

function renderRichResults(query: string, results: DocResult[], runtime: RuntimeEnv) {
  runtime.log(`${theme.heading("Docs search:")} ${theme.info(query)}`);
  if (results.length === 0) {
    runtime.log(theme.muted("No results."));
    return;
  }
  for (const item of results) {
    const link = formatDocsLink(item.link, item.link, { fallback: item.link });
    runtime.log(
      `${theme.muted("-")} ${theme.command(item.title)} ${theme.muted("(")}${link}${theme.muted(")")}`,
    );
    if (item.snippet) {
      runtime.log(`  ${theme.muted(item.snippet)}`);
    }
  }
}

async function renderMarkdown(markdown: string, runtime: RuntimeEnv) {
  runtime.log(markdown.trimEnd());
}

async function runLocalDocsSearch(query: string) {
  if (hasBinary("rg")) {
    return await runCommandWithTimeout(
      ["rg", "-n", "-i", "-m", "20", "--no-heading", query, ...LOCAL_DOCS_TARGETS],
      { timeoutMs: SEARCH_TIMEOUT_MS },
    );
  }
  if (hasBinary("grep")) {
    return await runCommandWithTimeout(
      ["grep", "-RIn", "-m", "20", query, ...LOCAL_DOCS_TARGETS],
      { timeoutMs: SEARCH_TIMEOUT_MS },
    );
  }
  throw new Error("Missing docs search tool: rg or grep required.");
}

export async function docsSearchCommand(queryParts: string[], runtime: RuntimeEnv) {
  const query = queryParts.join(" ").trim();
  if (!query) {
    const docs = formatDocsLink("/", "./docs", { fallback: "./docs" });
    runtime.log(`Docs: ${docs}`);
    runtime.log(`Search: ${formatCliCommand('openclaw docs "your query"')}`);
    return;
  }

  const res = await runLocalDocsSearch(query);
  if (res.code !== 0 && res.code !== 1) {
    const err = res.stderr.trim() || res.stdout.trim() || `exit ${res.code}`;
    runtime.error(`Docs search failed: ${err}`);
    runtime.exit(1);
    return;
  }

  const results = parseLocalSearchOutput(res.stdout);
  if (isRich()) {
    renderRichResults(query, results, runtime);
    return;
  }
  const markdown = buildMarkdown(query, results);
  await renderMarkdown(markdown, runtime);
}
