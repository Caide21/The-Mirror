import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_KEY })

export async function fetchPageById(pageId) {
  const page = await notion.pages.retrieve({ page_id: pageId })
  const title = page.properties?.title?.title?.[0]?.plain_text || 'Untitled'

  const blocks = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 100,
  })

  const content = blocks.results
    .map((block) => {
      const rich = block[block.type]?.rich_text
      return rich ? rich.map((r) => r.plain_text).join('') : ''
    })
    .join('\n\n')

  return { id: pageId, title, content, updated: page.last_edited_time }
}

export async function fetchCodexPageByTitle(titleQuery) {
  const response = await notion.search({
    query: titleQuery,
    filter: {
      value: 'page',
      property: 'object',
    }
  })

  const matchedPage = response.results.find(page => {
    const title = page.properties?.title?.title?.[0]?.plain_text
    return title?.toLowerCase() === titleQuery.toLowerCase()
  })

  if (!matchedPage) {
    throw new Error(`Page "${titleQuery}" not found`)
  }

  const blocks = await notion.blocks.children.list({
    block_id: matchedPage.id,
    page_size: 100,
  })

  const content = blocks.results
    .map(block => {
      if (block.type === 'paragraph') {
        return block.paragraph.rich_text.map(rt => rt.plain_text).join('')
      }
      return ''
    })
    .join('\n\n')

  return {
    id: matchedPage.id,
    title: titleQuery,
    content,
    updated: matchedPage.last_edited_time,
  }
}

export function inferTypeFromTitle(title = '') {
  const lower = title.toLowerCase()
  if (lower.includes('scroll')) return 'Scroll'
  if (lower.includes('codex')) return 'Codex'
  return 'Unknown'
}
