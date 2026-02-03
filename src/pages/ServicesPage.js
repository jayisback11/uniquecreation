import { Link } from "react-router-dom";
import { Microscope, Sparkles, Leaf, Calendar } from "lucide-react";

const ServicesPage = () => {
  const services = {
    restorative: [
      { name: 'Laser Hair Therapy', description: 'Low-level laser treatment to stimulate hair follicles and promote growth.', price: 'From $150' },
      { name: 'Non-Surgical Hair Replacement', description: 'Custom hair systems that blend seamlessly with your natural hair.', price: 'Consultation Required' },
      { name: 'Scalp Infusion Treatment', description: 'Deep conditioning treatment to nourish and heal the scalp.', price: 'From $85' },
      { name: 'Trichology Consultation', description: 'Comprehensive scalp analysis with personalized treatment plan.', price: '$75' },
    ],
    creative: [
      { name: 'Box Braids', description: 'Classic protective style with endless length and size options.', price: 'From $180' },
      { name: 'Sew-In Weave', description: 'Full sew-in installation for a natural, versatile look.', price: 'From $200' },
      { name: 'Virgin Hair Extensions', description: 'Premium human hair extensions for seamless length and volume.', price: 'From $150' },
      { name: 'Locs Maintenance', description: 'Professional loc retwist, styling, and maintenance.', price: 'From $85' },
      { name: 'Twist Styles', description: 'Senegalese twists, passion twists, and more.', price: 'From $160' },
    ],
    wellness: [
      { name: 'Full-Service Spa Package', description: 'Complete relaxation with facial, massage, and body treatment.', price: 'From $250' },
      { name: 'Swedish Massage', description: '60-minute relaxation massage to ease tension and stress.', price: '$95' },
      { name: 'Deep Tissue Massage', description: 'Therapeutic massage targeting chronic muscle tension.', price: '$110' },
      { name: 'Professional Makeup', description: 'Full glam makeup for special occasions and events.', price: 'From $75' },
      { name: 'Nail Services', description: 'Manicures, pedicures, and nail art.', price: 'From $35' },
    ],
  };

  return (
    <div data-testid="services-page" className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-champagne-gold-500 text-sm tracking-widest uppercase mb-4">Our Expertise</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-royal-purple-500 mb-6">
            Services & Treatments
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From restorative trichology treatments to creative styling and wellness services, 
            we offer comprehensive care for your hair and well-being.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-royal-purple-500 flex items-center justify-center">
              <Microscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-royal-purple-500">Restorative</h2>
              <p className="text-gray-600">Hair Restoration & Trichology</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.restorative.map((service, index) => (
              <div 
                key={index}
                data-testid={`service-item-${index}`}
                className="bg-white p-6 border border-gray-100 hover:border-champagne-gold-500 transition-colors group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-royal-purple-500 transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-champagne-gold-600 font-semibold text-sm">{service.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-royal-purple-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-royal-purple-500">Creative</h2>
              <p className="text-gray-600">Braiding, Weaves & Extensions</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.creative.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 border border-gray-100 hover:border-champagne-gold-500 transition-colors group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-royal-purple-500 transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-champagne-gold-600 font-semibold text-sm">{service.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-royal-purple-500 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-royal-purple-500">Wellness</h2>
              <p className="text-gray-600">Spa, Massage & Beauty</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.wellness.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 border border-gray-100 hover:border-champagne-gold-500 transition-colors group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-royal-purple-500 transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-champagne-gold-600 font-semibold text-sm">{service.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-royal-purple-500 p-12 text-center text-white">
          <h3 className="font-heading text-3xl font-bold mb-4">Ready to Book?</h3>
          <p className="text-purple-200 mb-6 max-w-xl mx-auto">
            Schedule your appointment today and experience the Unique Creations difference.
          </p>
          <Link
            to="/booking"
            data-testid="services-book-btn"
            className="inline-flex items-center gap-2 bg-champagne-gold-500 text-white px-8 py-4 text-sm font-medium tracking-widest hover:bg-champagne-gold-600 transition-colors"
          >
            BOOK NOW <Calendar className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
