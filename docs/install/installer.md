---
summary: "How Longxia installer scripts work after removing remote install URLs"
read_when:
  - You want to automate Longxia installs
  - You need the supported env vars for local installer execution
title: "Installer Internals"
---

# Installer Internals

Longxia no longer treats upstream remote installer URLs as the default path. The supported model is to run the scripts that ship inside this repository.

## Supported entrypoints

| Script | Platform | Default behavior |
| --- | --- | --- |
| `scripts/install.sh` | macOS / Linux | Installs Node if needed, installs the CLI with a mirror-aware npm configuration, and can run onboarding |
| `scripts/install.ps1` | Windows | Same flow for PowerShell, with the same mirror-aware npm configuration |

## Recommended commands

<Tabs>
  <Tab title="macOS / Linux">
    ```bash
    export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
    bash scripts/install.sh
    ```
  </Tab>
  <Tab title="Windows">
    ```powershell
    $env:OPENCLAW_NPM_REGISTRY="https://registry.npmmirror.com"
    powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
    ```
  </Tab>
</Tabs>

## Important env vars

| Variable | Purpose |
| --- | --- |
| `OPENCLAW_NPM_REGISTRY` | Override npm registry. Default in this fork is `https://registry.npmmirror.com`. |
| `OPENCLAW_GIT_REPO_URL` | Override the git remote used by `--install-method git`. Point this at your self-hosted or approved mirror. |
| `OPENCLAW_NODE_MANUAL_URL` | Manual fallback URL shown when Node must be installed outside the script. |
| `OPENCLAW_HOMEBREW_INSTALL_URL` | Override the Homebrew installer source if you maintain an internal mirror. |
| `OPENCLAW_NODESOURCE_DEB_SETUP_URL` | Override the Debian/Ubuntu Node setup script source. |
| `OPENCLAW_NODESOURCE_RPM_SETUP_URL` | Override the RPM-based Node setup script source. |

## Operational rule

For mainland deployments, the installer should be treated as part of your controlled supply chain:

- run it from a local checkout
- keep npm on a reachable mirror
- point git mode at a self-hosted mirror or approved internal remote
- do not rely on public remote `curl | bash` entrypoints
