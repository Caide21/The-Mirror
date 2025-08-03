import { useState } from "react";
import RegistrationModal from "@/components/Modals/RegistrationModal";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = async (formData) => {
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error || "Registration failed");

    // Redirect to Cal.com after registration
    window.location.href = "https://cal.com/caide-taylor/selfware-ai-session";
  } catch (err) {
    console.error("Registration error:", err);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <main className="bg-black text-white min-h-screen text-center py-16 px-4 sm:px-6">
      <h1 className="text-3xl font-bold mb-2">💼 Scroll of Services</h1>
      <p className="mb-6">I offer tailored AI sessions — guiding you through GPT, Notion or symbolic system design.</p>

      <div className="bg-white/10 px-4 sm:px-6 py-6 rounded-xl max-w-md mx-auto">
        <p className="text-xl font-semibold mb-2">🧠 1-Hour AI Session — R250</p>
        <p className="text-sm mb-4 text-gray-300">
          For students, creators, or founders. I’ll help you automate, architect, or clarify your system — from scratch or stuck.
        </p>
        <button
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
          onClick={() => setModalOpen(true)}
        >
          Register & Book — R250
        </button>
      </div>

      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </main>
  );
}
