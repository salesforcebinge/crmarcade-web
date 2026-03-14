import { z } from "zod";

export const scenarioSchema = z.object({
  title: z.string(),
  description: z.string(),
  question: z.string().optional(), // The Google-magnet question this scenario answers
  industry: z.enum([
    "Healthcare", "Financial Services", "Retail", "Manufacturing",
    "Public Sector", "Technology", "Education", "Media",
    "Nonprofit", "Cross-Industry"
  ]),
  difficulty: z.enum(["Foundational", "Intermediate", "CTA-Level"]),
  domains: z.array(z.enum([
    "Integration", "Identity & SSO", "Data Migration", "Multi-Org",
    "Large Data Volumes", "Governance", "Security", "Data Architecture",
    "Application Architecture", "Automation", "AI & Agents"
  ])),
  clouds: z.array(z.enum([
    "Sales", "Service", "Marketing", "Commerce",
    "Platform", "Experience", "Data", "Health",
    "Financial Services", "Cross-Cloud"
  ])).optional(),
  solution_components: z.array(z.string()).optional(), // Okta, MuleSoft, DocuSign, etc.
  tools_referenced: z.array(z.string()).optional(), // slugs of directory entries
  quick_refs_referenced: z.array(z.string()).optional(), // slugs of quick-ref entries
  sf_references: z.array(z.object({
    title: z.string(),
    url: z.string().url(),
    type: z.enum(["Decision Guide", "Well-Architected", "Fundamentals", "Diagram"]),
  })).optional(),
  well_architected: z.array(z.enum([
    "Trusted", "Trusted > Secure", "Trusted > Compliant", "Trusted > Reliable",
    "Easy", "Easy > Intentional", "Easy > Automated", "Easy > Engaging",
    "Adaptable", "Adaptable > Resilient", "Adaptable > Composable"
  ])).optional(),
  featured: z.boolean().default(false),
  published: z.string().optional(), // ISO date
});
