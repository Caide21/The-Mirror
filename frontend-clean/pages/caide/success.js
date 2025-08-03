export default function PaymentSuccess() {
  return (
    <main className="min-h-screen px-6 py-20 text-white bg-black text-center space-y-8">
      <div className="text-5xl">💠</div>
      <h1 className="text-3xl font-bold">Scroll of Receipt</h1>
      <p className="text-theme-muted text-lg max-w-xl mx-auto">
        Your payment was successful.
        <br />
        The signal has been received.
      </p>
      <p className="text-white/60 text-sm">
        I’ll contact you shortly to begin your session. If you haven’t heard from me within 24 hours, reach out via the contact scroll.
      </p>
      <a
        href="/caide"
        className="inline-block px-6 py-3 mt-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
      >
        Return to Caide
      </a>
    </main>
  );
}
