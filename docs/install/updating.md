---
summary: "Update Longxia using local scripts and approved mirrors"
read_when:
  - You need to update an existing Longxia install
title: "Updating"
---

# Updating

Longxia updates should use the same controlled path as installs: local scripts, approved source mirrors, and a mainland-friendly npm registry.

## npm-style install

```bash
export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
npm_config_registry=https://registry.npmmirror.com npm install -g openclaw@latest
```

## Git-style install

```bash
export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
export OPENCLAW_GIT_REPO_URL=<your-approved-git-remote>
bash scripts/install.sh --install-method git --no-onboard
```

## After updating

```bash
openclaw doctor
openclaw status
```

Do not switch back to the legacy remote installer URLs when updating.
