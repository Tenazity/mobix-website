import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';
import Products from './Products';

const Hero = ({ activeSection, onSectionChange }) => {
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Content */}
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
              <i className='bx bx-food-menu'></i>
              FRESH ON WHEELS
            </div>
          </div>
        </div>

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
          PREMIUM FOOD TRAILERS 
          <br />
          FOR SUCCESS
        </h1>

        <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
          Transform your culinary dreams into reality with MOBIX's professionally crafted food trailers. Quality, style, and functionality combined.
        </p>

        <div className='flex gap-4 mt-12'>
          <button 
            className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'
            onClick={() => onSectionChange('about')}
          >
            Explore Our Trailers
          </button>

          <button 
            className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white'
            onClick={() => setIsProductOpen(prev => !prev)}
          >
            View Products
            <i className='bx bx-right-arrow-alt'></i>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isProductOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" relative bg-black p-6 rounded-2xl max-w-5xl w-full mx-4 shadow-xl">
            <div className='absolute top-0 left-0'>
              <button onClick={()=>setIsProductOpen(false)}>
                x
              </button>
            </div>
            <Products />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
