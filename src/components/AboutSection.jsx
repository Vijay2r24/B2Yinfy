import { useEffect, useRef, useState } from "react";

const useCounter = (target) => {
  const [n, setN] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    const step = target / 60;
    let c = 0;
    const t = setInterval(() => {
      c = Math.min(c + step, target);
      setN(Math.floor(c));
      if (c >= target) clearInterval(t);
    }, 18);
    return () => clearInterval(t);
  }, [target]);
  return n;
};

const stats = [
  { val: 50,  suffix: "+", label: "Happy Clients",      color: "#0284c7", border: "#bae6fd", icon: "👥" },
  { val: 5,   suffix: "+", label: "Years Experience",   color: "#0891b2", border: "#a5f3fc", icon: "📅" },
  { val: 100, suffix: "+", label: "Projects Delivered", color: "#1d4ed8", border: "#bfdbfe", icon: "🚀" },
  { val: 10,  suffix: "+", label: "Tech Partners",      color: "#6d28d9", border: "#ddd6fe", icon: "🤝" },
];

const highlights = [
  "Rapid agile delivery",
  "Enterprise-grade security",
  "Global delivery, 10+ countries",
  "99.9% client satisfaction",
];

const tags = ["Cloud","AI / ML","Cybersecurity","E-commerce","DevOps","UI/UX","Analytics","Mobile"];

const AboutSection = () => {
  const counts = [useCounter(50), useCounter(5), useCounter(100), useCounter(10)];

  return (
    <section className="h-screen w-full flex items-center relative overflow-hidden section-dark" style={{ paddingTop:"72px" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full animate-orb"
          style={{ top:"-20%", right:"-10%", background:"radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 65%)", filter:"blur(100px)" }} />
        <div className="absolute w-[350px] h-[350px] rounded-full animate-orb"
          style={{ bottom:"-10%", left:"-5%", background:"radial-gradient(circle,rgba(6,182,212,0.1) 0%,transparent 65%)", filter:"blur(70px)", animationDelay:"5s" }} />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-4">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-14 items-center">

          {/* Left */}
          <div className="animate-slide-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
              style={{ background:"linear-gradient(135deg,#dbeafe,#e0f2fe)", border:"1px solid #93c5fd" }}>
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse-soft flex-shrink-0" />
              <span className="text-sky-700 text-[11px] font-bold uppercase tracking-[0.15em]">About B2YINFY</span>
            </div>

            <h2 className="mb-3 leading-tight" style={{ fontFamily:"'Outfit',sans-serif",
              fontSize:"clamp(1.4rem,2.8vw,2.6rem)", fontWeight:800, letterSpacing:"-0.025em" }}>
              <span className="text-slate-900">Your Trusted</span><br />
              <span className="text-glow">Digital Partner</span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed mb-4 max-w-lg">
              B2YINFY Technologies is a <strong className="text-slate-900 font-semibold">next-generation digital solutions company</strong> delivering cloud infrastructure, AI-powered applications, and custom software — trusted by <strong className="text-slate-900">50+ clients</strong> across India &amp; globally.
            </p>

            {/* Highlights — NO white cards, just icon + text */}
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background:"linear-gradient(135deg,#0ea5e9,#0284c7)" }}>
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-700 text-xs font-medium">{h}</span>
                </div>
              ))}
            </div>

            {/* Tags — minimal, no white bg */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {tags.map(tag => (
                <span key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                  style={{ background:"rgba(14,165,233,0.1)", color:"#0369a1", border:"1px solid rgba(14,165,233,0.25)" }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white btn-glow">
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors flex items-center gap-2">
                <span className="w-6 h-px bg-slate-400" />Our Story
              </a>
            </div>
          </div>

          {/* Right — premium stats */}
          <div className="animate-slide-right">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <div key={i}
                  className="rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{ background:"#ffffff", border:`1.5px solid ${s.border}`, boxShadow:`0 4px 24px ${s.color}20` }}>
                  {/* Left colored strip */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl"
                    style={{ background:`linear-gradient(180deg,${s.color},${s.color}50)` }} />
                  <div className="pl-5 pr-4 py-5">
                    {/* Giant number */}
                    <div className="leading-none font-black mb-2"
                      style={{
                        fontFamily:"'Outfit',sans-serif",
                      fontSize:"clamp(2rem,3.5vw,2.8rem)",
                        color: s.color,
                        letterSpacing:"-0.04em",
                        lineHeight: 0.9,
                      }}>
                      {counts[i]}<span style={{ fontSize:"0.35em", fontWeight:900, verticalAlign:"top", marginTop:"0.2em", display:"inline-block", marginLeft:"1px" }}>{s.suffix}</span>
                    </div>
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.18em]">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Award */}
            <div className="mt-3 p-4 rounded-2xl flex items-center gap-3"
              style={{ background:"linear-gradient(135deg,#f0f9ff,#e0f2fe)", border:"1.5px solid #7dd3fc" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background:"linear-gradient(135deg,#0ea5e9,#0284c7)", boxShadow:"0 4px 12px rgba(14,165,233,0.35)" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-800 text-sm font-bold">Award-Winning Company</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Best Digital Innovation Partner 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
