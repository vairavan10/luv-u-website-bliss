
import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    specialRequests: ''
  });

  const services = [
    'Mini Gentle Facials',
    'Fun Hair Styling', 
    'Nail Art Magic',
    'Princess/Prince Makeover',
    'Memory Photo Session',
    'Birthday Party Package'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Booking submitted:', formData);

  toast({
    title: "Booking Request Sent! 🌟",
    description: "WhatsApp is opening — please send the message to confirm booking.",
  });

  // Compose WhatsApp message
  const message = `🌸 *New Booking Request* 🌸

👩 Parent/Guardian: ${formData.parentName}
👧 Child: ${formData.childName} (Age: ${formData.childAge})

📧 Email: ${formData.email}
📞 Phone: ${formData.phone}

💅 Preferred Service: ${formData.service}
📅 Date: ${formData.preferredDate}
⏰ Time: ${formData.preferredTime}

📝 Special Notes: ${formData.specialRequests || "None"}

— Sent from the *LUV U* booking form 💖`;

  // Your WhatsApp number (no + or spaces)
  const whatsappNumber = '917358888428';

  // WhatsApp URL
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp with the message
  window.open(whatsappURL, '_blank');

  // Reset the form
  setFormData({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    specialRequests: ''
  });
};



  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-lavender-50 via-white to-mint-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Book Your Little One's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-mint-600"> Magical Day</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to create beautiful memories? Let us know how we can make your child's spa experience absolutely perfect.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 w-[90%] max-w-md mx-auto lg:w-[420px]">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-lavender-100 to-mint-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-lavender-500 rounded-full flex items-center justify-center">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">+91 - 73588 88428</p>
                        <p className="text-sm text-gray-600">Call us anytime</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-10 bg-mint-900 rounded-full flex items-center justify-center">
                        <Mail className="text-white" size={30} />
                      </div>
                      <div>
                        <p className="font-small text-gray-800">luvuwomenworl@gmail.com</p>
                        <p className="text-sm text-gray-600">Email us your questions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-peach-500 rounded-full flex items-center justify-center">
                        <Clock className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Mon-Sat: 9AM-6PM</p>
                        <p className="text-sm text-gray-600">Sunday: 10AM-4PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-10">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">What to Expect</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-lavender-400 rounded-full mt-2"></div>
                      <p>We'll call within 24 hours to confirm</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-mint-400 rounded-full mt-2"></div>
                      <p>Flexible rescheduling if needed</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-peach-400 rounded-full mt-2"></div>
                      <p>All natural, child-safe products</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-skyblue-400 rounded-full mt-2"></div>
                      <p>Parents welcome to stay throughout</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-4">
              <Card className="border-0 shadow-lg bg-blue">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Parent & Child Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Parent/Guardian Name *
                        </label>
                       <Input
  type="text"
  name="parentName"
  value={formData.parentName}
  onChange={handleInputChange}
  required
  className="bg-pink-100 rounded-xl border-gray-200 focus:border-lavender-400 focus:ring-lavender-400"
  placeholder="Your name"
/>

                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Child's Name *
                        </label>
                        <Input
                          type="text"
                          name="childName"
                          value={formData.childName}
                          onChange={handleInputChange}
                          required
                          className="bg-pink-100 rounded-xl border-gray-200 focus:border-lavender-400 focus:ring-lavender-400"
                          placeholder="Your little one's name"
                        />
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Child's Age *
                        </label>
                        <Input
                          type="number"
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleInputChange}
                          required
                          min="2"
                          max="12"
                         className="bg-pink-100 rounded-xl border-gray-200 focus:border-lavender-400 focus:ring-lavender-400"
                          placeholder="Age"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-pink-100 rounded-xl border-gray-200 focus:border-lavender-400 focus:ring-lavender-400"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="bg-pink-100 rounded-xl border-gray-200 focus:border-lavender-400 focus:ring-lavender-400"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Service *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-lavender-400 focus:ring-lavender-400 focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date & Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <Input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                         className="bg-pink-100 rounded-xl border-gray-200 focus:border-lavender-400 focus:ring-lavender-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-lavender-400 focus:ring-lavender-400 focus:outline-none"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requests or Notes
                      </label>
                      <Textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={4}
                        className="bg-pink-100 rounded-xl border-gray-200 focus:border-lavender-400 focus:ring-lavender-400"
                        placeholder="Any allergies, preferences, or special occasions we should know about?"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-lavender-500 to-mint-500 hover:from-lavender-600 hover:to-mint-600 text-white py-4 text-lg rounded-xl font-medium shadow-lg hover-lift"
                    >
                      Send Booking Request ✨
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
