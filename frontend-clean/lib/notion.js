import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_KEY })

function normalize(str = '') {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function inferTypeFromTitle(title = '') {
  const lower = title.toLowerCase()
  if (lower.includes('scroll')) return 'Scroll'
  if (lower.includes('codex')) return 'Codex'
  return 'Unknown'
}

async function parseBlocks(blocks) {
  let content = ''
  let currentTable = []

  for (const block of blocks.results) {
    const { type } = block
    const rich = block[type]?.rich_text
    const text = rich ? rich.map((r) => r.plain_text).join('') : ''

    switch (type) {
      case 'heading_1':
        content += `\n# ${text}\n\n`
        break
      case 'heading_2':
        content += `\n## ${text}\n\n`
        break
      case 'heading_3':
        content += `\n### ${text}\n\n`
        break
      case 'bulleted_list_item':
        content += `• ${text}\n`
        break
      case 'quote':
        content += `> ${text}\n`
        break
      case 'code':
        content += `\`\`\`\n${text}\n\`\`\`\n`
        break
      case 'divider':
        content += `---\n`
        break
      case 'paragraph':
        content += `${text}\n\n`
        break
      case 'table':
        currentTable = await notion.blocks.children.list({
          block_id: block.id,
        })
        const rows = currentTable.results.map((row) => {
          return (
            row.table_row?.cells?.map((cell) =>
              cell.map((c) => c.plain_text).join('')
            ) || []
          )
        })

        const tableOutput = rows
          .map((row, i) => {
            const rowLine = '| ' + row.join(' | ') + ' |'
            if (i === 0) {
              const divider = '| ' + row.map(() => '---').join(' | ') + ' |'
              return rowLine + '\n' + divider
            }
            return rowLine
          })
          .join('\n') + '\n\n'

        content += tableOutput
        break
      default:
        break
    }
  }

  return content.trim()
}

export async function fetchPageById(pageId) {
  const page = await notion.pages.retrieve({ page_id: pageId })
  const title = page.properties?.title?.title?.[0]?.plain_text || 'Untitled'

  const blocks = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 100,
  })

  const content = await parseBlocks(blocks)

  return {
    id: pageId,
    title,
    content,
    updated: page.last_edited_time,
    type: inferTypeFromTitle(title),
  }
}

export async function fetchCodexPageByTitle(titleQuery) {
  console.log('🔍 Searching Notion for:', titleQuery);
  const normQuery = normalize(titleQuery);
  console.log('🧽 Normalized Query:', normQuery);

  let pages = [];
  let cursor = undefined;

  do {
    const response = await notion.search({
      start_cursor: cursor,
      page_size: 100,
      filter: { value: 'page', property: 'object' },
    });

    pages.push(...response.results);
    cursor = response.has_more ? response.next_cursor : null;
  } while (cursor);

  pages.forEach(page => {
    const rawTitle = page.properties?.title?.title?.[0]?.plain_text || 'Untitled';
    const normTitle = normalize(rawTitle);
    console.log(`→ Found: "${rawTitle}" → "${normTitle}"`);
  });

  let matchedPage = pages.find(page => {
    const notionTitle = page.properties?.title?.title?.[0]?.plain_text || '';
    return normalize(notionTitle) === normQuery;
  });

  if (!matchedPage) {
    matchedPage = pages.find(page => {
      const notionTitle = page.properties?.title?.title?.[0]?.plain_text || '';
      const normTitle = normalize(notionTitle);
      return normTitle.startsWith(normQuery) || normTitle.includes(normQuery);
    });
  }

  if (!matchedPage) {
    console.warn(`❌ No match found for "${titleQuery}"`);
    throw new Error(`Page "${titleQuery}" not found`);
  }

  const blocks = await notion.blocks.children.list({
    block_id: matchedPage.id,
    page_size: 100,
  });

  const content = await parseBlocks(blocks);
  const title = matchedPage.properties?.title?.title?.[0]?.plain_text || titleQuery;

  return {
    id: matchedPage.id,
    title,
    content,
    updated: matchedPage.last_edited_time,
    type: inferTypeFromTitle(title),
  };
}

