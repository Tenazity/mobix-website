import React, { useRef, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      title: "Classic Food Trailer",
      description: "Perfect for small businesses. Compact, stylish, and efficient.",
      image: "/trailers/classic.png",
    },
    {
      title: "Luxury Food Trailer",
      description: "High-end model with premium finishes and full kitchen setup.",
      image: "/trailers/luxury.png",
    },
    {
      title: "Compact Coffee Trailer",
      description: "Ideal for baristas on the move. Sleek design and optimized space.",
      image: "/trailers/coffee.png",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

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
    <div className="w-full relative">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        Our Food Trailers
      </h2>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
        >
          <BsChevronLeft size={24} />
        </button>

        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide w-full"
        >
          {products.concat(products).map((item, index) => (
            <motion.div
              key={index}
              className="flex-none w-full max-w-md snap-center bg-[#111] border border-gray-700 rounded-2xl p-6 text-center mx-2 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
        >
          <BsChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Products;
