import React, { useEffect, useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import { motion } from 'framer-motion';
import ModelSection from './ModelSection';

const Feedback = () => {

    const testimonials = [
        {
          id: 1,
          name: "Maria Rodriguez",
          business: "Taco Libre",
          location: "Austin, TX",
          rating: 5,
          content: "MOBIX completely transformed my food business. The custom taco trailer they built exceeded all my expectations. The quality is outstanding, and the design perfectly captures my brand. Six months in, and I'm already planning to order a second one!",
          image: "/api/placeholder/100/100",
          trailerType: "Custom Taco Trailer"
        },
        {
          id: 2,
          name: "James Thompson",
          business: "Smoky Joe's BBQ",
          location: "Memphis, TN",
          rating: 5,
          content: "As a pitmaster with 20 years of experience, I needed a trailer that could keep up with my standards. MOBIX delivered beyond my wildest dreams. The BBQ Master Deluxe has everything I need and more. Customer service was exceptional throughout the entire process.",
          image: "/api/placeholder/100/100",
          trailerType: "BBQ Master Deluxe"
        },
        {
          id: 3,
          name: "Sarah Chen",
          business: "Bean There Coffee",
          location: "Portland, OR",
          rating: 5,
          content: "The Coffee Cart Elite has been a game-changer for my business. Compact yet fully functional, it allows me to serve premium coffee anywhere in the city. The build quality is impressive, and the layout is perfectly optimized for efficiency.",
          image: "/api/placeholder/100/100",
          trailerType: "Coffee Cart Elite"
        },
        {
          id: 4,
          name: "Michael Johnson",
          business: "Street Feast",
          location: "Los Angeles, CA",
          rating: 5,
          content: "MOBIX didn't just build me a trailer; they built me a mobile restaurant. The attention to detail is incredible, from the custom storage solutions to the professional-grade equipment. My revenue has tripled since I started using their Street Gourmet Pro.",
          image: "/api/placeholder/100/100",
          trailerType: "Street Gourmet Pro"
        },
        {
          id: 5,
          name: "Lisa Kim",
          business: "Sweet Dreams Desserts",
          location: "Miami, FL",
          rating: 5,
          content: "The Dessert Dream Mobile has made my sweet business dreams come true. The freezer systems keep everything at perfect temperature, and the layout allows for beautiful product display. Customer inquiries have increased dramatically since we launched.",
          image: "/api/placeholder/100/100",
          trailerType: "Dessert Dream Mobile"
        },
        {
          id: 6,
          name: "Robert Wilson",
          business: "Gourmet Burgers Co.",
          location: "Chicago, IL",
          rating: 5,
          content: "Working with MOBIX was the best decision I made for my business. They listened to my specific needs and created a custom solution that perfectly fits my burger operation. The team was professional, timely, and delivered exactly what they promised.",
          image: "/api/placeholder/100/100",
          trailerType: "Custom Build"
        }
      ];
    
      // Carousel state and auto-advance
      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000); // auto move every 6s
        return () => clearInterval(intervalId);
      }, []);

      const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);


    return (
      <div className="w-full">
        <ModelSection
          id="feedback"
          modelPath="/food3d.glb"
          reverse={false}
          title={<>
            <div>
              <div className='relative w-[95%] sm:w-48 h-10 bg-[0_0_900px_20px_#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full hover:scale-105 transition-all duration-300'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white'>
                  <i className='bx bx-message-dots'></i>
                  TESTIMONIALS
                </div>
              </div>
            </div>
            <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider">
              CUSTOMER <br /> SUCCESS STORIES
            </h1>
          </>}
          description={"Don't just take our word for it. Hear from real customers who have transformed their food businesses with MOBIX trailers."}
        >
          <div className="py-4 container">
            <div className="max-w-4xl">
              <AnimateTestimonial testimonial={testimonials[currentIndex]} />
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button aria-label="Previous testimonial" onClick={prev} className="h-9 w-9 flex items-center justify-center rounded-full border border-[#2a2a2a] hover:bg-[#1a1a1a]">
                <i className="bx bx-chevron-left text-xl"></i>
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrentIndex(i)} className={`h-2 w-2 rounded-full transition-all ${i === currentIndex ? 'bg-orange-500 w-5' : 'bg-gray-600'}`} aria-label={`Go to testimonial ${i + 1}`} />
                ))}
              </div>
              <button aria-label="Next testimonial" onClick={next} className="h-9 w-9 flex items-center justify-center rounded-full border border-[#2a2a2a] hover:bg-[#1a1a1a]">
                <i className="bx bx-chevron-right text-xl"></i>
              </button>
            </div>
          </div>
        </ModelSection>
      </div>
    )

}

export default Feedback;
 
// Animated testimonial card (single item)
const AnimateTestimonial = ({ testimonial }) => {
  return (
    <motion.div
      key={testimonial.id}
      className="glass-card p-6 hover:shadow-glow transition-all duration-300 border border-[#2a2a2a] rounded-2xl bg-[#0e0e0e]/60"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-4">
        {/* <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        /> */}
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.business}</p>
        </div>
      </div>
      <div className="flex space-x-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <i key={i} className="bx bxs-star text-yellow-400 text-base"></i>
        ))}
      </div>
      <p className="text-muted-foreground text-base leading-relaxed">
        "{testimonial.content}"
      </p>
    </motion.div>
  );
};