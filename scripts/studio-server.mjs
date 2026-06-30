import express from 'express'
import multer from 'multer'
import matter from 'gray-matter'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const app = express()
const port = 8787

const today = () => new Date().toISOString().slice(0, 10)

const collections = {
  writeups: {
    label: 'Writeups',
    folder: path.join(rootDir, 'src/content/writeups'),
    defaults: {
      title: 'Untitled Writeup',
      slug: 'untitled-writeup',
      order: 999,
      track: 'Writeups',
      platform: 'General',
      series: 'General',
      category: 'General',
      difficulty: 'Beginner',
      status: 'Draft',
      date: today(),
      summary: '',
      tags: [],
      tools: [],
      concepts: [],
      lesson: '',
      files: [],
      externalLink: '',
      cover: '',
      pinned: false,
      featured: false,
    },
  },

  journal: {
    label: 'Journal',
    folder: path.join(rootDir, 'src/content/journal'),
    defaults: {
      title: 'Untitled Journal Entry',
      slug: 'untitled-journal-entry',
      order: 999,
      date: today(),
      mood: 'Writing',
      category: 'Journal',
      summary: '',
      tags: [],
      lesson: '',
      cover: '',
      pinned: false,
      featured: false,
    },
  },

  labs: {
    label: 'Labs',
    folder: path.join(rootDir, 'src/content/labs'),
    defaults: {
      title: 'Untitled Lab',
      slug: 'untitled-lab',
      order: 999,
      status: 'Draft',
      type: 'Lab',
      description: '',
      tools: [],
      topics: [],
      files: [],
      cover: '',
    },
  },

  archive: {
    label: 'Archive',
    folder: path.join(rootDir, 'src/content/archive'),
    defaults: {
      title: 'Untitled Archive Note',
      slug: 'untitled-archive-note',
      order: 999,
      type: 'Class Notes',
      status: 'Active',
      date: today(),
      summary: '',
      tags: [],
      files: [],
      links: [],
      cover: '',
    },
  },

  achievements: {
    label: 'Achievements',
    folder: path.join(rootDir, 'src/content/achievements'),
    defaults: {
      title: 'Untitled Achievement',
      slug: 'untitled-achievement',
      order: 999,
      type: 'Award',
      status: 'Completed',
      date: today(),
      description: '',
      evidence: [],
      link: '',
      cover: '',
    },
  },

  skills: {
    label: 'Skills',
    folder: path.join(rootDir, 'src/content/skills'),
    defaults: {
      name: 'Untitled Skill',
      title: 'Untitled Skill',
      slug: 'untitled-skill',
      order: 999,
      category: 'General',
      level: 'Learning',
      status: 'Active',
      description: '',
      evidence: [],
      tools: [],
      notes: '',
      cover: '',
    },
  },
}

const uploadsDir = path.join(rootDir, 'public/uploads')

await fs.mkdir(uploadsDir, { recursive: true })

app.use(express.json({ limit: '25mb' }))

app.use((req, res, next) => {
  const allowedOrigins = [
    'http://localhost:4321',
    'http://127.0.0.1:4321',
  ]

  const origin = req.headers.origin

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4321')
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204)
  }

  next()
})

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir)
  },
  filename: (_req, file, cb) => {
    const safeName = file.originalname
      .toLowerCase()
      .replace(/[^a-z0-9.\-_]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '')

    cb(null, `${Date.now()}-${safeName}`)
  },
})

const upload = multer({ storage })

function getCollection(name) {
  const collection = collections[name]

  if (!collection) {
    throw new Error(`Unknown collection: ${name}`)
  }

  return collection
}

function slugify(input) {
  return String(input || '')
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function splitList(value) {
  if (Array.isArray(value)) return value

  if (!value) return []

  return String(value)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

function normalizeBoolean(value) {
  return value === true || value === 'true' || value === 'on'
}

function normalizeNumber(value, fallback = 999) {
  const number = Number(value)
  return Number.isFinite(number) ? number : fallback
}

function markdownToBlocks(markdown) {
  const lines = String(markdown || '').split('\n')
  const blocks = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (!line.trim()) {
      i += 1
      continue
    }

    if (line.startsWith('```')) {
      const language = line.replace('```', '').trim()
      const codeLines = []
      i += 1

      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i += 1
      }

      if (i < lines.length) {
        i += 1
      }

      blocks.push({
        type: 'code',
        language,
        code: codeLines.join('\n'),
      })

      continue
    }

    if (line.startsWith('### ')) {
      blocks.push({
        type: 'subheading',
        text: line.replace(/^### /, ''),
      })

      i += 1
      continue
    }

    if (line.startsWith('## ')) {
      blocks.push({
        type: 'heading',
        text: line.replace(/^## /, ''),
      })

      i += 1
      continue
    }

    if (line.startsWith('> ')) {
      blocks.push({
        type: 'callout',
        text: line.replace(/^> /, ''),
      })

      i += 1
      continue
    }

    if (line.trim() === '---') {
      blocks.push({
        type: 'divider',
      })

      i += 1
      continue
    }

    const imageMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/)

    if (imageMatch) {
      blocks.push({
        type: 'image',
        alt: imageMatch[1],
        src: imageMatch[2],
      })

      i += 1
      continue
    }

    const fileMatch = line.match(/^\[(.*?)\]\((.*?)\)$/)

    if (fileMatch) {
      blocks.push({
        type: 'file',
        name: fileMatch[1],
        url: fileMatch[2],
      })

      i += 1
      continue
    }

    const paragraphLines = [line]
    i += 1

    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith('## ') &&
      !lines[i].startsWith('### ') &&
      !lines[i].startsWith('```') &&
      !lines[i].startsWith('> ') &&
      lines[i].trim() !== '---' &&
      !lines[i].match(/^!\[(.*?)\]\((.*?)\)$/) &&
      !lines[i].match(/^\[(.*?)\]\((.*?)\)$/)
    ) {
      paragraphLines.push(lines[i])
      i += 1
    }

    blocks.push({
      type: 'paragraph',
      text: paragraphLines.join('\n'),
    })
  }

  if (blocks.length === 0) {
    blocks.push({
      type: 'paragraph',
      text: '',
    })
  }

  return blocks
}

function blocksToMarkdown(blocks) {
  return blocks
    .map((block) => {
      if (block.type === 'heading') {
        return `## ${block.text || ''}`
      }

      if (block.type === 'subheading') {
        return `### ${block.text || ''}`
      }

      if (block.type === 'paragraph') {
        return block.text || ''
      }

      if (block.type === 'image') {
        return `![${block.alt || 'Image'}](${block.src || ''})`
      }

      if (block.type === 'file') {
        return `[${block.name || 'Download file'}](${block.url || ''})`
      }

      if (block.type === 'code') {
        return `\`\`\`${block.language || ''}\n${block.code || ''}\n\`\`\``
      }

      if (block.type === 'callout') {
        return `> ${block.text || ''}`
      }

      if (block.type === 'divider') {
        return '---'
      }

      return ''
    })
    .join('\n\n')
    .trim()
}

function normalizeData(collectionName, inputData, finalSlug) {
  const collection = getCollection(collectionName)

  const data = {
    ...collection.defaults,
    ...inputData,
    slug: finalSlug,
  }

  data.order = normalizeNumber(data.order)

  if (collectionName === 'writeups') {
    data.tags = splitList(data.tags)
    data.tools = splitList(data.tools)
    data.concepts = splitList(data.concepts)
    data.files = Array.isArray(data.files) ? data.files : []
    data.pinned = normalizeBoolean(data.pinned)
    data.featured = normalizeBoolean(data.featured)

    if (data.level === '' || data.level === null || data.level === undefined) {
      delete data.level
    } else {
      data.level = normalizeNumber(data.level, 0)
    }
  }

  if (collectionName === 'journal') {
    data.tags = splitList(data.tags)
    data.pinned = normalizeBoolean(data.pinned)
    data.featured = normalizeBoolean(data.featured)
  }

  if (collectionName === 'labs') {
    data.tools = splitList(data.tools)
    data.topics = splitList(data.topics)
    data.files = Array.isArray(data.files) ? data.files : []
  }

  if (collectionName === 'archive') {
    data.tags = splitList(data.tags)
    data.files = Array.isArray(data.files) ? data.files : []
    data.links = Array.isArray(data.links) ? data.links : []
  }

  if (collectionName === 'achievements') {
    data.evidence = splitList(data.evidence)
  }

  if (collectionName === 'skills') {
    data.evidence = splitList(data.evidence)
    data.tools = splitList(data.tools)

    if (!data.name && data.title) {
      data.name = data.title
    }

    if (!data.title && data.name) {
      data.title = data.name
    }
  }

  return data
}

async function readMarkdownFile(collectionName, slug) {
  const collection = getCollection(collectionName)
  const filePath = path.join(collection.folder, `${slug}.md`)
  const raw = await fs.readFile(filePath, 'utf8')
  const parsed = matter(raw)

  return {
    slug,
    filePath,
    data: {
      ...collection.defaults,
      ...parsed.data,
    },
    body: parsed.content,
    blocks: markdownToBlocks(parsed.content),
  }
}

app.get('/api/collections', (_req, res) => {
  res.json({
    collections: Object.entries(collections).map(([name, collection]) => ({
      name,
      label: collection.label,
    })),
  })
})

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    message: 'Yaohan Studio server is running',
    time: new Date().toISOString(),
  })
})

app.get('/api/docs', async (req, res) => {
  try {
    const collectionName = String(req.query.collection || 'writeups')
    const collection = getCollection(collectionName)

    await fs.mkdir(collection.folder, { recursive: true })

    const files = await fs.readdir(collection.folder)
    const docs = []

    for (const file of files) {
      if (!file.endsWith('.md')) continue

      const filePath = path.join(collection.folder, file)
      const raw = await fs.readFile(filePath, 'utf8')
      const parsed = matter(raw)

      docs.push({
        slug: file.replace(/\.md$/, ''),
        data: {
          ...collection.defaults,
          ...parsed.data,
        },
      })
    }

    docs.sort((a, b) => Number(a.data.order || 999) - Number(b.data.order || 999))

    res.json({ docs })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/api/docs/:collection/:slug', async (req, res) => {
  try {
    const doc = await readMarkdownFile(req.params.collection, req.params.slug)
    res.json(doc)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

app.post('/api/docs/:collection/:slug', async (req, res) => {
  try {
    const collectionName = req.params.collection
    const oldSlug = req.params.slug
    const collection = getCollection(collectionName)

    await fs.mkdir(collection.folder, { recursive: true })

    const inputData = req.body.data || {}
    const blocks = Array.isArray(req.body.blocks) ? req.body.blocks : []

    const titleValue = inputData.title || inputData.name || oldSlug
    const finalSlug = slugify(inputData.slug || titleValue || oldSlug)

    if (!finalSlug) {
      throw new Error('Slug cannot be empty.')
    }

    const data = normalizeData(collectionName, inputData, finalSlug)
    const body = blocksToMarkdown(blocks)
    const output = matter.stringify(body, data)

    const newFilePath = path.join(collection.folder, `${finalSlug}.md`)
    const oldFilePath = path.join(collection.folder, `${oldSlug}.md`)

    await fs.writeFile(newFilePath, output, 'utf8')

    if (oldSlug !== finalSlug) {
      try {
        await fs.unlink(oldFilePath)
      } catch {
        // Ignore missing old file.
      }
    }

    res.json({
      ok: true,
      slug: finalSlug,
      path: newFilePath,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' })
  }

  res.json({
    url: `/uploads/${req.file.filename}`,
    filename: req.file.filename,
  })
})

app.listen(port, () => {
  console.log(`Yaohan Studio server running at http://localhost:${port}`)
})