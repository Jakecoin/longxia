---
summary: "CLI behavior for the restricted `openclaw plugins` surface in Longxia"
read_when:
  - You want to understand why `openclaw plugins` mutating commands are blocked
title: "plugins"
---

# `openclaw plugins`

Longxia blocks all mutating plugin commands.

Allowed for inspection only:

- `openclaw plugins list`
- `openclaw plugins info <id>`

Blocked in this fork:

- `openclaw plugins install`
- `openclaw plugins enable`
- `openclaw plugins disable`
- `openclaw plugins uninstall`
- `openclaw plugins update`
- `openclaw plugins doctor`

If a capability is needed, add it at build time and ship it as part of the reviewed deployment.
