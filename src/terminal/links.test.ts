import { describe, expect, it } from "vitest";
import { DOCS_ROOT, formatDocsLink, formatDocsRootLink } from "./links.js";

describe("terminal docs links", () => {
  it("uses local docs root in this fork", () => {
    expect(DOCS_ROOT).toBe("./docs");
    expect(formatDocsRootLink()).toBe("./docs");
  });

  it("renders local docs paths without external URLs", () => {
    expect(formatDocsLink("/cli")).toBe("./docs/cli");
    expect(formatDocsLink("help/faq.md")).toBe("./docs/help/faq.md");
  });
});
