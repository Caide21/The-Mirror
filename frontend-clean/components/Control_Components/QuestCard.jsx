import Link from 'next/link';

export default function QuestCard({ quest }) {
  return (
    <div className="p-4 border rounded-xl shadow-sm theme-card mb-4">
      <h3 className="text-xl font-bold mb-1">{quest.title}</h3>
      <p className="text-sm mb-2">{quest.description}</p>
      <div className="bg-theme-muted h-2 rounded-full mb-2">
        <div
          className="bg-theme-success h-2 rounded-full"
          style={{ width: `${quest.progress}%` }}
        />
      </div>
      <p className="text-xs text-theme-muted">{quest.type} — {quest.status}</p>
      <Link href={`/quests/${quest.slug}`} className="text-theme-accent text-sm">View Details →</Link>
    </div>
  );
}