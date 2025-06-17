import React from 'react';

// Placeholder ScrollCard component
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
      {/* Section 1: Portal Threshold */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-[#0c0a1e] to-black relative overflow-hidden snap-start">
        <div className="absolute inset-0 pointer-events-none animate-pulse bg-gradient-radial from-indigo-950/10 via-purple-900/10 to-transparent blur-3xl"></div>
        <div className="z-10 transition-opacity duration-1000">
          <div className="text-6xl mb-6 animate-fadeIn">🜔</div>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">I Build Interfaces That Feel</h1>
          <p className="text-lg max-w-xl mx-auto text-theme-muted">
            Emotion-reactive design, symbolic systems, and interfaces that mirror the user.
          </p>
          <div className="mt-8 space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-2xl shadow-xl hover:scale-105 transition">Experience the Scroll</button>
            <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white/10 transition">Work With Me</button>
          </div>
        </div>
      </section>

      {/* Section 2: Visual Scroll Gallery */}
      <section className="py-20 bg-black text-white px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">⚡ Interfaces With Soul</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollCard emoji="🌀" title="Dynamic Fog UI" description="Breath-reactive visuals that shift based on presence." />
          <ScrollCard emoji="🧠" title="Mirror Logic" description="Each scroll reflects your intent — not just your click." />
          <ScrollCard emoji="🌌" title="Symbolic UX" description="Sigils, rituals, and subtle enchantments — not decoration, but design." />
          <ScrollCard emoji="🎛️" title="Precision Styling" description="TailwindCSS, motion control, and dopamine-aligned UX." />
          <ScrollCard emoji="🫀" title="Emotional Resonance" description="Components that mirror tension, curiosity, or clarity." />
          <ScrollCard emoji="🔮" title="Feeling-Based Flow" description="Guided movement through emotional states, not just screens." />
        </div>
      </section>

      {/* Section 3: Who Is This For */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0c0a1e] px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">Who Is This For?</h2>
        <p className="text-theme-muted max-w-2xl mx-auto mb-10">
          For the builders who feel too much.<br />
          For the visionaries who think in loops.<br />
          For the ones who never fit the UI they were given.
        </p>
        <div className="text-2xl italic text-white/80">Inject yourself. See what emerges.</div>
      </section>

      {/* Section 4: Work With Me */}
      <section className="py-20 bg-black text-white px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">Services</h2>
        <p className="text-theme-muted max-w-2xl mx-auto mb-10">
          I specialize in creating emotion-driven web experiences that resonate with your users. Not just pretty — precise.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <ScrollCard emoji="💻" title="Web Design" description="Modern, symbolic, responsive." />
          <ScrollCard emoji="🔁" title="Emotional UI Systems" description="Designs that mirror your users." />
          <ScrollCard emoji="🧬" title="AI Integration" description="Reflection engines, fog logic, state-aware feedback." />
        </div>
        <button className="mt-12 px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-105 transition">
          Contact Me
        </button>
      </section>
    </main>
  );
}