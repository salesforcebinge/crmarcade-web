---
title: ngrok
description: Secure tunneling tool that exposes local servers to the internet — ideal for testing Salesforce webhooks, outbound messages, and platform event callbacks.
tags:
  - integration

link: https://ngrok.com/
license: Freemium
author: ngrok Inc.
clouds:
  - Cross-Cloud
last_verified: "2026-03-01"
featured: false
---

## Why It Matters

Salesforce sends outbound messages, platform event callbacks, and webhook notifications to external endpoints — but during development, your endpoint lives on localhost. ngrok creates a secure tunnel from a public URL to your local machine, so you can test integrations end-to-end without deploying anything.

Spin up `ngrok http 3000`, paste the URL into your Salesforce outbound message config, and watch the payloads arrive locally. Invaluable for architects prototyping integration patterns before committing to infrastructure.

## Alternatives

- **Beeceptor** — mock API endpoints without any local server
- **Webhook.site** — inspect incoming webhooks in real-time
- **LocalTunnel** — open-source alternative to ngrok
