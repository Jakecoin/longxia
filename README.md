# Longxia

Longxia is a controlled-boundary fork of OpenClaw for deployments that must avoid open-ended external integrations.

This fork removes user-facing support for Telegram, Discord, WhatsApp, runtime plugin installation, and plugin management. The product is intended to run with preapproved bundled capabilities only, and to talk only to Longxia-owned backend services or explicitly approved built-in channels.

## What Changed

- Telegram, Discord, and WhatsApp are disabled in the channel catalog and plugin loader.
- `openclaw plugins install`, update, uninstall, enable, disable, and doctor are blocked in this fork.
- Plugin and package-install instructions were removed from the primary documentation.
- ACP/provider hints now assume deployment-time bundling instead of runtime plugin installation.

## Deployment Rule

Longxia is not a general-purpose extension host. New outbound integrations should be added only through code review and bundled into the deployment artifact.

See [Network Boundary Design](docs/design/network-boundary.md) for the operational policy.
