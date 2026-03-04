---
summary: "Docker deployment notes for Longxia"
title: "Docker"
---

# Docker

Use Docker for Longxia only with the reduced channel set and bundled capabilities shipped in this fork.

Older upstream Docker steps that onboarded Telegram, Discord, WhatsApp, or plugin-installed channels do not apply here.

When deploying with Docker:

- keep only the channels listed in [Chat Channels](/channels/index)
- avoid runtime plugin installation
- keep outbound access inside the Longxia deployment boundary

See [Network Boundary](/design/network-boundary) before enabling any external connector.

