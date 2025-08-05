<<<<<<< HEAD
import PageShell from "@/components/Layout/PageShell";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <PageShell
      heading={{
        emoji: "🪞",
        title: "Scroll of Receipt",
        subtitle: "Your payment was successful. The signal has been received.",
      }}
    >
      <div className="text-white/80 space-y-6 text-center max-w-xl mx-auto text-sm sm:text-base px-4">
        <p className="text-white/60">
          I’ll contact you shortly to begin your session.  
          If you haven’t heard from me within 24 hours, reach out via the contact scroll.
        </p>
        <Link
          href="/caide"
          className="inline-block px-6 py-3 mt-2 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
        >
          Return to Caide
        </Link>
      </div>
    </PageShell>
=======
export default function PaymentSuccess() {
  return (
    <main className="min-h-screen px-4 sm:px-6 pt-32 pb-20 text-white bg-black text-center space-y-8">
      <div className="text-4xl sm:text-5xl">🪞</div>
      <h1 className="text-2xl sm:text-3xl font-bold">Scroll of Receipt</h1>
      <p className="text-base sm:text-lg max-w-xl mx-auto">
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
>>>>>>> 99cc43d (cleanup)
  );
}
