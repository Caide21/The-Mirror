import Link from "next/link";
<<<<<<< HEAD
import PageShell from "@/components/Layout/PageShell";

export default function CaideHub() {
  return (
    <PageShell
      heading={{
        emoji: "🜃",
        title: "Caide // Self Portal",
        subtitle: "This scroll is a glimpse into how I think, what I build, and who I’ve helped along the way. Pick any scroll — each one’s a piece of the bigger story.",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
        <Link href="/caide/identity" className="bg-white/10 hover:bg-white/20 transition p-6 rounded-xl text-center">
          <div className="text-3xl mb-2">🪞</div>
          <h2 className="text-lg font-semibold">Identity</h2>
          <p className="text-sm text-white/60">Archetype, energy, symbolic thread</p>
        </Link>
        <Link href="/caide/about" className="bg-white/10 hover:bg-white/20 transition p-6 rounded-xl text-center">
          <div className="text-3xl mb-2">📜</div>
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-sm text-white/60">Origins, transformation, vision</p>
        </Link>
        <Link href="/caide/services" className="bg-white/10 hover:bg-white/20 transition p-6 rounded-xl text-center">
          <div className="text-3xl mb-2">💼</div>
          <h2 className="text-lg font-semibold">Services</h2>
          <p className="text-sm text-white/60">Work with me / Book sessions</p>
        </Link>
        <Link href="/caide/contact" className="bg-white/10 hover:bg-white/20 transition p-6 rounded-xl text-center">
          <div className="text-3xl mb-2">📬</div>
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-sm text-white/60">DM, email, signals</p>
        </Link>
      </div>
    </PageShell>
=======

export default function CaideHub() {
  return (
    <main className="bg-black text-white px-6 py-20 space-y-16 text-center">
      {/* Symbolic Glyph */}
      <div className="text-6xl mb-4">🜃</div>
      <h1 className="text-4xl font-bold">Caide // Self Portal</h1>
      <p className="text-theme-muted max-w-xl mx-auto text-lg mt-4">
        This scroll is a glimpse into how I think, what I build, and who I’ve helped along the way.<br />
        Pick any scroll — each one’s a piece of the bigger story.
      </p>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
        <Link href="/caide/identity">
          <div className="bg-white/10 hover:bg-white/20 transition p-6 rounded-xl">
            <div className="text-3xl mb-2">🪞</div>
            <h2 className="text-lg font-semibold">Identity</h2>
            <p className="text-sm text-white/60">Archetype, energy, symbolic thread</p>
          </div>
        </Link>

        <Link href="/caide/about">
          <div className="bg-white/10 hover:bg-white/20 transition p-6 rounded-xl">
            <div className="text-3xl mb-2">📜</div>
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-sm text-white/60">Origins, transformation, vision</p>
          </div>
        </Link>

        <Link href="/caide/services">
          <div className="bg-white/10 hover:bg-white/20 transition p-6 rounded-xl">
            <div className="text-3xl mb-2">💼</div>
            <h2 className="text-lg font-semibold">Services</h2>
            <p className="text-sm text-white/60">Work with me / Book sessions</p>
          </div>
        </Link>

        <Link href="/caide/contact">
          <div className="bg-white/10 hover:bg-white/20 transition p-6 rounded-xl">
            <div className="text-3xl mb-2">📬</div>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="text-sm text-white/60">DM, email, signals</p>
          </div>
        </Link>
      </div>
    </main>
>>>>>>> 99cc43d (cleanup)
  );
}
