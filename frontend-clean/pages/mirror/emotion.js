import React from "react";
import EmotionMap from "@/components/Control_Components/EmotionMap";
import PageFrame from "@/components/Control_Components/PageFrame";

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