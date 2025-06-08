import SmartRenderer from '../components/SmartRenderer.jsx'
import { fetchPageById } from '../lib/notion.js'

export default function CodexPage({ page }) {
  if (!page) {
    return <div className="text-center p-6">Page not found.</div>
  }

  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      <SmartRenderer title={page.title} updated={page.updated} content={page.content} />
    </main>
  )
}

export async function getServerSideProps() {
  const pageId = process.env.PAGE_ID
  const page = await fetchPageById(pageId)
  return { props: { page } }
}
