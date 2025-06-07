import dynamic from "next/dynamic";

const TreeRenderer = dynamic(() => import("../consciousness-tree-system/engine/TreeRenderer"), { ssr: false });

export default function TreePage() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000" }}>
      <TreeRenderer />
    </div>
  );
}
