import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const fileSchema = z.object({
  name: z.string(),
  type: z.string(),
  url: z.string(),
})

const linkSchema = z.object({
  name: z.string(),
  url: z.string(),
})

const labs = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/labs',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    status: z.string(),
    type: z.string(),
    description: z.string(),
    tools: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    files: z.array(fileSchema).default([]),
    cover: z.string().optional(),
  }),
})

const writeups = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/writeups',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    category: z.string(),
    difficulty: z.string(),
    status: z.string(),
    date: z.string(),
    summary: z.string(),
    tools: z.array(z.string()).default([]),
    concepts: z.array(z.string()).default([]),
    lesson: z.string(),
    files: z.array(fileSchema).default([]),
    externalLink: z.string().default(''),
    cover: z.string().optional(),
  }),
})

const journal = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/journal',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    date: z.string(),
    mood: z.string(),
    category: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    lesson: z.string(),
    cover: z.string().optional(),
  }),
})

const archive = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/archive',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    type: z.string(),
    status: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    files: z.array(fileSchema).default([]),
    links: z.array(linkSchema).default([]),
    cover: z.string().optional(),
  }),
})

const achievements = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/achievements',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    type: z.string(),
    status: z.string(),
    date: z.string(),
    description: z.string(),
    evidence: z.array(z.string()).default([]),
    link: z.string().default(''),
    cover: z.string().optional(),
  }),
})

const skills = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/skills',
  }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    order: z.number(),
    category: z.string(),
    level: z.string(),
    status: z.string(),
    description: z.string(),
    evidence: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    notes: z.string(),
    cover: z.string().optional(),
  }),
})

export const collections = {
  labs,
  writeups,
  journal,
  archive,
  achievements,
  skills,
}