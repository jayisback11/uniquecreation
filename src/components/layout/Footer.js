import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-royal-purple-500 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading text-3xl font-bold mb-2">Unique Creations</h3>
            <p className="text-champagne-gold-400 text-sm tracking-widest mb-4">SALON & SPA</p>
            <p className="text-purple-200 text-sm leading-relaxed">
              Where science meets style. Specialized hair restoration and luxury care in Baton Rouge, LA.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-champagne-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-champagne-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-champagne-gold-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-4 text-champagne-gold-400">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'Shop', 'Gallery', 'Booking', 'Contact'].map(link => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase()}`}
                    className="text-purple-200 hover:text-champagne-gold-400 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-4 text-champagne-gold-400">Our Services</h4>
            <ul className="space-y-3 text-sm text-purple-200">
              <li>Hair Restoration</li>
              <li>Trichology Clinic</li>
              <li>Braiding & Weaves</li>
              <li>Full-Service Spa</li>
              <li>Makeup Services</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-4 text-champagne-gold-400">Visit Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-champagne-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-purple-200">9444 Florida Blvd<br />Baton Rouge, LA 70815</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-champagne-gold-400" />
                <a href="tel:225-927-7007" className="text-purple-200 hover:text-champagne-gold-400 transition-colors">
                  (225) 927-7007
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-champagne-gold-400" />
                <span className="text-purple-200">Tue - Sat: 9AM - 6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-400/30 mt-12 pt-8 text-center text-sm text-purple-300">
          <p>&copy; {new Date().getFullYear()} Unique Creations Salon & Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
