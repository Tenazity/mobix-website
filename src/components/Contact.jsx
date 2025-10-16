import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import ModelSection from "./ModelSection";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full">
      <ModelSection
        id="contact"
        modelPath="/foodTrailerobj.glb"
        reverse
        title={
          <>
            <div>
              <div className="relative w-[95%] sm:w-48 h-10 bg-[0_0_900px_20px_#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full hover:scale-105 transition-all duration-300">
                <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white">
                  <i className="bx bx-message-dots"></i>
                  CONTACT US
                </div>
              </div>
            </div>
            <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider">
              GET IN <br /> TOUCH
            </h1>
          </>
        }
        description={
          "Have questions about our food trucks, want to book us for an event, or just want to say hello? We'd love to hear from you!"
        }
      >
        <div className="space-y-4 mb-4">
          <div className="flex items-center gap-3">
            <i className="bx bx-phone text-green-400 text-xl"></i>
            <span className="text-gray-300">0204343057</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="bx bx-envelope text-green-400 text-xl"></i>
            <span className="text-gray-300">mobixlimioted@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="bx bx-map text-green-400 text-xl"></i>
            <span className="text-gray-300">
              123 Food Street, City, State 12345
            </span>
          </div>
          <div className="flex items-center gap-3">
            <i className="bx bx-time text-green-400 text-xl"></i>
            <span className="text-gray-300">Mon-Sun: 11:00 AM - 10:00 PM</span>
          </div>
        </div>
        <div className="mb-8">
          <a
            href="https://wa.me/310204343057?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-48 py-3 px-10 rounded-full bg-green-800 text-white font-semibold tracking-wider hover:bg-green-600 transition-all duration-300 whitespace-nowrap"
          >
            <i className="bx bxl-whatsapp text-xl"></i>
            Chat on WhatsApp
          </a>
        </div>
      </ModelSection>
    </div>
  );
}

export default Contact;
