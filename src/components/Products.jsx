import React, { useRef, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
// ModelSection removed to avoid extra space on mobile

const Products = () => {
  // First row carousel items
  const carouselItems = [
    {
      title: "Custom Build Trailer",
      description: "Tailored to your specific needs with premium finishes.",
      image: "/Image-5.jpg",
      size: "Custom"
    },
    {
      title: "Luxury Mobile Kitchen",
      description: "High-end mobile restaurant with professional-grade equipment.",
      image: "/Image-6.jpg",
      size: "Premium"
    },
    {
      title: "Professional Food Trailer",
      description: "Robust and reliable trailer for commercial food service.",
      image: "/trailer.jpg",
      size: "Pro"
    },
    {
      title: "Advanced Mobile Kitchen",
      description: "State-of-the-art mobile kitchen with modern amenities.",
      image: "/trailer2.jpg",
      size: "Advanced"
    },
    // {
    //   title: "Premium Food Service Unit",
    //   description: "Top-tier mobile food service with luxury features.",
    //   image: "/trailer2 2.jpg",
    //   size: "Premium"
    // },
  ];

  // Equipment items for second row
  const equipment = [
    { name: "Gas Burner", image: "/burner.jpg" },
    { name: "Hot Plate", image: "/hotplate.jpg" },
    { name: "Fryer", image: "/fryer.jpg" },
    { name: "Fridge", image: "/fridge.jpeg" },
    { name: "Water Pump", image: "/waterpump.jpg" },
    { name: "Cash Register", image: "/cashregister.jpg" },
    { name: "Chimney", image: "/chimney.jpg" },
    { name: "HD Tower", image: "/hdtower.jpg" },
    { name: "Power Connector", image: "/power_connector.jpg" },
    { name: "Steel Flooring", image: "/steelflooring.jpg" },
    { name: "Workbench", image: "/workbench.jpg" },
    { name: "Rooflight", image: "/rooflight.jpg" },
  ];

  const carouselRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full" id="products">
      {/* Header content replacing ModelSection (no 3D model) */}
      <section className="w-full pt-4 pb-6 md:pt-6 md:pb-8">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div>
            <div className='relative w-[95%] sm:w-48 h-10 bg-[0_0_900px_20px_#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full hover:scale-105 transition-all duration-300' data-aos="fade-right">
              <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white'>
                <i className='bx bx-cart-alt'></i>
                OUR PRODUCTS
              </div>
            </div>
          </div>
          <h1 className='mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider' data-aos="fade-right">
            Our Food Trailers
          </h1>
          <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-xl mt-5" data-aos="fade-right">
            We build strong, reliable, and customizable food trailers to help you start your food business with ease. Choose your size and setup — we'll take care of the rest.
          </p>

          {/* Quick service badges */}
          {/* <div className="mt-4 mb-2 space-y-2">
            <div className="flex items-center gap-3">
              <i className='bx bx-check-circle text-green-400 text-xl'></i>
              <span className="text-gray-300">WOF, EWOF & REGO Included</span>
            </div>
            <div className="flex items-center gap-3">
              <i className='bx bx-check-circle text-green-400 text-xl'></i>
              <span className="text-gray-300">Brand New & Built Strong</span>
            </div>
            <div className="flex items-center gap-3">
              <i className='bx bx-check-circle text-green-400 text-xl'></i>
              <span className="text-gray-300">3m, 4m & 5m Options Available</span>
            </div>
          </div> */}
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Size Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10" data-aos="fade-right">
          {[
            {title:'3M Trailer', subtitle:'Compact and easy to move.', desc:'Best for coffee, snacks, or small food setups.'},
            {title:'4M Trailer', subtitle:'Spacious and balanced.', desc:'Ideal for small teams and growing businesses.'},
            {title:'5M Trailer', subtitle:'Large and fully equipped.', desc:'Perfect for full kitchens or catering services.'}
          ].map((card, idx) => (
            <div key={idx} className="bg-[#111] border border-gray-700 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{card.subtitle}</p>
              <p className="text-gray-400 text-sm sm:text-base mt-2">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Carousel Section - Top */}
        <div className="w-full mb-8">
          <div className="relative flex items-center">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="absolute left-0 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
            >
              <BsChevronLeft size={22} />
            </button>

            {/* Carousel */}
            <motion.div
              ref={carouselRef}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory w-full px-6 sm:px-8 gap-3 sm:gap-4"
            >
              {carouselItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-[85%] sm:w-[75%] md:w-[70%] lg:w-[60%] snap-center bg-[#111] border border-gray-700 rounded-2xl p-4 sm:p-5 text-center hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl mb-3 sm:mb-4"
                  />
                  <div className="mb-2">
                    <span className="inline-block bg-orange-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                      {item.size}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="absolute right-0 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
            >
              <BsChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Equipment & Customization */}
        <div className="w-full mb-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white text-center" data-aos="fade-right">Equipment & Customization</h3>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-6" data-aos="fade-right">Each trailer can be fitted with the setup you need.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6" data-aos="fade-right">
            {[
              'Grills, fryers, ovens, or fridges',
              'Water and electrical systems',
              'Storage and lighting setups',
              'Exterior design and branding'
            ].map((text, i)=> (
              <div key={i} className="bg-[#111] border border-gray-700 rounded-xl p-4 flex items-start gap-3">
                <i className='bx bx-cog text-orange-400 text-xl mt-0.5'></i>
                <span className="text-gray-300 text-sm sm:text-base">{text}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#111] border border-gray-700 rounded-xl p-3 sm:p-4 text-center hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-16 sm:h-20 md:h-24 object-cover rounded-lg mb-2 sm:mb-3"
                />
                <h4 className="text-xs sm:text-sm md:text-base font-medium text-white leading-tight">{item.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="w-full mb-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white text-center" data-aos="fade-right">Why Choose Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-right">
            {[
              'Custom-built trailers',
              'Quality materials',
              'Affordable pricing',
              'Quick delivery'
            ].map((benefit, i)=> (
              <div key={i} className="bg-[#111] border border-gray-700 rounded-xl p-5 flex items-center gap-3">
                <i className='bx bx-check-circle text-green-400 text-2xl'></i>
                <span className="text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section - Bottom */}
        <div className="w-full">
          <h3 className="text-xl font-semibold mb-4 text-white text-center">See Our Trailers in Action</h3>
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-700 bg-black">
            <video
              src="/MicrosoftTeams-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              poster="/Image-2.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full mt-10 mb-6 text-center">
          <p className="text-gray-300 mb-4">Start your food trailer today. Tell us what you need, and we'll build it for you.</p>
          <a href="#contact" className='inline-block border border-[#2a2a2a] py-2 sm:py-3 px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'>Get a Quote</a>
        </div>
      </div>
    </div>
  );
};

export default Products;

