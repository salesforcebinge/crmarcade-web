---
title: Apex PMD
description: A static code analysis tool for Apex that catches common issues like unused variables, empty blocks, and security vulnerabilities before they hit production.
tags:
  - testing

link: https://pmd.github.io/
github_url: https://github.com/pmd/pmd
license: BSD-3-Clause
author: PMD Project
clouds:
  - Platform
last_verified: "2026-02-27"
---

## Why It Matters

Code reviews catch what tests miss. Apex PMD runs static analysis on your Apex codebase and flags issues that range from style violations to genuine security concerns (like SOQL injection). It integrates with VS Code, CI pipelines, and even Salesforce CLI via plugins.

For architects governing code quality across teams, PMD rules are a policy enforcement mechanism. You can define custom rulesets that match your org's coding standards and fail builds that violate them.

## Alternatives

- **CodeScan** — commercial, broader Salesforce language support
- **Checkmarx** — enterprise security scanning, heavier setup
