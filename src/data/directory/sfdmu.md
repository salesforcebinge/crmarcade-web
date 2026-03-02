---
title: SFDMU (Data Move Utility)
description: A powerful data migration tool for Salesforce. Handles complex object relationships, record matching, and bulk operations across orgs.
tags:
  - data-migration

link: https://help.sfdmu.com/
github_url: https://github.com/forcedotcom/SFDX-Data-Move-Utility
license: BSD-3-Clause
author: Salesforce
clouds:
  - Platform
  - Cross-Cloud
last_verified: "2026-02-27"
---

## Why It Matters

Moving data between Salesforce orgs — especially with complex relationships — is one of the most underestimated tasks in any implementation. SFDMU handles parent-child relationships, external ID matching, and bulk upserts in a way that the standard Data Loader simply cannot.

For architects planning data migrations or sandbox seeding strategies, SFDMU is the tool that keeps you from writing one-off scripts for every object relationship. Define your migration in a JSON config, run it, and let the tool handle the dependency graph.

## Alternatives

- **Salesforce Data Loader** — simpler, no relationship handling
- **Dataloader.io** — cloud-based, friendlier UI
- **OwnBackup** — backup-first approach, includes migration features
