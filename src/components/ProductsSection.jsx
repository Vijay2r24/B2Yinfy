import { useState, useEffect, useRef } from "react";
import {
  Cloud, Code2, Brain, BarChart3, ShieldCheck, ShoppingCart,
  Lightbulb, Smartphone, Palette, ArrowRight, CheckCircle2, Zap
} from "lucide-react";

const services = [
  {
    title: "IT Consulting",
    subtitle: "Strategic Technology Advisory",
    desc: "We align technology with your business goals — delivering IT roadmaps, digital transformation strategies, and architecture reviews that drive real results.",
    points: ["IT Strategy & Roadmaps", "Digital Transformation", "Architecture Review", "Vendor Selection"],
    stat: "200+", statLabel: "Strategies Delivered",
    color: "#0284c7", light: "#e0f2fe", dark: "#0c4a6e",
    Icon: Lightbulb,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&q=90",
  },
  {
    title: "Cloud Solutions",
    subtitle: "Scalable Cloud Infrastructure",
    desc: "End-to-end cloud services including migration, DevOps automation, and 24/7 managed infrastructure on AWS, Azure, and GCP.",
    points: ["Cloud Migration", "DevOps & CI/CD", "24/7 Managed Services", "Cost Optimization"],
    stat: "99.9%", statLabel: "Uptime SLA",
    color: "#2563eb", light: "#dbeafe", dark: "#1e3a8a",
    Icon: Cloud,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=600&fit=crop&q=90",
  },
  {
    title: "Custom Software",
    subtitle: "Product & Platform Development",
    desc: "We build scalable web apps, enterprise platforms, and SaaS products using modern stacks — React, Node.js, Python, and more.",
    points: ["Web & Mobile Apps", "Enterprise Platforms", "SaaS Products", "API Development"],
    stat: "100+", statLabel: "Products Shipped",
    color: "#d97706", light: "#fef3c7", dark: "#78350f",
    Icon: Code2,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=600&fit=crop&q=90",
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Intelligent Automation",
    desc: "From NLP chatbots to predictive analytics and computer vision — we build AI solutions that automate and accelerate your business.",
    points: ["NLP & Chatbots", "Predictive Analytics", "Computer Vision", "ML Deployment"],
    stat: "40%", statLabel: "Cost Reduction",
    color: "#7c3aed", light: "#ede9fe", dark: "#3b0764",
    Icon: Brain,
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=600&fit=crop&q=90",
  },
  {
    title: "Digital Marketing",
    subtitle: "Data-Driven Growth",
    desc: "SEO, PPC, social media, and content strategies that drive qualified traffic, generate leads, and deliver measurable ROI.",
    points: ["SEO & Content", "PPC Campaigns", "Social Media", "Analytics & Reporting"],
    stat: "3×", statLabel: "Average ROI",
    color: "#0891b2", light: "#cffafe", dark: "#164e63",
    Icon: BarChart3,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&q=90",
  },
  {
    title: "Cybersecurity",
    subtitle: "Zero-Trust Security",
    desc: "Comprehensive security — penetration testing, VAPT, SOC monitoring, and compliance audits to protect your business.",
    points: ["Penetration Testing", "VAPT Assessments", "SOC Monitoring", "Compliance Audits"],
    stat: "ISO", statLabel: "27001 Certified",
    color: "#059669", light: "#d1fae5", dark: "#064e3b",
    Icon: ShieldCheck,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&h=600&fit=crop&q=90",
  },
  {
    title: "E-commerce",
    subtitle: "Commerce Platforms",
    desc: "Custom storefronts, marketplace integrations, and headless commerce solutions that convert visitors into loyal customers.",
    points: ["Custom Storefronts", "Payment Gateways", "Marketplace Integration", "Headless Commerce"],
    stat: "50+", statLabel: "Stores Launched",
    color: "#dc2626", light: "#fee2e2", dark: "#7f1d1d",
    Icon: ShoppingCart,
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=600&fit=crop&q=90",
  },
  {
    title: "Mobile Development",
    subtitle: "iOS & Android Apps",
    desc: "Native and cross-platform mobile apps built with React Native and Flutter — fast, beautiful, and production-ready.",
    points: ["iOS & Android", "React Native", "Flutter Apps", "App Store Deployment"],
    stat: "4.8★", statLabel: "Avg App Rating",
    color: "#7c3aed", light: "#ede9fe", dark: "#3b0764",
    Icon: Smartphone,
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop&q=90",
  },
  {
    title: "UI/UX Design",
    subtitle: "Human-Centered Design",
    desc: "User research, wireframing, prototyping, and pixel-perfect design systems that delight users and drive engagement.",
    points: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    stat: "99%", statLabel: "Client Satisfaction",
    color: "#db2777", light: "#fce7f3", dark: "#831843",
    Icon: Palette,
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=600&fit=crop&q=90",
  },
];

const ProductsSection = () => {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [dir, setDir] = useState(1);
  const [isAuto, setIsAuto] = useState(true);
  const timer = useRef(null);
  const s = services[active];

  const goTo = (idx) => {
    if (idx === active) return;
    setDir(idx > active ? 1 : -1);
    setPrev(active);
    setActive(idx);
    setTimeout(() => setPrev(null), 500);
  };

  useEffect(() => {
    if (!isAuto) return;
    timer.current = setInterval(() => {
      setDir(1);
      setActive(p => { setPrev(p); return (p + 1) % services.length; });
      setTimeout(() => setPrev(null), 500);
    }, 4000);
    return () => clearInterval(timer.current);
  }, [isAuto]);

  const pause  = () => { setIsAuto(false); clearInterval(timer.current); };
  const resume = () => setIsAuto(true);

  return (
    <section className="h-screen w-full flex items-center relative overflow-hidden"
      style={{ paddingTop: "60px", background: "#ffffff" }}>

      {/* Animated bg gradient that follows active color */}
      <div className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{ background: `radial-gradient(ellipse 80% 60% at 30% 50%, ${s.color}0d 0%, transparent 70%)` }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1px,transparent 1px)", backgroundSize: "28px 28px", opacity: 0.4 }} />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 xl:px-20">

        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div data-aos="fade-down" data-aos-delay="0" className="section-label mb-2">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              What We Do
            </div>
            <h2 data-aos="fade-up" data-aos-delay="70"
              style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,2.4vw,2.4rem)", fontWeight:800, letterSpacing:"-0.015em", color:"#0f172a" }}>
              Our <span className="text-gradient">Core Services</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="130" className="text-slate-500 text-sm mt-0.5 font-medium">
              IT consulting, software development &amp; digital solutions — all under one roof
            </p>
          </div>
          <a data-aos="fade-left" data-aos-delay="100" href="#"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-bold transition-colors"
            style={{ color: s.color }}>
            View All Services <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* ── Main layout ── */}
        <div data-aos="fade-up" data-aos-delay="180"
          className="grid lg:grid-cols-12 gap-4 items-stretch"
          onMouseEnter={pause} onMouseLeave={resume}
          style={{ height: "clamp(320px,46vh,420px)" }}>

          {/* ── LEFT: Big featured image panel ── */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden"
            style={{ boxShadow: `0 24px 60px ${s.color}25` }}>

            {/* Image with crossfade */}
            {services.map((svc, i) => (
              <img key={svc.title} src={svc.img} alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "scale(1)" : `scale(${dir > 0 ? "1.06" : "0.96"})`,
                  transition: "opacity 0.55s ease, transform 0.55s ease",
                  zIndex: i === active ? 2 : 1,
                }} />
            ))}

            {/* Overlays */}
            <div className="absolute inset-0 z-10"
              style={{ background: `linear-gradient(135deg, ${s.color}55 0%, transparent 55%)`, transition: "background 0.5s ease" }} />
            <div className="absolute inset-0 z-10"
              style={{ background: "linear-gradient(to top, rgba(5,10,25,0.9) 0%, rgba(5,10,25,0.3) 50%, transparent 100%)" }} />

            {/* Top badges */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                <s.Icon className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.15em]">{s.subtitle}</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full"
              style={{ background: s.color, boxShadow: `0 4px 14px ${s.color}50` }}>
              <span className="text-white text-[10px] font-black">{s.stat} {s.statLabel}</span>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
              <h3 className="text-white font-black mb-2 leading-tight"
                style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.2rem,2vw,1.7rem)", letterSpacing:"-0.02em",
                  opacity: prev === null ? 1 : 0, transform: prev === null ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s" }}>
                {s.title}
              </h3>
              <p className="text-white/70 text-xs leading-relaxed mb-3 max-w-xs"
                style={{ opacity: prev === null ? 1 : 0, transition: "opacity 0.4s ease 0.15s" }}>
                {s.desc}
              </p>
              {/* Bullet points */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 mb-4"
                style={{ opacity: prev === null ? 1 : 0, transition: "opacity 0.4s ease 0.2s" }}>
                {s.points.map(pt => (
                  <div key={pt} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-white/60 flex-shrink-0" />
                    <span className="text-white/80 text-[10px] font-medium">{pt}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white transition-all duration-200 hover:gap-3"
                style={{ background: s.color, boxShadow: `0 4px 16px ${s.color}50` }}>
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Auto-progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 z-30" style={{ background: "rgba(255,255,255,0.15)" }}>
              <div className="h-full rounded-full" style={{ background: "rgba(255,255,255,0.7)",
                width: isAuto ? "100%" : "0%", transition: isAuto ? "width 4s linear" : "none", key: active }} />
            </div>
          </div>

          {/* ── RIGHT: Service tabs ── */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-2.5 content-start overflow-hidden">
            {services.map((svc, i) => {
              const isAct = i === active;
              return (
                <button key={svc.title} onClick={() => { pause(); goTo(i); }}
                  className="relative flex items-center gap-3 rounded-xl text-left overflow-hidden group"
                  style={{
                    padding: "clamp(8px,1.2vh,12px) 12px",
                    background: isAct ? `linear-gradient(135deg,${svc.color}15,${svc.color}08)` : "#fafbfc",
                    border: isAct ? `1.5px solid ${svc.color}45` : "1.5px solid #e2e8f0",
                    boxShadow: isAct ? `0 4px 20px ${svc.color}18` : "none",
                    transform: isAct ? "scale(1.01)" : "scale(1)",
                    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  }}>

                  {/* Hover bg */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl"
                    style={{ background: `linear-gradient(135deg,${svc.color}08,transparent)` }} />

                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isAct ? svc.color : svc.light,
                      boxShadow: isAct ? `0 4px 12px ${svc.color}40` : "none",
                      transform: isAct ? "scale(1.1)" : "scale(1)",
                    }}>
                    <svc.Icon className="w-4 h-4" style={{ color: isAct ? "#ffffff" : svc.color }} />
                  </div>

                  {/* Text */}
                  <div className="relative z-10 flex-1 min-w-0">
                    <p className="font-bold text-xs leading-tight truncate transition-colors duration-200"
                      style={{ fontFamily:"'Outfit',sans-serif", color: isAct ? svc.color : "#0f172a" }}>
                      {svc.title}
                    </p>
                    <p className="text-slate-400 font-medium truncate" style={{ fontSize:"9.5px" }}>{svc.subtitle}</p>
                  </div>

                  {/* Stat */}
                  <div className="relative z-10 flex-shrink-0 text-right">
                    <p className="font-black text-xs leading-none" style={{ color: isAct ? svc.color : "#94a3b8" }}>{svc.stat}</p>
                    <p className="text-slate-400 font-medium" style={{ fontSize:"8px" }}>{svc.statLabel}</p>
                  </div>

                  {/* Active left bar */}
                  <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full transition-all duration-300"
                    style={{ background: svc.color, opacity: isAct ? 1 : 0, transform: isAct ? "scaleY(1)" : "scaleY(0)" }} />
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Dots ── */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {services.map((svc, i) => (
            <button key={i} onClick={() => { pause(); goTo(i); }}
              className="rounded-full transition-all duration-300"
              style={{ width: i === active ? 22 : 7, height: 7, background: i === active ? s.color : "#dbeafe" }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
