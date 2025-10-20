import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [showPopover, setShowPopover] = useState(false);

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
        setShowPopover(true);
        try {
          const module = await import('canvas-confetti');
          const confetti = module.default || module;
          confetti({ particleCount: 120, spread: 70, origin: { y: 0.3 } });
        } catch {}
        setTimeout(() => setShowPopover(false), 1800);
      } else {
        const text = await response.text();
        setStatus(`❌ Failed to send message. (${response.status}) ${text || ''}`);
      }
    } catch (err) {
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
      <div className="rounded-2xl overflow-hidden bg-black min-h-[220px] md:min-h-[380px] md:col-span-7">
        <video
          className="w-full h-full object-cover"
          src="/contact_vedio.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        />
      </div>

      <form onSubmit={handleSubmit} className="relative flex flex-col gap-5 md:col-span-5">
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

        <div className="relative">
          <button 
            type="submit"
            className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 px-6 rounded-xl font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Send Message
          </button>

          {showPopover && (
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-gray-900 rounded-xl shadow-xl px-4 py-2 border border-gray-200 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-sm font-semibold">Email sent successfully</span>
              </div>
              <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          )}
        </div>

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
    </div>
  );
}
