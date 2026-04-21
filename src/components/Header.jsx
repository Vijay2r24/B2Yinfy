import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 lg:px-6 py-2"
        style={{ background: "#ffffff", borderBottom: "1px solid #e0e7ff", boxShadow: "0 1px 12px rgba(99,102,241,0.08)" }}>
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto" style={{ height: "52px" }}>

          {/* Logo */}
          <a href="/" className="group flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/logoPinkTransperant.c6af2d1c926f2e4ba7f1 (2).png"
              alt="B2YINFY Logo"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
              style={{ }}
            />
            <div className="hidden sm:flex flex-col leading-none gap-0.5">
              <span className="font-black text-sm tracking-[0.1em] text-gray-900" style={{ fontFamily:"'Outfit',sans-serif" }}>B2YINFY</span>
              <span className="text-[9px] font-medium italic"
                style={{ background:"linear-gradient(135deg,#f97316,#fb923c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", fontFamily:"Georgia,serif" }}>
                you Believe We Achieve
              </span>
            </div>
          </a>

          {/* Nav pill */}
          <nav className="hidden lg:flex items-center gap-0.5 px-4 py-2 rounded-full"
            style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.15)" }}>
            {navLinks.map(l => (
              <a key={l} href="#"
                className="text-slate-700 hover:text-sky-600 text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-sky-50 relative group">
                {l}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-sky-500 transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a href="#" className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all duration-300 btn-glow">
              Get Started
            </a>
            <button onClick={() => setOpen(true)} aria-label="Menu"
              className="w-9 h-9 rounded-xl flex flex-col justify-center items-center gap-1.5 transition-all duration-300 hover:bg-sky-50 group"
              style={{ background:"rgba(14,165,233,0.06)", border:"1px solid rgba(14,165,233,0.15)" }}>
              <span className="block w-4 h-0.5 bg-slate-500 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-sky-600" />
              <span className="block w-3 h-0.5 bg-slate-400 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-sky-600" />
              <span className="block w-4 h-0.5 bg-slate-500 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-sky-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div className="fixed inset-0 z-[59] transition-all duration-500"
        style={{ background:"rgba(15,23,42,0.4)", backdropFilter:open?"blur(6px)":"blur(0px)",
          opacity:open?1:0, pointerEvents:open?"auto":"none" }}
        onClick={() => setOpen(false)} />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-[300px] z-[60] flex flex-col"
        style={{ background:"#ffffff", borderLeft:"2px solid #e0e7ff",
          boxShadow:"-8px 0 40px rgba(14,165,233,0.12)",
          transform:open?"translateX(0)":"translateX(100%)",
          transition:"transform 0.45s cubic-bezier(0.16,1,0.3,1)" }}>

        {/* Sidebar orb */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 70%)", filter:"blur(30px)", transform:"translate(30%,-30%)" }} />

        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 py-4 relative z-10"
          style={{ borderBottom:"1px solid #e2e8f0" }}>
          <div className="flex items-center gap-2.5">
            <img src="/logoPinkTransperant.c6af2d1c926f2e4ba7f1 (2).png" alt="B2YINFY Logo"
              className="h-8 w-auto" />
            <div>
              <p className="text-gray-900 font-black text-xs tracking-[0.08em]" style={{ fontFamily:"'Outfit',sans-serif" }}>B2YINFY</p>
              <p className="text-gray-400 text-[7px] tracking-[0.25em] uppercase">Technologies</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-gray-100">
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-2 relative z-10" style={{ scrollbarWidth:"none" }}>
          {menuItems.map(item => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-5 py-2.5 text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200 text-sm font-medium group"
                    style={{ borderBottom:"1px solid #f1f5f9" }}>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-300 ${expanded===item.label?"rotate-180":""}`} />
                  </button>
                  <div style={{ maxHeight:expanded===item.label?"500px":"0", overflow:"hidden", transition:"max-height 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
                    <div style={{ background:"#f8faff" }}>
                      {item.children.map(child => (
                        <a key={child} href="#" onClick={() => setOpen(false)}
                          className="flex items-center gap-2 px-8 py-2 text-gray-500 hover:text-sky-600 text-xs transition-all duration-200 hover:pl-10 group"
                          style={{ borderBottom:"1px solid #f1f5f9" }}>
                          <span className="w-1 h-1 rounded-full bg-sky-400/50 group-hover:bg-sky-500 transition-colors flex-shrink-0" />
                          {child}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a href={item.href||"#"} onClick={() => setOpen(false)}
                  className="flex items-center px-5 py-2.5 text-gray-600 hover:text-sky-600 hover:bg-sky-50 text-sm font-medium transition-all duration-200 group"
                  style={{ borderBottom:"1px solid #f1f5f9" }}>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="px-5 py-4 relative z-10" style={{ borderTop:"1px solid #e2e8f0" }}>
          <a href="#" className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white mb-3 btn-glow">
            Get Started →
          </a>
          <p className="text-gray-400 text-[9px] uppercase tracking-[0.25em] text-center">
            © {new Date().getFullYear()} B2YINFY Technologies
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;

