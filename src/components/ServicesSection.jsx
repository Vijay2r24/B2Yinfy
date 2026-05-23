import { useEffect, useRef, useState } from "react";
import {
  Lightbulb, Code2, ArrowRight, CheckCircle2, Cloud, Smartphone, Shield, BarChart3,
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

const featuredServices = [
  {
    id: "consulting",
    label: "IT Consulting",
    tagline: "Strategic Technology Advisory",
    desc: "We partner with your leadership team to align technology with business goals — delivering actionable IT roadmaps and digital transformation strategies.",
    points: [
      "IT Strategy & Roadmaps",
      "Digital Transformation",
      "Technology Architecture",
      "Vendor Selection",
    ],
    stat: "200+",
    statLabel: "Strategies Delivered",
    color: "#059669",
    light: "#f0f9ff",
    Icon: Lightbulb,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&h=800&fit=crop&q=90",
  },
  {
    id: "development",
    label: "Product Development",
    tagline: "End-to-End Software Engineering",
    desc: "From idea to launch — we design, build, and scale world-class software products. Full-stack teams delivering web apps, mobile solutions, and SaaS platforms.",
    points: [
      "Web & Mobile Apps",
      "SaaS Platforms",
      "Enterprise Software",
      "API Design & DevOps",
    ],
    stat: "100+",
    statLabel: "Products Shipped",
    color: "#2563eb",
    light: "#eff6ff",
    Icon: Code2,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=800&fit=crop&q=90",
  },
  {
    id: "cloud",
    label: "IT Solutions",
    tagline: "Complete IT Infrastructure",
    desc: "End-to-end IT solutions including cloud migration, infrastructure setup, network management, and 24/7 support to keep your business running smoothly.",
    points: [
      "Cloud Migration",
      "IT Infrastructure",
      "Network Management",
      "24/7 Support",
    ],
    stat: "99.9%",
    statLabel: "Uptime SLA",
    color: "#7c3aed",
    light: "#f5f3ff",
    Icon: Cloud,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&h=800&fit=crop&q=90",
  },
];

const ServicesSection = () => {
  const [sectionRef, isInView] = useInView();
  
  return (
  <section
    ref={sectionRef}
    className="h-screen w-full flex flex-col relative overflow-hidden"
    style={{ paddingTop: "60px", background: "#ffffff" }}
  >
    {/* Match About / Industries: light dots + soft orb */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(#dbeafe 1.5px, transparent 1.5px)",
        backgroundSize: "32px 32px",
        opacity: 0.38,
      }}
    />
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute w-[560px] h-[560px] rounded-full animate-orb"
        style={{
          top: "50%",
          right: "-6%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)",
          filter: "blur(80px)",
          transform: "translateY(-50%)",
        }}
      />
    </div>

    <div className="relative z-10 flex flex-col h-full min-h-0 px-6 md:px-12 lg:px-16 xl:px-24 py-5 md:py-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4 md:mb-5 shrink-0">
        <div>
          <div
            className="section-label mb-2"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
            Our Services
          </div>
          <h2
            data-aos="fade-right"
            data-aos-delay="100"
            className="heading-section"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
              marginBottom: '16px',
            }}
          >
            <span>IT Consulting</span>
            <span className="text-slate-400 font-light mx-2">&amp;</span>
            <span className="text-gradient">Product Development</span>
          </h2>
          <p
            className="text-body mt-1 max-w-xl"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            Strategy and delivery in one place — advisory that shapes the roadmap
            and engineering that ships the product.
          </p>
        </div>
      </div>

      <div className="flex-1 min-h-0 grid md:grid-cols-3 gap-3 md:gap-4 items-stretch">
        {featuredServices.map((s, idx) => (
          <article
            key={s.id}
            className="group flex flex-col min-h-0 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_1px_3px_rgba(10,22,40,0.06),0_4px_20px_rgba(15,23,42,0.06)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_10px_28px_rgba(15,23,42,0.1)]"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
              transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + idx * 0.15}s`,
            }}
          >
            <div className="relative shrink-0 aspect-[16/9] max-h-[min(16vh,140px)] overflow-hidden bg-slate-100">
              <img
                src={s.img}
                alt={s.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/35"
                aria-hidden
              />
              <div className="absolute top-3 left-3 flex items-center gap-2 min-w-0">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-slate-200 shadow-sm shrink-0"
                  style={{
                    animation: isInView ? 'float 3s ease-in-out infinite' : 'none',
                    animationDelay: `${idx * 0.3}s`,
                  }}
                >
                  <s.Icon className="w-5 h-5" style={{ color: s.color }} strokeWidth={2.2} />
                </div>
              </div>
              <div className="absolute top-3 right-3 rounded-lg px-2.5 py-1.5 bg-white/95 border border-slate-200 shadow-sm">
                <span className="text-slate-900 font-black text-sm">{s.stat}</span>
                <span className="text-slate-500 text-[10px] font-semibold ml-1.5">
                  {s.statLabel}
                </span>
              </div>
            </div>

            <div
              className="flex flex-col flex-1 p-3 border-t border-slate-100 overflow-hidden"
              style={{
                background: `linear-gradient(180deg, ${s.light} 0%, #ffffff 65%)`,
              }}
            >
              <h3 className="heading-card-sm mb-1 leading-tight">
                {s.label}
              </h3>
              <p className="text-body-sm leading-relaxed mb-2 flex-1 line-clamp-3">
                {s.desc}
              </p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 mb-2">
                {s.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-1.5">
                    <CheckCircle2
                      className="w-3 h-3 flex-shrink-0 mt-0.5"
                      style={{ color: s.color }}
                    />
                    <span className="text-slate-700 text-[10px] font-medium leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white w-full transition-[gap,opacity] duration-200 hover:gap-3 hover:opacity-95 shrink-0"
                style={{
                  background: s.color,
                  boxShadow: `0 4px 14px ${s.color}40`,
                }}
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ServicesSection;
