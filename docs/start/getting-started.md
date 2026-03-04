---
summary: "Get Longxia running from local source with China-accessible defaults."
read_when:
  - First time setup from zero
  - You want the supported Longxia startup path
title: "Getting Started"
---

# Getting Started

Longxia is a controlled-boundary fork of OpenClaw. The supported startup path is:

- run the local install script from this repository
- complete onboarding for the built-in gateway and Control UI
- stay on bundled features only

Messaging channels removed in this fork stay disabled by default.

## Prereqs

- Node 22 or newer
- this repository checked out locally

<Tip>
Check your Node version with `node --version` if you are unsure.
</Tip>

## Quick setup (CLI)

<Steps>
  <Step title="Install dependencies with the local script">
    <Tabs>
      <Tab title="macOS/Linux">
        ```bash
        bash scripts/install.sh
        ```
      </Tab>
      <Tab title="Windows (PowerShell)">
        ```powershell
        powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
        ```
      </Tab>
    </Tabs>

    <Note>
    The install scripts default to `npmmirror` and the Longxia repository path.
    See [Install](/install) for details.
    </Note>
  </Step>
  <Step title="Run the onboarding wizard">
    ```bash
    openclaw onboard --install-daemon
    ```

    The wizard configures auth, gateway settings, and the built-in local UI path.
    See [Onboarding Wizard](/start/wizard) for details.
  </Step>
  <Step title="Check the Gateway">
    ```bash
    openclaw gateway status
    ```
  </Step>
  <Step title="Open the Control UI">
    ```bash
    openclaw dashboard
    ```
  </Step>
</Steps>

<Check>
If the Control UI loads, your local Longxia gateway is ready.
</Check>

## Optional checks

<AccordionGroup>
  <Accordion title="Run the Gateway in the foreground">
    ```bash
    openclaw gateway --port 18789
    ```
  </Accordion>
  <Accordion title="Open docs locally">
    ```bash
    openclaw docs
    ```
  </Accordion>
</AccordionGroup>

## Useful environment variables

- `OPENCLAW_HOME` sets the home directory used for internal path resolution.
- `OPENCLAW_STATE_DIR` overrides the state directory.
- `OPENCLAW_CONFIG_PATH` overrides the config file path.
- `OPENCLAW_NPM_REGISTRY` overrides the default `npmmirror` npm registry.

## Next steps

- Install and update guidance: [Install](/install)
- Built-in browser UI and dashboard: [Control UI](/web/control-ui)
- Fork policy and network limits: [Network Boundary](/design/network-boundary)
