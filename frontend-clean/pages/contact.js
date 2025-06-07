import React from 'react';

export default function Contact() {
  return (
    <main className="bg-black text-white px-6 py-16 font-sans min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6 max-w-xl">
        <div className="text-4xl">📩</div>
        <h1 className="text-3xl font-bold">Start a Scroll</h1>
        <p className="text-theme-muted text-lg">
          If you resonate with what I build, let's begin a conversation.  
          Tell me what you’re creating — or what you want to feel.
        </p>
      </div>

      <form className="mt-10 w-full max-w-xl space-y-6">
        <div>
          <label className="block text-sm mb-1" htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="You are..."
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Where can I reach you?"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1" htmlFor="message">Message / What are you building?</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Speak your intent..."
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
        >
          Cast the Scroll
        </button>
      </form>
    </main>
  );
}