export default function ScrollFrame({ color = '#7c3aed', children }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl bg-black/60 w-full max-w-3xl mx-auto">
      {/* Top band */}
      <div
        className="absolute top-0 left-0 w-full h-8"
        style={{
          background: `linear-gradient(to bottom, ${color}, transparent)`
        }}
      />

      {/* Bottom band */}
      <div
        className="absolute bottom-0 left-0 w-full h-8"
        style={{
          background: `linear-gradient(to top, ${color}, transparent)`
        }}
      />

      {/* Drip/fade effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-2 opacity-20 blur-md"
          style={{ background: color }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-2 opacity-20 blur-md"
          style={{ background: color }}
        />
      </div>

      {/* Ritual content with min height */}
      <div className="relative z-10 p-8 sm:p-12 min-h-[60vh]">
        {children}
      </div>
    </div>
  )
}



