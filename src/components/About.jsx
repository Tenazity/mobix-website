import React from 'react';
import 'boxicons/css/boxicons.min.css';

const About = () => {
  return (
    <div className="w-full">
      {/* Content */}
      <div 
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 flex flex-col justify-center"
      >
          <div>
            <div className='relative w-[95%] sm:w-48 h-10
                            bg-[0_0_900px_20px_#e99b63]
                            shadow-[0_0_15px_rgba(255,255,255,0.4)]
                            rounded-full hover:scale-105 transition-all duration-300'>
              <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white'>
                <i className='bx bx-info-circle'></i>
                ABOUT MOBIX
              </div>
            </div>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
            OUR STORY
            <br />
            OF PASSION
          </h1>

          <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] mb-6'>
          For over 15 years, we've been crafting premium food trailers that turn culinary dreams into thriving businesses.           </p>

          <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] mb-6'>
          Our commitment to quality and innovation has made us the trusted choice for food entrepreneurs nationwide.          </p>

          <div className='space-y-4 mb-8'>
            <div className='flex items-center gap-3'>
              <i className='bx bx-check-circle text-green-400 text-xl'></i>
              <span className='text-gray-300'>500+ Trailers</span>
            </div>
            <div className='flex items-center gap-3'>
              <i className='bx bx-check-circle text-green-400 text-xl'></i>
              <span className='text-gray-300'>300+ Happy Customers</span>
            </div>
            <div className='flex items-center gap-3'>
              <i className='bx bx-check-circle text-green-400 text-xl'></i>
              <span className='text-gray-300'>15+ Years Experience</span>
            </div>
            <div className='flex items-center gap-3'>
              <i className='bx bx-check-circle text-green-400 text-xl'></i>
              <span className='text-gray-300'>99% Customer Statisfaction</span>
            </div>
          </div>

          {/* <div className='flex gap-4 mt-12'>
            <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href='#contact'>
              Get In Touch
              <i className='bx bx-message-dots'></i>
            </a>

            <a className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white' href='#menu'>
              View Menu
              <i className='bx bx-restaurant'></i>
            </a>
          </div> */}
        </div>
    </div>
  );
};

export default About;
