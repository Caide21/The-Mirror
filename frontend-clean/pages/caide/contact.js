export default function Contact() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-black text-center space-y-8">
      <div className="text-5xl">📬</div>
      <h1 className="text-3xl font-bold">Scroll of Contact</h1>
      <p className="text-theme-muted text-lg max-w-xl mx-auto">
        If you resonate with what I build — reach out. Whether it’s questions, projects, or conversation.
      </p>
      <div className="text-white/60 space-y-2 text-sm">
        <p>Email: <a href="mailto:your@email.com" className="underline">your@email.com</a></p>
        <p>Instagram: <a href="https://instagram.com/selfware.space" className="underline">@selfware.space</a></p>
        <p>Telegram: <span className="text-white">caide_systems</span></p>
      </div>
    </main>
  );
}
