# Longxia Vision

Longxia is a controlled-boundary AI gateway built for operators who need predictable deployment, strong defaults, and mainland-friendly distribution paths.

This repository is a hard fork of OpenClaw. The goal is not to preserve every upstream capability. The goal is to turn the codebase into a deployable platform with a narrower, clearer product surface:

- controlled runtime boundaries
- review-first integrations
- domestic-friendly install and update paths
- multi-tenant SaaS as the default commercial direction
- dedicated isolation only as a paid upgrade path

## Product Positioning

Longxia is not trying to be a generic "connect everything" agent shell.
It is positioned as:

- a controlled AI gateway for personal operators, small teams, and enterprise pilots
- a China-oriented distribution of the upstream architecture
- a platform where runtime extension and uncontrolled egress are design exceptions, not baseline features

The default deployment model is:

- one operator-controlled gateway per trust boundary
- approved integrations bundled at build time
- local docs, local scripts, and approved mirrors for install/update

## What Longxia Optimizes For

Priority order:

- security boundaries that are simple to explain and audit
- setup paths that work in mainland network conditions
- stable first-run experience
- predictable operations and upgrade behavior
- clear tenancy/accounting hooks for future SaaS operation

Longxia does not optimize first for:

- maximum number of messaging connectors
- public plugin marketplaces
- arbitrary runtime package installation
- fast-moving experimental integrations without review

## Product Tiers

The commercial direction should stay aligned with the technical architecture.

### Tier 1: Shared SaaS

Default offering for individuals and small teams.

- multi-tenant isolation
- per-tenant credentials
- sandboxed tool execution
- strict egress controls
- shared worker pools and shared infra

This is the primary path to product-market fit.

### Tier 2: Dedicated Resource Pool

For higher-value teams that need stronger performance and operational separation without full private deployment.

- dedicated job queues
- dedicated concurrency quotas
- dedicated worker pool
- optional dedicated outbound IP or proxy path

This is the main “Pro” upgrade path.

### Tier 3: Dedicated Deployment

For enterprise and regulated customers.

- dedicated namespace or cluster
- dedicated VPC or private network path
- customer-specific secrets, audit, and integration policies

This should be sold as a higher-touch enterprise offering, not the baseline product.

## Technical Direction

Longxia should converge on these architectural rules:

- all sensitive actions carry tenant and actor identity
- all external dependencies are explicit and reviewable
- outbound traffic defaults to approved mirrors and approved service endpoints
- long-lived optional runtime extension systems stay disabled by default
- build-time bundling is preferred over runtime mutation

Core system layers:

- Gateway: long-lived control plane and policy enforcement point
- Clients: CLI, web UI, mobile/desktop shells
- Nodes: device-side capability providers
- Worker sandboxes: short-lived execution units for risky or metered work
- Control data plane: config, usage, auth, and audit records

## Long-Term Success Criteria

Longxia is succeeding when:

- a new operator can install and run it without relying on blocked or fragile upstream links
- the runtime boundary is easy to explain in one page
- the default SaaS architecture can support tenants without per-user servers
- enterprise isolation can be added as a controlled upgrade, not a rewrite
- upstream changes can be selectively merged without breaking Longxia’s boundary rules

## Guardrails

Longxia should continue to reject these by default:

- public plugin marketplaces
- runtime plugin install/update as a normal user workflow
- Telegram, Discord, and WhatsApp as baseline product channels
- uncontrolled outbound fetches to arbitrary third-party services
- product complexity that exists only to preserve upstream breadth

## Working Rule

When there is a conflict between breadth and control, Longxia should prefer control.
