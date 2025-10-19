import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import { X } from 'lucide-react';
import ModelSection from './ModelSection';
import ContactForm from './ContactForm';

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full">
      <ModelSection
        id="contact"
        modelPath="/foodTrailerobj.glb"
        reverse
        title={<>
          <div>
            <div className='relative w-[95%] sm:w-48 h-10 bg-[0_0_900px_20px_#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full hover:scale-105 transition-all duration-300'>
              <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white'>
                <i className='bx bx-message-dots'></i>
                CONTACT US
              </div>
            </div>
          </div>
          <h1 className='mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider'>
            GET IN <br /> TOUCH
          </h1>
        </>}
        description={"Looking for a reliable food trailer for your business? Reach out to Mobix — we design and deliver trailers that move your dream forward."}
        hideModel={true}
      >
        <div className='space-y-4 mb-4'>
          <div className='flex items-center gap-3'>
            <i className='bx bx-phone text-green-400 text-xl'></i>
            <span className='text-gray-300'>+64 0204343057</span>
          </div>
          <div className='flex items-center gap-3'>
            <i className='bx bx-phone text-green-400 text-xl'></i>
            <span className='text-gray-300'>+64 2108237057</span>
          </div>
          <div className='flex items-center gap-3'>
            <i className='bx bx-envelope text-green-400 text-xl'></i>
            <span className='text-gray-300'>mobixlimited@gmail.com</span>
          </div>
          <div className='flex items-center gap-3'>
            <i className='bx bx-map text-green-400 text-xl'></i>
            <span className='text-gray-300'>1/105a Wallace road Papataetoe Auckland 2025</span>
          </div>
        </div>
        <div className='mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center'>
          <a href="https://wa.me/642108237057?text=Hello%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20food%20trailers%20and%20available%20customization%20options." target="_blank" rel="noopener noreferrer" className='flex items-center justify-center gap-2 w-full sm:w-48 py-3 px-10 rounded-full bg-green-800 text-white font-semibold tracking-wider hover:bg-green-600 transition-all duration-300 whitespace-nowrap'>
            <i className='bx bxl-whatsapp text-xl'></i>
            Chat on WhatsApp
          </a>
          <button 
            onClick={openModal}
            className='flex items-center justify-center gap-2 w-full sm:w-48 py-3 px-10 rounded-full bg-purple-800 bg-opacity-80 text-white font-semibold tracking-wider hover:bg-purple-700 transition-all duration-300 whitespace-nowrap'
          >
            <i className='bx bx-envelope text-xl'></i>
            Send Email
          </button>
        </div>
      </ModelSection>
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-md">
            {/* Modal Card */}
            <div
              className="bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl p-8"
              style={{
                backgroundImage: 'linear-gradient(to right, #1a1a1a 0%, #2d1f1f 50%, #3d2a2a 100%)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10"
              >
                <X size={24} />
              </button>

              <h1 className="text-4xl font-bold text-white mb-2 text-center">Get in Touch</h1>
              <p className="text-gray-300 text-center mb-8">We'd love to hear from you. Send us a message!</p>
              
              <ContactForm />
              
              <p className="text-center text-gray-400 text-sm mt-6">We typically respond within 24 hours</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
