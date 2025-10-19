import sgMail from "@sendgrid/mail";

// Netlify Function: send-email
// Expects JSON body: { name, email, message }
// Requires env: SENDGRID_API_KEY, TO_EMAIL (optional; defaults to FROM_EMAIL), FROM_EMAIL

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ success: false, message: "Method Not Allowed" }) };
  }

  if (!process.env.SENDGRID_API_KEY) {
    console.error("Missing SENDGRID_API_KEY env var");
    return { statusCode: 500, body: JSON.stringify({ success: false, message: "Server not configured" }) };
  }

  const FROM_EMAIL = process.env.FROM_EMAIL;
  const TO_EMAIL = process.env.TO_EMAIL || FROM_EMAIL;

  if (!FROM_EMAIL) {
    console.error("Missing FROM_EMAIL env var");
    return { statusCode: 500, body: JSON.stringify({ success: false, message: "Server not configured" }) };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ success: false, message: "All fields required" }) };
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: TO_EMAIL,
      from: FROM_EMAIL, // Must be a verified Single Sender or domain in SendGrid
      replyTo: email,
      subject: `Contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await sgMail.send(msg);

    return { statusCode: 200, body: JSON.stringify({ success: true, message: "Email sent successfully" }) };
  } catch (err) {
    console.error("Send email error:", err?.response?.body || err);
    return { statusCode: 500, body: JSON.stringify({ success: false, message: "Failed to send email" }) };
  }
}
