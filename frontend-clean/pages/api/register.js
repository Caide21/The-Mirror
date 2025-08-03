import { supabase } from "@/lib/supabase";
import { sendConfirmationEmail } from "@/lib/sendConfirmation";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, role, focusAreas, project, time } = JSON.parse(req.body);

  const { error } = await supabase.from("registrations").insert({
    name,
    email,
    role,
    focus_areas: focusAreas,
    project,
    preferred_time: time
  });

  if (error) {
    console.error("❌ Supabase Error:", error);
    return res.status(500).json({ error: "Failed to register" });
  }

  try {
    await sendConfirmationEmail({ name, email, role, focusAreas, time });
  } catch (err) {
    console.error("Email error:", err); // Still succeed even if email fails
  }

  res.status(200).json({ message: "Registration successful" });
}
