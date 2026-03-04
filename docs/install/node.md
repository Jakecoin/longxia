---
title: "Node.js"
summary: "Install and configure Node.js for Longxia using mainland-friendly mirrors"
read_when:
  - "You need Node.js before installing Longxia"
  - "You want a mainland-friendly Node setup path"
---

# Node.js

Longxia requires **Node 22 or newer**. For mainland deployments, prefer reachable mirrors and local package managers over direct links to public upstream installer pages.

## Check your version

```bash
node -v
```

If you already have `v22.x` or newer, continue to [Install](/install).

## Recommended sources

- npm-related package downloads: `https://registry.npmmirror.com`
- Node binary mirror: `https://npmmirror.com/mirrors/node/`

## Install options

<Tabs>
  <Tab title="macOS">
    If you already use Homebrew in your environment, install Node there:

    ```bash
    brew install node@22
    brew link node@22 --overwrite --force
    ```

    If Homebrew is not suitable, download a Node 22 build from the Node mirror:

    ```text
    https://npmmirror.com/mirrors/node/
    ```
  </Tab>
  <Tab title="Linux">
    Prefer your internal package source, or download a Node 22 tarball from:

    ```text
    https://npmmirror.com/mirrors/node/
    ```

    If you use a repo bootstrap script, point the Longxia installer at your approved setup URL with:

    ```bash
    export OPENCLAW_NODESOURCE_DEB_SETUP_URL=<reachable-deb-setup-url>
    export OPENCLAW_NODESOURCE_RPM_SETUP_URL=<reachable-rpm-setup-url>
    ```
  </Tab>
  <Tab title="Windows">
    If `winget` is available, it remains the easiest path:

    ```powershell
    winget install OpenJS.NodeJS.LTS
    ```

    If you need a direct download path, use the Node mirror:

    ```text
    https://npmmirror.com/mirrors/node/
    ```
  </Tab>
</Tabs>

## npm registry

Set npm to a mainland-friendly registry before global installs:

```bash
npm config set registry https://registry.npmmirror.com
```

For `pnpm`:

```bash
pnpm config set registry https://registry.npmmirror.com
```
