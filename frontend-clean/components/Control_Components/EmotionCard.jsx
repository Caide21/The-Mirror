import React from "react";

export default function EmotionCard({ emotion }) {
  return (
    <div className="rounded-xl border bg-black/20 p-4 shadow hover:shadow-lg transition-all space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{emotion.symbol} {emotion.name}</h3>
        <span className="text-xs text-gray-400">Intensity: {emotion.intensity}/10</span>
      </div>
      <div className="text-sm text-gray-300">
        <strong>Source:</strong> {emotion.source}
      </div>
    </div>
  );
}