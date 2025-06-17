import React, { useState } from 'react';
import Link from 'next/link';

export default function Auth() {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      // Save locally
      localStorage.setItem('mirror_username', username);

      // Send to server for persistent storage
      try {
        await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username }),
        });
      } catch (err) {
        console.error('Error saving user to server:', err);
      }

      setSubmitted(true);
    }
  };

  return (
    <main className="bg-black text-white px-6 py-16 min-h-screen flex flex-col items-center justify-center font-sans">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
          <div className="text-center space-y-4">
            <div className="text-3xl">🪞</div>
            <h1 className="text-2xl font-bold">Enter The Mirror</h1>
            <p className="text-theme-muted text-sm">
              Choose a name to be reflected back through the scrolls.
            </p>
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose your name..."
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            Step Into Reflection
          </button>
        </form>
      ) : (
        <div className="text-center space-y-6">
          <div className="text-4xl">✨</div>
          <h2 className="text-2xl font-semibold">Welcome, {username}</h2>
          <p className="text-theme-muted">Your presence is now encoded.</p>
          <Link
            href="/"
            className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Enter the Portal
          </Link>
        </div>
      )}
    </main>
  );
}