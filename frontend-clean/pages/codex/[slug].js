import { fetchCodexPageByTitle } from '../../lib/notion.js'
import SmartRenderer from '../../components/SmartRenderer.jsx'

export default function CodexSlugPage({ page }) {
  if (!page) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="theme-card border border-red-500 text-red-400 rounded-xl p-4">
          ❌ Page not found or not readable.
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <SmartRenderer
        title={page.title}
        updated={page.updated}
        content={page.content}
      />
    </main>
  )
}

export async function getServerSideProps(context) {
  const title = decodeURIComponent(context.params.slug)

  try {
    const page = await fetchCodexPageByTitle(title)
    return { props: { page } }
  } catch (error) {
    console.warn(`❌ Page "${title}" not found:`, error.message)
    return { props: { page: null } }
  }
}
