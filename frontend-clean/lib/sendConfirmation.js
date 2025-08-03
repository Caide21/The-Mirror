import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail({ name, email, role, focusAreas, time }) {
  const subject = `🧠 Your Selfware Session is Registered`;

  const html = `
    <div style="font-family: sans-serif; padding: 20px; color: #111;">
      <h2>📜 Hello ${name},</h2>
      <p>You’ve successfully registered for a <strong>1-hour AI session</strong> with <em>Selfware</em>.</p>
      <ul>
        <li><strong>Role:</strong> ${role}</li>
        <li><strong>Focus Areas:</strong> ${focusAreas.join(", ")}</li>
        <li><strong>Preferred Time:</strong> ${time}</li>
      </ul>
      <br/>
      <p>We’ll follow up shortly to confirm your session and prepare your custom portal.</p>
      <p>If you have any updates or specific requests, just reply to this email.</p>
      <br/>
      <p>— Caide & the Mirror</p>
      <p style="font-style: italic;">“From thought, to ritual, to transformation.”</p>
    </div>
  `;

  return await resend.emails.send({
    from: "Selfware <noreply@selfware.space>", // must match your verified sender
    to: email,
    subject,
    html
  });
}
