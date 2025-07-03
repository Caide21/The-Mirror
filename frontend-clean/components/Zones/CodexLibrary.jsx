import React from "react";
import GlyphTree from "../Enchantment_Components/GlyphTree";

export default function CodexLibrary({ entries, position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <GlyphTree entries={entries} />
    </group>
  );
}
