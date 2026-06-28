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

const collections = {
  writeups: {
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
      date: new Date().toISOString().slice(0, 10),
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
    folder: path.join(rootDir, 'src/content/journal'),
    defaults: {
      title: 'Untitled Journal Entry',
      slug: 'untitled-journal-entry',
      order: 999,
      date: new Date().toISOString().slice(0, 10),
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
}

const uploadsDir = path.join(rootDir, 'public/uploads')

await fs.mkdir(uploadsDir, { recursive: true })

app.use(express.json({ limit: '10mb' }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4321')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
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

function markdownToBlocks(markdown) {
  const lines = markdown.split('\n')
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

      i += 1

      blocks.push({
        type: 'code',
        language,
        code: codeLines.join('\n'),
      })

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
      !lines[i].startsWith('```') &&
      !lines[i].startsWith('> ') &&
      lines[i].trim() !== '---' &&
      !lines[i].match(/^!\[(.*?)\]\((.*?)\)$/)
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
        return `---`
      }

      return ''
    })
    .join('\n\n')
    .trim()
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
    const blocks = req.body.blocks || []

    const finalSlug = slugify(inputData.slug || inputData.title || oldSlug)

    const data = {
      ...collection.defaults,
      ...inputData,
      slug: finalSlug,
    }

    if (collectionName === 'writeups') {
      data.tags = splitList(data.tags)
      data.tools = splitList(data.tools)
      data.concepts = splitList(data.concepts)
      data.files = Array.isArray(data.files) ? data.files : []
      data.order = Number(data.order || 999)
      if (data.level === '' || data.level === null || data.level === undefined) {
        delete data.level
      } else {
        data.level = Number(data.level)
      }
      data.pinned = Boolean(data.pinned)
      data.featured = Boolean(data.featured)
    }

    if (collectionName === 'journal') {
      data.tags = splitList(data.tags)
      data.order = Number(data.order || 999)
      data.pinned = Boolean(data.pinned)
      data.featured = Boolean(data.featured)
    }

    const body = blocksToMarkdown(blocks)
    const output = matter.stringify(body, data)

    const newFilePath = path.join(collection.folder, `${finalSlug}.md`)
    const oldFilePath = path.join(collection.folder, `${oldSlug}.md`)

    await fs.writeFile(newFilePath, output, 'utf8')

    if (oldSlug !== finalSlug) {
      try {
        await fs.unlink(oldFilePath)
      } catch {
        // ignore if old file does not exist
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