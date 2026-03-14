---
title: "Platform Events vs Change Data Capture"
description: "When to use Platform Events vs CDC for event-driven architecture in Salesforce."
tldr: "Platform Events = custom business events you define. CDC = automatic notifications when records change. Use PE for cross-system orchestration, CDC for data sync and audit trails."
category: Integration
tags:
  - integration
  - architecture
related_scenarios: []
related_tools:
  - nebula-logger
featured: true
published: "2026-03-08"
---

## The Quick Answer

| Aspect | Platform Events | Change Data Capture |
|--------|----------------|-------------------|
| **What triggers it** | Your code publishes explicitly | Any record DML (create/update/delete/undelete) |
| **Schema** | You define the fields | Mirrors the object's fields automatically |
| **Replay** | 72-hour retention, replay by replayId | 72-hour retention, replay by replayId |
| **Subscribers** | Apex triggers, Flows, external via Pub/Sub API | Apex triggers, Flows, external via Pub/Sub API |
| **Governor limits** | Counts against DML limits when publishing | No DML cost — fires automatically |
| **Order of execution** | After commit (async) | After commit (async) |
| **Use case fit** | Business events, cross-system signals | Data replication, audit, keeping systems in sync |

## When to Use Platform Events

- **Custom business events** that don't map 1:1 to a record change — e.g., "Order Approved", "Threshold Breached", "Integration Completed"
- **Cross-system orchestration** — signaling external systems that something happened
- **Decoupling** — publisher doesn't need to know who subscribes
- **Fire-and-forget patterns** — publish and move on

## When to Use Change Data Capture

- **Data sync** — keeping an external system's copy of Salesforce data current
- **Audit trail** — capturing every field change without custom code
- **Near real-time replication** — streaming changes to a data warehouse or lake
- **You want automatic coverage** — no code needed to publish, just enable the object

## Architect's Take

Most architects default to Platform Events because they feel more "controlled." But CDC is underrated for integration scenarios. If your use case is "keep System B updated when records change in Salesforce," CDC gives you that for free — no Apex triggers, no workflow rules, no forgetting to publish an event.

The trap: don't use CDC when you need custom business semantics. "Order Approved" is not a record change — it's a business event that might span multiple record updates. That's Platform Events territory.

**Decision guide:** [Event-Driven Architecture](https://architect.salesforce.com/decision-guides/event-driven) on architect.salesforce.com covers this in depth with decision trees.

## Licensing & Cost

Both PE and CDC draw from the same **event delivery allocation** — this is the number that catches architects off guard.

| Edition | Standard Daily Event Allocation |
|---|---|
| Enterprise | 100,000 |
| Unlimited / Performance | 200,000 |

- **Platform Events:** Standard allocation covers most use cases. At high volume, the **high-volume Platform Event add-on** is a separate purchase — budget for it before you build.
- **CDC:** No separate license, but every change event counts against the same allocation. Enabling CDC on a high-churn object (e.g., Task with 50K updates/day) can silently exhaust the pool.
- **Pub/Sub API:** No additional license. Included with PE/CDC.

Check usage: Setup → Platform Event Usage Metrics.

For the full picture on how licensing shapes architecture decisions, see [How Licensing Shapes Architecture](/playbooks/how-licensing-shapes-architecture).
