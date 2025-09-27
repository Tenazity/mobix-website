import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  location: string;
  rating: number;
  content: string;
  image: string;
  trailerType: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen py-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Customer <span className="text-gradient-orange">Success Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from real customers who have transformed 
            their food businesses with MOBIX trailers.
          </p>
        </motion.div>
      </section>

      {/* Main Testimonial Carousel */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative glass-card p-8 md:p-12 overflow-hidden">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Customer Image and Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <motion.img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full mx-auto md:mx-0 mb-4 object-cover border-4 border-primary/20"
                    whileHover={{ scale: 1.05 }}
                  />
                  <h3 className="text-xl font-semibold mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {testimonials[currentIndex].business}
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    {testimonials[currentIndex].location}
                  </p>
                  <div className="flex justify-center md:justify-start space-x-1 mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {testimonials[currentIndex].trailerType}
                  </span>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="hover:bg-primary/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="hover:bg-primary/10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="bg-card/50 py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More <span className="text-gradient-orange">Happy Customers</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of successful food entrepreneurs who chose MOBIX for their journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="glass-card p-6 hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="glass-card p-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Own <span className="text-gradient-orange">Success Story?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of successful food entrepreneurs. Let's build the perfect trailer for your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Your Quote
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;