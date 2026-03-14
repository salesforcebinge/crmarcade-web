---
title: "MedDevice Global — Post-Acquisition Integration"
description: "US medical device manufacturer acquires European competitor. Migrate 1,200 SAP CRM users to Salesforce in 6 months with GDPR compliance, SAP S/4HANA integration, and unified reporting."
question: "How do I integrate SAP with Salesforce after an acquisition?"
industry: Healthcare
difficulty: CTA-Level
domains:
  - Integration
  - Identity & SSO
  - Data Migration
  - Data Architecture
  - Security
clouds:
  - Sales
  - Service
  - Platform
solution_components:
  - "Okta (SSO / Identity Provider)"
  - "MuleSoft (Integration Platform)"
  - "SAP S/4HANA (ERP)"
tools_referenced:
  - sfdmu
  - nebula-logger
  - salesforce-code-analyzer
quick_refs_referenced: []
sf_references:
  - title: "Integration Patterns"
    url: "https://architect.salesforce.com/fundamentals/integration-patterns"
    type: Fundamentals
  - title: "Event-Driven Architecture"
    url: "https://architect.salesforce.com/decision-guides/event-driven"
    type: Decision Guide
  - title: "Data Integration"
    url: "https://architect.salesforce.com/decision-guides/data-integration"
    type: Decision Guide
well_architected:
  - "Trusted > Secure"
  - "Trusted > Compliant"
  - "Trusted > Reliable"
  - "Adaptable > Composable"
featured: true
published: "2026-03-08"
---

> **Status:** This scenario is being built. The brief is ready — the solution walkthrough is coming in the next session.

## The Brief

**Company:** MedDevice Global (fictional)
- US-based medical device manufacturer, 8,000 employees
- Acquired EuroMed Instruments (2,500 employees, Germany-headquartered)
- US parent runs Salesforce Enterprise Edition — Sales Cloud + Service Cloud, 4,000 users
- Acquired company runs SAP CRM with 1,200 active users

**Timeline:** 6 months to complete migration

## Requirements

### Functional
- Migrate EU sales team (1,200 users) from SAP CRM to Salesforce
- Dual sales process support during transition (EU uses metric pricing, US uses imperial)
- Unified global reporting dashboard within 3 months
- Customer master data: 3.2M records + 12M activity records to migrate

### Non-Functional
- GDPR compliance for all EU customer data (data residency, right to erasure, consent tracking)
- SAP S/4HANA integration for order management and inventory
- SSO across both organizations from day one
- 99.9% uptime SLA during migration

## Constraints
- EU data cannot be stored in US data centers (GDPR data residency)
- SAP ERP contract runs until 2028 — cannot decommission SAP
- EU team has no Salesforce experience
- Budget: $2.4M for the entire program

---

*Solution walkthrough, trade-offs, and board questions coming soon.*
