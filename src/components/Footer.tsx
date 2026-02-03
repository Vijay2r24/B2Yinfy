import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(200,15%,10%)] py-16 border-t border-foreground/10">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">B2B Software Technologies Ltd.</h3>
            
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-4 h-4 text-foreground/50 mt-1 flex-shrink-0" />
              <p className="text-foreground/60 text-sm leading-relaxed">
                6-3-1112, 3rd and 4th Floor,<br />
                AVR Towers, Behind Westside Show Room,<br />
                Near Somajiguda Circle, Begumpet,<br />
                Hyderabad – 500 016.<br />
                Telangana, INDIA
              </p>
            </div>
          </div>

          {/* Contact & Map */}
          <div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-foreground/50" />
                <a href="mailto:info@b2bsoftech.com" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                  info@b2bsoftech.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-foreground/50" />
                <a href="tel:+91-40-23372522" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                  +91-40-2337 2522
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-foreground/5 rounded overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[hsl(200,20%,20%)] to-[hsl(200,15%,15%)] flex items-center justify-center">
                <span className="text-foreground/30 text-sm">Map Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
