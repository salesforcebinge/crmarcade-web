---
title: Salesforce IAM Flows
description: A runnable Node.js app that implements the most common SAML and OAuth flows in Salesforce — deploy it, connect your org, and see each identity flow in action.
tags:
  - identity

link: https://github.com/NVandenBossche/salesforce-iam-flows
github_url: https://github.com/NVandenBossche/salesforce-iam-flows
license: MIT
author: Nicolas Vanden Bossche
clouds:
  - Cross-Cloud
last_verified: "2026-03-02"
featured: false
---

## Why It Matters

There's no shortage of documentation on Salesforce OAuth and SAML flows. But reading a sequence diagram and actually watching tokens exchange in real time are two different things. This app lets you do the latter.

Deploy it to Heroku (one-click) or run locally, connect a Salesforce org, and step through Web Server flow, JWT Bearer, Device flow, SAML assertions, and more. Each flow is implemented end-to-end — you see the redirect, the callback, the token response. It turns abstract IAM theory into something you can debug.

Built alongside the [Cloud Sundial](https://cloudsundial.com/salesforce-identity) identity flow diagrams, which remain the clearest visual reference for Salesforce IAM. The diagrams explain the "what," this app shows the "how." Together, they're the best free resource for any architect solutioning SSO or OAuth in Salesforce — whether you're preparing for a CTA board or designing a multi-org authentication strategy.

I've deployed [my own instance](https://crmarcade-a5c46f951f3a.herokuapp.com/) of this app — it's how I tested IAM flows during real implementation work.

## Alternatives

- **Axiom** — web-based SAML/OAuth testing tool, faster for quick validation
- **Cloud Sundial** — the companion diagrams that map every Salesforce identity flow
- **Salesforce Identity Trailhead** — official learning path, broader but less hands-on
