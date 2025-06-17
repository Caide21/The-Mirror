import React from "react";

export default function SkillCard({ skill }) {
  return (
    <div className="rounded-xl border bg-black/20 p-4 shadow hover:shadow-lg transition-all space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{skill.label}</h3>
        <span className="text-xs text-gray-400">Tier {skill.tier}</span>
      </div>
      {skill.prerequisites.length > 0 && (
        <div className="text-xs text-yellow-400">
          <strong>Requires:</strong> {skill.prerequisites.join(", ")}
        </div>
      )}
      <div className="text-xs text-blue-300">
        <strong>Stats:</strong> {skill.linkedStats.join(", ")}
      </div>
      <div className="text-sm text-gray-300 italic">{skill.description}</div>
    </div>
  );
}