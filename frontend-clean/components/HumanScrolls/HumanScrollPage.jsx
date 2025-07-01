import React from 'react';
import { useRouter } from 'next/router';
import scrolls from '../../data/human-scrolls/human-scrolls-meta.json';

export default function HumanScrollPage() {
  const router = useRouter();
  const { slug } = router.query;
  const scroll = scrolls.find(s => s.slug === slug);

  if (!scroll) return <div>Scroll not found</div>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-2">{scroll.title}</h1>
      <div className="text-2xl mb-4">{scroll.icon}</div>
      <p>{scroll.description}</p>
    </div>
  );
}