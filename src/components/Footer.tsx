import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-bold text-lg tracking-tight">B2B SOFTWARE</span>
                <span className="text-muted-foreground text-xs tracking-widest">TECHNOLOGIES LTD</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              Microsoft-Gold Enterprise Resource Planning partner, enabling digital transformation 
              with Dynamics 365, ERP, Analytics & Healthcare solutions for over 25 years.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["ERP Solutions", "Healthcare", "Emerging Tech", "Industries", "Careers", "Investors"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  6-3-1112, 3rd and 4th Floor, AVR Towers, Behind Westside Show Room, 
                  Near Somajiguda Circle, Begumpet, Hyderabad – 500 016. Telangana, INDIA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@b2bsoftech.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@b2bsoftech.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+91-40-23372522" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +91-40-2337 2522
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 B2B Software Technologies Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
