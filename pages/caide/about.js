<<<<<<< HEAD
import PageShell from "@/components/Layout/PageShell";

export default function About() {
  return (
    <PageShell
      heading={{
        emoji: "📜",
        title: "Scroll of Origin",
        subtitle: "Systems weren’t taught to me — they were felt. This is where it all began.",
      }}
    >
      <div className="text-white/80 space-y-8 max-w-xl mx-auto px-4 text-center text-sm sm:text-base">
        <p>
          I didn’t grow up following systems. I grew up <em>feeling</em> them — the tension in a sentence, the silence between moods, the weird little glitches in how people connect.
        </p>
        <p className="text-white/60">
          I was sick for a long time. Not the kind you can always explain — the kind that rewires how you experience everything.  
          That taught me to listen. To patterns. To friction. To moments that didn’t make sense but still mattered.  
          Now I build tools that actually <em>respond</em> — to how you feel, how you move, and where you're headed.
        </p>
      </div>
    </PageShell>
=======
export default function About() {
  return (
    <main className="min-h-screen px-4 sm:px-6 pt-32 pb-20 text-white bg-black text-center space-y-8">
      <div className="text-4xl sm:text-5xl">🪞</div>
      <h1 className="text-2xl sm:text-3xl font-bold">Scroll of Origin</h1>
      <p className="text-base sm:text-lg max-w-xl mx-auto">
        I didn’t grow up following systems. I grew up *feeling* them — the tension in a sentence, the silence between moods, the weird little glitches in how people connect.
      </p>
      <p className="text-white/60 text-sm max-w-md mx-auto">
        I was sick for a long time. Not the kind you can always explain — the kind that rewires how you experience everything.  
        That taught me to listen. To patterns. To friction. To moments that didn’t make sense but still mattered.  
        Now I build tools that actually *respond* — to how you feel, how you move, and where you're headed.
      </p>
    </main>
>>>>>>> 99cc43d (cleanup)
  );
}
