import Link from "next/link";

// Clean, symbolic card layout
const ScrollCard = ({ emoji, title, description }) => (
  <div className="theme-card p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition text-left shadow-xl backdrop-blur-sm border border-white/10">
    <div className="text-4xl mb-3">{emoji}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-theme-muted text-sm">{description}</p>
  </div>
);

export default function Home() {
  return (
    <main className="bg-black text-white font-sans overflow-x-hidden">
     <section className="min-h-screen pt-32 sm:pt-40 flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-[#0c0a1e] to-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none animate-pulse bg-gradient-radial from-indigo-950/10 via-purple-900/10 to-transparent blur-3xl" />
        <div className="z-10">
          <div className="text-6xl mb-6">🜔</div>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Welcome to the Mirror</h1>
          <p className="text-lg max-w-xl mx-auto text-theme-muted">
            A symbolic OS for self-reflection, growth, and emotional evolution. Built to feel.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full items-center justify-center">
            <Link
              href="/mirror/scroll"
              className="bg-white text-black text-sm sm:text-base px-6 py-3 rounded-2xl shadow-xl hover:scale-105 transition w-full sm:w-auto text-center"
            >
              Experience the Scroll
            </Link>

            <Link
              href="/codex"
              className="border border-white text-sm sm:text-base px-6 py-3 rounded-2xl hover:bg-white/10 transition w-full sm:w-auto text-center"
            >
              Enter the Codex
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll Gallery */}
      <section className="py-20 bg-black px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">⚡ System Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollCard emoji="🪞" title="The Mirror" description="Track stats, reflect emotions, view internal state." />
          <ScrollCard emoji="📜" title="The Codex" description="Beliefs, rituals, scrolls, and grammar of this OS." />
          <ScrollCard emoji="🌳" title="Skill Tree" description="Your evolving abilities, visualized and nurtured." />
          <ScrollCard emoji="🌫️" title="Fog Engine" description="Emotional resonance layers that breathe with you." />
          <ScrollCard emoji="🧬" title="Caide" description="The story, skillset, and evolution of the creator." />
          <ScrollCard emoji="🤝" title="Join" description="Collaborate, align, or connect with the movement." />
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0c0a1e] px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">Who Is This For?</h2>
        <p className="text-theme-muted max-w-2xl mx-auto mb-10">
          For the ones who feel deeply.<br />
          For those who think in symbols and evolve in loops.<br />
          For the builders of inner systems and outer worlds.
        </p>
        <div className="text-2xl italic text-white/80 mb-2">You are the interface. This is your mirror.</div>
        <div className="text-sm text-white/40">(Still unfolding. Built in real-time. You’re early — that matters.)</div>
      </section>
    </main>
  );
}
