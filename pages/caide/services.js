import { useState } from "react";
<<<<<<< HEAD
import PageShell from "@/components/Layout/PageShell";
import RegistrationModal from "@/components/Modals/RegistrationModal";
=======
import RegistrationModal from "@/components/Modals/RegistrationModal";
import PageHeading from "@/components/Layout/PageHeading";
import PageWrapper from "@/components/Layout/PageWrapper";
>>>>>>> 99cc43d (cleanup)

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sessionType, setSessionType] = useState("single");

  const handleFormSubmit = async (formData) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ ...formData, sessionType }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Registration failed");

<<<<<<< HEAD
=======
      // Redirect to appropriate Cal.com link
>>>>>>> 99cc43d (cleanup)
      const calURL =
        sessionType === "package"
          ? "https://cal.com/caide-taylor/selfware-companion-series"
          : "https://cal.com/caide-taylor/selfware-ai-session";

      window.location.href = calURL;
    } catch (err) {
      console.error("Registration error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
<<<<<<< HEAD
    <PageShell
      heading={{
        emoji: "💼",
        title: "Services",
        subtitle: "Tailored AI sessions to help you automate, clarify, and evolve using GPT, Notion, and symbolic design.",
      }}
    >
      <div className="grid gap-8 max-w-3xl mx-auto sm:grid-cols-2 px-4">
        <div className="bg-white/10 px-6 py-6 rounded-xl">
          <p className="text-xl font-semibold mb-2">🧠 Single Session — R250</p>
          <p className="text-sm mb-4 text-gray-300">
            A one-off AI consulting session to help you automate, clarify, or build — fast.
          </p>
          <button
            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
            onClick={() => {
              setSessionType("single");
              setModalOpen(true);
            }}
          >
            Book 1 Session
          </button>
        </div>

        <div className="bg-white/10 px-6 py-6 rounded-xl">
          <p className="text-xl font-semibold mb-2">🌀 Selfware Companion Series — R2250</p>
          <p className="text-sm mb-4 text-gray-300">
            10-session pack to go deep — building systems, aligning with tools, and evolving how you think.  
            <br />
            (R225/session — R250 discount)
          </p>
          <button
            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
            onClick={() => {
              setSessionType("package");
              setModalOpen(true);
            }}
          >
            Book 10 Sessions
          </button>
        </div>
      </div>

      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </PageShell>
=======
    <PageWrapper>
      <main className="bg-black text-white min-h-screen text-center pt-32 pb-24 px-4 sm:px-6">
        <PageHeading emoji="💼" title="Services" />

        <p className="mb-10 max-w-xl mx-auto text-theme-muted">
          I offer tailored AI sessions — guiding you through GPT, Notion, or symbolic system design.  
        </p>

        <div className="grid gap-8 max-w-3xl mx-auto sm:grid-cols-2">
          {/* Single Session */}
          <div className="bg-white/10 px-6 py-6 rounded-xl">
            <p className="text-xl font-semibold mb-2">🧠 Single Session — R250</p>
            <p className="text-sm mb-4 text-gray-300">
              A one-off AI consulting session to help you automate, clarify, or build — fast.
            </p>
            <button
              className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
              onClick={() => {
                setSessionType("single");
                setModalOpen(true);
              }}
            >
              Book 1 Session
            </button>
          </div>

          {/* 10-Session Pack */}
          <div className="bg-white/10 px-6 py-6 rounded-xl">
            <p className="text-xl font-semibold mb-2">🌀 Selfware Companion Series — R2250</p>
            <p className="text-sm mb-4 text-gray-300">
              10-session pack to go deep — building systems, aligning with tools, and evolving how you think.  
              <br />
              (R225/session — R250 discount)
            </p>
            <button
              className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
              onClick={() => {
                setSessionType("package");
                setModalOpen(true);
              }}
            >
              Book 10 Sessions
            </button>
          </div>
        </div>

        <RegistrationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleFormSubmit}
        />
      </main>
    </PageWrapper>
>>>>>>> 99cc43d (cleanup)
  );
}
