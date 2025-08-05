<<<<<<< HEAD
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";
import PageShell from "@/components/Layout/PageShell";
=======
// pages/join/login.js
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";
>>>>>>> 99cc43d (cleanup)

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

<<<<<<< HEAD
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
=======
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
>>>>>>> 99cc43d (cleanup)

    if (error) {
      setError("Login failed. Check your credentials.");
      return;
    }

<<<<<<< HEAD
=======
    // ✅ Redirect after login
>>>>>>> 99cc43d (cleanup)
    router.push("/caide/clients");
  };

  return (
<<<<<<< HEAD
    <PageShell
      heading={{
        emoji: "🔐",
        title: "Caide Access Portal",
        subtitle: "Enter your credentials to access The Mirror backend."
      }}
    >
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6 mx-auto">
=======
    <main className="bg-black text-white px-6 py-16 min-h-screen flex flex-col items-center justify-center font-sans">
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-4">
          <div className="text-3xl">🔐</div>
          <h1 className="text-2xl font-bold">Caide Access Portal</h1>
          <p className="text-theme-muted text-sm">
            Enter your credentials to access The Mirror backend.
          </p>
        </div>

>>>>>>> 99cc43d (cleanup)
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
<<<<<<< HEAD
    </PageShell>
=======
    </main>
>>>>>>> 99cc43d (cleanup)
  );
}
