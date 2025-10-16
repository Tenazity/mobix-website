import { useState, useEffect, useRef } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Spline from '@splinetool/react-spline';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ModelViewer from './components/ModelViewer.jsx';
import Feedback from './components/Feedback.jsx';
import ProductModal from './components/ProductModal.jsx';
import Products from './components/Products.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showProducts, setShowProducts] = useState(false);
  const sectionsRef = useRef({});

  useEffect(() => {
    // Ensure page starts at the top
    window.scrollTo(0, 0);
    
    AOS.init({
      duration: 1500,
      once: true,
      disable: 'mobile', // Disable on mobile for better performance
      startEvent: 'DOMContentLoaded',
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1
      };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      // Observe all sections
      const sections = ['home', 'about', 'products', 'feedback', 'contact'];
      sections.forEach(sectionId => {
        const element = sectionsRef.current[sectionId];
        if (element) {
          observer.observe(element);
        }
      });

      return () => {
        sections.forEach(sectionId => {
          const element = sectionsRef.current[sectionId];
          if (element) {
            observer.unobserve(element);
          }
        });
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      const headerHeight = 100; // Increased header height for better spacing
      const elementPosition = element.offsetTop - headerHeight;
      
      // Enhanced smooth scrolling with custom easing
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = Math.min(Math.abs(distance) * 0.8, 1200); // Dynamic duration based on distance
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * easedProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  return (
    <main className="relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
      </div>
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <img
          className="absolute top-0 right-0 opacity-60"
          src="/gradient.png"
          alt="Gradient-img"
        />
        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#a0522d] -rotate-[30deg]"></div>
        {/* <Spline
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="1500"
          className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full'
          scene="https://prod.spline.design/wtry1qVHFhYij6Zl/scene.splinecode"
        /> */}
        <ModelViewer />
      </div>

      {/* Page Sections */}
      <div className="relative z-10">
        {/* Home Section */}
        <section
          id="home"
          ref={(el) => (sectionsRef.current.home = el)}
          className="min-h-screen flex items-center justify-start pt-32 pb-20"
        >
          <Hero
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={(el) => (sectionsRef.current.about = el)}
          className="min-h-screen flex items-center justify-start pb-20"
        >
          <About />
        </section>

        <section
          id="products"
          ref={(el) => (sectionsRef.current.products = el)}
          className="min-h-screen flex items-center justify-start pb-20"
        >
          <Products />
        </section>

        {/* Feedback Section */}
        <section
          id="feedback"
          ref={(el) => (sectionsRef.current.feedback = el)}
          className="min-h-screen flex items-center justify-start pb-20"
        >
          <Feedback />
        </section>
        
        {/* Contact Section */}
        <section
          id="contact"
          ref={(el) => (sectionsRef.current.contact = el)}
          className="min-h-screen flex items-center justify-start pb-20"
        >
          <Contact />
        </section>

        
      </div>
    </main>
  );
}