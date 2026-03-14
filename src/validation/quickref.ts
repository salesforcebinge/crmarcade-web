import { z } from "zod";

export const quickRefSchema = z.object({
  title: z.string(),
  description: z.string(),
  tldr: z.string(), // One-liner summary shown in callout box
  category: z.enum([
    "Licensing", "Integration", "Security", "Data",
    "Automation", "Architecture", "DevOps", "Governance",
    "Identity", "Performance", "API"
  ]),
  tags: z.array(z.string()).optional(),
  related_scenarios: z.array(z.string()).optional(), // slugs
  related_tools: z.array(z.string()).optional(), // slugs
  featured: z.boolean().default(false),
  published: z.string().optional(), // ISO date
});
