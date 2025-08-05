import React from "react";
<<<<<<< HEAD
import PageShell from "@/components/Layout/PageShell";
import EmotionMap from "@/components/Mirror/EmotionMap";

export default function EmotionPage() {
  return (
    <PageShell
      heading={{
        emoji: "🫀",
        title: "Emotional State Tracker",
        subtitle: "A mirror for your inner weather. Observe, don’t judge."
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <EmotionMap />
      </div>
    </PageShell>
  );
}
=======
import EmotionMap from "@/components/Mirror/EmotionMap";
import PageFrame from "@/components/Frames/PageFrame";

export default function EmotionPage() {
  return (
    <PageFrame>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">🫀 Emotional State Tracker</h1>
        <EmotionMap />
      </div>
    </PageFrame>
  );
}
>>>>>>> 99cc43d (cleanup)
