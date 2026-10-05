import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faq = z.array(z.object({ q: z.string(), a: z.string() })).default([]);

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    excerpt: z.string().optional(),
    village: z.enum(['Vallouise', 'Pelvoux', 'Puy-Saint-Vincent']),
    updated: z.coerce.date(),
    faq,
    sources: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    excerpt: z.string().optional(),
    updated: z.coerce.date(),
    faq,
    sources: z.array(z.string()).default([]),
  }),
});

export const collections = { guides, blog };
