
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
                  <p>#26, Philomina Nagar,</p>
                  <p>Near Don Bosco School,
Yagappa Nagar Main Road,</p>
                  <p>Thanjavur - 613 006.
Tamilnadu - India.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-lavender-300" size={20} />
                <p>9487992728</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-lavender-300" size={20} />
                <p>luvuwomenworld@gmail.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Hours</h5>
              <div className="text-sm text-lavender-100 space-y-1">
                <p>Monday - Saturday: 9AM - 9PM</p>
                
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
<div className="mt-12 pt-8 border-t border-lavender-700">
  <div className="bg-white/10 rounded-2xl p-6 text-center">
    <h4 className="text-lg font-semibold mb-4">Find Our Magical Space</h4>

    <div className="rounded-xl overflow-hidden w-full h-[300px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.642409318063!2d79.13301201086597!3d10.762018159414547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab8ea352cc6ef%3A0xc44caff0167f4e72!2sLUV%20U%20The%20Women%20World!5e0!3m2!1sen!2sin!4v1750955929219!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
      allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <a
      href="https://maps.app.goo.gl/EP3dRYBFFDT76G8H9"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-4 text-center text-lavender-200 underline hover:text-lavender-100"
    >
      Open in Google Maps
    </a>
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
