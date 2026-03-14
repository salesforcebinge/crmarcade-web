---
title: "The Options Discipline"
description: "Why architects always present three options — even when they already know the answer. How to frame alternatives, grade them against criteria, and use the process to build stakeholder trust."
what_you_will_learn:
  - "Why presenting a single recommendation undermines your credibility"
  - "How to generate genuine alternatives when you think there is only one way"
  - "A scoring framework that makes trade-offs visible and defensible"
  - "How to use the options process to get faster stakeholder buy-in"
category: Design
audience: Senior Architect
time_estimate: "8 min read"
phase: Design
related_scenarios: []
related_tools: []
related_quick_refs: []
featured: true
published: "2026-03-08"
---

## The One-Option Trap

"I recommend we use MuleSoft." That is a conclusion. It might even be the right conclusion. But it tells the steering committee nothing about *why*, what alternatives were considered, or what trade-offs were accepted.

Compare: "Here are three integration approaches. I evaluated each against five criteria. Option B scores highest, and here is why." Same recommendation, completely different outcome. The room asks better questions, the decision gets made faster, and nobody leaves wondering if the architect actually thought this through.

This is the options discipline — a thinking tool that makes you a better architect and makes your stakeholders better decision-makers.

## Why Three

One option is a decree. Two is a false choice — stakeholders feel backed into a corner. Four or more creates analysis paralysis. Three is enough to show genuine alternatives without overwhelming the room.

More importantly, the process of finding three forces you to explore the solution space. You cannot generate three genuine options without understanding the problem better than someone who jumped straight to a recommendation.

### The Pattern

For any Salesforce architecture decision, your three options usually fall into a pattern:

| Pattern | Description | Example (ERP Order Sync) |
|---|---|---|
| **Conservative** | Lowest risk, uses what already exists | Standard REST API — SAP polls Salesforce on a schedule to fetch new Orders. Zero custom code on the Salesforce side. |
| **Balanced** | Moderate investment, near real-time | CDC + lightweight listener — a service subscribes via Pub/Sub API and pushes changes to SAP. |
| **Ambitious** | Higher investment, full orchestration | Platform Events + MuleSoft — enterprise middleware handles transformation, retry, dead-letter queuing, and monitoring. |

Each option shifts *where the work happens* and *how changes are detected*. The progression: no events → events + simple listener → events + enterprise middleware. That is genuine architectural variation — not three flavors of the same approach.

## The Evaluation Matrix

Options without criteria are just a list. The evaluation matrix is where the discipline pays off.

**Step 1:** Define 5-7 criteria with stakeholders *before* you present options — time to deliver, total cost, scalability, team capability, platform alignment, risk.

**Step 2:** Weight them. Allocate 100 points across criteria. If time to deliver gets 30 and scalability gets 10, priorities are now explicit, not assumed.

**Step 3:** Score each option on a 1-3 or 1-5 scale. The value is in the relative ranking, not the absolute numbers.

| Criteria | Weight | Conservative | Balanced | Ambitious |
|---|---|---|---|---|
| Time to deliver | 30 | 3 | 2 | 1 |
| Total cost | 20 | 3 | 2 | 1 |
| Scalability | 15 | 1 | 2 | 3 |
| Team capability | 15 | 3 | 2 | 1 |
| Platform alignment | 10 | 2 | 3 | 3 |
| Risk | 10 | 2 | 2 | 3 |
| **Weighted Total** | **100** | **245** | **210** | **160** |

The conservative option wins — and everyone can see *why*. This team prioritized speed and cost over scalability. But if priorities shift ("we need near real-time"), the framework absorbs that without starting from scratch.

## The Strawman Test

Before presenting, run each option through one test: "Would a reasonable architect genuinely recommend this option if the criteria were weighted differently?"

If an option only exists to make the preferred one look good, replace it. Stakeholders spot strawmen — and once they do, your credibility drops. Every option must represent a real path forward under a plausible set of priorities.

## Checklist

- [ ] Decision clearly stated (one sentence, no jargon)
- [ ] Three genuine options identified (not strawmen)
- [ ] Criteria defined with stakeholder input (5-7 max)
- [ ] Criteria weighted (total = 100)
- [ ] Each option scored against each criterion
- [ ] Weighted totals calculated
- [ ] Strawman test passed (each option viable under different weights)
- [ ] Recommendation stated with rationale
- [ ] Decision documented in architecture decision log
