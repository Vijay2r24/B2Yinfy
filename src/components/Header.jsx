import { useState, useEffect } from "react";
import { X, ChevronDown, Zap } from "lucide-react";

const navLinks = ["Solutions","Services","About","Industries","Careers","Contact"];

const menuItems = [
  { label:"Home", href:"/" },
  { label:"About Us", children:["About B2YINFY","Our Team","Vision & Mission"] },
  { label:"Solutions", children:["Cloud Solutions","Custom Software","AI & Machine Learning","Digital Marketing","Cybersecurity","E-commerce"] },
  { label:"Services", children:["Technology Consulting","Digital Transformation","UI/UX Design","DevOps & CI/CD","API Integration","Support & Maintenance"] },
  { label:"Industries", children:["Technology","Healthcare","Finance","E-commerce","Education","Manufacturing","Retail"] },
  { label:"Clients & Testimonials", href:"#" },
  { label:"Awards & Accolades", href:"#" },
  { label:"Investors", href:"#" },
  { label:"Careers", href:"#" },
  { label:"Contact", href:"#" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: scrolled ? "0 4px 24px rgba(10,22,40,0.08)" : "0 1px 4px rgba(10,22,40,0.04)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}>
        <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 lg:px-8" style={{ height:"60px" }}>

          {/* Logo */}
          <a href="/" className="group flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <img src="/logoPinkTransperant.c6af2d1c926f2e4ba7f1 (2).png" alt="B2YINFY"
                className="h-9 w-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-black text-[13px] tracking-[0.06em] text-slate-900" style={{ fontFamily:"'Outfit',sans-serif" }}>B2YINFY</span>
              <span className="text-[9px] font-semibold tracking-[0.08em]"
                style={{ background:"linear-gradient(90deg,#2563eb,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                you Believe We Achieve
              </span>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(l => (
              <a key={l} href="#"
                className="relative text-slate-600 hover:text-blue-700 text-[12.5px] font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 group">
                {l}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2.5">
            <a href="#" className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                letterSpacing: "0.01em",
              }}>
              <Zap className="w-3.5 h-3.5" />
              Get a Quote
            </a>
            <button onClick={() => setOpen(true)} aria-label="Menu"
              className="w-10 h-10 rounded-xl flex flex-col justify-center items-center gap-[5px] transition-all duration-200 hover:bg-slate-100 group"
              style={{ border:"1px solid #e2e8f0" }}>
              <span className="block w-[18px] h-[2px] bg-slate-500 rounded-full transition-all duration-200 group-hover:bg-blue-700 group-hover:w-5" />
              <span className="block w-[13px] h-[2px] bg-slate-400 rounded-full transition-all duration-200 group-hover:bg-blue-700 group-hover:w-5" />
              <span className="block w-[18px] h-[2px] bg-slate-500 rounded-full transition-all duration-200 group-hover:bg-blue-700 group-hover:w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div className="fixed inset-0 z-[59] transition-all duration-400"
        style={{ background:"rgba(10,22,40,0.4)", backdropFilter:open?"blur(6px)":"blur(0px)",
          opacity:open?1:0, pointerEvents:open?"auto":"none" }}
        onClick={() => setOpen(false)} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-[320px] z-[60] flex flex-col"
        style={{ background:"#ffffff", borderLeft:"1px solid #e2e8f0",
          boxShadow:"-12px 0 48px rgba(10,22,40,0.12)",
          transform:open?"translateX(0)":"translateX(100%)",
          transition:"transform 0.42s cubic-bezier(0.16,1,0.3,1)" }}>

        {/* Drawer top accent */}
        <div className="h-1 w-full" style={{ background:"linear-gradient(90deg,#2563eb,#06b6d4)" }} />

        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom:"1px solid #f1f5f9" }}>
          <div className="flex items-center gap-3">
            <img src="/logoPinkTransperant.c6af2d1c926f2e4ba7f1 (2).png" alt="B2YINFY" className="h-8 w-auto" />
            <div>
              <p className="text-slate-900 font-black text-xs tracking-[0.08em]" style={{ fontFamily:"'Outfit',sans-serif" }}>B2YINFY</p>
              <p className="text-slate-400 text-[8px] tracking-[0.2em] uppercase font-medium">Technologies</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-slate-100 hover:rotate-90">
            <X className="w-4 h-4 text-slate-500" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-3" style={{ scrollbarWidth:"none" }}>
          {menuItems.map(item => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-6 py-3 text-slate-600 hover:text-blue-700 hover:bg-blue-50/60 transition-all duration-200 text-sm font-semibold group">
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${expanded===item.label?"rotate-180 text-blue-600":""}`} />
                  </button>
                  <div style={{ maxHeight:expanded===item.label?"400px":"0", overflow:"hidden", transition:"max-height 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
                    <div className="bg-slate-50/80 py-1">
                      {item.children.map(child => (
                        <a key={child} href="#" onClick={() => setOpen(false)}
                          className="flex items-center gap-2.5 px-9 py-2 text-slate-500 hover:text-blue-700 text-xs font-medium transition-all duration-200 hover:pl-11 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                          {child}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a href={item.href||"#"} onClick={() => setOpen(false)}
                  className="flex items-center px-6 py-3 text-slate-600 hover:text-blue-700 hover:bg-blue-50/60 text-sm font-semibold transition-all duration-200 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-5" style={{ borderTop:"1px solid #e2e8f0" }}>
          <a href="#" className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold text-white btn-primary mb-3">
            <Zap className="w-4 h-4" /> Get a Quote
          </a>
          <p className="text-slate-400 text-[9px] uppercase tracking-[0.2em] text-center font-medium">
            © {new Date().getFullYear()} B2YINFY Technologies
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;





