---
summary: "Fast troubleshooting for Longxia install and startup issues"
read_when:
  - Longxia is not starting correctly
  - You need a quick triage flow without external support links
title: "Troubleshooting"
---

# Troubleshooting

## First checks

Run these in order:

```bash
openclaw status
openclaw status --all
openclaw gateway probe
openclaw gateway status
openclaw doctor
openclaw logs --follow
```

## If install failed

Re-run the local installer in verbose mode instead of using any remote `curl | bash` flow:

```bash
export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
bash scripts/install.sh --verbose
```

For Windows:

```powershell
$env:OPENCLAW_NPM_REGISTRY="https://registry.npmmirror.com"
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

## If `openclaw` is not found

Check your Node and npm PATH setup:

```bash
node -v
npm -v
npm prefix -g
echo "$PATH"
```

Then review [Node.js](/install/node).

## If git install cannot fetch the source

Set `OPENCLAW_GIT_REPO_URL` to a reachable mirror or internal Git remote, then retry:

```bash
export OPENCLAW_GIT_REPO_URL=<your-approved-git-remote>
bash scripts/install.sh --install-method git --no-onboard
```

## If channels or plugins appear to be missing

That is usually expected in this fork. Telegram, Discord, WhatsApp, and runtime plugin installation are intentionally disabled.
