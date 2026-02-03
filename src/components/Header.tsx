import { useState } from "react";
import { Menu } from "lucide-react";

const navItems = [
  { label: "ERP", href: "#products" },
  { label: "Emerging Technologies", href: "#products" },
  { label: "Healthcare", href: "#products" },
  { label: "Industries", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Investors", href: "#investors" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-foreground/30 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                  <span className="text-foreground font-bold text-sm">B2B</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-bold text-base tracking-wide">B2B SOFTWARE</span>
              <span className="text-foreground/60 text-[10px] tracking-[0.2em]">TECHNOLOGIES LTD</span>
              <span className="text-foreground/40 text-[8px] tracking-[0.15em]">PEOPLE . VALUES . TECHNOLOGIES</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <a 
                  href={item.href} 
                  className="text-foreground/80 hover:text-foreground transition-colors text-sm font-light px-4"
                >
                  {item.label}
                </a>
                {index < navItems.length - 1 && (
                  <span className="text-foreground/30">/</span>
                )}
              </div>
            ))}
          </nav>

          {/* Microsoft Partner Badge & Menu */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <div className="flex gap-0.5">
                <div className="w-2 h-2 bg-red-500"></div>
                <div className="w-2 h-2 bg-green-500"></div>
                <div className="w-2 h-2 bg-blue-500"></div>
                <div className="w-2 h-2 bg-yellow-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-foreground/80 font-medium">Microsoft</span>
                <span className="text-[8px] text-foreground/60">Solutions Partner</span>
                <span className="text-[8px] text-foreground/60">Business Applications</span>
              </div>
            </div>

            {/* Menu Button */}
            <button
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="w-6 h-0.5 bg-foreground"></span>
              <span className="w-6 h-0.5 bg-foreground"></span>
              <span className="w-6 h-0.5 bg-foreground"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-foreground/10 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors text-sm py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
