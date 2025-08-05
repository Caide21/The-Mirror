import dynamic from "next/dynamic";
<<<<<<< HEAD
import PageShell from "@/components/Layout/PageShell";
=======
import React from "react";
>>>>>>> 99cc43d (cleanup)
import mapData from "@/data/map.json";

const Map = dynamic(() => import("@/components/Containers/MapContainer"), {
  ssr: false
});

<<<<<<< HEAD
export default function MapPage() {
  return (
    <PageShell
      heading={{
        emoji: "🧭",
        title: "The Mirror Map: Drugs",
        subtitle: "Navigate the symbolic terrain of experimentation and meaning."
      }}
    >
      <div className="mt-10">
        <Map data={mapData} />
      </div>
    </PageShell>
  );
}
=======
const MapPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 pt-24 pb-12">
      <h1 className="text-3xl font-bold mb-6">🧭 The Mirror Map: Drugs</h1>
      <Map data={mapData} />
    </div>
  );
};

export default MapPage;
>>>>>>> 99cc43d (cleanup)
