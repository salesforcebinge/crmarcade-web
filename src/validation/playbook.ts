import { z } from "zod";

export const playbookSchema = z.object({
  title: z.string(),
  description: z.string(),
  what_you_will_learn: z.array(z.string()), // Bullet points for callout box
  category: z.enum([
    "Discovery",        // Requirements gathering, stakeholder interviews
    "Estimation",       // Sizing, costing, LOE
    "Design",           // Solution design, diagramming, trade-offs
    "Governance",       // Standards, review boards, decision logs
    "Delivery",         // Build planning, sprint structure, release management
    "Communication",    // Presentations, exec alignment, stakeholder management
  ]),
  audience: z.enum([
    "All Levels",
    "Junior Architect",
    "Senior Architect",
    "CTA-Track",
  ]),
  time_estimate: z.string(), // e.g., "20 min read", "45 min exercise"
  phase: z.enum([
    "Pre-Sales",    // Before the SOW
    "Discovery",    // Requirements + analysis
    "Design",       // Architecture + solution design
    "Build",        // During implementation
    "Stabilize",    // UAT, hardening, go-live prep
    "Operate",      // Post-go-live, hypercare, optimization
    "Cross-Phase",  // Applies across the lifecycle
  ]),
  related_scenarios: z.array(z.string()).optional(),   // slugs
  related_tools: z.array(z.string()).optional(),       // slugs
  related_quick_refs: z.array(z.string()).optional(),  // slugs
  featured: z.boolean().default(false),
  published: z.string().optional(), // ISO date
  blog_url: z.string().url().optional(), // Link to detailed blog post on salesforcebinge.com
});
