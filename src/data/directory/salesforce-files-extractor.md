---
title: Salesforce Files Extractor
description: An open-source tool that bulk-downloads files from any Salesforce org using the REST API, with MD5 checksum verification and GitHub Actions support.
tags:
  - data-migration
  - open-source
link: https://salesforcebinge.com
github_url: https://github.com/salesforcebinge/Salesforce-Files-Extractor
license: MIT
author: Sheshant Kashyap
clouds:
  - Platform
  - Cross-Cloud
last_verified: "2026-02-27"
---

## Why It Matters

Pulling files out of Salesforce in bulk is harder than it should be. The platform stores files across three objects (ContentDocument, ContentVersion, ContentDocumentLink), and there's no native export for binaries. Salesforce Files Extractor handles the full pipeline — SOQL query, REST API streaming, local download with MD5 verification.

It also supports automated extraction via GitHub Actions, so you can schedule recurring file pulls without touching a terminal. Built by an architect who needed it and couldn't find a good free option.

## Alternatives

- **Data Export Wizard** — native, but only exports CSVs
- **MuleSoft / Informatica** — enterprise ETL, overkill for files
- **AppExchange file tools** — exist, but most are paid
