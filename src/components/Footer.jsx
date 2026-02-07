import { MapPin, Phone, Mail, Globe, Linkedin, Twitter, Facebook, Instagram, ArrowRight, Heart, Building2, MessageCircle, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-24 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-blue-400 flex items-center justify-center bg-blue-500/10">
                <span className="text-blue-400 font-bold text-sm">B2Y</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">B2YINFY</div>
                <div className="text-gray-400 text-xs tracking-wide">TECHNOLOGIES</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading technology solutions provider specializing in digital transformation, cloud solutions, and innovative software development for modern businesses.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Solutions", href: "#solutions" },
                { label: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Cloud Solutions",
                "Software Development", 
                "AI & Machine Learning",
                "Digital Marketing",
                "Cybersecurity",
                "E-commerce Platforms"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300">
                    <Building2 className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium text-sm mb-1">Office Address</h4>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    Technology Hub, Innovation Center<br />
                    Digital Solutions Complex<br />
                    Tech City, Business District
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-green-500/20 group-hover:border-green-400/50 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium text-sm mb-1">Email Us</h4>
                  <a href="mailto:info@b2yinfy.com" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                    info@b2yinfy.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-purple-500/20 group-hover:border-purple-400/50 transition-all duration-300">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium text-sm mb-1">Call Us</h4>
                  <a href="tel:+1-555-0123" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                    +1 (555) 012-3456
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium text-sm mb-1">Business Hours</h4>
                  <div className="text-gray-400 text-sm">
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 bg-black/20">
        <div className="container mx-auto px-6 lg:px-24 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2026 B2Yinfy Technologies. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>All rights reserved.</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;