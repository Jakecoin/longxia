import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isChatChannelDisabledInLongxia } from "../fork-policy.js";
import { listChannelPluginCatalogEntries } from "../channels/plugins/catalog.js";
import { listChannelPlugins } from "../channels/plugins/index.js";
import { listPublicChatChannelIds } from "../channels/registry.js";
import { isTruthyEnvValue } from "../infra/env.js";
import { ensurePluginRegistryLoaded } from "./plugin-registry.js";

function dedupe(values: string[]): string[] {
  const seen = new Set<string>();
  const resolved: string[] = [];
  for (const value of values) {
    if (!value || seen.has(value)) {
      continue;
    }
    seen.add(value);
    resolved.push(value);
  }
  return resolved;
}

function filterDisabledChannelOptions(values: string[]): string[] {
  return values.filter((value) => !isChatChannelDisabledInLongxia(value));
}

let precomputedChannelOptions: string[] | null | undefined;

function loadPrecomputedChannelOptions(): string[] | null {
  if (precomputedChannelOptions !== undefined) {
    return precomputedChannelOptions;
  }
  try {
    const metadataPath = path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      "..",
      "cli-startup-metadata.json",
    );
    const raw = fs.readFileSync(metadataPath, "utf8");
    const parsed = JSON.parse(raw) as { channelOptions?: unknown };
    if (Array.isArray(parsed.channelOptions)) {
      precomputedChannelOptions = filterDisabledChannelOptions(
        dedupe(parsed.channelOptions.filter((value): value is string => typeof value === "string")),
      );
      return precomputedChannelOptions;
    }
  } catch {
    // Fall back to dynamic catalog resolution.
  }
  precomputedChannelOptions = null;
  return null;
}

export function resolveCliChannelOptions(): string[] {
  const bundled = listPublicChatChannelIds();
  if (isTruthyEnvValue(process.env.OPENCLAW_EAGER_CHANNEL_OPTIONS)) {
    const catalog = listChannelPluginCatalogEntries().map((entry) => entry.id);
    const base = dedupe([...bundled, ...catalog]);
    ensurePluginRegistryLoaded();
    const pluginIds = filterDisabledChannelOptions(listChannelPlugins().map((plugin) => plugin.id));
    return dedupe([...base, ...pluginIds]);
  }
  const precomputed = loadPrecomputedChannelOptions();
  const catalog = listChannelPluginCatalogEntries().map((entry) => entry.id);
  const base = precomputed
    ? dedupe([...precomputed, ...catalog])
    : dedupe([...bundled, ...catalog]);
  return base;
}

export function formatCliChannelOptions(extra: string[] = []): string {
  return [...extra, ...resolveCliChannelOptions()].join("|");
}
