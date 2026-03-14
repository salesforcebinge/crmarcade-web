---
title: "Sharing Model Decision Guide"
description: "How to layer Salesforce sharing: OWD, Role Hierarchy, Sharing Rules, Apex Managed Sharing, and Teams."
tldr: "Start restrictive (Private OWD), open up with Role Hierarchy, automate with Sharing Rules, and only reach for Apex Managed Sharing when the declarative layers run out."
category: Security
tags:
  - security
  - architecture
related_scenarios: []
related_tools: []
featured: false
published: "2026-03-14"
---

## The Quick Answer

Sharing is layered. Each layer opens access further. Start from the bottom and only add layers when the one below is insufficient.

| Layer | What It Does | When to Use | What It Costs |
|---|---|---|---|
| **OWD (Org-Wide Defaults)** | Sets the baseline — most restrictive access per object | Always. Every object needs an OWD. | Nothing — it is configuration. |
| **Role Hierarchy** | Grants upward visibility — managers see their reports' records | When access follows org chart lines | Simple hierarchy is free. Deep hierarchies slow sharing recalculation. |
| **Sharing Rules** | Opens access to groups based on criteria or ownership | When access patterns are predictable and rule-based | Each rule adds to sharing calculation. Keep under ~100 per object. |
| **Teams** | Ad-hoc record-level sharing by named users (Account/Opportunity Teams) | When individuals need record access that does not follow rules | Manual maintenance. Users forget to update teams. |
| **Apex Managed Sharing** | Programmatic sharing records via code | When no declarative option can express the logic | Custom code to write and maintain. |
| **Territory Management** | Account assignment based on territory criteria | When access is geography or segment-based | Enterprise Territory Management is a significant setup investment. |

## Decision Flow

1. **Set OWD to Private** (or Public Read Only) for every object with sensitive data
2. **Does access follow the reporting structure?** → Role Hierarchy handles it
3. **Can you define the pattern as "group X sees records matching criteria Y"?** → Sharing Rules
4. **Is access ad-hoc and user-specific?** → Teams
5. **None of the above work?** → Apex Managed Sharing
6. **Is access territory or geography-based?** → Evaluate Territory Management

## Architect's Take

The most common mistake is setting OWD to Public because "it is easier" and then trying to restrict access later. Restricting is harder than opening. Start Private, prove the need for each layer.

The second most common mistake is jumping to Apex Managed Sharing because a sharing rule "almost" works. Before writing code, check if a criteria-based sharing rule, an ownership-based sharing rule, or a role hierarchy adjustment can solve it. Code is a maintenance burden — declarative sharing is not.

**Performance note:** Sharing recalculation runs async and can take hours on large orgs. Every layer you add contributes to recalc time. If your Account object has 200 sharing rules and a 7-level role hierarchy, expect delays when roles change. Keep the model as simple as it can be.

## Licensing & Cost

Your sharing model design is constrained by which licenses your users hold.

| License Type | Sharing Capabilities | Watch Out |
|---|---|---|
| **Full CRM (Sales/Service Cloud)** | All sharing features available | — |
| **Salesforce Platform** | All sharing features, limited object access | Can only access custom objects + limited standard objects |
| **Customer Community** | OWD and role hierarchy only. No criteria-based sharing rules. | Cannot use sharing rules to grant access — redesign required if you assumed them. |
| **Customer Community Plus** | Full sharing rules, API access, reports | Significantly more expensive per user than Customer Community. |
| **Partner Community** | Full sharing rules, API access, reports, PRM features | Per-login vs per-member pricing affects cost at scale. |

- **Enterprise Territory Management** is included in Performance and Unlimited. Available in Enterprise Edition but requires activation.
- **Apex Managed Sharing** has no direct license cost — but the development and maintenance effort is real.

The wrong community license type means redesigning your sharing model after build. Validate license types during discovery, not UAT. See [How Licensing Shapes Architecture](/playbooks/how-licensing-shapes-architecture).
