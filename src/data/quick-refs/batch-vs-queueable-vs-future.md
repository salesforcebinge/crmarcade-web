---
title: "Batch vs Queueable vs Future"
description: "When to use Batch Apex, Queueable Apex, or @future methods for async processing in Salesforce."
tldr: "Batch = large data volumes with chunking. Queueable = complex async with chaining. Future = simple fire-and-forget for callouts and mixed DML."
category: Architecture
tags:
  - architecture
  - performance
related_scenarios: []
related_tools: []
featured: false
published: "2026-03-14"
---

## The Quick Answer

| Aspect | @future | Queueable | Batch |
|---|---|---|---|
| **Best for** | Simple callouts, mixed DML | Complex async with state | Large-volume processing |
| **Max records** | No chunking — handle your own limits | No chunking — handle your own limits | Up to 50M (200 per chunk default) |
| **Chaining** | No | Yes — one child job per execution | No (but can enqueue Queueable from `finish()`) |
| **Parameters** | Primitives only (no sObjects) | Any serializable type | QueryLocator or Iterable |
| **Callouts** | Yes (`callout=true`) | Yes (`Database.AllowsCallouts`) | Yes (`Database.AllowsCallouts`) |
| **Job tracking** | No job ID returned | Job ID via `System.enqueueJob()` | Job ID, trackable in Apex Jobs |
| **Governor limits** | Shared async limits | Own transaction per execution | Own limits per `execute()` chunk |
| **Concurrent limit** | ~50 queued | ~50 queued | 5 concurrent batch jobs |

## When to Use @future

- **Simple callouts** from trigger context — the classic use case
- **Mixed DML** — setup and non-setup objects in the same transaction
- The operation is truly fire-and-forget with no need to track completion
- You do not need to pass sObjects or complex types

## When to Use Queueable

- **Complex async logic** that needs sObject parameters or state
- **Job chaining** — Step 1 completes, enqueues Step 2
- You need a **job ID** to monitor completion
- Moderate record volumes (hundreds to low thousands)

## When to Use Batch

- **Large data volumes** — anything over 10K records that needs chunking
- **Scheduled processing** — nightly syncs, data cleanup, archival
- **Stateful aggregation** — counting or summarizing across chunks (`Database.Stateful`)
- You need automatic retry granularity at the chunk level

## Architect's Take

Developers default to Batch because it feels safest. But Queueable is the better general-purpose choice for most async work — it accepts complex parameters, chains naturally, and returns a job ID. Reserve Batch for actual large-volume processing where chunking matters.

The @future trap: easy to write, hard to debug. No job ID, no chaining, primitives only. Use it for the two things it was designed for (callouts from triggers, mixed DML) and Queueable for everything else.
