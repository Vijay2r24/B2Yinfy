import { useState, useEffect, useRef } from "react";

const cards = [
  { title:"Cloud Solutions",       desc:"AWS, Azure & GCP infrastructure, cloud migration, DevOps pipelines, and 24/7 managed services.",     color:"#2563eb", bg:"#eff6ff", tags:["AWS","Azure","GCP"] },
  { title:"Custom Software",       desc:"Full-stack web apps, mobile solutions, and enterprise platforms built with React, Node.js & Python.", color:"#d97706", bg:"#fffbeb", tags:["React","Node.js","Python"] },
  { title:"AI & Machine Learning", desc:"Intelligent automation, NLP chatbots, predictive analytics, and computer vision solutions.",          color:"#7c3aed", bg:"#f5f3ff", tags:["GPT","TensorFlow","PyTorch"] },
  { title:"Digital Marketing",     desc:"SEO, PPC, social media, content strategy, and data-driven campaigns that deliver measurable ROI.",    color:"#0891b2", bg:"#ecfeff", tags:["SEO","PPC","Analytics"] },
  { title:"Cybersecurity",         desc:"Penetration testing, VAPT, SOC monitoring, compliance audits, and zero-trust security architecture.", color:"#059669", bg:"#ecfdf5", tags:["VAPT","SOC","ISO 27001"] },
  { title:"E-commerce",            desc:"Custom storefronts, marketplace integrations, payment gateways, and headless commerce solutions.",    color:"#dc2626", bg:"#fef2f2", tags:["Shopify","WooCommerce","Stripe"] },
  { title:"Technology Consulting", desc:"Strategic IT roadmaps, digital transformation advisory, and technology architecture consulting.",      color:"#0284c7", bg:"#f0f9ff", tags:["Strategy","Architecture","Advisory"] },
  { title:"Mobile Development",    desc:"Native iOS & Android apps, cross-platform solutions with React Native and Flutter.",                  color:"#7c3aed", bg:"#f5f3ff", tags:["iOS","Android","Flutter"] },
  { title:"UI/UX Design",          desc:"User research, wireframing, prototyping, and pixel-perfect design systems for digital products.",     color:"#db2777", bg:"#fdf2f8", tags:["Figma","Research","Prototyping"] },
];

const svgIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
];

const VISIBLE = 3;

const ProductsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const timer = useRef(null);

  const total = cards.length;
  const maxIdx = total - VISIBLE;

  const next = () => setCurrent(p => Math.min(p + 1, maxIdx));
  const prev = () => setCurrent(p => Math.max(p - 1, 0));

  useEffect(() => {
    if (!isAuto) return;
    timer.current = setInterval(() => {
      setCurrent(p => p >= maxIdx ? 0 : p + 1);
    }, 3000);
    return () => clearInterval(timer.current);
  }, [isAuto, maxIdx]);

  const pause = () => { setIsAuto(false); clearInterval(timer.current); };
  const resume = () => setIsAuto(true);

  return (
    <section className="h-screen w-full flex items-center relative overflow-hidden section-dark" style={{ paddingTop:"72px" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full animate-orb"
          style={{ top:"50%", left:"-8%", background:"radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 65%)", filter:"blur(80px)", transform:"translateY(-50%)" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full animate-orb"
          style={{ top:"-15%", right:"10%", background:"radial-gradient(circle,rgba(99,102,241,0.1) 0%,transparent 65%)", filter:"blur(70px)", animationDelay:"6s" }} />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
              style={{ background:"linear-gradient(135deg,#dbeafe,#e0f2fe)", border:"1px solid #93c5fd" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse-soft" />
              <span className="text-sky-700 text-[11px] font-bold uppercase tracking-[0.15em]">What We Do</span>
            </div>
            <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.6rem,3vw,2.8rem)", fontWeight:800, letterSpacing:"-0.025em", color:"#0f172a" }}>
              Our <span className="text-glow">Core Services</span>
            </h2>
            <p className="text-slate-600 text-sm mt-1.5 font-medium">End-to-end technology solutions designed to accelerate your business growth</p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2 animate-fade-up delay-200">
            <button onClick={() => { pause(); prev(); }}
              disabled={current === 0}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 hover:border-sky-400"
              style={{ background:"#ffffff", border:"1.5px solid #bfdbfe", boxShadow:"0 2px 8px rgba(14,165,233,0.1)" }}>
              <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => { pause(); next(); }}
              disabled={current === maxIdx}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 hover:border-sky-400"
              style={{ background:"#ffffff", border:"1.5px solid #bfdbfe", boxShadow:"0 2px 8px rgba(14,165,233,0.1)" }}>
              <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" onMouseEnter={pause} onMouseLeave={resume}>
          <div className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform:`translateX(calc(-${current} * (100% / ${VISIBLE} + 16px / ${VISIBLE})))` }}>
            {cards.map((c, i) => (
              <div key={c.title}
                className="flex-shrink-0 flex flex-col rounded-2xl overflow-hidden cursor-pointer card group"
                style={{ width:`calc(${100/VISIBLE}% - ${(VISIBLE-1)*16/VISIBLE}px)` }}>
                <div className="h-1 w-full" style={{ background:`linear-gradient(90deg,${c.color},${c.color}60)` }} />
                <div className="flex flex-col flex-1 p-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ background: c.bg, color: c.color }}>
                    {svgIcons[i]}
                  </div>
                  <h3 className="text-slate-900 text-base font-bold mb-2 leading-snug">{c.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: c.bg, color: c.color, border:`1px solid ${c.color}30` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-300 group-hover:gap-2.5"
                    style={{ color: c.color }}>
                    Explore
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button key={i} onClick={() => { pause(); setCurrent(i); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? "linear-gradient(135deg,#0ea5e9,#0284c7)" : "#bfdbfe",
              }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
