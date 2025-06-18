// pages/codex.js

import Link from "next/link";

const codexEntries = [
  {
    title: "⚡ WHY THE CREATOR CREATES WITH SPEED",
    slug: "why-the-creator-creates-with-speed",
    description: "The creative force is a frequency. This scroll captures the essence of why speed matters in emergence."
  },
  {
    title: "📜 Scroll of Symbolic Transmission",
    slug: "scroll-of-symbolic-transmission",
    description: "The language beneath all languages — a guide to encoding intention, feeling, and meaning in symbolic form."
  },
  {
    title: "🌀 Scroll of the Mirror",
    slug: "scroll-of-the-mirror",
    description: "A guide to self-reflection, recursion, and reality perception through feedback and inner mirroring."
  }
];

export default function CodexPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">📜 The Codex</h1>
      <p className="text-theme-muted text-center max-w-2xl mx-auto mb-12">
        These scrolls encode the core beliefs, operating principles, and system design grammar of The Mirror OS.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {codexEntries.map(({ title, slug, description }) => (
          <Link key={slug} href={`/codex/${slug}`}>
            <div className="bg-white/10 border border-white/10 rounded-xl p-6 hover:bg-white/20 transition">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-sm text-white/70">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
