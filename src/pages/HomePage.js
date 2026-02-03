import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { 
  Award, Microscope, Sparkles, Leaf, ArrowRight, Check, Calendar, 
  Shield, MapPin, Phone, Clock, Heart
} from "lucide-react";
import { useCart } from "@/context/CartContext";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [gallery, setGallery] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.post(`${API}/seed`);
        const [productsRes, galleryRes] = await Promise.all([
          axios.get(`${API}/products`),
          axios.get(`${API}/gallery`)
        ]);
        setProducts(productsRes.data.slice(0, 4));
        setGallery(galleryRes.data.slice(0, 6));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section data-testid="hero-section" className="relative min-h-screen flex items-center bg-off-white pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-royal-purple-50 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-royal-purple-500" />
                <span className="text-sm font-medium text-royal-purple-500">30+ Years of Excellence</span>
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-royal-purple-500 leading-tight">
                Where Science<br />
                <span className="text-champagne-gold-500">Meets Style</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Specialized hair restoration and luxury care. Experience the perfect blend of trichology expertise and indulgent spa treatments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  data-testid="hero-schedule-btn"
                  className="inline-flex items-center justify-center bg-champagne-gold-500 text-white px-8 py-4 text-sm font-medium tracking-widest hover:bg-champagne-gold-600 transition-colors"
                >
                  SCHEDULE A CONSULTATION
                </Link>
                <Link
                  to="/services"
                  data-testid="hero-services-btn"
                  className="inline-flex items-center justify-center border-2 border-royal-purple-500 text-royal-purple-500 px-8 py-4 text-sm font-medium tracking-widest hover:bg-royal-purple-500 hover:text-white transition-colors"
                >
                  BROWSE SPA MENU
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in-up">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1585890483046-9461ebc1dace?w=800"
                  alt="Healthy hair transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-purple-500/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-xs">
                <p className="font-heading text-xl font-semibold text-royal-purple-500 mb-1">René Randle</p>
                <p className="text-sm text-gray-600">Certified Trichologist</p>
                <p className="text-champagne-gold-500 text-sm font-medium mt-2">30+ Years Transforming Lives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Badge Section */}
      <section data-testid="authority-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1643136359809-2640f2ce51b0?w=800"
                alt="Luxury salon interior"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute top-4 right-4 bg-champagne-gold-500 text-white px-4 py-2 text-sm font-medium">
                EST. 1994
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-champagne-gold-500 text-sm tracking-widest uppercase">About Us</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-royal-purple-500">
                Led by Expertise,<br />Driven by Results
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Under the leadership of René Randle, a certified trichologist with over three decades of experience, 
                Unique Creations has become Baton Rouge's premier destination for hair restoration and luxury beauty services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-champagne-gold-500 pl-4">
                  <p className="font-heading text-3xl font-bold text-royal-purple-500">30+</p>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
                <div className="border-l-4 border-champagne-gold-500 pl-4">
                  <p className="font-heading text-3xl font-bold text-royal-purple-500">5000+</p>
                  <p className="text-gray-600 text-sm">Happy Clients</p>
                </div>
              </div>
              <Link
                to="/services"
                data-testid="learn-more-btn"
                className="inline-flex items-center gap-2 text-royal-purple-500 font-medium hover:text-champagne-gold-500 transition-colors"
              >
                Discover Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section data-testid="services-section" className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-champagne-gold-500 text-sm tracking-widest uppercase mb-4">What We Offer</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-royal-purple-500">
              Our Signature Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              data-testid="service-restorative"
              className="bg-white p-8 group hover:border-l-4 hover:border-champagne-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-royal-purple-50 flex items-center justify-center mb-6 group-hover:bg-royal-purple-500 transition-colors">
                <Microscope className="w-8 h-8 text-royal-purple-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-royal-purple-500 mb-4">Restorative</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hair replacement, trichology treatments, laser therapy, and scalp infusions for hair restoration.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-champagne-gold-500" /> Laser Hair Therapy</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-champagne-gold-500" /> Non-Surgical Replacement</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-champagne-gold-500" /> Scalp Infusions</li>
              </ul>
            </div>

            <div 
              data-testid="service-creative"
              className="bg-white p-8 group hover:border-l-4 hover:border-champagne-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-royal-purple-50 flex items-center justify-center mb-6 group-hover:bg-royal-purple-500 transition-colors">
                <Sparkles className="w-8 h-8 text-royal-purple-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-royal-purple-500 mb-4">Creative</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Braiding, weaves, extensions, and virgin hair styling for stunning transformations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-champagne-gold-500" /> Box Braids & Twists</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-champagne-gold-500" /> Sew-In Weaves</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-champagne-gold-500" /> Virgin Hair Extensions</li>
              </ul>
            </div>

            <div 
              data-testid="service-wellness"
              className="bg-white p-8 group hover:border-l-4 hover:border-champagne-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-royal-purple-50 flex items-center justify-center mb-6 group-hover:bg-royal-purple-500 transition-colors">
                <Leaf className="w-8 h-8 text-royal-purple-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-royal-purple-500 mb-4">Wellness</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Full-service spa treatments, massage therapy, and professional makeup services.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-champagne-gold-500" /> Luxury Spa Treatments</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-champagne-gold-500" /> Therapeutic Massage</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-champagne-gold-500" /> Professional Makeup</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              data-testid="view-all-services-btn"
              className="inline-flex items-center gap-2 bg-royal-purple-500 text-white px-8 py-4 text-sm font-medium tracking-widest hover:bg-royal-purple-600 transition-colors"
            >
              VIEW ALL SERVICES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trichology Spotlight */}
      <section data-testid="trichology-section" className="py-20 bg-royal-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-champagne-gold-400 text-sm tracking-widest uppercase">Specialized Care</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Advanced Trichology<br />Solutions
              </h2>
              <p className="text-purple-200 leading-relaxed">
                Our certified trichologist uses cutting-edge technology and proven techniques to address 
                hair loss, scalp conditions, and promote healthy hair growth.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <Shield className="w-8 h-8 text-champagne-gold-400" />
                  </div>
                  <p className="text-sm">Laser<br />Therapy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <Microscope className="w-8 h-8 text-champagne-gold-400" />
                  </div>
                  <p className="text-sm">Scalp<br />Analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <Leaf className="w-8 h-8 text-champagne-gold-400" />
                  </div>
                  <p className="text-sm">Herbal<br />Infusions</p>
                </div>
              </div>

              <Link
                to="/booking"
                data-testid="trichology-consult-btn"
                className="inline-flex items-center gap-2 bg-champagne-gold-500 text-white px-8 py-4 text-sm font-medium tracking-widest hover:bg-champagne-gold-600 transition-colors"
              >
                BOOK A CONSULTATION <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1679496124845-ac6957c8bffd?w=800"
                alt="Trichology treatment"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-champagne-gold-500 p-6 text-white">
                <p className="font-heading text-2xl font-bold">95%</p>
                <p className="text-sm">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section data-testid="shop-preview-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <p className="text-champagne-gold-500 text-sm tracking-widest uppercase mb-2">Shop Online</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-royal-purple-500">
                Best Sellers
              </h2>
            </div>
            <Link
              to="/shop"
              data-testid="shop-all-btn"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-royal-purple-500 font-medium hover:text-champagne-gold-500 transition-colors"
            >
              Shop All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id} 
                data-testid={`product-card-${product.id}`}
                className="group bg-off-white p-4"
              >
                <div className="aspect-square mb-4 overflow-hidden bg-white">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-medium text-sm text-gray-800 mb-1 line-clamp-2">{product.name}</h4>
                <p className="text-champagne-gold-600 font-semibold mb-3">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product)}
                  data-testid={`add-to-cart-${product.id}`}
                  className="w-full bg-royal-purple-500 text-white py-2 text-xs font-medium tracking-wide hover:bg-royal-purple-600 transition-colors"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section data-testid="gallery-preview-section" className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-champagne-gold-500 text-sm tracking-widest uppercase mb-2">Live from the Salon</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-royal-purple-500">
              Transformations
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div 
                key={item.id}
                data-testid={`gallery-item-${item.id}`}
                className="group relative aspect-square overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image_url}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium line-clamp-2">{item.caption}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/gallery"
              data-testid="view-gallery-btn"
              className="inline-flex items-center gap-2 border-2 border-royal-purple-500 text-royal-purple-500 px-8 py-3 text-sm font-medium tracking-widest hover:bg-royal-purple-500 hover:text-white transition-colors"
            >
              VIEW FULL GALLERY
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="py-20 bg-champagne-gold-500">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your consultation today and discover how our expert team can help you achieve your hair goals.
          </p>
          <Link
            to="/booking"
            data-testid="cta-book-btn"
            className="inline-flex items-center gap-2 bg-white text-royal-purple-500 px-10 py-4 text-sm font-medium tracking-widest hover:bg-gray-100 transition-colors"
          >
            BOOK YOUR APPOINTMENT <Calendar className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Location Section */}
      <section data-testid="location-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <p className="text-champagne-gold-500 text-sm tracking-widest uppercase mb-2">Visit Us</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-royal-purple-500">
                  Our Location
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-purple-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-royal-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">9444 Florida Blvd<br />Baton Rouge, LA 70815</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-purple-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-royal-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:225-927-7007" className="text-champagne-gold-500 hover:text-champagne-gold-600 transition-colors">
                      (225) 927-7007
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-purple-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-royal-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hours</h4>
                    <p className="text-gray-600">Tuesday - Saturday: 9AM - 6PM<br />Sunday - Monday: Closed</p>
                  </div>
                </div>
              </div>

              <a
                href="tel:225-927-7007"
                data-testid="tap-to-call-btn"
                className="inline-flex items-center gap-2 bg-royal-purple-500 text-white px-8 py-4 text-sm font-medium tracking-widest hover:bg-royal-purple-600 transition-colors"
              >
                <Phone className="w-4 h-4" /> TAP TO CALL
              </a>
            </div>

            <div className="h-96 lg:h-auto bg-gray-200 overflow-hidden">
              <iframe
                title="Unique Creations Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.3!2d-91.05!3d30.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9444+Florida+Blvd%2C+Baton+Rouge%2C+LA+70815!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
