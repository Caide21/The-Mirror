import ScrollFrame from '@/components/Frames/ScrollFrame'
import BlockRenderer from '@/components/BlockRenderer'
import { SYMBOLIC_COLORS } from '@/lib/colors'

export default function ScrollPage({ title, blocks }) {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <ScrollFrame color={SYMBOLIC_COLORS.Scroll.base}>
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <BlockRenderer blocks={blocks} />
      </ScrollFrame>
    </main>
  )
}
