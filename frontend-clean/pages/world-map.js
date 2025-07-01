import React from 'react';
import Link from 'next/link';
import scrolls from '../data/human-scrolls/human-scrolls-meta.json';

export default function WorldMapPage() {
  return (
    <div className="min-h-screen p-6 bg-zinc-950 text-white">
      <h1 className="text-4xl font-bold mb-4">🗺️ World Map</h1>
      <p className="mb-6 text-zinc-400">Explore the core Scrolls of the Human OS. Each scroll reflects a fundamental truth, a trial, and a transformation.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scrolls.map((scroll) => (
          <Link href={`/scrolls/${scroll.slug}`} key={scroll.id}>
            <div className="p-4 rounded-xl shadow-md bg-zinc-900 hover:bg-zinc-800 transition cursor-pointer">
              <div className="text-3xl">{scroll.icon}</div>
              <h2 className="text-xl font-semibold mt-2">{scroll.title}</h2>
              <p className="text-sm text-zinc-400 mt-1">{scroll.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}