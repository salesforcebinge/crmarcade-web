---
title: "How to Run an Architecture Discovery Session"
description: "A step-by-step playbook for running effective discovery sessions that uncover real requirements, not just feature lists. Covers stakeholder mapping, question frameworks, and translating business language into architecture decisions."
what_you_will_learn:
  - "How to identify and prioritize the right stakeholders before day one"
  - "A question framework that surfaces constraints, not just requirements"
  - "How to translate business language into architecture decision inputs"
  - "When to stop discovering and start designing"
category: Discovery
audience: All Levels
time_estimate: "8 min read"
phase: Discovery
related_scenarios: []
related_tools:
  - lucidchart
  - draw-io
related_quick_refs: []
featured: true
published: "2026-03-08"
---

## Why Discovery Goes Wrong

Most discovery sessions produce a feature list, not an architecture. The business says "we need a portal," and the team writes down "portal" and moves on. Nobody asked what "portal" means to the CFO vs. the support manager vs. the field rep.

Discovery is not requirements gathering. Requirements gathering asks "what do you want?" Discovery asks "what problem are you solving, who cares, and what happens if we get it wrong?"

## Stakeholder Mapping

You cannot run an effective discovery if you are talking to the wrong people. Before scheduling a single meeting, build a stakeholder map.

Map every stakeholder by **influence** (can they block or approve?) and **impact** (does the solution change their daily work?):

| | High Impact | Low Impact |
|---|---|---|
| **High Influence** | Key Players — in every session | Keep Informed — exec summary |
| **Low Influence** | Consult — targeted interviews | Monitor — keep on the radar |

**Key Players** get dedicated time. Do not put a VP of Sales and a support agent in the same room and expect both to speak candidly. Run separate sessions by quadrant.

### Who to Find

For any Salesforce architecture engagement, your default stakeholder list:

1. **Executive Sponsor** — owns the budget, defines success in business terms
2. **Process Owners** — people who own the workflow today (not who uses it — who designed it)
3. **Data Stewards** — whoever actually knows what is in the system and why
4. **Integration Touchpoints** — teams that own systems Salesforce will talk to
5. **End Users** — 2-3 actual users, not managers speaking on behalf of users

## The Question Framework

Stop asking "what are your requirements?" Start asking questions that expose constraints and trade-offs.

**Opening** (set the frame):
- "Walk me through what happens from the moment a [lead/case/order] comes in until it is resolved."
- "What breaks most often in that process?"
- "If you could only fix one thing, what would it be?"

**Constraints** (surface the architecture):
- "What cannot change?" — identifies integration boundaries, regulatory requirements
- "What is the timeline, and what happens if we miss it?"
- "Who else touches this data outside of Salesforce?"
- "What reporting do executives look at today?"

**Trade-offs** (make decisions explicit):
- "If we could deliver X fast but Y would take longer, which matters more?"
- "Would you rather have perfect data migration or faster go-live?"
- "Is this a build-once solution or something that needs to evolve?"

## Translating to Architecture

Take every discovery finding and map it to an architectural concern:

| Business Statement | Architecture Translation |
|---|---|
| "We need real-time visibility" | Event-driven architecture, CDC or Platform Events |
| "EU data stays in EU" | Data residency, Hyperforce evaluation |
| "We use SAP for orders" | Integration pattern selection, middleware evaluation |
| "The team is small" | Build vs. buy decision, managed package preference |
| "We go live in 3 months" | Phased delivery, MVP scoping, risk assessment |

For every topic discussed, capture: **decision needed**, **options**, **constraints**, **owner**, and **deadline**. This creates a living decision log that feeds directly into your solution design.

## When to Stop Discovering

Discovery is done when you can answer "yes" to all four:

1. **Whiteboard test** — You can draw the solution on a whiteboard and the stakeholders nod
2. **Integration map complete** — You have identified every integration touchpoint
3. **Constraints and risks documented** — You know the top 3 of each
4. **Decisions have owners** — Every open trade-off has an owner and a deadline

If you cannot pass all four, push back on timelines. A week of extra discovery saves a month of rework.

## Checklist

- [ ] Stakeholder map completed (4-quadrant)
- [ ] Separate sessions scheduled by stakeholder group
- [ ] Question framework prepared (opening, constraint, trade-off)
- [ ] Decision log template ready
- [ ] Context diagram drawn (systems + data flows)
- [ ] Process map drawn (as-is + to-be)
- [ ] Data landscape mapped (system of record per domain)
- [ ] Post-session architecture translation done
- [ ] Discovery exit criteria met (whiteboard test, integrations mapped, constraints + risks identified, decisions owned)
