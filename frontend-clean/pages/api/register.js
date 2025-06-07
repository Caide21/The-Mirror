
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username } = req.body;
    if (!username || typeof username !== 'string') {
      return res.status(400).json({ error: 'Invalid username' });
    }

    const filePath = path.join(process.cwd(), 'data', 'users.json');
    let users = [];

    try {
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath);
        users = JSON.parse(fileData);
      }
    } catch (err) {
      console.error('Failed to read users.json:', err);
      return res.status(500).json({ error: 'Failed to read user data' });
    }

    if (!users.includes(username)) {
      users.push(username);
      try {
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
      } catch (err) {
        console.error('Failed to write users.json:', err);
        return res.status(500).json({ error: 'Failed to save user' });
      }
    }

    return res.status(200).json({ message: 'User registered' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}