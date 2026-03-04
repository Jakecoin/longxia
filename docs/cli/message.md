---
summary: "Restricted `openclaw message` guidance for Longxia"
read_when:
  - You want to send messages through the channels still enabled in Longxia
  - You found older examples that referenced removed channels
title: "message"
---

# `openclaw message`

Longxia keeps `openclaw message`, but only for the channels still enabled in this fork.

Do not use upstream examples that target Telegram, Discord, WhatsApp, or plugin-delivered channels.

Use:

```bash
openclaw channels capabilities
openclaw message --help
```

Then choose one of the currently supported channels from [Chat Channels](/channels/index).

