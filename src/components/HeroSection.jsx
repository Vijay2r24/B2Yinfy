import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

const WORDS = ["Innovation","Excellence","Transformation","Leadership","Growth"];
const STATS = [["50+","Happy Clients"],["5+","Years"],["100+","Projects"],["24/7","Support"]];

const HeroSection = () => {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => { setIdx(p => (p+1) % WORDS.length); setShow(true); }, 350);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center" style={{ paddingTop:"60px" }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=85"
          alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(10,22,40,0.82) 0%,rgba(10,22,40,0.55) 60%,rgba(10,22,40,0.72) 100%)" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom,transparent 50%,rgba(10,22,40,0.6) 100%)" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(37,99,235,0.18) 0%,transparent 55%,rgba(6,182,212,0.1) 100%)" }} />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[8,18,28,38,50,62,72,84].map((l,i) => (
          <div key={i} className="absolute rounded-full animate-particle"
            style={{ left:`${l}%`, bottom:"8%", width:i%2===0?3:2, height:i%2===0?3:2,
              background:`rgba(${i%2===0?"59,130,246":"6,182,212"},0.8)`,
              animationDelay:`${i*0.55}s`, animationDuration:`${3.5+i*0.45}s`, opacity:0 }} />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundImage:"linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Badge */}
          <div data-aos="zoom-in" data-aos-delay="0"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6"
            style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", backdropFilter:"blur(16px)" }}>
            <span className="flex gap-1.5 items-center">
              {["#3b82f6","#06b6d4","#22d3ee"].map((c,i) => (
                <span key={i} className="rounded-full animate-breathe"
                  style={{ width:i===1?7:5, height:i===1?7:5, background:c, display:"inline-block", animationDelay:`${i*0.4}s` }} />
              ))}
            </span>
            <span className="text-white/85 text-[11px] font-bold uppercase tracking-[0.22em]">B2YINFY Technologies</span>
          </div>

          {/* Main heading — word-by-word feel via line split */}
          <h1 data-aos="fade-up" data-aos-delay="100"
            className="mb-4"
            style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(2rem,5vw,4.2rem)", fontWeight:800, color:"#ffffff", letterSpacing:"-0.015em", lineHeight:1.05 }}>
            You Believe,{" "}
            <span data-aos="fade-up" data-aos-delay="200"
              style={{ background:"linear-gradient(135deg,#93c5fd 0%,#38bdf8 50%,#22d3ee 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", display:"inline-block" }}>
              We Achieve
            </span>
          </h1>

          {/* Rotating word */}
          <div data-aos="fade-up" data-aos-delay="280" className="flex items-center justify-center gap-3 mb-4 h-8">
            <span className="text-white/55 text-lg font-light tracking-wide">Driving</span>
            <span className="text-lg font-black px-3 py-0.5 rounded-lg"
              style={{ opacity:show?1:0, transform:show?"translateY(0) scale(1)":"translateY(-10px) scale(0.95)",
                transition:"all 0.38s cubic-bezier(0.16,1,0.3,1)", display:"inline-block",
                background:"linear-gradient(135deg,#38bdf8,#0ea5e9)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              {WORDS[idx]}
            </span>
          </div>

          {/* Description */}
          <p data-aos="fade-up" data-aos-delay="360"
            className="text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontSize:"clamp(13px,1.5vw,15.5px)" }}>
            B2YINFY Technologies delivers cutting-edge IT solutions — from cloud infrastructure and AI-powered applications to custom software development. Trusted by 50+ clients across India &amp; globally.
          </p>

          {/* CTAs */}
          <div data-aos="fade-up" data-aos-delay="440" className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a href="#" className="btn-primary btn-ripple text-sm px-7 py-3.5">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <button data-aos="fade-up" data-aos-delay="500" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ background:"rgba(255,255,255,0.12)", border:"2px solid rgba(255,255,255,0.35)", backdropFilter:"blur(8px)" }}>
                <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
              </div>
              <span className="text-white/75 hover:text-white text-sm font-semibold transition-colors">Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 md:gap-10">
            {STATS.map(([v,l],i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={560 + i*70}
                className="flex flex-col items-center group cursor-default hover-scale">
                <span className="font-black text-white leading-none mb-1 transition-transform duration-300 group-hover:scale-110"
                  style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.3rem,2.5vw,2rem)" }}>{v}</span>
                <span className="text-white/40 text-[9px] uppercase tracking-[0.22em] font-semibold">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{ background:"linear-gradient(to top,rgba(10,22,40,0.7) 0%,transparent 100%)" }} />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float-y">
        <div className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border:"2px solid rgba(255,255,255,0.25)" }}>
          <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

