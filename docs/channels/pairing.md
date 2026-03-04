---
summary: "Pairing overview for the channels and devices still supported in Longxia"
read_when:
  - Setting up DM access control
  - Pairing a new iOS/Android node
  - Reviewing Longxia security posture
title: "Pairing"
---

# Pairing

Pairing remains the owner-approval gate for:

1. inbound DM access
2. node/device enrollment

Longxia no longer documents Telegram, WhatsApp, or Discord-based pairing flows.

## DM pairing

When a supported channel uses DM policy `pairing`, unknown senders receive a short approval code and their message is blocked until you approve it.

Use:

```bash
openclaw pairing list <supported-channel>
openclaw pairing approve <supported-channel> <CODE>
```

Supported channels in this fork are the channels still listed in [Chat Channels](/channels/index).

## Node pairing

Approve devices with:

```bash
openclaw devices list
openclaw devices approve <requestId>
openclaw devices reject <requestId>
```

Node pairing state remains under `~/.openclaw/devices/`.

See [Security](/gateway/security) and [Network Boundary](/design/network-boundary).

