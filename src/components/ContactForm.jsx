import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        const text = await response.text();
        setStatus(`❌ Failed to send message. (${response.status}) ${text || ''}`);
      }
    } catch (err) {
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-amber-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
        style={{
          backgroundImage: 'linear-gradient(to right, #1a1a1a 0%, #2d1f1f 50%, #3d2a2a 100%)',
        }}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-amber-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
        style={{
          backgroundImage: 'linear-gradient(to right, #1a1a1a 0%, #2d1f1f 50%, #3d2a2a 100%)',
        }}
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-amber-900 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
        style={{
          backgroundImage: 'linear-gradient(to right, #1a1a1a 0%, #2d1f1f 50%, #3d2a2a 100%)',
        }}
        required
      ></textarea>

      <button 
        type="submit"
        className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 px-6 rounded-xl font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Send Message
      </button>

      {status && (
        <p className={`text-sm text-center mt-2 font-medium transition-all duration-200 ${
          status.includes('✅') 
            ? 'text-green-400' 
            : status.includes('❌') 
            ? 'text-red-400' 
            : 'text-amber-400'
        }`}>
          {status}
        </p>
      )}
    </form>
  );
}
