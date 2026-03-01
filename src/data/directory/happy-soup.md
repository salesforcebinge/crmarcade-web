---
title: Happy Soup
description: A dependency analysis tool for Salesforce metadata. Visualizes component dependencies to help you safely refactor, delete, or understand your org's architecture.
tags:
  - admin
  - architecture
  - open-source
link: https://happysoup.io/
github_url: https://github.com/pgonzaleznetwork/HappySoup.io
license: MIT
author: Pablo Gonzalez
clouds:
  - Platform
last_verified: "2026-02-27"
---

## Why It Matters

Every mature Salesforce org accumulates technical debt — unused fields, abandoned classes, orphaned components. Happy Soup maps the dependency graph of your metadata so you can see exactly what depends on what before making changes.

For architects doing org assessments or planning refactors, this is essential. It answers the question "what breaks if I delete this?" in seconds instead of hours of manual tracing through Setup pages.

## Alternatives

- **Salesforce Dependencies API** — raw API, no visualization
- **Field Trip** — focused specifically on field usage analysis
