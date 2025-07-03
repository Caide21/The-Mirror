// pages/codex.js

import Link from "next/link";
import { notion } from "../lib/notion"; // adjust if your client path differs
console.log('🔑 NOTION:', notion);

export default function CodexPage({ codexEntries }) {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">📜 The Codex</h1>
      <p className="text-theme-muted text-center max-w-2xl mx-auto mb-12">
        These codex entries and laws encode the core beliefs, operating principles, and system design grammar of The Mirror OS.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {codexEntries.map(({ title, slug, description, symbol }) => (
          <Link key={slug} href={`/${slug}`}>
            <div className="bg-white/10 border border-white/10 rounded-xl p-6 hover:bg-white/20 transition">
              <h2 className="text-xl font-semibold mb-2">
                {symbol} {title}
              </h2>
              <p className="text-sm text-white/70">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_CODEX_REPOSITORY_ID
  });

  const codexEntries = response.results.map((page) => ({
    title: page.properties.Name.title[0]?.plain_text || "",
    slug: page.properties.Slug.rich_text[0]?.plain_text || "",
    description: page.properties.Description?.rich_text?.[0]?.plain_text || "",
    symbol: page.properties.Symbol?.rich_text?.[0]?.plain_text || ""
  }));

  return {
    props: {
      codexEntries
    }
  };
}
