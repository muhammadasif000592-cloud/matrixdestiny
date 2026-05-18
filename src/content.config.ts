import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const arcana = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/arcana' }),
  schema: z.object({
    number: z.number().int().min(1).max(22),
    name: z.string(),
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'pt-br', 'uk']),
    relationships: z.object({
      isA: z.string(),
      usedFor: z.array(z.string()),
      worksWith: z.array(z.number()),
      conflictsWith: z.array(z.number()),
      causes: z.array(z.string()),
    }),
    faq: z.array(
      z.object({
        q: z.string(),
        a: z.string(),
      })
    ),
  }),
});

export const collections = { arcana };
