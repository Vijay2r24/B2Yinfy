import { useState, useEffect, useRef } from "react";
import { Cloud, Code2, Brain, BarChart3, ShieldCheck, ShoppingCart, Lightbulb, Smartphone, Palette, ArrowRight } from "lucide-react";

const cards = [
  { title:"Cloud Solutions",       desc:"AWS, Azure & GCP infrastructure, cloud migration, DevOps pipelines, and 24/7 managed services.",     color:"#2563eb", bg:"#eff6ff", border:"#bfdbfe", tags:["AWS","Azure","GCP"],           Icon: Cloud        },
  { title:"Custom Software",       desc:"Full-stack web apps, mobile solutions, and enterprise platforms built with React, Node.js & Python.", color:"#d97706", bg:"#fffbeb", border:"#fde68a", tags:["React","Node.js","Python"],     Icon: Code2        },
  { title:"AI & Machine Learning", desc:"Intelligent automation, NLP chatbots, predictive analytics, and computer vision solutions.",          color:"#7c3aed", bg:"#f5f3ff", border:"#ddd6fe", tags:["GPT","TensorFlow","PyTorch"],   Icon: Brain        },
  { title:"Digital Marketing",     desc:"SEO, PPC, social media, content strategy, and data-driven campaigns that deliver measurable ROI.",    color:"#0891b2", bg:"#ecfeff", border:"#a5f3fc", tags:["SEO","PPC","Analytics"],        Icon: BarChart3    },
  { title:"Cybersecurity",         desc:"Penetration testing, VAPT, SOC monitoring, compliance audits, and zero-trust security architecture.", color:"#059669", bg:"#ecfdf5", border:"#a7f3d0", tags:["VAPT","SOC","ISO 27001"],      Icon: ShieldCheck  },
  { title:"E-commerce",            desc:"Custom storefronts, marketplace integrations, payment gateways, and headless commerce solutions.",    color:"#dc2626", bg:"#fef2f2", border:"#fecaca", tags:["Shopify","WooCommerce","Stripe"],Icon: ShoppingCart },
  { title:"Technology Consulting", desc:"Strategic IT roadmaps, digital transformation advisory, and technology architecture consulting.",      color:"#0284c7", bg:"#f0f9ff", border:"#bae6fd", tags:["Strategy","Architecture","Advisory"],Icon: Lightbulb },
  { title:"Mobile Development",    desc:"Native iOS & Android apps, cross-platform solutions with React Native and Flutter.",                  color:"#7c3aed", bg:"#f5f3ff", border:"#ddd6fe", tags:["iOS","Android","Flutter"],      Icon: Smartphone   },
  { title:"UI/UX Design",          desc:"User research, wireframing, prototyping, and pixel-perfect design systems for digital products.",     color:"#db2777", bg:"#fdf2f8", border:"#fbcfe8", tags:["Figma","Research","Prototyping"],Icon: Palette      },
];

const VISIBLE = 3;

const ProductsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const timer = useRef(null);
  const maxIdx = cards.length - VISIBLE;

  const next = () => setCurrent(p => Math.min(p + 1, maxIdx));
  const prev = () => setCurrent(p => Math.max(p - 1, 0));
  const pause = () => { setIsAuto(false); clearInterval(timer.current); };
  const resume = () => setIsAuto(true);

  useEffect(() => {
    if (!isAuto) return;
    timer.current = setInterval(() => setCurrent(p => p >= maxIdx ? 0 : p + 1), 3200);
    return () => clearInterval(timer.current);
  }, [isAuto, maxIdx]);

  return (
    <section className="h-screen w-full flex items-center relative overflow-hidden"
      style={{ paddingTop:"60px", background:"#ffffff" }}>

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full animate-orb"
          style={{ top:"50%", left:"-6%", background:"radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 65%)", filter:"blur(80px)", transform:"translateY(-50%)" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full animate-orb"
          style={{ top:"-15%", right:"8%", background:"radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 65%)", filter:"blur(70px)", animationDelay:"7s" }} />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28">

        {/* Header row */}
        <div className="flex items-end justify-between mb-4">
          <div data-aos="fade-right" data-aos-delay="0">
            <div className="section-label mb-2">
              <Cloud className="w-3.5 h-3.5 text-blue-600" />
              What We Do
            </div>
            <h2 data-aos="fade-up" data-aos-delay="80"
              style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.5rem,2.8vw,2.8rem)", fontWeight:800, letterSpacing:"-0.015em", color:"#0f172a" }}>
              Our <span className="text-gradient">Core Services</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="150" className="text-slate-500 text-sm mt-1 font-medium">
              End-to-end technology solutions to accelerate your growth
            </p>
          </div>
          {/* Arrows */}
          <div data-aos="fade-left" data-aos-delay="100" className="flex items-center gap-2">
            <button onClick={() => { pause(); prev(); }} disabled={current === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-25 hover:bg-blue-600 hover:border-blue-600 group"
              style={{ background:"#ffffff", border:"1.5px solid #bfdbfe", boxShadow:"0 2px 8px rgba(37,99,235,0.08)" }}>
              <svg className="w-4 h-4 text-blue-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => { pause(); next(); }} disabled={current === maxIdx}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-25 hover:bg-blue-600 hover:border-blue-600 group"
              style={{ background:"#ffffff", border:"1.5px solid #bfdbfe", boxShadow:"0 2px 8px rgba(37,99,235,0.08)" }}>
              <svg className="w-4 h-4 text-blue-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div data-aos="fade-up" data-aos-delay="180" className="overflow-hidden" onMouseEnter={pause} onMouseLeave={resume}>
          <div className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform:`translateX(calc(-${current} * (100% / ${VISIBLE} + 16px / ${VISIBLE})))` }}>
            {cards.map((c) => (
              <div key={c.title}
                className="flex-shrink-0 flex flex-col card-base shimmer-card group cursor-pointer"
                style={{ width:`calc(${100/VISIBLE}% - ${(VISIBLE-1)*16/VISIBLE}px)`, background:"#ffffff" }}>
                {/* Color top bar */}
                <div className="h-1.5 w-full rounded-t-xl" style={{ background:`linear-gradient(90deg,${c.color},${c.color}50)` }} />
                <div className="flex flex-col flex-1 p-4">
                  {/* Icon row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background:c.bg, border:`1px solid ${c.border}` }}>
                      <c.Icon className="w-5 h-5" style={{ color:c.color }} />
                    </div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                      style={{ background:c.color }}>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-slate-900 font-bold mb-1.5 leading-snug transition-colors duration-200 group-hover:text-blue-700"
                    style={{ fontFamily:"'Outfit',sans-serif", fontSize:"14px" }}>{c.title}</h3>
                  <p className="text-slate-500 leading-relaxed flex-1 mb-3 transition-colors duration-200 group-hover:text-slate-600"
                    style={{ fontSize:"clamp(10px,1.1vw,12px)" }}>{c.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {c.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                        style={{ background:c.bg, color:c.color, border:`1px solid ${c.border}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button key={i} onClick={() => { pause(); setCurrent(i); }}
              className="rounded-full transition-all duration-300"
              style={{ width:i===current?28:8, height:8, background:i===current?"#2563eb":"#bfdbfe" }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;





