---
title: sfp (sfpowerscripts) CLI
description: An end-to-end build and deployment orchestrator for Salesforce. Handles scratch org pooling, artifact management, and modular CI/CD pipelines.
tags:
  - devops
  - open-source
link: https://docs.dxatscale.io/
github_url: https://github.com/dxatscale/sfp
license: MIT
author: DX@Scale
clouds:
  - Platform
  - Cross-Cloud
last_verified: "2026-02-27"
featured: true
---

## Why It Matters

If you're doing serious DevOps on Salesforce, sfp is the tool that fills the gap between Salesforce CLI and a real CI/CD pipeline. It introduces concepts like scratch org pooling, package-based deployments, and artifact versioning — things you'd expect from mature DevOps tooling but that Salesforce doesn't offer out of the box.

sfp is built on top of Salesforce CLI and designed for teams that manage multiple packages across complex orgs. It's particularly valuable for architects designing modular delivery pipelines.

## Alternatives

- **Salesforce CLI** — the foundation, but limited orchestration
- **CumulusCI** — NPSP-oriented, stronger for nonprofit implementations
- **Gearset** — commercial alternative with a UI-driven approach
