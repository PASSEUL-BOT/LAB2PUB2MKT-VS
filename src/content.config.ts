import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insight = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insight' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { insight };