---
summary: "Status command overview for Longxia"
read_when:
  - You want a quick operational health check
title: "status"
---

# `openclaw status`

`openclaw status` remains the first-pass operational check in Longxia.

`--deep` only probes the channels and services still enabled in this fork. Older documentation that listed Telegram, Discord, or WhatsApp probes does not apply here.

Use `openclaw channels status --probe` for channel-specific checks on the currently supported channel set.

