import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/company-hero.mp4";

const TAGLINES = [
  "Driving Digital Innovation",
  "Building World-Class Software",
  "Transforming Businesses with AI",
  "Delivering Cloud Excellence",
  "Powering Your Digital Future",
];

/* ── Typewriter hook ── */
const useTypewriter = (text, speed = 60, startDelay = 0) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
};

const HeroSection = () => {
  const [tagIdx, setTagIdx] = useState(0);
  const [tagShow, setTagShow] = useState(true);

  const line1 = useTypewriter("You Believe,", 55, 300);
  const line2 = useTypewriter("We Achieve", 65, 300 + "You Believe,".length * 55 + 200);

  useEffect(() => {
    const t = setInterval(() => {
      setTagShow(false);
      setTimeout(() => { setTagIdx(p => (p + 1) % TAGLINES.length); setTagShow(true); }, 400);
    }, 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ paddingTop: "60px" }}>

      {/* Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom,rgba(5,10,25,0.52) 0%,rgba(5,10,25,0.42) 50%,rgba(5,10,25,0.68) 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full">
        <div className="max-w-3xl mx-auto">

          {/* Line 1 — typewriter */}
          <h1 className="mb-0 min-h-[1.1em]"
            style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(2rem,4.5vw,4rem)", fontWeight:900,
              color:"#ffffff", letterSpacing:"-0.02em", lineHeight:1.1,
              textShadow:"0 2px 20px rgba(0,0,0,0.35)" }}>
            {line1.displayed}
            {!line1.done && (
              <span className="inline-block w-0.5 h-[0.85em] bg-white ml-1 align-middle"
                style={{ animation:"blink 0.75s step-end infinite" }} />
            )}
          </h1>

          {/* Line 2 — typewriter with gradient */}
          <h1 className="mb-6 min-h-[1.1em]"
            style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(2rem,4.5vw,4rem)", fontWeight:900,
              letterSpacing:"-0.02em", lineHeight:1.1,
              background:"linear-gradient(135deg,#60a5fa 0%,#38bdf8 50%,#22d3ee 100%)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              filter:"drop-shadow(0 2px 16px rgba(56,189,248,0.3))" }}>
            {line2.displayed}
            {line1.done && !line2.done && (
              <span className="inline-block w-0.5 h-[0.85em] ml-1 align-middle"
                style={{ background:"#38bdf8", animation:"blink 0.75s step-end infinite" }} />
            )}
          </h1>

          {/* Rotating tagline */}
          <div className="flex justify-center mb-8" style={{ minHeight:"36px" }}>
            <span style={{
              opacity: tagShow ? 1 : 0,
              transform: tagShow ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.96)",
              transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              display: "inline-block",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(10px)",
              color: "rgba(255,255,255,0.92)",
              padding: "7px 20px",
              borderRadius: "999px",
              fontSize: "clamp(12px,1.3vw,14px)",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}>
              ✦ &nbsp;{TAGLINES[tagIdx]}
            </span>
          </div>

          {/* CTA */}
          <div data-aos="fade-up" data-aos-delay="200">
            <a href="#" className="btn-primary btn-ripple px-8 py-3.5 font-bold"
              style={{ fontSize:"15px" }}>
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{ background:"linear-gradient(to top,rgba(5,10,25,0.6) 0%,transparent 100%)" }} />

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 animate-float-y">
        <div className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border:"2px solid rgba(255,255,255,0.3)" }}>
          <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
        </div>
        <span className="text-white/30 text-[8px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
      </div>

      {/* Blink keyframe */}
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
};

export default HeroSection;
