import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
import { createDirectoryCollection } from "@lib/loaders";
import { scenarioSchema } from "@validation/scenario";
import { quickRefSchema } from "@validation/quickref";
import { playbookSchema } from "@validation/playbook";

const directory = createDirectoryCollection();

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/pages" }),
  schema: ({ image }) => z.object({
    image: image().optional(),
    title: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
  schema: ({image}) => z.object({
    title: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: image().optional(),
  }),
});

const scenarios = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/scenarios" }),
  schema: scenarioSchema,
});

const quickrefs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/quick-refs" }),
  schema: quickRefSchema,
});

const playbooks = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/playbooks" }),
  schema: playbookSchema,
});

export const collections = {
  directory,
  pages,
  blog,
  scenarios,
  quickrefs,
  playbooks,
};
