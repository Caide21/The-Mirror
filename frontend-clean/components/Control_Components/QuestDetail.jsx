import QuestCard from './QuestCard';

export default function QuestLog({ quests }) {
  return (
    <div className="grid gap-4">
      {quests.map((quest) => (
        <QuestCard key={quest.slug} quest={quest} />
      ))}
    </div>
  );
}