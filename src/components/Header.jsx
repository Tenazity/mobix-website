import 'boxicons/css/boxicons.min.css';
import { useState, useEffect } from 'react';


const Header = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'products', label: 'PRODUCTS', href: '#products' },
    { id: 'feedback', label: 'TESTIMONIALS', href: '#feedback' },
    { id: 'contact', label: 'CONTACT', href: '#contact' }
  ];

  return (
    <header 
      className={`flex justify-between items-center py-4 px-4 lg:px-20 bg-gradient-to-b from-black/90 via-black/80 to-black/70 backdrop-blur-md border-b border-gray-700/30 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <h1 
        className={`text-3xl md:text-4xl lg:text-5xl font-light m-0 cursor-pointer text-white transition-all duration-1200 delay-200 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
        onClick={() => handleNavClick('home')}
      >
        Mobix
      </h1>
      
      <nav 
        className={`hidden md:flex items-center gap-12 transition-all duration-1200 delay-400 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
      >
        {navItems.map((item, index) => (
          <a
            key={item.id}
            className={`text-base tracking-wider transition-all duration-500 hover:text-white z-50 relative font-medium ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{
              transitionDelay: `${600 + (index * 150)}ms` // Staggered delay: 600ms, 750ms, 900ms, 1050ms
            }}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.id);
            }}
          >
            <span className={`transition-all duration-300 ${
              activeSection === item.id ? 'text-white border-b-2 border-violet-700 pb-1' : 'text-gray-200'
            }`}>
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      <button 
        className={`md:hidden text-3xl p-2 z-50 text-white transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
        onClick={toggleMenu}
      >
        <i className={isMenuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
      </button>

      <div className={`fixed top-16 right-0 left-0 p-5 bottom-0 md:hidden z-50 bg-black bg-opacity-85 backdrop-blur-md transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className={`flex flex-col gap-6 items-center mt-4 ${isMenuOpen ? 'opacity-100 visible bg-black/90 backdrop-blur-md' : 'opacity-0 invisible'}`}>
          {navItems.map((item, index) => (
            <a
              key={item.id}
              className={`text-base tracking-wider transition-all duration-500 hover:text-white z-50 relative font-medium ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${200 + (index * 100)}ms` // Staggered delay for mobile menu
              }}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}x
            >
              <span className={`transition-all duration-300 ${
                activeSection === item.id ? 'text-white border-b-2 border-violet-700 pb-1' : 'text-gray-200'
              }`}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header