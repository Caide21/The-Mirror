import { useState } from 'react'
import { fetchCodexPageByTitle } from '../lib/notion.js'

export default function Codex() {
  const [title, setTitle] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  async function handleFetch() {
    setError('')
    setResult(null)
    try {
      const res = await fetch(`/api/fetch-codex?title=${encodeURIComponent(title)}`)
      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      setResult(data)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Fetch Codex Page</h1>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Enter page title (e.g. Self Systems)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleFetch}>
        Fetch Page
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {result && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold">{result.title}</h2>
          <p className="text-gray-500 text-sm">
            Last updated: {new Date(result.updated).toLocaleString()}
          </p>
          <pre className="mt-4 whitespace-pre-wrap">{result.content}</pre>
        </div>
      )}
    </div>
  )
}
