import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const honey = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/honey",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const minerals = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/minerals",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  honey,
  minerals,
  pages,
};