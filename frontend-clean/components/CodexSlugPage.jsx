import BlockRenderer from "@/components/Control_Components/BlockRenderer";


export default function CodexSlugPage({ page }) {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center items-start p-6 sm:p-12">
      <div className="w-full max-w-3xl bg-black/50 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 sm:p-12 shadow-lg relative overflow-hidden">

        {/* Subtle purple outer glow */}
        <div className="absolute inset-0 rounded-2xl border border-purple-500/20 pointer-events-none" />
        <div className="absolute -inset-2 rounded-3xl bg-purple-600 opacity-10 blur-2xl pointer-events-none" />

        <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
        <BlockRenderer blocks={page.blocks} />
      </div>
    </main>
  );
}
