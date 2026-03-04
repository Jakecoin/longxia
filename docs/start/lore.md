---
summary: "Longxia fork context and how it diverges from upstream OpenClaw."
read_when:
  - You want the fork backstory
  - You need wording for Longxia-specific docs
title: "Longxia Fork Notes"
---

# Longxia Fork Notes

Longxia is a source fork of OpenClaw with a narrower operating model.

## What changed

- public messaging channels that depended on Telegram, Discord, and WhatsApp are disabled
- runtime plugin install and update flows are disabled
- install guidance now prefers local scripts, local docs, and China-accessible package mirrors
- the default operating path is local or self-controlled infrastructure, not third-party community services

## Why this fork exists

The goal is to keep the useful local gateway, CLI, UI, and bundled tools while removing:

- avoidable public-network dependencies
- third-party community service coupling
- runtime extension paths that are hard to audit or control

## Relationship to upstream

Longxia remains structurally compatible with large parts of upstream OpenClaw, but this repository is opinionated:

- user-facing docs point to local repository docs instead of public upstream websites
- maintenance favors self-hosted and controlled-boundary deployment
- historical upstream references may still appear in changelog entries, comments, or archived notes

## Documentation rule

When writing new docs for this fork:

- prefer local repository paths such as `./docs/...`
- avoid sending users to third-party social platforms
- treat external integrations as opt-in, explicitly reviewed exceptions

## Practical default

If a feature requires an external public platform, an unaudited runtime download, or a public community link, it is out of scope for the default Longxia path until it is reintroduced with a China-accessible and operator-controlled implementation.
