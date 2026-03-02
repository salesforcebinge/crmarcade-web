---
title: Salesforce Code Analyzer
description: Salesforce's official static analysis tool — scans Apex, LWC, and Aura for security vulnerabilities, performance issues, and coding standard violations.
tags:
  - testing
  - devops

link: https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/overview
github_url: https://github.com/forcedotcom/code-analyzer
license: Salesforce
author: Salesforce
clouds:
  - Platform
last_verified: "2026-03-01"
featured: false
---

## Why It Matters

Code Analyzer (formerly SFDX Scanner) is the tool Salesforce themselves use during security reviews. It bundles PMD, ESLint, RetireJS, and Salesforce's own graph engine into a single CLI command. Run it before every deployment and you catch security vulnerabilities, hardcoded IDs, SOQL in loops, and API version issues before they reach production.

For architects setting up quality gates in CI/CD pipelines, Code Analyzer is the baseline. If your pipeline doesn't run this, you're shipping blind. It's also the standard Salesforce uses for AppExchange security reviews — so if you're building managed packages, it's mandatory.

## Alternatives

- **Apex PMD** — the underlying engine, more configurable rules
- **Gearset Code Reviews** — commercial (formerly Clayton), deeper analysis with technical debt scoring
- **CodeScan** — commercial alternative with broader language support
