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
        style={{ background: "linear-gradient(to bottom, rgba(6,9,18,0.8) 0%, transparent 100%)" }}>
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto"
          style={{
            background: "rgba(6,9,18,0.55)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "0.875rem",
            padding: "5px 14px",
            height: "52px",
          }}>

          {/* Logo */}
          <a href="/" className="group flex items-center gap-2.5 flex-shrink-0">
            <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105" style={{ paddingRight: 10 }}>
              {/* b2y letters */}
              <div className="flex items-end leading-none select-none"
                style={{ fontFamily:"'Outfit',sans-serif", fontWeight:900, lineHeight:1, gap:1 }}>
                <span style={{ fontSize:36, background:"linear-gradient(170deg,#3b82f6,#1d4ed8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>b</span>
                <span style={{ fontSize:24, background:"linear-gradient(170deg,#3b82f6,#1d4ed8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:2 }}>2</span>
                <span style={{ fontSize:36, background:"linear-gradient(170deg,#0ea5e9,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>y</span>
              </div>
              {/* Globe on top-right of y */}
              <div className="absolute rounded-full flex items-center justify-center"
                style={{ width:18, height:18, top:-4, right:-2, background:"linear-gradient(135deg,#0ea5e9,#06b6d4)", boxShadow:"0 0 10px rgba(14,165,233,0.7)" }}>
                <svg viewBox="0 0 14 14" width="11" height="11" fill="none" stroke="white" strokeWidth="1.2">
                  <circle cx="7" cy="7" r="5.5"/>
                  <ellipse cx="7" cy="7" rx="2.8" ry="5.5"/>
                  <line x1="1.5" y1="7" x2="12.5" y2="7"/>
                  <line x1="2.2" y1="4.5" x2="11.8" y2="4.5"/>
                  <line x1="2.2" y1="9.5" x2="11.8" y2="9.5"/>
                </svg>
              </div>
            </div>
            {/* Text */}
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-black text-sm tracking-[0.1em] text-white" style={{ fontFamily:"'Outfit',sans-serif" }}>B2YINFY</span>
              <span className="text-white/35 text-[7px] tracking-[0.25em] uppercase mt-0.5">Technologies</span>
            </div>
          </a>

          {/* Nav pill */}
          <nav className="hidden lg:flex items-center gap-0.5 px-4 py-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
            {navLinks.map(l => (
              <a key={l} href="#"
                className="text-white/50 hover:text-white text-[11px] font-medium px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-white/8 relative group">
                {l}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-indigo-400 transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a href="#" className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300"
              style={{ background:"linear-gradient(135deg,rgba(14,165,233,0.12),rgba(6,182,212,0.08))", border:"1px solid rgba(14,165,233,0.3)", color:"#7dd3fc" }}>
              Get Started
            </a>
            <button onClick={() => setOpen(true)} aria-label="Menu"
              className="w-9 h-9 rounded-xl flex flex-col justify-center items-center gap-1.5 transition-all duration-300 hover:bg-white/10 group"
              style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.1)" }}>
              <span className="block w-4 h-0.5 bg-white/70 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-white" />
              <span className="block w-3 h-0.5 bg-white/50 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-white" />
              <span className="block w-4 h-0.5 bg-white/70 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div className="fixed inset-0 z-[59] transition-all duration-500"
        style={{ background:"rgba(6,9,18,0.7)", backdropFilter:open?"blur(8px)":"blur(0px)",
          opacity:open?1:0, pointerEvents:open?"auto":"none" }}
        onClick={() => setOpen(false)} />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-[320px] z-[60] flex flex-col"
        style={{ background:"linear-gradient(160deg,#050d2e 0%,#071030 60%,#030820 100%)",
          borderLeft:"1px solid rgba(59,130,246,0.15)",
          boxShadow:"-30px 0 80px rgba(0,0,0,0.8), inset -1px 0 0 rgba(59,130,246,0.1)",
          transform:open?"translateX(0)":"translateX(100%)",
          transition:"transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}>

        {/* Sidebar orb */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(59,130,246,0.12) 0%,transparent 70%)", filter:"blur(40px)", transform:"translate(30%,-30%)" }} />

        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 py-4 relative z-10"
          style={{ borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2.5">
            {/* Same CSS logo */}
            <div className="relative flex-shrink-0" style={{ paddingRight: 8 }}>
              <div className="flex items-end leading-none select-none"
                style={{ fontFamily:"'Outfit',sans-serif", fontWeight:900, lineHeight:1, gap:1 }}>
                <span style={{ fontSize:30, background:"linear-gradient(170deg,#3b82f6,#1d4ed8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>b</span>
                <span style={{ fontSize:20, background:"linear-gradient(170deg,#3b82f6,#1d4ed8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:2 }}>2</span>
                <span style={{ fontSize:30, background:"linear-gradient(170deg,#0ea5e9,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>y</span>
              </div>
              <div className="absolute rounded-full flex items-center justify-center"
                style={{ width:16, height:16, top:-3, right:-2, background:"linear-gradient(135deg,#0ea5e9,#06b6d4)", boxShadow:"0 0 8px rgba(14,165,233,0.6)" }}>
                <svg viewBox="0 0 14 14" width="10" height="10" fill="none" stroke="white" strokeWidth="1.2">
                  <circle cx="7" cy="7" r="5.5"/>
                  <ellipse cx="7" cy="7" rx="2.8" ry="5.5"/>
                  <line x1="1.5" y1="7" x2="12.5" y2="7"/>
                  <line x1="2.2" y1="4.5" x2="11.8" y2="4.5"/>
                  <line x1="2.2" y1="9.5" x2="11.8" y2="9.5"/>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-white font-black text-xs tracking-[0.08em]" style={{ fontFamily:"'Outfit',sans-serif" }}>B2YINFY</p>
              <p className="text-white/30 text-[7px] tracking-[0.25em] uppercase">Technologies</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white/10">
            <X className="w-4 h-4 text-white/50" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-3 relative z-10" style={{ scrollbarWidth:"none" }}>
          {menuItems.map(item => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-6 py-3 text-white/60 hover:text-white transition-all duration-200 text-sm font-medium group"
                    style={{ borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-white/25 transition-transform duration-300 ${expanded===item.label?"rotate-180":""}`} />
                  </button>
                  <div style={{ maxHeight:expanded===item.label?"500px":"0", overflow:"hidden", transition:"max-height 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
                    <div style={{ background:"rgba(0,0,0,0.25)" }}>
                      {item.children.map(child => (
                        <a key={child} href="#" onClick={() => setOpen(false)}
                          className="flex items-center gap-2 px-9 py-2.5 text-white/40 hover:text-white/80 text-xs transition-all duration-200 hover:pl-11 group"
                          style={{ borderBottom:"1px solid rgba(255,255,255,0.03)" }}>
                          <span className="w-1 h-1 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors flex-shrink-0" />
                          {child}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a href={item.href||"#"} onClick={() => setOpen(false)}
                  className="flex items-center px-6 py-3 text-white/60 hover:text-white text-sm font-medium transition-all duration-200 group"
                  style={{ borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="px-6 py-5 relative z-10" style={{ borderTop:"1px solid rgba(255,255,255,0.05)" }}>
          <a href="#" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold mb-3 transition-all duration-300"
            style={{ background:"linear-gradient(135deg,rgba(14,165,233,0.15),rgba(6,182,212,0.1))", border:"1px solid rgba(14,165,233,0.35)", color:"#7dd3fc" }}>
            Get Started →
          </a>
          <p className="text-white/20 text-[9px] uppercase tracking-[0.25em] text-center">
            © {new Date().getFullYear()} B2YINFY Technologies
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;

