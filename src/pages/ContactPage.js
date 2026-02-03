import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post(`${API}/contact`, formData);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="pt-24 pb-20 bg-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-champagne-gold-500 text-sm tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-royal-purple-500 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 md:p-10 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold text-royal-purple-500 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="contact-name" className="text-gray-700 font-medium">Full Name *</Label>
                <Input
                  id="contact-name"
                  data-testid="contact-name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-royal-purple-500"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-email" className="text-gray-700 font-medium">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    data-testid="contact-email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="mt-2 border-gray-300 focus:border-royal-purple-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone" className="text-gray-700 font-medium">Phone</Label>
                  <Input
                    id="contact-phone"
                    data-testid="contact-phone"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="mt-2 border-gray-300 focus:border-royal-purple-500"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="contact-subject" className="text-gray-700 font-medium">Subject *</Label>
                <Input
                  id="contact-subject"
                  data-testid="contact-subject"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-royal-purple-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="contact-message" className="text-gray-700 font-medium">Message *</Label>
                <Textarea
                  id="contact-message"
                  data-testid="contact-message"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-royal-purple-500 min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                data-testid="contact-submit"
                className="w-full bg-royal-purple-500 hover:bg-royal-purple-600 text-white py-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6">
                <div className="w-12 h-12 bg-royal-purple-50 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-royal-purple-500" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                <p className="text-gray-600 text-sm">9444 Florida Blvd<br />Baton Rouge, LA 70815</p>
              </div>
              <div className="bg-white p-6">
                <div className="w-12 h-12 bg-royal-purple-50 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-royal-purple-500" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                <a href="tel:225-927-7007" className="text-champagne-gold-500 hover:text-champagne-gold-600">
                  (225) 927-7007
                </a>
              </div>
              <div className="bg-white p-6">
                <div className="w-12 h-12 bg-royal-purple-50 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-royal-purple-500" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                <p className="text-gray-600 text-sm">info@uniquecreationsinc.com</p>
              </div>
              <div className="bg-white p-6">
                <div className="w-12 h-12 bg-royal-purple-50 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-royal-purple-500" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Hours</h4>
                <p className="text-gray-600 text-sm">Tue - Sat: 9AM - 6PM<br />Sun - Mon: Closed</p>
              </div>
            </div>

            <div className="bg-white p-2 shadow-sm">
              <iframe
                title="Unique Creations Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.3!2d-91.05!3d30.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9444+Florida+Blvd%2C+Baton+Rouge%2C+LA+70815!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            <a
              href="tel:225-927-7007"
              data-testid="contact-call-btn"
              className="flex items-center justify-center gap-3 bg-champagne-gold-500 text-white py-4 text-sm font-medium tracking-widest hover:bg-champagne-gold-600 transition-colors"
            >
              <Phone className="w-5 h-5" /> TAP TO CALL NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
