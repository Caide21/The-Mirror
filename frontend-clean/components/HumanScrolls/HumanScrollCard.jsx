import React from 'react';

export default function HumanScrollCard({ title, icon, summary }) {
  return (
    <div className="p-4 rounded-xl shadow-lg bg-zinc-900 text-white hover:bg-zinc-800 transition">
      <div className="text-3xl">{icon}</div>
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-sm text-zinc-300 mt-1">{summary}</p>
    </div>
  );
}