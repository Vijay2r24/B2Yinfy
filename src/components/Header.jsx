import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Solutions", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Industries", href: "#industries" },
  { label: "Clients & Testimonials", href: "#clients" },
  { label: "Awards & Accolades", href: "#awards" },
  { label: "Investors", href: "#investors" },
  { label: "Careers", href: "#careers" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                  isScrolled 
                    ? 'border-blue-500/30 bg-blue-50' 
                    : 'border-foreground/30 bg-foreground/10'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isScrolled ? 'bg-blue-100' : 'bg-foreground/10'
                  }`}>
                    <span className={`font-bold text-sm transition-colors ${
                      isScrolled ? 'text-blue-600' : 'text-foreground'
                    }`}>B2Y</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-base tracking-wide transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-foreground'
                }`}>B2YINFY</span>
                <span className={`text-[10px] tracking-[0.2em] transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-foreground/60'
                }`}>TECHNOLOGIES</span>
                <span className={`text-[8px] tracking-[0.15em] transition-colors ${
                  isScrolled ? 'text-gray-500' : 'text-foreground/40'
                }`}>INNOVATION . SOLUTIONS . GROWTH</span>
              </div>
            </div>

            {/* Right Side - Technology Partner Badge & Menu Button */}
            <div className="flex items-center gap-6">
              {/* Technology Partner Badge */}
              <div className="hidden md:flex items-center gap-2">
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <span className={`text-[10px] font-medium transition-colors ${
                    isScrolled ? 'text-gray-700' : 'text-foreground/80'
                  }`}>Technology</span>
                  <span className={`text-[8px] transition-colors ${
                    isScrolled ? 'text-gray-600' : 'text-foreground/60'
                  }`}>Solutions Partner</span>
                  <span className={`text-[8px] transition-colors ${
                    isScrolled ? 'text-gray-600' : 'text-foreground/60'
                  }`}>Digital Innovation</span>
                </div>
              </div>

              {/* Hamburger Menu Button */}
              <button
                className={`w-10 h-10 flex items-center justify-center transition-all rounded ${
                  isScrolled 
                    ? 'hover:bg-gray-100 text-gray-700' 
                    : 'hover:bg-foreground/10 text-foreground'
                } z-60`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <span className="text-blue-500 font-bold text-xs">B2Y</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-bold text-sm">B2YINFY</span>
              <span className="text-gray-500 text-[10px]">TECHNOLOGIES</span>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="py-2">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-6 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">COPYRIGHT © 2026 B2YINFY</p>
            <p className="text-xs text-gray-400">ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;