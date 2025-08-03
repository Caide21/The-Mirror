export default function Services() {
  const handlePaystack = async () => {
    const res = await fetch('/api/create-paystack-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'test@example.com' // Replace with real user email or form later
      })
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Failed to create payment session.');
    }
  };

  return (
    <main className="min-h-screen px-6 py-20 text-white bg-black text-center space-y-12">
      <div className="text-5xl">💼</div>
      <h1 className="text-3xl font-bold">Scroll of Services</h1>
      <p className="text-theme-muted text-lg max-w-xl mx-auto">
        I offer tailored AI sessions — guiding you through GPT, Notion or symbolic system design.
      </p>

      <section className="max-w-md mx-auto space-y-4">
        <h2 className="text-xl font-semibold">🧠 1-Hour AI Session — R250</h2>
        <p className="text-white/60 text-sm">
          For students, creators, or founders. I’ll help you automate, architect, or clarify your system — from scratch or stuck.
        </p>
        <button
          onClick={handlePaystack}
          className="mt-2 inline-block px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
        >
          Pay with Paystack – R250
        </button>
      </section>
    </main>
  );
}
