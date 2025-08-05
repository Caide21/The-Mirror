import React from "react";
<<<<<<< HEAD
import PageShell from "@/components/Layout/PageShell";
import StatMap from "@/components/Mirror/StatMap";

export default function StatsPage() {
  return (
    <PageShell
      heading={{
        emoji: "🪞",
        title: "The Mirror: Stat Sheet",
        subtitle: "Track, reflect, and measure your state in real-time."
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <StatMap />
      </div>
    </PageShell>
=======
import StatMap from "@/components/Mirror/StatMap";
import PageFrame from "@/components/Frames/PageFrame";

export default function StatsPage() {
  return (
    <PageFrame>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">🪞 The Mirror: Stat Sheet</h1>
        <StatMap />
      </div>
    </PageFrame>
>>>>>>> 99cc43d (cleanup)
  );
}
