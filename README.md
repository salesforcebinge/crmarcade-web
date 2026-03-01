# crmarcade

The architect-curated directory of Salesforce ecosystem tools, frameworks, and resources.

**Live at [crmarcade.com](https://crmarcade.com)**

## What is crmarcade?

A curated, searchable directory of tools and resources for the Salesforce ecosystem. Every entry is handpicked and reviewed based on real enterprise implementation experience.

## Tech Stack

- [Astro](https://astro.build/) 5.5 — static site generator
- [Tailwind CSS](https://tailwindcss.com/) v4 — styling
- [Vercel](https://vercel.com/) — hosting and deployment

## Local Development

```sh
pnpm install
pnpm dev
```

## Adding Entries

Add a markdown file to `src/data/directory/` with the following frontmatter:

```yaml
---
title: Tool Name
description: One-line description of what the tool does.
tags: [devops, open-source]
link: https://tool-website.com
github_url: https://github.com/org/repo
license: MIT
author: Author Name
clouds: [Platform, Sales]
last_verified: "2026-02-27"
featured: false
---
```

Then write a "Why It Matters" section in the body.

## Suggest a Tool

Know a tool that belongs here? [Open an issue](https://github.com/salesforcebinge/crmarcade-web/issues/new?title=Tool+Suggestion:+[Name]&body=Tool+Name:%0AURL:%0ACategory:%0AWhy+it+matters:).

## License

MIT
