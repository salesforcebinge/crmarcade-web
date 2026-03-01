---
title: fflib Apex Common
description: The enterprise architecture library for Apex. Implements Domain, Selector, Service, and Unit of Work patterns for scalable Salesforce development.
tags:
  - architecture
  - open-source
link: https://github.com/apex-enterprise-patterns/fflib-apex-common
github_url: https://github.com/apex-enterprise-patterns/fflib-apex-common
license: BSD-3-Clause
author: Andrew Fawcett / FinancialForce
clouds:
  - Platform
  - Cross-Cloud
last_verified: "2026-02-27"
featured: true
---

## Why It Matters

fflib is the closest thing Salesforce has to a standard enterprise architecture framework. It provides concrete implementations of separation-of-concern patterns — Domain layer for business logic, Selector layer for queries, Service layer for orchestration, and Unit of Work for transaction management.

For architects, fflib is more than a library. It's an architectural language. When you say "put that in the selector" or "that belongs in the domain layer," you're referencing fflib's structure. It enforces the kind of discipline that keeps large codebases maintainable.

## Alternatives

- **AT4DX** — extends fflib with dependency injection
- **Apex Enterprise Patterns (book)** — the theory behind fflib
- **Custom frameworks** — many teams build their own, but fflib is the de facto standard
