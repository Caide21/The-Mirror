import dynamic from "next/dynamic";
import React from "react";
import mapData from "@/data/map.json";

const Map = dynamic(() => import("@/components/Control_Components/Map"), {
  ssr: false
});

const MapPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 pt-24 pb-12">
      <h1 className="text-3xl font-bold mb-6">🧭 The Mirror Map: Drugs</h1>
      <Map data={mapData} />
    </div>
  );
};

export default MapPage;
