import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/shop', label: 'Shop' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/booking', label: 'Book Now' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" data-testid="logo-link" className="flex flex-col">
            <span className="font-heading text-2xl md:text-3xl font-bold text-royal-purple-500 tracking-tight">
              Unique Creations
            </span>
            <span className="text-xs tracking-[0.3em] text-champagne-gold-500 uppercase">
              Salon & Spa
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.label.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-champagne-gold-500 ${
                  location.pathname === link.path 
                    ? 'text-royal-purple-500 border-b-2 border-champagne-gold-500 pb-1' 
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              data-testid="cart-button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-royal-purple-50 rounded-full transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-royal-purple-500" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-champagne-gold-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <Link 
              to="/booking"
              data-testid="nav-book-btn"
              className="hidden md:flex bg-champagne-gold-500 text-white px-6 py-2 text-sm font-medium tracking-wide hover:bg-champagne-gold-600 transition-colors"
            >
              SCHEDULE NOW
            </Link>

            <button
              data-testid="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-royal-purple-50 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div 
            data-testid="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t animate-fade-in"
          >
            <div className="py-4 px-4 space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 text-sm font-medium tracking-wide transition-colors ${
                    location.pathname === link.path 
                      ? 'text-royal-purple-500 bg-royal-purple-50 border-l-4 border-champagne-gold-500' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
