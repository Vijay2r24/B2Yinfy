import { useState, useEffect, useRef } from "react";
import {
  Monitor, ShoppingBag, HeartPulse, Users, Building2,
  Landmark, GraduationCap, Factory, ArrowUpRight, TrendingUp,
} from "lucide-react";

const industries = [
  {
    id: "it",
    title: "Information Technology",
    short: "IT & Software",
    desc: "Custom SaaS platforms, cloud infrastructure, DevOps pipelines, and AI-driven tools that accelerate product delivery.",
    stat: "50+", statLabel: "Tech Clients",
    color: "#2563eb", light: "#eff6ff",
    Icon: Monitor,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=960&h=640&fit=crop&crop=entropy&q=88&auto=format",
    imgPosition: "50% 35%",
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    short: "Online Commerce",
    desc: "Headless storefronts, marketplace integrations, and commerce platforms that convert visitors into loyal customers.",
    stat: "3×", statLabel: "Revenue Growth",
    color: "#dc2626", light: "#fef2f2",
    Icon: ShoppingBag,
    img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=960&h=640&fit=crop&crop=entropy&q=88&auto=format",
    imgPosition: "50% 45%",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    short: "MedTech & Clinics",
    desc: "HIPAA-compliant patient portals, telemedicine apps, EHR integrations, and AI-powered diagnostics tools.",
    stat: "99%", statLabel: "Data Security",
    color: "#059669", light: "#ecfdf5",
    Icon: HeartPulse,
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=960&h=640&fit=crop&crop=entropy&q=88&auto=format",
    imgPosition: "55% 40%",
  },
  {
    id: "crm",
    title: "CRM & Sales",
    short: "Sales Automation",
    desc: "Custom CRM platforms, sales automation, lead management, and customer success tools that close more deals.",
    stat: "40%", statLabel: "Sales Increase",
    color: "#7c3aed", light: "#f5f3ff",
    Icon: Users,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=960&h=640&fit=crop&crop=entropy&q=88&auto=format",
    imgPosition: "50% 25%",
  },
  {
    id: "realestate",
    title: "Real Estate",
    short: "PropTech",
    desc: "Property listing portals, virtual tours, agent CRM, and smart analytics dashboards for modern real estate.",
    stat: "60+", statLabel: "Projects Done",
    color: "#d97706", light: "#fffbeb",
    Icon: Building2,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=960&h=640&fit=crop&crop=entropy&q=88&auto=format",
    imgPosition: "50% 55%",
  },
  {
    id: "finance",
    title: "Finance & Banking",
    short: "FinTech",
    desc: "Secure digital banking apps, payment processing, fraud detection, and investment platforms built to compliance standards.",
    stat: "ISO", statLabel: "27001 Compliant",
    color: "#0891b2", light: "#ecfeff",
    Icon: Landmark,
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=960&h=640&fit=crop&crop=entropy&q=88&auto=format",
    imgPosition: "50% 40%",
  },
  {
    id: "education",
    title: "Education & EdTech",
    short: "LMS & E-Learning",
    desc: "Learning management systems, virtual classrooms, student portals, and AI-powered tutoring tools.",
    stat: "10K+", statLabel: "Students Served",
    color: "#0284c7", light: "#f0f9ff",
    Icon: GraduationCap,
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=960&h=640&fit=crop&crop=entropy&q=88&auto=format",
    imgPosition: "50% 35%",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    short: "Industry 4.0 & IoT",
    desc: "Smart factory solutions, IoT integrations, supply chain ERP, and predictive maintenance systems.",
    stat: "30%", statLabel: "Efficiency Gain",
    color: "#475569", light: "#f1f5f9",
    Icon: Factory,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=960&h=640&fit=crop&crop=entropy&q=88&auto=format",
    imgPosition: "50% 42%",
  },
];

const VISIBLE = 4;

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

const IndustriesSection = () => {
  const [hovered, setHovered] = useState(null);
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const [sectionRef, isInView] = useInView();
  const timer = useRef(null);
  const maxIdx = industries.length - VISIBLE;

  const next = () => setCurrent((p) => Math.min(p + 1, maxIdx));
  const prev = () => setCurrent((p) => Math.max(p - 1, 0));
  const pause = () => {
    setIsAuto(false);
    clearInterval(timer.current);
  };
  const resume = () => setIsAuto(true);

  useEffect(() => {
    if (!isAuto) return;
    timer.current = setInterval(
      () => setCurrent((p) => (p >= maxIdx ? 0 : p + 1)),
      4000
    );
    return () => clearInterval(timer.current);
  }, [isAuto, maxIdx]);

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
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            top: "15%",
            right: "-10%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: 'pulse-slow 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            bottom: "-15%",
            left: "-8%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: 'pulse-slow 10s ease-in-out infinite 2s',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="flex items-end justify-between mb-5">
          <div>
            <div
              className="section-label mb-2.5"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              Industries We Serve
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
              Built for <span className="text-gradient">Every Industry</span>
            </h2>
            <p
              className="text-slate-600 text-base font-medium max-w-2xl"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
              }}
            >
              Deep domain expertise across <strong className="text-slate-900">8+ industries</strong> — solutions tailored to your sector
            </p>
          </div>
          <a
            href="#"
            className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            All Industries <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div
          className="overflow-hidden py-3 -my-3"
          onMouseEnter={pause}
          onMouseLeave={resume}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          }}
        >
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 16px / ${VISIBLE})))`,
            }}
          >
            {industries.map((ind, i) => {
              const isHov = hovered === i;
              return (
                <article
                  key={ind.id}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={[
                    "flex flex-col flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer bg-white group",
                    "border border-slate-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.08)]",
                    "transition-all duration-500 ease-out",
                    isHov
                      ? "-translate-y-2 border-blue-200 shadow-[0_12px_40px_rgba(59,130,246,0.15)]"
                      : "translate-y-0",
                  ].join(" ")}
                  style={{
                    width: `calc(${100 / VISIBLE}% - ${((VISIBLE - 1) * 16) / VISIBLE}px)`,
                    minHeight: "clamp(280px, 38vh, 380px)",
                    opacity: isInView ? 1 : 0,
                    transform: isInView 
                      ? `translateY(${isHov ? '-8px' : '0'}) scale(1)` 
                      : 'translateY(40px) scale(0.95)',
                    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + i * 0.1}s`,
                  }}
                >
                  <div className="relative w-full shrink-0 aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                    <img
                      src={ind.img}
                      alt={ind.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                      style={{
                        objectPosition: ind.imgPosition ?? "50% 50%",
                        transform: isHov ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${ind.color}30 0%, transparent 50%, rgba(15,23,42,0.15) 100%)`,
                        opacity: isHov ? 0.9 : 0.7,
                      }}
                      aria-hidden
                    />
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/95 backdrop-blur-sm border border-white/50 shadow-lg transition-all duration-500"
                        style={{
                          transform: isHov ? 'scale(1.15) rotate(8deg)' : 'scale(1) rotate(0deg)',
                          animation: isInView ? 'float 3s ease-in-out infinite' : 'none',
                          animationDelay: `${i * 0.3}s`,
                        }}
                      >
                        <ind.Icon
                          className="w-4.5 h-4.5 transition-colors duration-300"
                          style={{ color: isHov ? ind.color : '#64748b' }}
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                    <div 
                      className="absolute top-3 right-3 z-10 rounded-xl px-3 py-2 text-right bg-white/95 backdrop-blur-md border border-white/50 shadow-lg transition-all duration-300"
                      style={{
                        transform: isHov ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      <p 
                        className="font-black leading-none text-sm transition-colors duration-300"
                        style={{ color: isHov ? ind.color : '#0f172a' }}
                      >
                        {ind.stat}
                      </p>
                      <p className="text-slate-500 font-semibold text-[9px] mt-1 uppercase tracking-wider">
                        {ind.statLabel}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-col flex-1 p-4 border-t border-slate-100"
                    style={{
                      background: `linear-gradient(180deg, ${ind.light} 0%, #ffffff 60%)`,
                    }}
                  >
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5">
                      {ind.short}
                    </p>
                    <h3
                      className="text-slate-900 font-black leading-tight mb-2"
                      style={{
                        fontFamily: "'Outfit',sans-serif",
                        fontSize: "clamp(13px,1.25vw,15px)",
                      }}
                    >
                      {ind.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 flex-1 mb-3">
                      {ind.desc}
                    </p>
                    <div 
                      className="flex items-center gap-1.5 mt-auto font-bold text-xs transition-all duration-300"
                      style={{ 
                        color: ind.color,
                        transform: isHov ? 'translateX(4px)' : 'translateX(0)',
                      }}
                    >
                      <span>Explore</span>
                      <ArrowUpRight 
                        className="w-3.5 h-3.5 transition-transform duration-300" 
                        style={{
                          transform: isHov ? 'translate(2px, -2px)' : 'translate(0, 0)',
                        }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div 
            className="flex items-center gap-2"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
            }}
          >
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => {
                  pause();
                  setCurrent(i);
                }}
                className="rounded-full transition-all duration-300 hover:bg-blue-600"
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  background: i === current ? "#3b82f6" : "#cbd5e1",
                }}
              />
            ))}
          </div>
          <div 
            className="flex items-center gap-2.5"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
            }}
          >
            <button
              type="button"
              onClick={() => {
                pause();
                prev();
              }}
              disabled={current === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-600 hover:border-blue-600 group"
              style={{
                background: "#ffffff",
                border: "2px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(15,23,42,0.08)",
              }}
            >
              <svg
                className="w-4.5 h-4.5 text-slate-700 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => {
                pause();
                next();
              }}
              disabled={current === maxIdx}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-600 hover:border-blue-600 group"
              style={{
                background: "#ffffff",
                border: "2px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(15,23,42,0.08)",
              }}
            >
              <svg
                className="w-4.5 h-4.5 text-slate-700 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
