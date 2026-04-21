import { useEffect, useState } from "react";

const WORDS = ["Innovation", "Excellence", "Transformation", "Leadership", "Growth"];

const HeroSection = () => {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => { setIdx(p => (p + 1) % WORDS.length); setShow(true); }, 380);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center" style={{ paddingTop:"64px" }}>

      {/* Full-width background — team working photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=90"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay — center-focused, edges darker */}
        <div className="absolute inset-0"
          style={{ background:"linear-gradient(to bottom,rgba(10,10,30,0.55) 0%,rgba(10,10,30,0.45) 50%,rgba(10,10,30,0.75) 100%)" }} />
        {/* Left-right vignette */}
        <div className="absolute inset-0"
          style={{ background:"radial-gradient(ellipse at center,transparent 40%,rgba(5,5,20,0.5) 100%)" }} />
        {/* Subtle color tint */}
        <div className="absolute inset-0"
          style={{ background:"linear-gradient(135deg,rgba(99,102,241,0.15) 0%,transparent 50%,rgba(14,165,233,0.1) 100%)" }} />
      </div>

      {/* Animated particles over photo */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[10,20,30,40,50,60,70,80].map((l,i) => (
          <div key={i} className="absolute rounded-full animate-particle"
            style={{ left:`${l}%`, bottom:"5%", width:3, height:3,
              background:`rgba(${i%2===0?"99,102,241":"14,165,233"},0.7)`,
              animationDelay:`${i*0.5}s`, animationDuration:`${4+i*0.4}s`, opacity:0 }} />
        ))}
      </div>

      {/* Content — centered like reference */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 text-center pt-8">
        <div className="max-w-4xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-up"
            style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.25)", backdropFilter:"blur(12px)" }}>
            <span className="flex gap-1.5">
              {["#6366f1","#8b5cf6","#0ea5e9"].map((c,i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full animate-pulse-soft"
                  style={{ background:c, animationDelay:`${i*0.3}s` }} />
              ))}
            </span>
            <span className="text-white/80 text-xs font-semibold uppercase tracking-[0.2em]">B2YINFY Technologies</span>
          </div>

          {/* Main heading */}
          <h1 className="mb-4 animate-fade-up delay-100"
            style={{ fontFamily:"'Outfit',sans-serif",
              fontSize:"clamp(1.8rem,4.5vw,3.8rem)",
              fontWeight:800, lineHeight:1.1,
              letterSpacing:"-0.025em", color:"#ffffff" }}>
            You Believe,<br />
            <span style={{ background:"linear-gradient(135deg,#a78bfa,#60a5fa,#34d399)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              We Achieve
            </span>
          </h1>

          {/* Rotating word */}
          <div className="flex items-center justify-center gap-3 mb-3 h-7 animate-fade-up delay-200">
            <span className="text-white/60 text-base font-light">Driving</span>
            <span className="text-base font-bold"
              style={{ opacity:show?1:0, transform:show?"translateY(0)":"translateY(-8px)",
                transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)", display:"inline-block",
                background:"linear-gradient(135deg,#fb923c,#f472b6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              {WORDS[idx]}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-2xl mx-auto animate-fade-up delay-300">
            B2YINFY Technologies delivers cutting-edge IT solutions — from cloud infrastructure and AI-powered applications to custom software development. Trusted by 50+ clients across India &amp; globally to drive digital transformation.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-up delay-400">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white btn-glow">
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            {/* Play button */}
            <button className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background:"rgba(255,255,255,0.15)", border:"2px solid rgba(255,255,255,0.4)", backdropFilter:"blur(8px)" }}>
                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">Watch Demo</span>
            </button>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 animate-fade-up delay-500">
            {[["50+","Happy Clients"],["5+","Years"],["100+","Projects"],["24/7","Support"]].map(([v,l],i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xl font-black text-white leading-none"
                  style={{ fontFamily:"'Outfit',sans-serif" }}>{v}</span>
                <span className="text-white/45 text-[9px] uppercase tracking-[0.2em] mt-0.5">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"
        style={{ background:"linear-gradient(to top,rgba(10,10,30,0.8) 0%,transparent 100%)" }} />
    </section>
  );
};

export default HeroSection;
