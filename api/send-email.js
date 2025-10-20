import nodemailer from "nodemailer";

// Vercel Serverless Function: send-email via SMTP (Nodemailer)
// Expects JSON body: { name, email, message }
// Requires env: EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS
// Optional env: TO_EMAIL (defaults to EMAIL_USER), EMAIL_SECURE ("true" for port 465)

async function readRequestBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_SECURE } = process.env;
  const TO_EMAIL = process.env.TO_EMAIL || EMAIL_USER;

  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
    console.error("Missing required EMAIL_* env vars");
    return res.status(500).json({ success: false, message: "Server not configured" });
  }

  try {
    const { name, email, message } = await readRequestBody(req);

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields required" });
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

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Send email error:", err);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
