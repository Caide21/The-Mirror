import Link from 'next/link'
import ParchmentWrapper from '@/components/Layout/ParchmentWrapper'

export default function QuestCard({ quest }) {
  return (
    <ParchmentWrapper>
      <h1 className="text-2xl font-bold mb-2">{quest.title}</h1>
      <p className="mb-4">{quest.description}</p>

      <div className="bg-theme-muted h-2 rounded-full mb-4">
        <div
          className="bg-theme-success h-2 rounded-full"
          style={{ width: `${quest.progress || 0}%` }}
        />
      </div>

      <Link
        href={`/${quest.slug}`} // unified slug mirror
        className="text-theme-accent text-sm underline"
      >
        Open Quest →
      </Link>
    </ParchmentWrapper>
  )
}
