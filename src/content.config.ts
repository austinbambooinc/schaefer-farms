import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const yaml = require("js-yaml");

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

const settings = defineCollection({
  loader: file("src/content/settings/global.yml", {
    parser: (text) => ({ global: yaml.load(text) }),
  }),
  schema: z.object({
    site_name: z.string(),
    tagline: z.string().optional(),
    mission_statement: z.string().optional(),
    logo: z.string().optional(),
    primary_color: z.string().optional(),
    accent_color: z.string().optional(),
    background_color: z.string().optional(),
    font_family: z.string().optional(),
    contact_email: z.string().optional(),
    nav_items: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

export const collections = { honey, minerals, pages, blog, settings };