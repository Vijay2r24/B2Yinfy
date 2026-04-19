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
    <section className="relative h-screen w-full overflow-hidden flex items-center" style={{ paddingTop: "64px" }}>

      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=90"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,9,18,0.95) 0%, rgba(6,9,18,0.7) 55%, rgba(6,9,18,0.35) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,9,18,1) 0%, transparent 45%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.15) 0%, transparent 60%)" }} />
      </div>

      {/* Animated mesh grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-mesh"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at 65% 50%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 65% 50%, black 30%, transparent 75%)",
          }}
        />
      </div>

      {/* Large glowing orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full animate-orb"
          style={{ width: 700, height: 700, top: "-15%", right: "-5%",
            background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)",
            filter: "blur(60px)", animationDuration: "16s" }} />
        <div className="absolute rounded-full animate-orb"
          style={{ width: 500, height: 500, bottom: "-10%", left: "5%",
            background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
            filter: "blur(50px)", animationDelay: "5s", animationDuration: "20s" }} />
        <div className="absolute rounded-full animate-orb-pulse"
          style={{ width: 300, height: 300, top: "35%", right: "25%",
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
            filter: "blur(40px)", animationDuration: "5s" }} />
        <div className="absolute rounded-full animate-orb"
          style={{ width: 200, height: 200, top: "10%", left: "40%",
            background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
            filter: "blur(30px)", animationDelay: "8s", animationDuration: "12s" }} />
      </div>

      {/* Rotating rings */}
      <div className="absolute z-0 pointer-events-none hidden xl:block"
        style={{ right: "6%", top: "50%", transform: "translateY(-50%)" }}>
        <div className="relative" style={{ width: 460, height: 460 }}>
          <div className="absolute inset-0 rounded-full animate-rotate-cw"
            style={{ border: "1px solid rgba(99,102,241,0.2)", borderTopColor: "rgba(99,102,241,0.7)",
              boxShadow: "0 0 30px rgba(99,102,241,0.1)" }} />
          <div className="absolute rounded-full animate-rotate-ccw"
            style={{ inset: 40, border: "1px solid rgba(139,92,246,0.15)", borderBottomColor: "rgba(139,92,246,0.6)" }} />
          <div className="absolute rounded-full animate-rotate-cw"
            style={{ inset: 90, border: "1px solid rgba(59,130,246,0.12)", borderLeftColor: "rgba(59,130,246,0.5)", animationDuration: "8s" }} />
          <div className="absolute rounded-full animate-rotate-ccw"
            style={{ inset: 140, border: "1px solid rgba(168,85,247,0.1)", borderTopColor: "rgba(168,85,247,0.4)", animationDuration: "6s" }} />
          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full animate-pulse-soft"
              style={{ background: "radial-gradient(circle, rgba(99,102,241,0.9) 0%, rgba(99,102,241,0.3) 60%, transparent 100%)",
                boxShadow: "0 0 20px rgba(99,102,241,0.8), 0 0 40px rgba(99,102,241,0.4)" }} />
          </div>
          {/* Orbit dots */}
          {[
            { deg: 0,   color: "#6366f1", glow: "rgba(99,102,241,0.8)"  },
            { deg: 90,  color: "#8b5cf6", glow: "rgba(139,92,246,0.8)"  },
            { deg: 180, color: "#3b82f6", glow: "rgba(59,130,246,0.8)"  },
            { deg: 270, color: "#a855f7", glow: "rgba(168,85,247,0.8)"  },
          ].map((o, i) => (
            <div key={i} className="absolute inset-0 animate-rotate-cw" style={{ animationDuration: "16s" }}>
              <div className="absolute w-2 h-2 rounded-full"
                style={{ top: "50%", left: "50%",
                  transform: `rotate(${o.deg}deg) translateX(220px) translateY(-50%)`,
                  background: o.color, boxShadow: `0 0 8px ${o.glow}` }} />
            </div>
          ))}
        </div>
      </div>

      {/* Rising particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[
          { left: "15%", delay: "0s",   size: 4, color: "rgba(99,102,241,0.7)"  },
          { left: "25%", delay: "0.8s", size: 3, color: "rgba(139,92,246,0.6)"  },
          { left: "35%", delay: "1.6s", size: 5, color: "rgba(59,130,246,0.5)"  },
          { left: "45%", delay: "0.4s", size: 3, color: "rgba(168,85,247,0.6)"  },
          { left: "20%", delay: "2.0s", size: 3, color: "rgba(139,92,246,0.7)"  },
          { left: "30%", delay: "2.4s", size: 4, color: "rgba(99,102,241,0.6)"  },
        ].map((p, i) => (
          <div key={i} className="absolute rounded-full animate-particle"
            style={{ left: p.left, bottom: "5%", width: p.size, height: p.size,
              background: p.color, animationDelay: p.delay,
              animationDuration: `${4 + i * 0.5}s`, filter: "blur(1px)", opacity: 0 }} />
        ))}
      </div>

      {/* Ripple waves */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[
          { cx: "65%", cy: "45%", color: "rgba(99,102,241,0.5)",  delay: "0s"   },
          { cx: "65%", cy: "45%", color: "rgba(99,102,241,0.3)",  delay: "1s"   },
          { cx: "65%", cy: "45%", color: "rgba(99,102,241,0.15)", delay: "2s"   },
          { cx: "75%", cy: "30%", color: "rgba(139,92,246,0.4)",  delay: "0.5s" },
          { cx: "75%", cy: "30%", color: "rgba(139,92,246,0.2)",  delay: "1.5s" },
        ].map((r, i) => (
          <div key={i} className="absolute rounded-full animate-ripple"
            style={{ left: r.cx, top: r.cy, width: 20, height: 20,
              marginLeft: -10, marginTop: -10,
              border: `2px solid ${r.color}`, animationDelay: r.delay, opacity: 0 }} />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="max-w-2xl w-full">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 glass animate-fade-up">
            <span className="flex gap-1">
              {["#6366f1","#8b5cf6","#3b82f6"].map((c,i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full animate-pulse-soft"
                  style={{ background:c, animationDelay:`${i*0.4}s` }} />
              ))}
            </span>
            <span className="text-white/60 text-[11px] font-medium uppercase tracking-[0.2em]">B2YINFY Technologies</span>
          </div>

          {/* Heading */}
          <h1 className="mb-3 animate-fade-up delay-100"
            style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(2.4rem,5.5vw,5rem)",
              fontWeight:800, lineHeight:1.05, letterSpacing:"-0.025em" }}>
            <span className="text-white block">We Build</span>
            <span className="text-glow block">Digital Futures</span>
          </h1>

          {/* Rotating word */}
          <div className="flex items-center gap-3 mb-4 h-8 animate-fade-up delay-200">
            <span className="text-white/40 text-base font-light">Driving</span>
            <span className="text-base font-bold text-glow-warm"
              style={{ opacity:show?1:0, transform:show?"translateY(0)":"translateY(-10px)",
                transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)", display:"inline-block", minWidth:180 }}>
              {WORDS[idx]}
            </span>
          </div>

          <p className="text-white/45 text-sm leading-relaxed mb-7 max-w-md animate-fade-up delay-300">
            End-to-end partner for cloud solutions, AI, digital transformation,
            and innovative software development. Trusted by 50+ clients globally.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-10 animate-fade-up delay-400">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              style={{ background:"linear-gradient(135deg,rgba(14,165,233,0.15),rgba(6,182,212,0.1))", border:"1px solid rgba(14,165,233,0.35)", color:"#7dd3fc", boxShadow:"0 0 16px rgba(14,165,233,0.12)" }}>
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white/50 hover:text-white/80 transition-all duration-300"
              style={{ border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.04)" }}>
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ background:"rgba(255,255,255,0.08)" }}>▶</span>
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 animate-fade-up delay-500">
            {[["50+","Clients"],["5+","Years"],["100+","Projects"],["24/7","Support"]].map(([v,l],i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xl font-black text-white leading-none" style={{ fontFamily:"'Outfit',sans-serif" }}>{v}</span>
                <span className="text-white/30 text-[9px] uppercase tracking-[0.2em] mt-0.5">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;



