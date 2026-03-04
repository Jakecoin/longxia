---
summary: "exe.dev is not a recommended Longxia deployment path"
read_when:
  - You are reviewing legacy deployment docs
title: "exe.dev"
---

# exe.dev

Longxia does not recommend `exe.dev` as a default deployment path.

That upstream flow depended on public-hosted bootstrap steps, remote install docs, and an externally exposed runtime. For this fork, deployments should use:

- a local checkout or approved source mirror
- local installer scripts
- a controlled network boundary

If you need hosted deployment, write a Longxia-specific deployment runbook for your own infrastructure instead of following the old `exe.dev` recipe.
