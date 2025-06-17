import React from 'react';
import Link from 'next/link';

export default function Work() {
  return (
    <main className="bg-black text-white px-6 py-16 font-sans min-h-screen">
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <div className="text-4xl">🧱</div>
        <h1 className="text-3xl font-bold">Case Scrolls</h1>
        <p className="text-theme-muted text-lg">
          These are not just projects — they are symbolic artifacts.
          Each scroll tells a story of systems built with soul.
        </p>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Project 1 */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
          <h2 className="text-xl font-semibold mb-2">🌀 NexMind Interface</h2>
          <p className="text-sm text-theme-muted">
            A modular symbolic framework for cognitive mirrors. Scroll-driven UX. Tailwind + AI-enhanced architecture.
          </p>
          <a href="https://github.com/Caide21/ProjectAether" className="text-purple-400 underline mt-2 inline-block" target="_blank" rel="noopener noreferrer">
            View Repo →
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
          <h2 className="text-xl font-semibold mb-2">🌌 3D Scroll Corridor</h2>
          <p className="text-sm text-theme-muted">
            A fully spatial landing page experience. DOM + R3F hybrid. Scrolls, fog, and floating rituals in a corridor of resonance.
          </p>
          <a href="/codex" className="text-purple-400 underline mt-2 inline-block">
            Enter Corridor →
          </a>
        </div>

        {/* Project 3 (placeholder) */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
          <h2 className="text-xl font-semibold mb-2">🔮 Resonance Engine</h2>
          <p className="text-sm text-theme-muted">
            In progress: a live reflection tool that reads emotion and mirrors user states through symbolic UI effects.
          </p>
          <span className="text-white/50 italic text-sm">Coming soon...</span>
        </div>

        {/* Project 4 (optional) */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
          <h2 className="text-xl font-semibold mb-2">🛠 Freelance Portal</h2>
          <p className="text-sm text-theme-muted">
            This very site — modular, expressive, symbolic. Tailored to invite resonance-aligned collaborators.
          </p>
            <Link href="/" className="text-purple-400 underline mt-2 inline-block">
              View Landing →
            </Link>
        </div>
      </section>
    </main>
  );
}