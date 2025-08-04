import Link from "next/link";
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
  );
}
