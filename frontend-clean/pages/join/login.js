// pages/join/login.js
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setError("Login failed. Check your credentials.");
      return;
    }

    // ✅ Redirect after login
    router.push("/caide/clients");
  };

  return (
    <main className="bg-black text-white px-6 py-16 min-h-screen flex flex-col items-center justify-center font-sans">
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-4">
          <div className="text-3xl">🔐</div>
          <h1 className="text-2xl font-bold">Caide Access Portal</h1>
          <p className="text-theme-muted text-sm">
            Enter your credentials to access The Mirror backend.
          </p>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white"
        />

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
        >
          Enter the Mirror
        </button>
      </form>
    </main>
  );
}
