import BlockRenderer from "@/components/BlockRenderer";

export default function ScrollCard({ title, blocks }) {
  return (
    <div className="theme-scroll-card rounded-xl p-6 space-y-3 bg-black text-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <BlockRenderer blocks={blocks} />
    </div>
  );
}
