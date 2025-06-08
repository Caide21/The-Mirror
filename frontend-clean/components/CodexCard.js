export default function CodexCard({ title, emoji, tags, content, updated }) {
    return (
      <div className="rounded-2xl p-4 shadow-lg border border-neutral-700 bg-gradient-to-b from-zinc-900 to-black hover:shadow-2xl hover:shadow-purple-600/40 transition-all">
        <div className="text-3xl mb-2">{emoji}</div>
        <h2 className="text-xl font-bold text-center mb-1">{title}</h2>
        <p className="text-sm text-gray-400 mb-3">{content}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-right text-neutral-500 mt-3">Last updated: {new Date(updated).toLocaleDateString()}</p>
      </div>
    )
  }
  