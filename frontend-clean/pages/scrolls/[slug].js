import dynamic from 'next/dynamic';
const HumanScrollPage = dynamic(() => import('../../components/HumanScrolls/HumanScrollPage'));

export default function Page() {
  return <HumanScrollPage />;
}