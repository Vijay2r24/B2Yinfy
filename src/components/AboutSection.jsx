import { useEffect, useRef, useState } from "react";
import { Zap, Shield, Globe, Star, Award, CheckCircle } from "lucide-react";

const useCounter = (target) => {
  const [n, setN] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    const step = target / 50;
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

const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

const stats = [
  { val: 50, suffix: "+", label: "Happy clients", color: "#2563eb" },
  { val: 5, suffix: "+", label: "Years experience", color: "#0284c7" },
  { val: 100, suffix: "+", label: "Projects delivered", color: "#0e7490" },
  { val: 10, suffix: "+", label: "Tech partners", color: "#1d4ed8" },
];

const highlights = [
  { text: "Rapid agile delivery", Icon: Zap },
  { text: "Enterprise-grade security", Icon: Shield },
  { text: "Global delivery, 10+ countries", Icon: Globe },
  { text: "99.9% client satisfaction", Icon: Star },
];

const capabilities =
  "Cloud · AI / ML · Cybersecurity · E-commerce · DevOps · UI/UX · Analytics · Mobile";

const AboutSection = () => {
  const counts = [useCounter(50), useCounter(5), useCounter(100), useCounter(10)];
  const [sectionRef, isInView] = useInView();

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex items-center relative overflow-hidden"
      style={{ paddingTop: "80px", background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.3,
        }}
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full"
          style={{
            top: "-20%",
            right: "-5%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 68%)",
            filter: "blur(72px)",
            animation: 'pulse-slow 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[min(70vw,400px)] h-[min(70vw,400px)] rounded-full"
          style={{
            bottom: "-15%",
            left: "-10%",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: 'pulse-slow 10s ease-in-out infinite 2s',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div 
              className="section-label mb-2.5"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              About B2YINFY
            </div>

            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: "clamp(1.5rem,2.5vw,2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#0f172a",
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                marginBottom: '16px',
              }}
            >
              Your trusted <span className="text-gradient">digital partner</span>
            </h2>

            <p
              className="text-slate-600 leading-relaxed mb-6 max-w-xl"
              style={{ 
                fontSize: "clamp(14px,1.35vw,16px)",
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
              }}
            >
              B2YINFY Technologies is a{" "}
              <span className="text-slate-900 font-semibold">
                next-generation digital solutions company
              </span>{" "}
              delivering cloud infrastructure, AI-powered applications, and custom
              software — trusted by{" "}
              <span className="text-blue-700 font-semibold">50+ clients</span> across
              India and globally.
            </p>

            {/* Single row of strengths — no card grid */}
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6 max-w-xl">
              {highlights.map(({ text, Icon }, idx) => (
                <li 
                  key={text} 
                  className="flex items-center gap-3 text-slate-700"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + idx * 0.1}s`,
                  }}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50"
                    aria-hidden
                    style={{
                      transform: isInView ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
                      transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.35 + idx * 0.1}s`,
                    }}
                  >
                    <Icon className="w-4 h-4 text-blue-600" strokeWidth={2.2} />
                  </span>
                  <span className="text-sm font-medium leading-snug">{text}</span>
                </li>
              ))}
            </ul>

            <p
              className="text-xs text-slate-400 font-medium tracking-wide mb-6 max-w-xl border-l-2 border-blue-200 pl-3"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
              }}
            >
              {capabilities}
            </p>

            <div 
              className="flex flex-wrap items-center gap-4"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
              }}
            >
              <a href="#" className="btn-primary text-sm py-2.5 px-5">
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-blue-700 text-sm font-semibold transition-colors"
              >
                Our story →
              </a>
            </div>
          </div>

          {/* One consolidated trust panel */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div
              className="rounded-2xl border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] overflow-hidden"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.95)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
              }}
            >
              <div className="p-5 md:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  At a glance
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  {stats.map((s, i) => (
                    <div
                      key={s.label}
                      className="relative pl-3 border-l-2"
                      style={{ 
                        borderColor: s.color,
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + i * 0.1}s`,
                      }}
                    >
                      <div
                        className="font-black tabular-nums leading-none mb-1"
                        style={{
                          fontFamily: "'Outfit',sans-serif",
                          fontSize: "clamp(1.75rem,4vw,2.35rem)",
                          color: s.color,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {counts[i]}
                        <span className="text-[0.45em] font-black align-super ml-px">
                          {s.suffix}
                        </span>
                      </div>
                      <div className="text-slate-500 text-[11px] font-semibold leading-tight">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="flex items-center gap-3 px-5 py-4 md:px-6 border-t border-slate-100"
                style={{ 
                  background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.9s',
                }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
                    boxShadow: "0 4px 12px rgba(37,99,235,0.25)",
                    animation: isInView ? 'float 3s ease-in-out infinite' : 'none',
                  }}
                >
                  <Award className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-slate-900 text-sm font-bold truncate"
                    style={{ fontFamily: "'Outfit',sans-serif" }}
                  >
                    Award-winning partner
                  </p>
                  <p className="text-slate-500 text-xs leading-snug">
                    Best Digital Innovation Partner 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
