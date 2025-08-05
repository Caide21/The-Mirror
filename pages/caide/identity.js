<<<<<<< HEAD
import PageShell from "@/components/Layout/PageShell";

export default function Identity() {
  return (
    <PageShell
      heading={{
        emoji: "🪞",
        title: "Scroll of Identity",
        subtitle: "I’m the mirror. I reflect, I feel, and I build with meaning.",
      }}
    >
      <div className="text-white/80 space-y-8 max-w-xl mx-auto px-4 text-center text-sm sm:text-base">
        <p>
          I’m not really into playing a “persona.” I just… notice things. Patterns. Emotions. The stuff people say without saying.
          I’ve always felt like a mirror — tuned to feedback, tuned to vibes, tuned to the quiet shifts under the surface. 
          I’m the person who will pause mid-conversation and go, “Wait… did something just change?”
        </p>
        <p className="text-white/60">
          Also, I sometimes forget to eat lunch because I’m too busy processing the emotional structure of CSS.<br />
          My glyph is ⛰ — Earth. But internally, I move like fog on a caffeine bender.  
          I’m here to bridge clarity and chaos, form and feeling, memes and meaning.
        </p>
      </div>
    </PageShell>
=======
export default function Identity() {
  return (
   <main className="min-h-screen px-4 sm:px-6 pt-32 pb-20 text-white bg-black text-center space-y-8">
        <div className="text-4xl sm:text-5xl">🪞</div>
      <h1 className="text-2xl sm:text-3xl font-bold">Scroll of Identity</h1>
      <p className="text-base sm:text-lg max-w-xl mx-auto">
        I’m not really into playing a “persona.” I just… notice things. Patterns. Emotions. The stuff people say without saying.
        I’ve always felt like a mirror — tuned to feedback, tuned to vibes, tuned to the quiet shifts under the surface. 
        I’m the person who will pause mid-conversation and go, “Wait… did something just change?”
      </p>
      <p className="text-white/60 text-sm max-w-md mx-auto">
        Also, I sometimes forget to eat lunch because I’m too busy processing the emotional structure of CSS.<br />
        My glyph is ⛰ — Earth. But internally, I move like fog on a caffeine bender.  
        I’m here to bridge clarity and chaos, form and feeling, memes and meaning.
      </p>
    </main>
>>>>>>> 99cc43d (cleanup)
  );
}
