---
title: "API Limits by Edition"
description: "Salesforce API call limits, Bulk API limits, streaming allocations, and per-user calculations across editions."
tldr: "Enterprise = 100K/day. Unlimited = 500K/day. But your actual limit depends on license count — it is a base + per-user-license formula, not a flat number."
category: Integration
tags:
  - api
  - architecture
  - integration
related_scenarios: []
related_tools: []
featured: false
published: "2026-03-14"
---

## API Call Limits by Edition

Your org's daily limit is not a flat number — it is the **greater of** the base amount or the per-user-license calculation.

| Edition | Base (org) | Per User License | Per App Subscription License | Absolute Max |
|---|---|---|---|---|
| **Developer** | 15,000 | — | — | 15,000 |
| **Enterprise** | 100,000 | 1,000 | 200 | 100,000+ |
| **Unlimited** | 500,000 | 5,000 | 200 | 500,000+ |
| **Performance** | 500,000 | 5,000 | 200 | 500,000+ |

**Example:** Enterprise Edition with 150 Sales Cloud licenses → `max(100,000, 150 × 1,000)` = 150,000 calls/day.

Sandbox orgs get the same limit as production. Scratch orgs get 15,000.

## Bulk API Limits

Bulk API has its own limit pool — separate from REST/SOAP.

| Limit | Value |
|---|---|
| **Batches per 24 hours** | 15,000 |
| **Records per batch** | 10,000 |
| **Batch size (file)** | 10 MB |
| **Concurrent Bulk API jobs** | 5,000 open/queued |
| **Query result size** | 1 GB |

Bulk API calls do **not** count against your REST/SOAP daily limit. This is why Bulk is the correct answer for high-volume data loads — it has its own runway.

## Streaming & Event Limits

| Limit | Value | Notes |
|---|---|---|
| **Platform Event allocations (standard)** | Edition-based (EE: 100K/day, UE: 200K/day) | High-volume PE can be purchased for more |
| **CDC event delivery** | Shared with PE allocation | Enabling CDC on high-churn objects burns allocation fast |
| **Pub/Sub API subscribe requests** | Included in streaming allocation | gRPC-based, replaces legacy CometD |
| **Max event payload** | 1 MB | Per event |
| **Event retention** | 72 hours | Replay window for both PE and CDC |

**Watch out:** CDC on a high-volume object (e.g., Task with 50K updates/day) can silently exhaust your event allocation. Monitor via Setup → Platform Event Usage Metrics.

## Other API-Specific Limits

| API | Limit | Notes |
|---|---|---|
| **Composite API** | 25 subrequests per call | Each composite call = 1 API call against daily limit |
| **GraphQL API** | Counts against REST daily limit | Query complexity limits apply (max depth, max objects) |
| **Tooling API** | Separate daily limit (same formula as REST) | Metadata queries, deploy operations |
| **Metadata API** | 10-second deploy polling interval | Long-running deploys; 5,000 components per deploy |
| **SObject Collections** | 200 records per request | Counts as 1 API call regardless of record count |

## Concurrent Request Limits

These bite harder than daily limits in real-time integrations.

| Limit | Value |
|---|---|
| **Long-running requests (>5s)** | 25 concurrent |
| **Total concurrent API requests** | 25 per org |
| **Concurrent Bulk API queries** | 5,000 open/queued |

If your org hits 25 concurrent long-running requests, new API calls get `REQUEST_LIMIT_EXCEEDED`. This is the limit that kills real-time integrations at scale — not the daily cap.

## Architect's Take

The daily API limit is rarely the real bottleneck. The concurrent request limit (25 long-running) is what breaks production integrations. An ERP sync that takes 6 seconds per call only needs 25 simultaneous syncs to lock out every other integration in the org.

**Three things to check before go-live:**
1. **Daily headroom** — are you using more than 60% of your daily limit? If yes, plan for Bulk API or event-driven patterns.
2. **Concurrent pressure** — are any integrations holding connections for >5 seconds? If yes, make them async or move to Bulk.
3. **Event allocation burn rate** — if you enabled CDC, check Platform Event Usage Metrics. One high-churn object can eat the entire allocation.

When in doubt: `SELECT UsageDate, ApiType, Usage FROM ApiUsage` via the REST API, or check Setup → Company Information → API Requests, Last 24 Hours.

API limits are a licensing decision as much as a technical one. Additional API calls can be purchased, and upgrading from Enterprise to Unlimited changes the math significantly. See [How Licensing Shapes Architecture](/playbooks/how-licensing-shapes-architecture) for how to factor this into your design.
