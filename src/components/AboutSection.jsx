import { useEffect, useRef, useState } from "react";
import { Zap, Shield, Globe, Star, Award, CheckCircle } from "lucide-react";

const useCounter = (target) => {
  const [n, setN] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    const step = target / 55;
    let c = 0;
    const t = setInterval(() => {
      c = Math.min(c + step, target);
      setN(Math.floor(c));
      if (c >= target) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [target]);
  return n;
};

const stats = [
  { val:50,  suffix:"+", label:"Happy Clients",      color:"#2563eb", bg:"#eff6ff", border:"#bfdbfe" },
  { val:5,   suffix:"+", label:"Years Experience",   color:"#0284c7", bg:"#f0f9ff", border:"#bae6fd" },
  { val:100, suffix:"+", label:"Projects Delivered", color:"#0e7490", bg:"#ecfeff", border:"#a5f3fc" },
  { val:10,  suffix:"+", label:"Tech Partners",      color:"#1d4ed8", bg:"#eff6ff", border:"#bfdbfe" },
];

const highlights = [
  { text:"Rapid agile delivery",           Icon: Zap    },
  { text:"Enterprise-grade security",      Icon: Shield },
  { text:"Global delivery, 10+ countries", Icon: Globe  },
  { text:"99.9% client satisfaction",      Icon: Star   },
];

const tags = ["Cloud","AI / ML","Cybersecurity","E-commerce","DevOps","UI/UX","Analytics","Mobile"];

const AboutSection = () => {
  const counts = [useCounter(50), useCounter(5), useCounter(100), useCounter(10)];

  return (
    <section className="h-screen w-full flex items-center relative overflow-hidden"
      style={{ paddingTop:"60px", background:"#ffffff" }}>

      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"radial-gradient(#dbeafe 1.5px,transparent 1.5px)", backgroundSize:"32px 32px", opacity:0.4 }} />

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full animate-orb"
          style={{ top:"-25%", right:"-12%", background:"radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)", filter:"blur(80px)" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full animate-orb"
          style={{ bottom:"-15%", left:"-8%", background:"radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 65%)", filter:"blur(60px)", animationDelay:"6s" }} />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">

          {/* ── Left ── */}
          <div>
            {/* Section label */}
            <div data-aos="fade-down" data-aos-delay="0" className="section-label mb-3">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              About B2YINFY
            </div>

            {/* Heading */}
            <h2 data-aos="fade-right" data-aos-delay="80"
              className="mb-3"
              style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.5rem,2.8vw,2.8rem)", fontWeight:800, letterSpacing:"-0.015em", lineHeight:1.1 }}>
              <span className="text-[#0f172a]" data-aos="fade-right" data-aos-delay="80">Your Trusted</span><br />
              <span className="text-gradient" data-aos="fade-right" data-aos-delay="160">Digital Partner</span>
            </h2>

            {/* Body */}
            <p data-aos="fade-up" data-aos-delay="200"
              className="text-slate-500 leading-relaxed mb-4 max-w-lg"
              style={{ fontSize:"clamp(12.5px,1.3vw,14.5px)" }}>
              B2YINFY Technologies is a{" "}
              <strong className="text-slate-800 font-semibold">next-generation digital solutions company</strong>{" "}
              delivering cloud infrastructure, AI-powered applications, and custom software — trusted by{" "}
              <strong className="text-blue-700">50+ clients</strong> across India &amp; globally.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {highlights.map(({ text, Icon }, i) => (
                <div key={i} data-aos="fade-right" data-aos-delay={230 + i * 55}
                  className="highlight-row flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-default"
                  style={{ border:"1px solid #f1f5f9", background:"#fafbfc" }}>
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background:"linear-gradient(135deg,#2563eb,#0ea5e9)" }}>
                    <Icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700 text-xs font-semibold">{text}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div data-aos="fade-up" data-aos-delay="460" className="flex flex-wrap gap-1.5 mb-4 stagger-children">
              {tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            {/* CTAs */}
            <div data-aos="fade-up" data-aos-delay="540" className="flex items-center gap-4">
              <a href="#" className="btn-primary btn-ripple text-sm">
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-700 text-sm font-semibold transition-colors flex items-center gap-2 group">
                <span className="w-8 h-px bg-slate-300 group-hover:bg-blue-400 transition-colors" />
                Our Story
              </a>
            </div>
          </div>

          {/* ── Right ── */}
          <div>
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-2.5 mb-2.5">
              {stats.map((s, i) => (
                <div key={i} data-aos="zoom-in-up" data-aos-delay={i * 90}
                  className="stat-card shimmer-card group cursor-default"
                  style={{ border:`1.5px solid ${s.border}`, boxShadow:`0 4px 20px ${s.color}14`,
                    padding:"clamp(12px,1.8vh,20px)" }}>
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                    style={{ background:`linear-gradient(90deg,${s.color},${s.color}55)` }} />
                  {/* Hover fill */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background:`linear-gradient(135deg,${s.bg},transparent)` }} />
                  <div className="relative z-10 pt-1">
                    <div className="font-black leading-none mb-1"
                      style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.6rem,3vw,2.6rem)", color:s.color, letterSpacing:"-0.02em" }}>
                      {counts[i]}
                      <span style={{ fontSize:"0.38em", fontWeight:900, verticalAlign:"super", marginLeft:"1px" }}>{s.suffix}</span>
                    </div>
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.18em]">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Award banner */}
            <div data-aos="fade-up" data-aos-delay="380"
              className="rounded-2xl flex items-center gap-3 group cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{ background:"linear-gradient(135deg,#eff6ff,#ecfeff)", border:"1.5px solid #bfdbfe",
                boxShadow:"0 4px 20px rgba(37,99,235,0.1)", padding:"clamp(10px,1.5vh,16px)" }}>
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#1e40af,#0ea5e9)", boxShadow:"0 6px 16px rgba(37,99,235,0.35)" }}>
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-slate-900 text-sm font-bold" style={{ fontFamily:"'Outfit',sans-serif" }}>Award-Winning Company</p>
                <p className="text-slate-500 text-xs mt-0.5">Best Digital Innovation Partner 2024</p>
              </div>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#fbbf24,#f59e0b)", boxShadow:"0 4px 12px rgba(245,158,11,0.3)" }}>
                <Award className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;





