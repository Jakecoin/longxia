---
summary: "Longxia runtime outbound-boundary policy"
title: "Network Boundary"
---

# Network Boundary

Longxia is a controlled-boundary fork. Runtime outbound integrations must stay inside a reviewed allowlist.

See also: [Project Blueprint](./project-blueprint.md)

## Default policy

- Only bundled, preapproved capabilities may run in production.
- Runtime plugin installation and plugin mutation are disabled.
- Telegram, Discord, and WhatsApp are disabled in this fork.
- New outbound integrations must be added through code review and deployment-time bundling.

## Operational expectations

- Keep tenant and usage accounting tied to every request path.
- Prefer explicit proxy or service-layer egress over direct third-party access.
- Treat any new external connector as a product and security review item, not a user toggle.
