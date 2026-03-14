---
title: "How to Write a Solution Design"
description: "The anatomy of a solution design document that actually gets read. What goes in each section, what to leave out, and how to structure it so stakeholders and developers both get what they need."
what_you_will_learn:
  - "The standard sections of a solution design and what each one accomplishes"
  - "How to write for two audiences at once — executives and developers"
  - "Common mistakes that turn solution designs into shelfware"
  - "When a solution design is 'done enough' to start building"
category: Design
audience: All Levels
time_estimate: "8 min read"
phase: Design
related_scenarios: []
related_tools:
  - lucidchart
  - draw-io
related_quick_refs: []
featured: false
published: "2026-03-08"
---

## The Document Nobody Reads

Every architect has written one. Forty pages, perfect formatting, detailed data model. Submitted, approved, filed. Never opened again.

A good solution design is read at least three times: once for approval, once before build starts, and once when something goes wrong six months later. If your document only survives the first reading, it is a sign-off artifact, not architecture.

## The Seven Sections

Every section has a job. If you understand the job, you know what to write — and what to leave out.

| # | Section | Its Job | Key Rule |
|---|---|---|---|
| 1 | **Executive Summary** | Let someone who will never read the rest understand what you are building, why, and what it costs | One page max. Write last, put first. No jargon. |
| 2 | **Scope & Assumptions** | Draw boundaries and document what you believe but have not verified | State assumptions as testable claims with "impact if wrong" |
| 3 | **Architecture Overview** | Show how pieces fit together at a level both a tech lead and a BA can follow | One C4 context diagram + 2-3 paragraphs. Not a deep dive. |
| 4 | **Detailed Design** | Give the build team enough detail to implement without guessing | Data model, automation, integration, security, UI/UX |
| 5 | **Migration Strategy** | Describe how existing data gets into Salesforce without breaking things | Sequence, cutover approach, rollback plan |
| 6 | **Non-Functional Requirements** | Document performance, security, and operational requirements that will kill the project if ignored | Map each NFR to a specific Salesforce mechanism |
| 7 | **Risks & Dependencies** | List what could go wrong and what you are waiting on | Event → impact → mitigation format |

The principle: **just enough architecture documentation.** For every section, ask: "If I deleted this, would someone make a wrong decision during build?" If the answer is no, cut it.

## Two Audiences, One Document

A solution design has two readers: the **approver** (executive, program manager) and the **builder** (developer, admin, QA). They need different things from the same document.

| | Approver | Builder |
|---|---|---|
| **Reads** | Executive summary, scope, risks | Detailed design, data model, integration spec |
| **Cares about** | Cost, timeline, risk, business alignment | How to implement, what to configure, what to code |
| **Skips** | ERDs, field lists, API specs | Budget tables, strategic alignment paragraphs |

Layer the document. Executive summary and scope are approver-facing. Detailed design is builder-facing. Architecture overview bridges both. Do not mix audience levels within a section.

## When Is It Done?

A solution design is done when:

1. **A developer can build from it** — the data model, automation logic, and integration specs are clear enough to implement without a walkthrough
2. **A tester can write test cases** — the expected behaviors, edge cases, and NFRs are stated explicitly
3. **A future architect can understand it** — the decisions, assumptions, and trade-offs explain *why* it was built this way
4. **The business can give informed approval** — scope, timeline, and risks are clear enough for a real sign-off

If you are agonizing over whether to add another section, you are probably done.

## Checklist

- [ ] Executive summary is one page or less
- [ ] Scope clearly defines in vs out
- [ ] Assumptions documented with "impact if wrong"
- [ ] Architecture overview diagram exists (systems + data flows)
- [ ] Key architecture decisions reference options analysis
- [ ] Data model documented (custom objects, relationships, OWD)
- [ ] Automation documented (flows, triggers, scheduled jobs, firing order)
- [ ] Integration specs per connection (direction, frequency, auth, error handling)
- [ ] Security model documented (sharing, permission sets, FLS)
- [ ] Migration strategy defined (sequence, cutover approach, rollback)
- [ ] Non-functional requirements mapped to Salesforce mechanisms
- [ ] Risks have mitigations, dependencies have dates
- [ ] Document reviewed by both an approver and a builder
- [ ] No section exists purely to fill a template
