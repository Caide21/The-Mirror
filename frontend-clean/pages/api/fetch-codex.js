import { fetchPageByTitle } from '@/lib/notion.js'

export default async function handler(req, res) {
  const { title } = req.query

  try {
    const page = await fetchPageByTitle(title)
    res.status(200).json(page)
  } catch (err) {
    res.status(404).send('Not found')
  }
}
