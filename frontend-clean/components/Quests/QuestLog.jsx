import QuestCard from './QuestCard'
import ParchmentWrapper from '@/components/Layout/ParchmentWrapper'

export default function QuestLog({ quests }) {
  return (
    <div className="grid gap-4">
      {quests.map(quest => (
        <ParchmentWrapper key={quest.slug}>
          <QuestCard quest={quest} />
        </ParchmentWrapper>
      ))}
    </div>
  )
}
