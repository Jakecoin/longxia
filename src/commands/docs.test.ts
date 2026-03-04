import { describe, expect, it } from "vitest";
import { docsSearchCommand } from "./docs.js";

describe("docsSearchCommand", () => {
  it("prints local docs guidance when no query is provided", async () => {
    const logs: string[] = [];
    const runtime = {
      log: (line: string) => logs.push(line),
      error: () => {},
      exit: () => {},
    } as any;

    await docsSearchCommand([], runtime);

    expect(logs).toEqual([
      "Docs: ./docs",
      'Search: openclaw docs "your query"',
    ]);
  });
});
