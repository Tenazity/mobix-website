import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 flex flex-col justify-center"
      >
        {/* Contact Header */}
        <div>
          <div className='relative w-[95%] sm:w-48 h-10
                          bg-[0_0_900px_20px_#e99b63]
                          shadow-[0_0_15px_rgba(255,255,255,0.4)]
                          rounded-full hover:scale-105 transition-all duration-300'>
            <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white'>
              <i className='bx bx-message-dots'></i>
              CONTACT US
            </div>
          </div>
        </div>

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
          GET IN
          <br />
          TOUCH
        </h1>

        <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] mb-8'>
          Have questions about our food trucks, want to book us for an event, or just want to say hello? We'd love to hear from you!
        </p>

        {/* Contact Information */}
        <div className='space-y-4 mb-4'>
          <div className='flex items-center gap-3'>
            <i className='bx bx-phone text-green-400 text-xl'></i>
            <span className='text-gray-300'>+1 (555) 123-4567</span>
          </div>
          <div className='flex items-center gap-3'>
            <i className='bx bx-envelope text-green-400 text-xl'></i>
            <span className='text-gray-300'>hello@mobix.com</span>
          </div>
          <div className='flex items-center gap-3'>
            <i className='bx bx-map text-green-400 text-xl'></i>
            <span className='text-gray-300'>123 Food Street, City, State 12345</span>
          </div>
          <div className='flex items-center gap-3'>
            <i className='bx bx-time text-green-400 text-xl'></i>
            <span className='text-gray-300'>Mon-Sun: 11:00 AM - 10:00 PM</span>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className='mb-8'>
          <a
            href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center justify-center gap-2 w-full sm:w-48 py-3 px-10 rounded-full bg-green-800 text-white font-semibold tracking-wider hover:bg-green-600 transition-all duration-300 whitespace-nowrap'
          >
            <i className='bx bxl-whatsapp text-xl'></i>
            Chat on WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        {/* <form onSubmit={handleSubmit} className='space-y-4 mb-8'>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className='w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors'
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className='w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors'
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className='w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors resize-none'
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className='w-full border border-[#2a2a2a] py-3 px-6 rounded-full text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white'
          >
            Send Message
            <i className='bx bx-send'></i>
          </button>
        </form> */}
      </div>
    </div>
  );
}

export default Contact;
