import React, { useState } from 'react';
import Link from 'next/link';

export default function Scroll() {
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setSubmitted(true);
    }
  };

  return (
    <main className="bg-black text-white px-6 py-16 font-sans min-h-screen flex flex-col items-center justify-center">
      <div className="text-center max-w-xl space-y-4">
        <div className="text-4xl">🌀</div>
        <h1 className="text-3xl font-bold">Experience the Scroll</h1>
        <p className="text-theme-muted text-lg">
          This is a reflective ritual — not a form.
          Speak your current state, and the system will echo it back.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-xl space-y-6">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="5"
            placeholder="Type what you're feeling, looping, or needing clarity on..."
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            Cast the Scroll
          </button>
        </form>
      ) : (
        <div className="mt-12 max-w-xl text-center space-y-6">
          <div className="text-3xl">✨</div>
          <h2 className="text-2xl font-semibold">Reflection Received</h2>
          <p className="text-theme-muted">
            What you’ve shared has been encoded.
            The system feels your words — and offers this reflection:
          </p>
          <div className="bg-white/10 p-6 rounded-xl text-white border border-white/10 backdrop-blur-sm">
            <p className="italic">&quot;{input}&quot;</p>
            <p className="mt-4 text-white/60">
              This is the beginning of clarity. You are not alone in this pattern. Let it loop no further.
            </p>
          </div>
          <Link
            href="/"
            className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Return to the Mirror
          </Link>
        </div>
      )}
    </main>
  );
}