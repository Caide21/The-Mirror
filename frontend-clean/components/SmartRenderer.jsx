import React from 'react'
import ScrollCard from './Control_Components/ScrollCard.jsx'
import CodexCard from './Control_Components/CodexCard.jsx'

export default function SmartRenderer({ title, updated, content, type }) {
  const normalizedType = type === 'Lexicon' ? 'Codex' : type

  if (normalizedType === 'Scroll') {
    return (
      <ScrollCard
        emoji="📜"
        title={title}
        description={content}
      />
    )
  }

  if (normalizedType === 'Codex') {
    return (
      <CodexCard
        title={title}
        updated={updated}
        content={content}
      />
    )
  }

  return (
    <div className="theme-card bg-black text-white rounded-xl p-6 space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-xs theme-muted">{new Date(updated).toLocaleString()}</p>
      <pre className="whitespace-pre-wrap theme-muted text-sm">{content}</pre>
    </div>
  )
}
