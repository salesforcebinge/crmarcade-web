---
title: "API Strategy: REST vs SOAP vs Bulk vs Streaming"
description: "Which Salesforce API to use for each integration pattern — REST, SOAP, Bulk, Composite, GraphQL, Tooling, and Streaming."
tldr: "REST for most integrations. Bulk for high-volume data loads. Streaming (CDC/Platform Events) for real-time. GraphQL for efficient UI queries. Tooling for metadata operations. SOAP only when a WSDL-first contract is required."
category: Integration
tags:
  - integration
  - api
  - architecture
related_scenarios: []
related_tools: []
featured: false
published: "2026-03-14"
---

## The Quick Answer

| Aspect | REST API | SOAP API | Bulk API 2.0 | Composite API | GraphQL API | Tooling API | Streaming (CDC/PE) |
|---|---|---|---|---|---|---|---|
| **Best for** | General CRUD, UI integrations | WSDL-driven enterprise systems | Large data loads (10K+ records) | Multi-step operations in one call | Efficient UI queries, fetch exactly what you need | Metadata operations, IDE tooling, DevOps | Real-time event notifications |
| **Direction** | Bidirectional | Bidirectional | Inbound (typically) | Bidirectional | Read-heavy (queries + mutations) | Bidirectional | Outbound (SF → subscriber) |
| **Volume per call** | 1 record (or 200 via SObject Collections) | 1 record | Millions (chunked into 10K batches) | Up to 25 subrequests | Multiple objects in one query, no over-fetching | 1 record | N/A — event stream |
| **Protocol** | HTTP/JSON | HTTP/XML (WSDL) | HTTP/CSV or JSON | HTTP/JSON | HTTP/JSON (GraphQL spec) | HTTP/JSON | gRPC (Pub/Sub API) |
| **Auth** | OAuth 2.0 / Session ID | OAuth 2.0 / Session ID | OAuth 2.0 / Session ID | OAuth 2.0 / Session ID | OAuth 2.0 / Session ID | OAuth 2.0 / Session ID | OAuth 2.0 |
| **API call cost** | 1 per request | 1 per request | Bulk API calls (separate limit pool) | 1 per composite request | 1 per request (counts against REST limit) | 1 per request (separate daily limit) | Event delivery allocations |
| **Async?** | No (request-response) | No (request-response) | Yes (submit job, poll for results) | No (request-response) | No (request-response) | No (request-response) | Yes (push-based) |

## When to Use Each

### REST API
- **Default choice** for most integrations — simple, well-documented, JSON-native
- CRUD operations from external apps, mobile backends, custom UIs
- Use **SObject Collections** for mini-batch operations (up to 200 records per call)

### SOAP API
- The external system **requires a WSDL** (SAP, legacy .NET services)
- You need **describeSObject** metadata operations
- Increasingly rare — most new integrations use REST

### Bulk API 2.0
- **Data loads over 10K records** — migrations, nightly syncs, mass updates
- Runs asynchronously — submit CSV/JSON, poll for completion
- Respects its own rate limit pool (separate from REST/SOAP daily limits)

### Composite API
- **Multi-step operations** that need to succeed or fail together
- Creating a parent + children in one round trip (Account + Contacts)
- Reduces API call consumption — 25 subrequests in 1 API call

### GraphQL API
- **Efficient queries** — request exactly the fields you need across multiple related objects in one call
- Eliminates over-fetching (the "I only need 3 fields but REST gives me 80" problem)
- Strong fit for **custom UIs and LWC** that need shaped data without multiple round trips
- Supports mutations for create/update — not read-only

### Tooling API
- **Metadata and developer operations** — query ApexClass, ApexTrigger, CustomField, ValidationRule records
- Powers IDE features (code completion, symbol tables, deploy status)
- **DevOps pipelines** — retrieve metadata descriptions, check deploy status, run tests
- Not for business data — this is the API your tools use, not your integrations

### Streaming (CDC / Platform Events)
- **Real-time outbound notifications** — record changes or custom business events
- External system subscribes via **Pub/Sub API** (gRPC)
- Use CDC for data sync, Platform Events for business events (see [Platform Events vs CDC](/quick-refs/platform-events-vs-cdc))

## Architect's Take

Start with REST. It handles 80% of integration scenarios. Only reach for Bulk when volumes justify it, and only reach for SOAP when the other side demands a WSDL.

The overlooked option is **SObject Collections** within REST — 200 records per call, synchronous, simple error handling per record. Many teams jump to Bulk API for 5,000-record loads when Collections would be simpler and faster.

**API limits reality check:** Your daily limit depends on edition and license count — it is not a flat number. If your integration pattern involves per-record REST calls on a high-volume table, you will hit the ceiling. That is when Bulk API or event-driven architecture becomes mandatory, not optional. See [API Limits by Edition](/quick-refs/api-limits-by-edition) for the full breakdown.
