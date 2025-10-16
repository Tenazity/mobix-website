import React from 'react';
import 'boxicons/css/boxicons.min.css';
import ModelSection from './ModelSection';

const About = () => {
  return (
    <div className="w-full">
      <ModelSection
        id="about"
        modelPath="/foodtrailer3d.glb"
        title={<>
          <div>
            <div className='relative w-[95%] sm:w-48 h-10 bg-[0_0_900px_20px_#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full hover:scale-105 transition-all duration-300'>
              <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white'>
                <i className='bx bx-info-circle'></i>
                ABOUT US
              </div>
            </div>
          </div>
          <h1 className='mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider'>
          Built for Dreamers <br /> Designed for Doers
          </h1>
        </>}
        description={"Welcome to Mobix Limited — where food meets freedom on wheels! 🚚✨ We're all about helping dreamers, chefs, and go-getters start their food business the easy way. At Mobix Limited, we build and sell high-quality food trailers that are ready to hit the road — whether you're serving coffee, burgers, or your secret family recipe."}
        reverse
      >
        <div className='space-y-4 mb-2'>
          <div className='flex items-center gap-3'>
            <i className='bx bx-check-circle text-green-400 text-xl'></i>
            <span className='text-gray-300'>Custom Built Trailers</span>
          </div>
          <div className='flex items-center gap-3'>
            <i className='bx bx-check-circle text-green-400 text-xl'></i>
            <span className='text-gray-300'>Durable & Stylish Design</span>
          </div>
          <div className='flex items-center gap-3'>
            <i className='bx bx-check-circle text-green-400 text-xl'></i>
            <span className='text-gray-300'>Ready to Hit the Road</span>
          </div>
          <div className='flex items-center gap-3'>
            <i className='bx bx-check-circle text-green-400 text-xl'></i>
            <span className='text-gray-300'>Build Your Brand Anywhere</span>
          </div>
        </div>
      </ModelSection>
      
      {/* Additional Content Section */}
      <div className="w-full py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Need Something Special? <br />
                <span className="text-orange-500">We've Got You!</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our team also offers custom-built trailers, designed exactly how you want — from layout and equipment to colors and style. You dream it, we'll build it.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe your trailer should work as hard as you do — durable, stylish, and built to impress. Whether you're just starting out or expanding your brand, we're here to help you roll out with confidence.
              </p>
            </div>
            
            {/* Right Content */}
            <div className="space-y-6" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className="bg-[#111] border border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Our Promise</h3>
                <p className="text-gray-300 leading-relaxed">
                  At Mobix Limited, we don't just sell trailers — we help you start stories, build brands, and take your passion anywhere. 🌮☕🍔
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Let's Hit the Road Together! 🚀</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ready to turn your culinary dreams into reality? Contact us today and let's build something amazing together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
