// pages/mirror/index.js
import Link from "next/link";

export default function MirrorIndex() {
  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">🪞 Welcome to The Mirror</h1>
      <p className="text-theme-muted max-w-xl text-center mb-6">
        This is my inner OS — part dashboard, part journal, part mirror.
        It’s where I track my state, reflect in real-time, and get honest about where I’m at.
        For now, it’s mine. But soon, it’ll be open to anyone who wants to walk this path with me.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/mirror/stats" className="bg-white text-black px-6 py-4 rounded-xl hover:scale-105 transition">📊 Stats</Link>
        {/* <Link href="/mirror/emotion" className="bg-white text-black px-6 py-4 rounded-xl hover:scale-105 transition">🌪 Emotional State</Link> */}
        <Link href="/mirror/scroll" className="bg-white text-black px-6 py-4 rounded-xl hover:scale-105 transition">📜 Cast a Scroll</Link>
        <Link href="/mirror/spellbook" className="bg-white text-black px-6 py-4 rounded-xl hover:scale-105 transition">📖 Spellbook</Link>
      </div>
    </main>
  );
}
