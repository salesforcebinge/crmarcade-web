---
title: Nebula Logger
description: A robust, configurable logging framework for Apex and Lightning. Supports custom log levels, log entry tagging, and log management through a custom UI.
tags:
  - logging

link: https://jongpie.github.io/NebulaLogger/
github_url: https://github.com/jongpie/NebulaLogger
license: MIT
author: Jonathan Gillespie
clouds:
  - Platform
  - Cross-Cloud
last_verified: "2026-02-27"
featured: true
---

## Why It Matters

Salesforce's built-in debug logs are ephemeral and nearly useless in production. Nebula Logger solves this by providing a persistent, queryable, and configurable logging framework that works across Apex, Lightning, and Flows.

For architects, the real value is in production troubleshooting. When something breaks in a complex org, you need logs that survived past the transaction. Nebula Logger stores them as custom object records with full context — org, user, entry point, stack trace. It's the kind of infrastructure that should be in every enterprise org.

## Alternatives

- **Debug Log Analyzer** — for parsing native Salesforce debug logs
- **Custom Platform Events** — roll-your-own approach, more effort
