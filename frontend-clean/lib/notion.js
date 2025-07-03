// lib/notion.js

import { Client } from '@notionhq/client';

// ✅ Create the Notion client with your token
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// ✅ Fetch a Codex page by its slug, then pull its blocks
export async function fetchCodexPageBySlug(slug) {
  const databaseId = process.env.NOTION_CODEX_REPOSITORY_ID;

  // Get the page
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      rich_text: { equals: slug }
    },
  });

  if (response.results.length === 0) throw new Error("Not found");

  const page = response.results[0];
  const pageId = page.id;

  // Recursively get all blocks
  const blocks = await getAllBlocks(pageId);

  return {
    title: page.properties.Name.title[0]?.plain_text || '',
    slug: page.properties.Slug.rich_text[0]?.plain_text || '',
    updated: page.last_edited_time || '',
    blocks,
  };
}

// 🔑 Recursively walk blocks, resolve children
async function getAllBlocks(blockId) {
  const res = await notion.blocks.children.list({ block_id: blockId });
  const blocks = await Promise.all(
    res.results.map(async (block) => {
      if (block.has_children) {
        block.children = await getAllBlocks(block.id);
      }
      return block;
    })
  );
  return blocks;
}

