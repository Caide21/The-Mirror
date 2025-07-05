export default function ModernScrollWrapper({ children }) {
  return (
    <div className="relative min-h-screen rounded-2xl overflow-hidden shadow-xl">
      {/* Fluid organic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f1f1f] to-[#111] opacity-90" />
      
      {/* Optional noise texture */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay" />

      {/* Ritual overlays */}
      {/* <FogLayer /> or <SigilOverlay /> */}

      <div className="relative z-10 p-6 sm:p-12 max-w-3xl mx-auto">
        {children}
      </div>
    </div>
  )
}
