import { useState, useEffect, useRef } from "react";
import {
  Monitor, ShoppingBag, HeartPulse, Users, Building2,
  Landmark, GraduationCap, Factory, ArrowUpRight, TrendingUp
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
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&q=85",
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    short: "Online Commerce",
    desc: "Headless storefronts, marketplace integrations, and commerce platforms that convert visitors into loyal customers.",
    stat: "3×", statLabel: "Revenue Growth",
    color: "#dc2626", light: "#fef2f2",
    Icon: ShoppingBag,
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=85",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    short: "MedTech & Clinics",
    desc: "HIPAA-compliant patient portals, telemedicine apps, EHR integrations, and AI-powered diagnostics tools.",
    stat: "99%", statLabel: "Data Security",
    color: "#059669", light: "#ecfdf5",
    Icon: HeartPulse,
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=85",
  },
  {
    id: "crm",
    title: "CRM & Sales",
    short: "Sales Automation",
    desc: "Custom CRM platforms, sales automation, lead management, and customer success tools that close more deals.",
    stat: "40%", statLabel: "Sales Increase",
    color: "#7c3aed", light: "#f5f3ff",
    Icon: Users,
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop&q=85",
  },
  {
    id: "realestate",
    title: "Real Estate",
    short: "PropTech",
    desc: "Property listing portals, virtual tours, agent CRM, and smart analytics dashboards for modern real estate.",
    stat: "60+", statLabel: "Projects Done",
    color: "#d97706", light: "#fffbeb",
    Icon: Building2,
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=85",
  },
  {
    id: "finance",
    title: "Finance & Banking",
    short: "FinTech",
    desc: "Secure digital banking apps, payment processing, fraud detection, and investment platforms built to compliance standards.",
    stat: "ISO", statLabel: "27001 Compliant",
    color: "#0891b2", light: "#ecfeff",
    Icon: Landmark,
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&q=85",
  },
  {
    id: "education",
    title: "Education & EdTech",
    short: "LMS & E-Learning",
    desc: "Learning management systems, virtual classrooms, student portals, and AI-powered tutoring tools.",
    stat: "10K+", statLabel: "Students Served",
    color: "#0284c7", light: "#f0f9ff",
    Icon: GraduationCap,
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop&q=85",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    short: "Industry 4.0 & IoT",
    desc: "Smart factory solutions, IoT integrations, supply chain ERP, and predictive maintenance systems.",
    stat: "30%", statLabel: "Efficiency Gain",
    color: "#475569", light: "#f1f5f9",
    Icon: Factory,
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&h=400&fit=crop&q=85",
  },
];

const VISIBLE = 4;

const IndustriesSection = () => {
  const [hovered, setHovered] = useState(null);
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const timer = useRef(null);
  const maxIdx = industries.length - VISIBLE;

  const next  = () => setCurrent(p => Math.min(p + 1, maxIdx));
  const prev  = () => setCurrent(p => Math.max(p - 1, 0));
  const pause = () => { setIsAuto(false); clearInterval(timer.current); };
  const resume= () => setIsAuto(true);

  useEffect(() => {
    if (!isAuto) return;
    timer.current = setInterval(() => setCurrent(p => p >= maxIdx ? 0 : p + 1), 3000);
    return () => clearInterval(timer.current);
  }, [isAuto, maxIdx]);

  return (
    <section className="h-screen w-full flex items-center relative overflow-hidden"
      style={{ paddingTop: "60px", background: "#ffffff" }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1px,transparent 1px)", backgroundSize: "28px 28px", opacity: 0.35 }} />

      {/* Ambient orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full animate-orb"
          style={{ top: "50%", right: "-10%", background: "radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)", filter: "blur(80px)", transform: "translateY(-50%)" }} />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 xl:px-20">

        {/* Header */}
        <div className="flex items-end justify-between mb-3">
          <div>
            <div data-aos="fade-down" data-aos-delay="0" className="section-label mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              Industries We Serve
            </div>
            <h2 data-aos="fade-up" data-aos-delay="70"
              style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,2.4vw,2.4rem)", fontWeight:800, letterSpacing:"-0.015em", color:"#0f172a" }}>
              Built for <span className="text-gradient">Every Industry</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="130" className="text-slate-500 text-sm mt-0.5 font-medium">
              Deep domain expertise across 8+ industries — solutions tailored to your sector
            </p>
          </div>
          <a data-aos="fade-left" data-aos-delay="100" href="#"
            className="hidden lg:inline-flex btn-primary text-sm py-2 px-4">
            All Industries <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* ── Carousel ── */}
        <div data-aos="fade-up" data-aos-delay="180"
          className="overflow-hidden"
          onMouseEnter={pause} onMouseLeave={resume}>
          <div className="flex gap-3 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 12px / ${VISIBLE})))` }}>
            {industries.map((ind, i) => {
              const isHov = hovered === i;
              return (
                <div key={ind.id}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
                  style={{
                    width: `calc(${100/VISIBLE}% - ${(VISIBLE-1)*12/VISIBLE}px)`,
                    height: "clamp(260px,36vh,360px)",
                    border: isHov ? `2px solid ${ind.color}` : "2px solid transparent",
                    boxShadow: isHov ? `0 20px 50px ${ind.color}30` : "0 2px 16px rgba(10,22,40,0.08)",
                    transform: isHov ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                    transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                  }}>

                  {/* Background image */}
                  <img src={ind.img} alt={ind.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      transform: isHov ? "scale(1.12)" : "scale(1)",
                      transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                    }} />

                  {/* Dark overlay */}
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, rgba(5,10,25,0.25) 0%, rgba(5,10,25,0.78) 100%)" }} />

                  {/* Color tint */}
                  <div className="absolute inset-0 transition-opacity duration-400"
                    style={{ background: `linear-gradient(135deg, ${ind.color}70 0%, transparent 60%)`, opacity: isHov ? 1 : 0.5 }} />

                  {/* Top: icon + stat */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: isHov ? ind.color : "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        transition: "background 0.3s ease",
                        boxShadow: isHov ? `0 4px 14px ${ind.color}60` : "none",
                      }}>
                      <ind.Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="px-2 py-1 rounded-full text-right"
                      style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                      <p className="text-white font-black leading-none" style={{ fontSize: "11px" }}>{ind.stat}</p>
                      <p className="text-white/70 font-medium" style={{ fontSize: "8px" }}>{ind.statLabel}</p>
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-3.5">
                    <p className="text-white/60 text-[9px] font-bold uppercase tracking-[0.15em] mb-0.5">{ind.short}</p>
                    <h3 className="text-white font-black leading-tight mb-1"
                      style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(12px,1.2vw,14px)" }}>
                      {ind.title}
                    </h3>
                    {/* Description slides up on hover */}
                    <div style={{
                      maxHeight: isHov ? "60px" : "0",
                      opacity: isHov ? 1 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.35s ease, opacity 0.3s ease",
                    }}>
                      <p className="text-white/75 leading-relaxed mb-2" style={{ fontSize: "9.5px" }}>{ind.desc}</p>
                    </div>
                    {/* Explore link */}
                    <div className="flex items-center gap-1 transition-all duration-300"
                      style={{ opacity: isHov ? 1 : 0, transform: isHov ? "translateY(0)" : "translateY(6px)" }}>
                      <span className="text-white text-[10px] font-bold">Explore</span>
                      <ArrowUpRight className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 z-20"
                    style={{
                      background: ind.color,
                      transform: isHov ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                    }} />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center justify-between mt-3">
          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button key={i} onClick={() => { pause(); setCurrent(i); }}
                className="rounded-full transition-all duration-300"
                style={{ width: i === current ? 22 : 7, height: 7, background: i === current ? "#2563eb" : "#bfdbfe" }} />
            ))}
          </div>
          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button onClick={() => { pause(); prev(); }} disabled={current === 0}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-25 hover:bg-blue-600 group"
              style={{ background:"#ffffff", border:"1.5px solid #bfdbfe", boxShadow:"0 2px 8px rgba(37,99,235,0.08)" }}>
              <svg className="w-4 h-4 text-blue-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => { pause(); next(); }} disabled={current === maxIdx}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-25 hover:bg-blue-600 group"
              style={{ background:"#ffffff", border:"1.5px solid #bfdbfe", boxShadow:"0 2px 8px rgba(37,99,235,0.08)" }}>
              <svg className="w-4 h-4 text-blue-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
