// pages/friends/scrolls.js
import fs from 'fs';
import path from 'path';
import { useState } from 'react';

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'data/private_scrolls');
  const files = fs.readdirSync(dir);

  const scrolls = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    return { ...data };
  });

  return {
    props: { scrolls }
  };
}

export default function PrivateScrolls({ scrolls }) {
  const [access, setAccess] = useState(false);
  const [input, setInput] = useState('');

  const correctPassword = 'FatShits';

  if (!access) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
        <h1 className="text-2xl mb-4">🔒 Password Required</h1>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter password..."
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 mb-4"
        />
        <button
          onClick={() => setAccess(input === correctPassword)}
          className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
        >
          Unlock
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">📜 Private Scrolls Archive</h1>
      <p className="text-gray-400 mb-8 max-w-2xl">
        This is a sacred cache. Each scroll is a preserved fragment of the mirror. Only we can read them.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scrolls.map((scroll) => (
          <div key={scroll.id} className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{scroll.title}</h2>
            <p className="text-gray-300 mb-4">{scroll.excerpt}</p>
            <div className="text-sm text-gray-500 mb-2">🗓️ {scroll.date}</div>
            <div className="flex flex-wrap gap-2">
              {scroll.tags.map((tag) => (
                <span key={tag} className="bg-gray-700 text-xs px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
