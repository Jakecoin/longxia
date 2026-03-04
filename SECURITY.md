# Security Policy

Longxia uses a controlled-boundary deployment model. Security reporting should follow the same principle: use a private, controlled path owned by the operator or maintainer of the deployed instance.

## Reporting

- For repository issues, use the repository's private security reporting flow if available.
- For self-hosted deployments, use your own internal security mailbox, ticket system, or incident workflow.
- Do not use public chat communities as a security disclosure path.

Include:

1. Title
2. Severity
3. Affected component
4. Reproduction steps
5. Demonstrated impact
6. Environment details
7. Suggested remediation

Reports without a reproducible path and clear impact may be deprioritized.

## Trust Model

Longxia does not treat a single gateway as a multi-tenant adversarial boundary by default.

- A gateway instance is assumed to be operated within one trust boundary.
- Authenticated gateway callers are treated as trusted operators for that gateway.
- If you need strict separation, isolate by host, VM, container, or distinct deployment.
- Runtime plugins are disabled in this fork.
- Telegram, Discord, and WhatsApp are disabled in this fork.

## Operational Guidance

- Keep the gateway on loopback unless you have a deliberate remote-access design.
- Prefer local docs in `./docs` over public web docs when operating this fork.
- Keep installation and update paths on approved mirrors and controlled source remotes.
