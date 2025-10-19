import nodemailer from "nodemailer";

// Netlify Function: send-email via Gmail SMTP (Nodemailer)
// Expects JSON body: { name, email, message }
// Requires env: EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS
// Optional env: TO_EMAIL (defaults to EMAIL_USER), EMAIL_SECURE ("true" for port 465)

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ success: false, message: "Method Not Allowed" }) };
  }

  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_SECURE } = process.env;
  const TO_EMAIL = process.env.TO_EMAIL || EMAIL_USER;

  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
    console.error("Missing required EMAIL_* env vars");
    return { statusCode: 500, body: JSON.stringify({ success: false, message: "Server not configured" }) };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ success: false, message: "All fields required" }) };
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: EMAIL_SECURE === "true" || Number(EMAIL_PORT) === 465,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    await transporter.sendMail({
      from: EMAIL_USER,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { statusCode: 200, body: JSON.stringify({ success: true, message: "Email sent successfully" }) };
  } catch (err) {
    console.error("Send email error:", err);
    return { statusCode: 500, body: JSON.stringify({ success: false, message: "Failed to send email" }) };
  }
}
