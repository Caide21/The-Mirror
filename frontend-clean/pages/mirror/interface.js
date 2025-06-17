import React from "react";
import PageFrame from "@/components/Control_Components/PageFrame";
import Link from "next/link";

import FocusPanel from "@/components/Control_Components/FocusPanel";
import RegulationPanel from "@/components/Control_Components/RegulationPanel";
import RecentLogPanel from "@/components/Control_Components/RecentLogPanel";
import EmotionSummary from "@/components/Control_Components/EmotionSummary";
import FeaturedScrollPanel from "@/components/Control_Components/FeaturedScrollPanel";

export default function InterfacePage() {
  const nav = [
    { label: "📊 Stats", path: "/stats" },
    { label: "🌪 Emotion", path: "/emotion" },
    { label: "🌳 Tree", path: "/tree" },
    { label: "📖 Spellbook", path: "/spellbook" }
  ];

  const xpPercent = 73;

  const recentLogs = [
    "Completed emotional state tracker",
    "Uploaded current skill tree",
    "Integrated stat tracker interface"
  ];

  const emotions = [
    { symbol: "💥", name: "Frustration", intensity: 6, source: "UI loops" },
    { symbol: "🔥", name: "Drive", intensity: 8, source: "Dev sync" }
  ];

  return (
    <PageFrame>
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold mb-4">🧬 Human OS Interface</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {nav.map(({ label, path }) => (
            <Link key={path} href={path}>
              <div className="bg-black/30 border p-4 rounded-xl text-center font-semibold hover:shadow-md hover:bg-black/40 transition">
                {label}
              </div>
            </Link>
          ))}
        </div>

        <div>
          <div className="text-sm text-gray-300 mb-1 mt-4">🔁 XP Progress</div>
          <div className="w-full bg-gray-800 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: xpPercent + "%" }}
            />
          </div>
          <div className="text-xs text-right text-gray-400 mt-1">{xpPercent}%</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FocusPanel focus="Stat Tracker Polishing" />
          <RegulationPanel />
          <EmotionSummary emotions={emotions} />
          <RecentLogPanel logs={recentLogs} />
        </div>

        <div className="pt-2">
          <FeaturedScrollPanel title="📜 Scroll of Emotional Clarity" />
        </div>
      </div>
    </PageFrame>
  );
}