---
title: AT4DX (Advanced Techniques for DX)
description: An extension of fflib that adds dependency injection, platform event handling, and async processing patterns to Salesforce enterprise architecture.
tags:
  - architecture
  - open-source
link: https://github.com/apex-enterprise-patterns/at4dx
github_url: https://github.com/apex-enterprise-patterns/at4dx
license: BSD-3-Clause
author: John Daniel
clouds:
  - Platform
last_verified: "2026-02-27"
---

## Why It Matters

AT4DX takes fflib's separation-of-concern patterns and adds the plumbing you need for truly modular Salesforce architectures. Its dependency injection framework lets you swap implementations at configuration time — critical for ISVs and teams building extensible packages.

The platform event consumer pattern is particularly useful for architects designing event-driven systems. Instead of manually wiring up trigger handlers for platform events, AT4DX gives you a declarative binding mechanism.

## Alternatives

- **fflib Apex Common** — the foundation AT4DX extends
- **Custom DI frameworks** — possible, but AT4DX is battle-tested
