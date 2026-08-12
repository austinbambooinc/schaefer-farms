import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const seoSchema = z.object({
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  meta_keywords: z.string().optional(),
}).optional();

const honey = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/honey" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    price: z.string().optional(),
    image: z.string().optional(),
    available: z.boolean().optional(),
  }),
});

const minerals = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/minerals" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    price: z.string().optional(),
    image: z.string().optional(),
    available: z.boolean().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    seo: seoSchema,
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    image: z.string().optional(),
    seo: seoSchema,
  }),
});

export const collections = { honey, minerals, pages, blog };