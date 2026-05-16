import { useEffect, useRef, useState } from "react";
import {
  Package, Smartphone, Layers, ArrowRight, CheckCircle2, Trophy, Sparkles,
} from "lucide-react";

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

const pillars = [
  {
    id: "products",
    title: "Products",
    tagline: "Platforms we ship",
    desc: "Enterprise portals, SaaS products, and internal tools — designed, built, and maintained for scale and reliability.",
    points: [
      "SaaS & web platforms",
      "Admin & operations tools",
      "Integrations & APIs",
    ],
    stat: "100+",
    statLabel: "Deliverables",
    color: "#2563eb",
    light: "#eff6ff",
    Icon: Package,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=88",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    tagline: "iOS & Android",
    desc: "Native and cross-platform apps with polished UX — from discovery to App Store and Play Store release.",
    points: [
      "React Native & Flutter",
      "Offline-first & secure",
      "Store submission & updates",
    ],
    stat: "50+",
    statLabel: "Apps live",
    color: "#7c3aed",
    light: "#f5f3ff",
    Icon: Smartphone,
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop&q=88",
  },
  {
    id: "apps",
    title: "Any kind of App Development",
    tagline: "Full-stack delivery",
    desc: "Whatever your stack or domain — we turn ideas into production apps: web, mobile, cloud-backed, and API-driven.",
    points: [
      "Custom web & mobile apps",
      "Cloud & microservices",
      "Ongoing support & DevOps",
    ],
    stat: "360°",
    statLabel: "Coverage",
    color: "#0891b2",
    light: "#ecfeff",
    Icon: Layers,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=600&fit=crop&q=88",
  },
];

const ProductsSection = () => {
  const [sectionRef, isInView] = useInView();

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex flex-col relative overflow-hidden"
      style={{ paddingTop: "60px", background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#dbeafe 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[480px] h-[480px] rounded-full"
          style={{
            bottom: "-8%",
            left: "-5%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)",
            filter: "blur(72px)",
            animation: 'pulse-slow 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[380px] h-[380px] rounded-full"
          style={{
            top: "10%",
            right: "-8%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 65%)",
            filter: "blur(60px)",
            animation: 'pulse-slow 10s ease-in-out infinite 3s',
          }}
        />
      </div>

      <div className="relative z-10 w-full flex-1 flex flex-col min-h-0 px-6 md:px-10 lg:px-16 xl:px-20 py-5 md:py-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-4 shrink-0">
          <div>
            <div
              className="section-label mb-2"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              What We Have Done
            </div>
            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: "clamp(1.35rem,2.35vw,2.35rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#0f172a",
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                marginBottom: '16px',
              }}
            >
              <span className="text-gradient">Products</span>
              <span className="text-slate-400 font-light mx-2">&</span>
              <span>Services</span>
            </h2>
            <p
              className="text-slate-500 text-sm mt-1 font-medium max-w-2xl"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
              }}
            >
              <strong className="text-slate-700">Any kind of App Development</strong>
              {" — "}web, mobile, and cloud-backed solutions your users rely on every day.
            </p>
          </div>
          <a
            href="#"
            className="hidden lg:inline-flex btn-primary text-sm py-2 px-4 shrink-0"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            View portfolio <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex-1 min-h-0 grid md:grid-cols-3 gap-3 md:gap-4 items-stretch">
        {pillars.map((p, idx) => {
          const Icon = p.Icon;
          return (
          <article
            key={p.id}
            className="flex flex-col min-h-0 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_1px_3px_rgba(10,22,40,0.06),0_4px_18px_rgba(15,23,42,0.05)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)] group"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
              transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + idx * 0.15}s`,
            }}
          >
            <div className="relative shrink-0 aspect-[5/3] max-h-[min(22vh,180px)] overflow-hidden bg-slate-100">
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${p.color}40 0%, transparent 55%, rgba(15,23,42,0.2) 100%)`,
                }}
              />
              <div 
                className="absolute top-2.5 left-2.5 w-9 h-9 rounded-lg flex items-center justify-center bg-white border border-slate-200 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{
                  animation: isInView ? 'float 3s ease-in-out infinite' : 'none',
                  animationDelay: `${idx * 0.3}s`,
                }}
              >
                <Icon className="w-4 h-4 transition-colors duration-300" style={{ color: p.color }} strokeWidth={2.25} />
              </div>
              <div className="absolute top-2.5 right-2.5 rounded-md px-2 py-1 bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
                <span className="text-slate-900 font-black text-xs">{p.stat}</span>
                <span className="text-slate-500 text-[9px] font-semibold ml-1">
                  {p.statLabel}
                </span>
              </div>
            </div>

            <div
              className="flex flex-col flex-1 min-h-0 p-3.5 md:p-4 border-t border-slate-100"
              style={{
                background: `linear-gradient(180deg, ${p.light} 0%, #ffffff 70%)`,
              }}
            >
              <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.12em] mb-0.5">
                {p.tagline}
              </p>
              <h3
                className="text-slate-900 font-black leading-tight mb-2"
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: "clamp(13px,1.2vw,15px)",
                }}
              >
                {p.title}
              </h3>
              <p className="text-slate-600 text-[11px] leading-relaxed mb-3 flex-1">
                {p.desc}
              </p>
              <ul className="space-y-1.5 mb-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-3 h-3 flex-shrink-0 mt-0.5"
                      style={{ color: p.color }}
                    />
                    <span className="text-slate-700 text-[10.5px] font-medium leading-snug">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-1.5 text-[10px] font-bold transition-all duration-300 group-hover:gap-2.5"
                style={{ color: p.color }}
              >
                Learn more <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </article>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default ProductsSection;
