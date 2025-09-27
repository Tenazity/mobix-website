import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-4' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              className="text-3xl font-bold text-gradient-orange"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              MOBIX
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="hero" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-foreground/80 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-6 pb-6 border-t border-border/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="hero" size="sm" className="mt-4">
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;