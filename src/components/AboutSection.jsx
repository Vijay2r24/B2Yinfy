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
  { val: 50,  suffix: "+", label: "Happy Clients",      color: "#0ea5e9" },
  { val: 5,   suffix: "+", label: "Years Experience",   color: "#06b6d4" },
  { val: 100, suffix: "+", label: "Projects Delivered", color: "#0ea5e9" },
  { val: 10,  suffix: "+", label: "Tech Partners",      color: "#38bdf8" },
];

const highlights = [
  "Rapid agile delivery",
  "Enterprise-grade security",
  "Global delivery, 10+ countries",
  "99.9% client satisfaction",
];

const btnStyle = {
  background: "linear-gradient(135deg,rgba(14,165,233,0.15),rgba(6,182,212,0.1))",
  border: "1px solid rgba(14,165,233,0.35)",
  color: "#7dd3fc",
  boxShadow: "0 0 12px rgba(14,165,233,0.1)",
};

const AboutSection = () => {
  const counts = [useCounter(50), useCounter(5), useCounter(100), useCounter(10)];

  return (
    <section className="h-screen w-full flex items-center relative overflow-hidden section-dark" style={{ paddingTop:"64px" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full animate-orb"
          style={{ top: "-20%", right: "-10%", background: "radial-gradient(circle,rgba(14,165,233,0.1) 0%,transparent 65%)", filter: "blur(100px)" }} />
        <div className="absolute w-[350px] h-[350px] rounded-full animate-orb"
          style={{ bottom: "-10%", left: "-5%", background: "radial-gradient(circle,rgba(6,182,212,0.08) 0%,transparent 65%)", filter: "blur(70px)", animationDelay: "5s" }} />
      </div>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-0">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-14 items-center">

          {/* Left */}
          <div className="animate-slide-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 glass">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse-soft" />
              <span className="text-sky-300 text-[11px] font-semibold uppercase tracking-[0.2em]">About B2YINFY</span>
            </div>

            {/* Heading */}
            <h2 className="mb-3 leading-tight" style={{ fontFamily: "'Outfit',sans-serif",
              fontSize: "clamp(1.4rem,2.8vw,2.6rem)", fontWeight: 800, letterSpacing: "-0.025em" }}>
              <span className="text-white">Your Trusted</span><br />
              <span className="text-glow">Digital Partner</span>
            </h2>

            {/* Description */}
            <p className="text-white/50 text-xs leading-relaxed mb-3 max-w-lg">
              B2YINFY Technologies is a <strong className="text-white/80 font-semibold">next-generation digital solutions company</strong> delivering cloud infrastructure, AI-powered applications, and custom software — trusted by <strong className="text-white/80">50+ clients</strong> across India &amp; globally.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 px-2.5 py-2 rounded-lg glass">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                  <span className="text-white/50 text-[11px]">{h}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {["Cloud","AI / ML","Cybersecurity","E-commerce","DevOps","UI/UX","Analytics","Mobile"].map(tag => (
                <span key={tag} className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-white/40 hover:text-white/70 transition-colors cursor-default glass">{tag}</span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 hover:brightness-125"
                style={btnStyle}>
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#" className="text-white/35 hover:text-white/65 text-xs transition-colors flex items-center gap-1.5">
                <span className="w-5 h-px bg-white/25" />Our Story
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="animate-slide-right">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {stats.map((s, i) => (
                <div key={i} className="glass-card rounded-xl p-4 relative overflow-hidden group cursor-default">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${s.color}18 0%, transparent 70%)` }} />
                  <div className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${s.color}70, transparent)` }} />
                  <div className="relative z-10">
                    <div className="text-3xl font-black mb-0.5 leading-none"
                      style={{ fontFamily: "'Outfit',sans-serif", color: s.color }}>
                      {counts[i]}{s.suffix}
                    </div>
                    <div className="text-white/35 text-[10px] uppercase tracking-[0.15em] font-medium">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Award badge */}
            <div className="mt-2.5 p-3 rounded-xl glass flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#0ea5e9,#06b6d4)" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="text-white/75 text-xs font-semibold">Award-Winning Company</p>
                <p className="text-white/30 text-[10px] mt-0.5">Best Digital Innovation Partner 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


