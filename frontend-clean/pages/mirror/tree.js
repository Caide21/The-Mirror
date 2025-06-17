import React from "react";
import SkillMap from "@/components/Control_Components/SkillMap";
import PageFrame from "@/components/Control_Components/PageFrame";

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