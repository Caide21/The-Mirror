import dynamic from "next/dynamic";

// Skip Layout and Nav for 3D page
const ThreeScene = dynamic(() => import("../components/LandingWorld"), { ssr: false });

export default function Codex() {
  return (
    <main className="fixed inset-0 bg-black overflow-hidden z-50">
      <ThreeScene />
    </main>
  );
}

Codex.getLayout = function PageLayout(page) {
  return page;
};