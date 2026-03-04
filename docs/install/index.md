---
summary: "Install Longxia with local scripts and mainland-friendly package mirrors"
read_when:
  - You need the supported Longxia install path
  - You want to avoid external install URLs that are unreliable in mainland China
title: "Install"
---

# Install

Longxia no longer recommends the old remote installer flow. The supported path is to run the installer scripts from a local checkout of this repository, with package downloads pointed at mainland-friendly mirrors.

## Recommended path

1. Obtain a local checkout from your own approved mirror, internal Git service, or a source archive you control.
2. Use the repo-local installer scripts instead of piping a remote script from the public internet.
3. Keep npm pointed at a reachable registry mirror.

## System requirements

- Node 22+
- macOS, Linux, or Windows
- `pnpm` only if you build from source

## Preferred install commands

<Tabs>
  <Tab title="macOS / Linux">
    ```bash
    export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
    bash scripts/install.sh
    ```
  </Tab>
  <Tab title="Windows (PowerShell)">
    ```powershell
    $env:OPENCLAW_NPM_REGISTRY="https://registry.npmmirror.com"
    powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
    ```
  </Tab>
</Tabs>

## If you want a source install

Use a self-hosted mirror or local source bundle. Do not rely on a hard-coded public GitHub clone in operational docs.

```bash
export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
export OPENCLAW_GIT_REPO_URL=<your-approved-git-remote>
bash scripts/install.sh --install-method git --no-onboard
```

## Manual package install

If you already have Node and want to install manually:

```bash
npm_config_registry=https://registry.npmmirror.com npm install -g openclaw@latest
```

For pnpm:

```bash
npm_config_registry=https://registry.npmmirror.com npm install -g pnpm
pnpm config set registry https://registry.npmmirror.com
pnpm add -g openclaw@latest
```

## Related pages

- [Node.js](/install/node)
- [Installer internals](/install/installer)
- [Updating](/install/updating)
- [Uninstall](/install/uninstall)
