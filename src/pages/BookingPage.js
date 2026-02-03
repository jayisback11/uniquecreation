import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service_type: '', preferred_date: '', preferred_time: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post(`${API}/bookings`, formData);
      toast.success("Booking request submitted successfully! We'll contact you soon.");
      setFormData({ name: '', email: '', phone: '', service_type: '', preferred_date: '', preferred_time: '', message: '' });
    } catch (error) {
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    'Trichology Consultation',
    'Laser Hair Therapy',
    'Hair Replacement',
    'Box Braids',
    'Sew-In Weave',
    'Locs Maintenance',
    'Spa Package',
    'Massage',
    'Makeup Services',
    'Other',
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <div data-testid="booking-page" className="pt-24 pb-20 bg-off-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-champagne-gold-500 text-sm tracking-widest uppercase mb-4">Schedule</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-royal-purple-500 mb-6">
            Book Your Appointment
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Ready for your transformation? Fill out the form below and we'll contact you to confirm your appointment.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                <Input
                  id="name"
                  data-testid="booking-name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-royal-purple-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  data-testid="booking-email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-royal-purple-500"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                <Input
                  id="phone"
                  data-testid="booking-phone"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-royal-purple-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="service" className="text-gray-700 font-medium">Service Type *</Label>
                <Select 
                  value={formData.service_type} 
                  onValueChange={value => setFormData({...formData, service_type: value})}
                >
                  <SelectTrigger data-testid="booking-service" className="mt-2">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map(service => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="date" className="text-gray-700 font-medium">Preferred Date *</Label>
                <Input
                  id="date"
                  type="date"
                  data-testid="booking-date"
                  value={formData.preferred_date}
                  onChange={e => setFormData({...formData, preferred_date: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-royal-purple-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="time" className="text-gray-700 font-medium">Preferred Time *</Label>
                <Select 
                  value={formData.preferred_time} 
                  onValueChange={value => setFormData({...formData, preferred_time: value})}
                >
                  <SelectTrigger data-testid="booking-time" className="mt-2">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map(time => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-700 font-medium">Additional Notes</Label>
              <Textarea
                id="message"
                data-testid="booking-message"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="mt-2 border-gray-300 focus:border-royal-purple-500 min-h-[120px]"
                placeholder="Tell us about your hair goals or any special requests..."
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-sm text-yellow-800">
              <strong>Note:</strong> This booking form sends a MOCK email notification. In production, connect a real email service to receive notifications.
            </div>

            <Button
              type="submit"
              data-testid="booking-submit"
              className="w-full bg-champagne-gold-500 hover:bg-champagne-gold-600 text-white py-6 text-sm font-medium tracking-widest"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SUBMITTING...' : 'REQUEST APPOINTMENT'}
            </Button>
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 text-center">
            <Phone className="w-8 h-8 mx-auto text-royal-purple-500 mb-3" />
            <h4 className="font-semibold mb-1">Call Us</h4>
            <a href="tel:225-927-7007" className="text-champagne-gold-500">(225) 927-7007</a>
          </div>
          <div className="bg-white p-6 text-center">
            <MapPin className="w-8 h-8 mx-auto text-royal-purple-500 mb-3" />
            <h4 className="font-semibold mb-1">Visit Us</h4>
            <p className="text-gray-600 text-sm">9444 Florida Blvd, Baton Rouge, LA</p>
          </div>
          <div className="bg-white p-6 text-center">
            <Clock className="w-8 h-8 mx-auto text-royal-purple-500 mb-3" />
            <h4 className="font-semibold mb-1">Hours</h4>
            <p className="text-gray-600 text-sm">Tue - Sat: 9AM - 6PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
