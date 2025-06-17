import React from "react";
import StatMap from "@/components/Control_Components/StatMap";
import PageFrame from "@/components/Control_Components/PageFrame";

export default function StatsPage() {
  return (
    <PageFrame>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">🪞 The Mirror: Stat Sheet</h1>
        <StatMap />
      </div>
    </PageFrame>
  );
}
