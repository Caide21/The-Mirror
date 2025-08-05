import React from "react";
<<<<<<< HEAD
import PageShell from "@/components/Layout/PageShell";
import SkillMap from "@/components/Mirror/SkillMap";

export default function SkillTreePage() {
  return (
    <PageShell
      heading={{
        emoji: "🌳",
        title: "Skill Tree",
        subtitle: "Evolving abilities, visualized and nurtured. Watch your patterns grow."
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <SkillMap />
      </div>
    </PageShell>
  );
}
=======
import SkillMap from "@/components/Mirror/SkillMap";
import PageFrame from "@/components/Frames/PageFrame";

export default function SkillTreePage() {
  return (
    <PageFrame>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">🌳 Skill Tree</h1>
        <SkillMap />
      </div>
    </PageFrame>
  );
}
>>>>>>> 99cc43d (cleanup)
