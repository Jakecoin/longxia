---
summary: "Longxia FAQ for controlled deployments and mainland-friendly installation"
read_when:
  - You want quick answers about Longxia setup
  - You need the supported install and troubleshooting path
title: "FAQ"
---

# FAQ

## What is the recommended install path?

Use a local checkout of this repository and run the bundled installer scripts. Do not rely on the old upstream remote installer URLs.

```bash
export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
bash scripts/install.sh
```

## Which npm registry should I use in mainland China?

Use:

```text
https://registry.npmmirror.com
```

This fork also ships `.npmrc` with that registry as the default project setting.

## How should I use git install mode?

Point `OPENCLAW_GIT_REPO_URL` at your own approved mirror or internal Git service. Longxia does not recommend operational docs that depend on a hard-coded public GitHub clone URL.

## Are Telegram, Discord, WhatsApp, and runtime plugins still supported?

No. They are disabled in this fork. New integrations must be bundled at build time and reviewed before release.

## Where should I look when install or startup fails?

Start with:

- [Install](/install)
- [Node.js](/install/node)
- [Troubleshooting](/help/troubleshooting)
- [Configuration](/gateway/configuration)

## Where do I ask for help?

Use your own internal support path, issue tracker, or deployment operator workflow. This fork does not route users to external chat communities.
