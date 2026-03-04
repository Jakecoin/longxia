const DISABLED_PLUGIN_IDS = new Set(["discord", "telegram", "whatsapp"]);

function normalizeId(raw?: string | null): string {
  return String(raw ?? "")
    .trim()
    .toLowerCase();
}

export function isPluginDisabledInLongxia(raw?: string | null): boolean {
  const normalized = normalizeId(raw);
  return normalized !== "" && DISABLED_PLUGIN_IDS.has(normalized);
}

export function isChatChannelDisabledInLongxia(raw?: string | null): boolean {
  return isPluginDisabledInLongxia(raw);
}

export function getPluginManagementDisabledMessage(): string {
  return "Plugin installation and plugin management are disabled in Longxia. Use only the bundled, preapproved capabilities exposed by this build.";
}
