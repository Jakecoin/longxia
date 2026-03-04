---
summary: "Fast channel troubleshooting for the reduced Longxia channel set"
read_when:
  - A configured channel is connected but behaving incorrectly
  - You need a quick first-pass diagnostic flow
title: "Channel Troubleshooting"
---

# Channel Troubleshooting

Use this page for the channels that remain enabled in Longxia. Telegram, Discord, and WhatsApp troubleshooting content was removed with those integrations.

## Command ladder

Run these first:

```bash
openclaw status
openclaw gateway status
openclaw logs --follow
openclaw doctor
openclaw channels status --probe
```

## What to check next

- pairing and allowlists for the selected supported channel
- channel credentials or webhook configuration
- gateway reachability and auth
- logs for outbound delivery failures

Then continue with the specific guide for the still-enabled channel you are using, such as Slack, Signal, BlueBubbles, Google Chat, or IRC.

