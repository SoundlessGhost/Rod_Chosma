import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, comment } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name || "-"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Comment:</strong></p>
      <p>${(comment || "").replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p>Sent from your website contact form.</p>
    `;

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "New contact form submission",
      reply_to: email,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact api error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
