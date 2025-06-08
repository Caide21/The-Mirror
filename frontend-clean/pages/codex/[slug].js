import { fetchCodexPageByTitle } from '../../lib/notion.js'

export default async function handler(req, res) {
  const { title } = req.query
  if (!title) return res.status(400).send('Missing title')

  try {
    const data = await fetchCodexPageByTitle(title)
    res.status(200).json(data)
  } catch (err) {
    res.status(404).send(err.message)
  }
}
