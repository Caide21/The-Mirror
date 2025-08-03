import { supabase } from "@/lib/supabase";
import { sendConfirmationEmail } from "@/lib/sendConfirmation";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const {
    name,
    email,
    role,
    focusAreas,
    project,
    phone,
    address,
    vat_number
  } = JSON.parse(req.body);

  const { error } = await supabase.from("registrations").insert({
    name,
    email,
    role,
    focus_areas: focusAreas,
    project,
    phone,
    address,
    vat_number
  });

  if (error) {
    console.error("❌ Supabase Error:", error);
    return res.status(500).json({ error: "Failed to register" });
  }

  // 🧾 Generate PDF
  try {
    const pdfMake = (await import("pdfmake/build/pdfmake")).default;
    const pdfFonts = await import("pdfmake/build/vfs_fonts");
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const invoiceDate = new Date().toLocaleDateString();
    const total = "R250";

    const docDefinition = {
      content: [
        { text: "Selfware AI Session Invoice", style: "header" },
        { text: `Date: ${invoiceDate}\n\n` },
        {
          columns: [
            {
              width: "*",
              text: [
                { text: "Billed To:\n", bold: true },
                `${name}\n${email}\n${phone || ""}\n${address || ""}\n`
              ]
            },
            {
              width: "auto",
              text: [
                { text: "Status: ", bold: true },
                "Pending"
              ]
            }
          ]
        },
        { text: "\nSession Details", style: "subheader" },
        {
          ul: [
            `Focus: ${focusAreas.join(", ")}`,
            `Project: ${project || "—"}`,
            vat_number ? `VAT Number: ${vat_number}` : null
          ].filter(Boolean)
        },
        { text: "\nTotal Due: " + total, style: "total" }
      ],
      styles: {
        header: { fontSize: 18, bold: true, marginBottom: 10 },
        subheader: { fontSize: 14, bold: true, marginTop: 10, marginBottom: 5 },
        total: { fontSize: 16, bold: true, marginTop: 20 }
      }
    };

    const pdfDoc = pdfMake.createPdf(docDefinition);

    const pdfBuffer = await new Promise((resolve, reject) =>
      pdfDoc.getBuffer((buffer) => resolve(buffer))
    );

    await sendConfirmationEmail({
      to: email,
      name,
      focusAreas,
      status: "Pending",
      pdfBuffer
    });
  } catch (err) {
    console.error("📤 PDF/Email error:", err);
    // Don't fail the response, allow fallback
  }

  res.status(200).json({ message: "Registration successful" });
}
