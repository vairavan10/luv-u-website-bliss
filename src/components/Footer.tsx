
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-lavender-900 via-lavender-800 to-mint-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-mint-400 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">LUV U</h3>
                <p className="text-lavender-200 text-sm">The Kids World</p>
              </div>
            </div>
            
            <p className="text-lavender-100 leading-relaxed mb-6 max-w-md">
              Creating magical spa experiences for children in a safe, loving environment where every little one feels special and cherished.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-lavender-100">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Visit Us</h4>
            <div className="space-y-4 text-lavender-100">
              <div className="flex items-start space-x-3">
                <MapPin className="text-lavender-300 mt-1" size={20} />
                <div>
                  <p>123 Magic Lane</p>
                  <p>Wonder City, WC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-lavender-300" size={20} />
                <p>(555) 123-KIDS</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-lavender-300" size={20} />
                <p>hello@luvukidsworld.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Hours</h5>
              <div className="text-sm text-lavender-100 space-y-1">
                <p>Monday - Saturday: 9AM - 6PM</p>
                <p>Sunday: 10AM - 4PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 pt-8 border-t border-lavender-700">
          <div className="bg-white/10 rounded-2xl p-6 text-center">
            <h4 className="text-lg font-semibold mb-4">Find Our Magical Space</h4>
            <div className="bg-white/20 rounded-xl h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 text-lavender-200" size={32} />
                <p className="text-lavender-100">Interactive map would be embedded here</p>
                <p className="text-sm text-lavender-200 mt-2">Click for directions to our spa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-lavender-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-lavender-100 flex items-center justify-center md:justify-start gap-2">
                Made with <Heart className="text-peach-400" size={16} fill="currentColor" /> for little smiles
              </p>
              <p className="text-sm text-lavender-200 mt-1">
                © 2024 LUV U – The Kids World. All rights reserved.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-medium text-white mb-1">
                ✨ Thank you for visiting our little world! ✨
              </p>
              <p className="text-sm text-lavender-200">
                Where every child's smile shines bright
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
