import { z } from "zod";

export const directorySchema = (imageSchema: z.ZodTypeAny) =>
  z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    icon: z.string().optional(),
    image: imageSchema.optional(),
    link: z.string().url().optional(),
    featured: z.boolean().default(false),
    github_url: z.string().url().optional(),
    appexchange_url: z.string().url().optional(),
    license: z.enum([
      "MIT", "Apache-2.0", "BSD-3-Clause", "CC0-1.0", "GPL-3.0", "AGPL-3.0",
      "Proprietary", "Free", "Freemium", "Paid", "Salesforce"
    ]).optional(),
    author: z.string().optional(),
    clouds: z.array(z.enum([
      "Sales", "Service", "Marketing", "Commerce",
      "Platform", "Experience", "Data", "Cross-Cloud"
    ])).optional(),
    last_verified: z.string().optional(),
  });
