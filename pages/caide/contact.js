<<<<<<< HEAD
import PageShell from "@/components/Layout/PageShell";

export default function Contact() {
  return (
    <PageShell
      heading={{
        emoji: "📬",
        title: "Scroll of Contact",
        subtitle: "If you resonate with what I build — reach out. Questions, projects, or connection welcome.",
      }}
    >
      <div className="text-white/80 space-y-4 max-w-md mx-auto px-4 text-center text-sm sm:text-base">
=======
export default function Contact() {
  return (
    <main className="min-h-screen px-4 sm:px-6 pt-32 pb-20 text-white bg-black text-center space-y-8">
        <div className="text-4xl sm:text-5xl">🪞</div>
        <h1 className="text-2xl sm:text-3xl font-bold">Scroll of Contact</h1>
        <p className="text-base sm:text-lg max-w-xl mx-auto">
        If you resonate with what I build — reach out. Whether it’s questions, projects, or conversation.
      </p>
      <div className="text-white/60 space-y-2 text-sm">
>>>>>>> 99cc43d (cleanup)
        <p>Email: <a href="mailto:your@email.com" className="underline">your@email.com</a></p>
        <p>Instagram: <a href="https://instagram.com/selfware.space" className="underline">@selfware.space</a></p>
        <p>Telegram: <span className="text-white">caide_systems</span></p>
      </div>
<<<<<<< HEAD
    </PageShell>
=======
    </main>
>>>>>>> 99cc43d (cleanup)
  );
}
