---
title: "How Licensing Shapes Architecture"
description: "Every architecture decision has a license cost. How to map technical patterns to licensing implications so procurement meetings don't derail your design."
what_you_will_learn:
  - "Why licensing is an architecture constraint, not a procurement afterthought"
  - "How to map common Salesforce patterns to their licensing costs"
  - "The add-ons and allocations that catch architects off guard"
  - "A checklist for validating license impact before design sign-off"
category: Design
audience: Senior Architect
time_estimate: "8 min read"
phase: Cross-Phase
related_scenarios: []
related_tools: []
related_quick_refs:
  - platform-events-vs-cdc
  - api-limits-by-edition
  - sharing-model-decision-guide
  - api-strategy-rest-soap-bulk-streaming
featured: false
published: "2026-03-14"
---

## The $200K Surprise

You designed a beautiful event-driven architecture. Platform Events for order orchestration, CDC for data sync, Experience Cloud for the partner portal. The steering committee approved the design. Then procurement came back: "The high-volume Platform Event add-on is $X/year. Experience Cloud Partner licenses are $Y/user/month. The MuleSoft connector requires a separate subscription."

The architecture was technically sound. It was financially unreviewed. This happens more often than anyone admits.

## The Rule

**Every architecture pattern has a license cost. If you don't know the cost, you haven't finished the design.**

This does not mean pick the cheapest option. It means make the cost visible so stakeholders decide with full information — not discover it during procurement.

## Pattern-to-License Map

| Architecture Decision | License Implication | What to Check |
|---|---|---|
| **Platform Events at scale** | Standard allocation is edition-based (EE: 100K/day). High-volume PE is an add-on. | Will daily event volume exceed standard allocation? |
| **CDC for data sync** | Shares PE allocation — no separate purchase, but burns the same pool. | How many objects enabled? What is the change volume? |
| **Experience Cloud portal** | Per-login vs per-member licensing. Customer Community vs Customer Community Plus (different sharing and API capabilities). | How many external users? Do they need API access or reports? |
| **MuleSoft integration** | Separate license. Per-connection or platform pricing. | Is middleware already licensed? Can a lighter pattern work? |
| **CRM Analytics** | Separate SKU. CRM Analytics add-on vs full Tableau. | Do native reports + dashboards cover the requirement? |
| **Territory Management** | Enterprise Territory Management included in Performance/Unlimited. Available in Enterprise. | Is territory-based sharing needed, or will sharing rules work? |
| **Salesforce Shield** | Separate add-on: Platform Encryption, Event Monitoring, Field Audit Trail. | Is Shield required by compliance, or is standard encryption sufficient? |
| **Sandbox types** | Full sandboxes limited by edition. Partial and Developer sandboxes included. | How many full sandboxes does the team need for parallel workstreams? |
| **API call volume** | Daily limit = edition + per-license formula. Additional calls purchasable. | See [API Limits by Edition](/quick-refs/api-limits-by-edition) |

## The Three Questions

Before signing off on any architecture design, answer these:

1. **What licenses does this design require beyond the base edition?** List every add-on, connector, and per-user license type.
2. **What allocations will this design consume?** API calls, event deliveries, storage, sandbox count. Map usage to limits.
3. **What happens at 2x scale?** If user count or data volume doubles, which licenses scale linearly with cost? Platform Events and Experience Cloud licenses are the usual culprits.

## Common Traps

**"We'll use Platform Events"** — at low volume, included in your edition. At high volume (>100K events/day on Enterprise), you need the high-volume add-on. Nobody checks until the integration is already built.

**"We need a partner portal"** — Experience Cloud licensing depends on the type. Customer Community (login-based, limited features) vs Customer Community Plus (member-based, sharing rules, API access, reports). The wrong license type means redesigning your sharing model.

**"We'll add CRM Analytics"** — CRM Analytics is a separate SKU. If the requirement is "dashboards for executives," check if native Salesforce dashboards cover it before committing to a separate product and its own learning curve.

**"Let's enable Shield"** — Platform Encryption changes how certain features work (formula fields cannot reference encrypted fields, some SOQL operations are limited). The license cost is significant, and the technical constraints ripple through the design.

## Checklist

- [ ] Every architecture pattern mapped to its license type
- [ ] Add-on licenses identified (Shield, high-volume PE, CRM Analytics, MuleSoft)
- [ ] Per-user license types specified (Community, Platform, full CRM)
- [ ] Allocation consumption estimated (API calls, events, storage)
- [ ] Cost validated with procurement before design sign-off
- [ ] Scale scenario checked — what happens at 2x users or data volume?
- [ ] License constraints documented in solution design assumptions
