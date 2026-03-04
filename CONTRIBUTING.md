# Contributing to Longxia

Longxia is a controlled-boundary fork. Contributions should preserve that direction.

## Before You Change Anything

- Keep Telegram, Discord, WhatsApp, and runtime plugin installation disabled unless there is an explicit product decision to reintroduce them.
- Prefer mainland-friendly mirrors and controlled supply-chain paths over public installer URLs.
- Avoid adding new hard-coded public web dependencies when a local docs path, configurable environment variable, or self-hosted option will work.

## Contribution Rules

1. Keep changes focused.
2. Explain the operational impact, not just the code diff.
3. Run the relevant checks locally before proposing the change.
4. If a change adds a new external dependency, document why it is necessary and how it can be overridden.

## Testing

At minimum, run the checks that match your change set. Examples:

- `bash -n scripts/install.sh`
- `pnpm test --runInBand` or targeted `vitest` commands
- targeted build or lint checks for changed files

## Security Reports

Use the repository's private reporting path or your own internal security workflow. Do not post vulnerabilities in public chat channels.
