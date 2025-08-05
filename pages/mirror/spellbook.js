import React from "react";
<<<<<<< HEAD
import PageShell from "@/components/Layout/PageShell";
import RitualMap from "@/components/Mirror/RitualMap";

export default function SpellbookPage() {
  return (
    <PageShell
      heading={{
        emoji: "📖",
        title: "The Spellbook",
        subtitle: "Rituals, blueprints, and personal spells encoded in symbolic grammar."
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <RitualMap />
      </div>
    </PageShell>
  );
}
=======
import RitualMap from "@/components/Mirror/RitualMap";
import PageFrame from "@/components/Frames/PageFrame";

export default function SpellbookPage() {
  return (
    <PageFrame>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">📖 The Spellbook</h1>
        <RitualMap />
      </div>
    </PageFrame>
  );
}
>>>>>>> 99cc43d (cleanup)
