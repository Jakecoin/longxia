---
summary: "Longxia product and architecture blueprint"
title: "Project Blueprint"
---

# Project Blueprint

Last updated: 2026-03-04

## Purpose

Longxia is a controlled-boundary AI gateway fork designed for a narrower, more operable product than the upstream project. This document defines the target shape of the product so future code changes can be evaluated against a stable blueprint.

## Product Definition

Longxia should be treated as three things at once:

- a self-hostable gateway for operators who want a reviewed local stack
- a base platform for a future China-oriented SaaS
- a hardened fork where integrations are added deliberately, not discovered dynamically at runtime

The product should not be framed as a generic connector hub. It should be framed as an operator platform with a small trusted core.

## Non-Negotiable Product Rules

### 1. Controlled outbound boundary

- Runtime egress is allowlist-based.
- New outbound services require code review and explicit approval.
- Install and update flows must prefer approved mirrors and controlled source remotes.

### 2. No public runtime extension model

- Runtime plugin install, update, enable, and disable are not a standard user capability.
- Optional features should be bundled at build time.
- Development-time local extension loading can exist, but it is not a product distribution surface.

### 3. SaaS defaults to multi-tenant, not per-user servers

- Shared SaaS is the baseline product model.
- Per-user dedicated infrastructure is a premium isolation tier only.
- Tenant identity must be present in request handling, billing, audit, and tool execution.

### 4. Mainland-friendly distribution

- Core install docs and scripts must work with domestic mirrors.
- The repository must not depend on blocked public web pages for first-run success.
- Any required public dependency must have a domestic-compatible fallback plan.

## Product Modules

### Module A: Gateway Core

The gateway remains the main policy and coordination point.

Responsibilities:

- maintain operator and node sessions
- enforce auth and pairing
- own request routing
- own audit and usage hooks
- expose a stable control API for CLI and UI

The gateway should become the primary place where tenant policy and outbound policy are enforced.

### Module B: Client Surfaces

Client surfaces include:

- CLI
- Web control UI
- macOS/iOS/Android clients

Responsibilities:

- configuration and setup
- operator visibility
- controlled invocation of gateway actions
- local diagnostics and support flows

Client surfaces should never reintroduce hidden external dependencies or “magic” setup paths that bypass the reviewed install model.

### Module C: Tool and Action Execution

All tooling should be split into two categories:

- trusted built-in capabilities
- sandboxed high-risk capabilities

Design rule:

- trusted built-ins may run inside the normal gateway process when the blast radius is acceptable
- any risky, metered, or user-supplied work should be moved into short-lived sandbox jobs

This creates a clean future path for charging, isolation, and audit.

### Module D: SaaS Control Plane

This is not fully implemented today, but the design should assume it will exist.

Responsibilities:

- tenant records
- auth profiles
- secrets metadata
- usage metering
- billing events
- audit and support views

The local repo should gradually expose seams for this control plane even before the hosted product is complete.

## Deployment Models

### Shared SaaS (default)

Target users:

- individual operators
- small teams
- early paid customers

Technical shape:

- one shared control plane
- one or more shared worker pools
- tenant-scoped config, auth, and billing
- strict logical isolation plus sandbox execution

Why this is the default:

- lowest unit cost
- fastest iteration
- best fit for a low-to-mid ARPU market

### Dedicated Resource Pool (Pro)

Target users:

- teams needing stronger performance isolation
- users with higher concurrency or stricter outbound requirements

Technical shape:

- dedicated queue and worker partition
- optional dedicated proxy path
- quota isolation without full infrastructure split

Why it matters:

- meaningful upgrade path without enterprise overhead

### Dedicated Deployment (Enterprise)

Target users:

- enterprise
- regulated environments
- private-network customers

Technical shape:

- isolated namespace, cluster, or VPC
- customer-specific egress and secret boundaries
- higher audit and operational guarantees

This should remain a separate offering with separate operational playbooks.

## System Design Principles

### Identity everywhere

Every request path should be attributable to:

- tenant
- actor
- device
- agent or worker context

This is required for billing, support, debugging, and security review.

### Build-time over runtime mutation

When deciding between:

- downloading capability during runtime
- shipping reviewed capability in the build

Longxia should prefer the build-time model unless there is a strong operational reason not to.

### Short-lived over long-lived for risky execution

Long-lived daemons are appropriate for the gateway and stable control services. Risky work should prefer short-lived units with hard resource limits, timeout, and cleanup.

### Separate compatibility from product direction

Some upstream identifiers may remain for compatibility. That is acceptable. Product design decisions should not be blocked by cosmetic compatibility names.

## Near-Term Technical Roadmap

### Phase 1: Boundary and Distribution Hardening

Goal:

- remove blocked or fragile upstream external paths
- lock down runtime extension surfaces
- align docs, scripts, and updates to approved mirrors

Definition of done:

- default install/update flows use approved mirrors
- removed channels do not appear in normal product surfaces
- old upstream doc links no longer define the main user path

### Phase 2: Tenant-Ready Core

Goal:

- make the gateway and tooling tenant-aware even in self-hosted mode

Required seams:

- tenant id propagation
- usage counters per action
- secret scoping model
- audit event schema
- sandbox dispatch abstraction

Definition of done:

- core request paths can be attributed and metered consistently

### Phase 3: Managed SaaS Baseline

Goal:

- stand up the minimum hosted service around the existing core

Required pieces:

- hosted auth
- billing and quotas
- worker scheduler
- support tooling
- deployment templates for the shared tier

Definition of done:

- a shared multi-tenant offering can be operated without per-customer infrastructure

### Phase 4: Premium Isolation Tiers

Goal:

- add monetizable separation without rewriting the core

Required pieces:

- queue partitioning
- worker pool partitioning
- dedicated egress profiles
- optional namespace or cluster isolation

Definition of done:

- “Pro” and “Enterprise” become productized, not ad hoc services work

## Repo Design Implications

When reviewing future changes:

- reject additions that silently widen outbound reach
- reject features that depend on public plugin marketplaces
- prefer policy modules over scattered one-off checks
- keep Longxia-specific docs explicit instead of inheriting upstream assumptions

The fork should become easier to reason about over time, not harder.

## Decision Checklist

Before adding a new capability, answer:

1. Does it widen outbound network reach?
2. Can it be bundled instead of installed at runtime?
3. Does it fit the shared SaaS baseline?
4. Does it preserve a clean upgrade path to dedicated isolation?
5. Can it be explained within the controlled-boundary model?

If the answer to the last question is “no,” the feature probably does not belong in the default Longxia product.
