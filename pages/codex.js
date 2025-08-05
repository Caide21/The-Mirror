<<<<<<< HEAD
import Link from "next/link";
import { notion } from "../lib/notion";
import PageShell from "@/components/Layout/PageShell";

export default function CodexPage({ codexEntries }) {
  return (
    <PageShell
      heading={{
        emoji: "📜",
        title: "The Codex",
        subtitle: "Core beliefs, operating principles, and the grammar of The Mirror OS."
      }}
    >
=======
// pages/codex.js

import Link from "next/link";
import { notion } from "../lib/notion"; // adjust if your client path differs
console.log('🔑 NOTION:', notion);

export default function CodexPage({ codexEntries }) {
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 pt-32 pb-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">📜 The Codex</h1>
      <p className="text-theme-muted text-base sm:text-lg text-center max-w-2xl mx-auto mb-10 px-2">
        These codex entries and laws encode the core beliefs, operating principles, and system design grammar of The Mirror OS.
      </p>

>>>>>>> 99cc43d (cleanup)
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0 max-w-6xl mx-auto">
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
<<<<<<< HEAD
    </PageShell>
=======
    </main>
>>>>>>> 99cc43d (cleanup)
  );
}

export async function getServerSideProps() {
  try {
<<<<<<< HEAD
=======
    console.log("✅ NOTION_CODEX_REPOSITORY_ID:", process.env.NOTION_CODEX_REPOSITORY_ID);

>>>>>>> 99cc43d (cleanup)
    const response = await notion.databases.query({
      database_id: process.env.NOTION_CODEX_REPOSITORY_ID
    });

<<<<<<< HEAD
=======
    console.log("✅ NOTION QUERY RESPONSE:", JSON.stringify(response, null, 2));

>>>>>>> 99cc43d (cleanup)
    const codexEntries = response.results.map((page) => ({
      title: page.properties.Name?.title?.[0]?.plain_text || "Untitled",
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || "",
      description: page.properties.Description?.rich_text?.[0]?.plain_text || "",
      symbol: page.properties.Symbol?.rich_text?.[0]?.plain_text || ""
    }));

    return { props: { codexEntries } };

  } catch (err) {
    console.error("❌ CODEx SSR error:", err);
    return { notFound: true };
  }
}
