import React from "react";
import RitualMap from "@/components/Control_Components/RitualMap";
import PageFrame from "@/components/Control_Components/PageFrame";

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