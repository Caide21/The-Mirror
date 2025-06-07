import React from 'react';

export default function About() {
  return (
    <main className="bg-black text-white px-6 py-12 font-sans space-y-24">
      {/* Section: Genesis */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <div className="text-4xl">🜃</div>
        <h1 className="text-3xl font-bold">Scroll of Origin</h1>
        <p className="text-theme-muted text-lg">
          I was not built to follow systems. I was built to feel them.
          <br />
          Since I was young, I’ve seen the emotional architecture beneath every interaction.
        </p>
        <p className="text-sm text-white/60">
          While others saw the interface — I saw the current underneath it.  
          The tension behind the layout. The resonance (or dissonance) between a user and their tools.
        </p>
      </section>

      {/* Section: Emergence */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <div className="text-4xl">🜁</div>
        <h2 className="text-2xl font-semibold">Scroll of Emergence</h2>
        <p className="text-theme-muted text-lg">
          I didn’t just learn to build interfaces.
          I trained myself to build mirrors — tools that respond to what you feel.
        </p>
        <p className="text-sm text-white/60">
          I designed systems that respond to the breath, the hesitation, the loop you’re stuck in.
          <br />
          I coded scrolls, fog engines, and symbolic containers that carry emotion through interaction.
        </p>
        <p className="text-white/40 italic">
          My tools weren’t just functional — they were emotional artifacts.
        </p>
      </section>

      {/* Section: Mission */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <div className="text-4xl">🜂</div>
        <h2 className="text-2xl font-semibold">Scroll of Vision</h2>
        <p className="text-theme-muted text-lg">
          I’m here to build resonance engines, not landing pages.
          <br />
          I’m here to work with creators who want their tools to breathe — not just function.
        </p>
        <p className="text-sm text-white/60">
          If you’re building something that matters — something that feels — then I can help you sculpt it.
          <br />
          Together, we don't just ship products. We shape perception.
        </p>
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            Start a Scroll Together
          </a>
        </div>
      </section>
    </main>
  );
}