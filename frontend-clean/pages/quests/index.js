import Link from "next/link";
import { notion } from "../../lib/notion";

export default function QuestsPage({ quests }) {
  return (
    <main className="min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">🎯 Your Quests</h1>

      {quests.length === 0 && (
        <p className="text-center text-theme-muted">
          No quests found yet. Tag your scrolls in Notion with <code>Platform = Quest</code>!
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {quests.map(({ title, slug, description, symbol }) => (
          <Link key={slug} href={`/quests/${slug}`}>
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
    database_id: process.env.NOTION_SCROLL_REPOSITORY_ID // ✅ Not Codex!
  });

  const quests = response.results
    .filter(
      (page) =>
        page.properties.Platform?.rich_text?.[0]?.plain_text.trim() === "Quest"
    )
    .map((page) => ({
      title: page.properties.Name.title[0]?.plain_text || "",
      slug: page.properties.Slug.rich_text[0]?.plain_text || "",
      description: page.properties.Description?.rich_text?.[0]?.plain_text || "",
      symbol: page.properties.Symbol?.rich_text?.[0]?.plain_text || ""
    }));

  return { props: { quests } };
}

