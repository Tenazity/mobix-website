import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';
import Products from './Products';
import ModelSection from './ModelSection';

const Hero = ({ activeSection, onSectionChange }) => {
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <div className="w-full">
      <ModelSection
        id="home"
        modelPath="/foodtrailer.glb"
        title={<>
          <div>
            <div className='relative w-[95%] sm:w-48 h-10 bg-[0_0_900px_20px_#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full hover:scale-105 transition-all duration-300'>
              <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white'>
                <i className='bx bx-food-menu'></i>
                FRESH ON WHEELS
              </div>
            </div>
          </div>
          <h1 className='mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider'>
            PREMIUM FOOD TRAILERS
          </h1>
        </>}
        description={"Transform your culinary dreams into reality with MOBIX's professionally crafted food trailers. Quality, style, and functionality combined."}
        reverse={false}
      >
        <div className='flex gap-4 mt-8'>
          <button 
            className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'
            onClick={() => onSectionChange('about')}
          >
            Explore Our Trailers
          </button>
          {/* <button 
            className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white'
            onClick={() => setIsProductOpen(prev => !prev)}
          >
            View Products
            <i className='bx bx-right-arrow-alt'></i>
          </button> */}
        </div>
      </ModelSection>

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
