import { Quote, Users, ArrowRight } from "lucide-react";

const clients = [
  { src:"/nexa.0e45b056d79ed237b2db.jpg",                    name:"Nexa Link",              w:100 },
  { src:"/sustaine.85695b6c6459bdeab958.jpg",                 name:"SustainEdge Consulting", w:110 },
  { src:"/Mcdmf1 (1).00b9ba7237327dc1857f.jpg",              name:"MCDMF",                  w:110 },
  { src:"/MantraLabs.887d2198b752cb6bf5d5.jpg",               name:"Mantra Labs",            w:110 },
  { src:"/loudstier.b1c2eb3d731a63efc574.jpg",                name:"Cloudstier Solutions",   w:120 },
  { src:"/geeks.e592e136724c2683f3d0c9f114799f3a.svg",        name:"Nerds & Geeks",          w:110 },
];

const testimonials = [
  { quote:"B2YINFY transformed our entire digital infrastructure. Delivery was on time, on budget, and exceeded expectations.", name:"Rajesh Kumar", role:"CTO, TechCorp India", initials:"RK", color:"#2563eb", bg:"#eff6ff" },
  { quote:"Their AI solutions reduced our operational costs by 40%. The team is highly skilled and incredibly responsive.", name:"Priya Sharma", role:"VP Engineering, FinanceHub", initials:"PS", color:"#0284c7", bg:"#f0f9ff" },
  { quote:"Outstanding cloud migration. Zero downtime, seamless transition, and excellent post-launch support.", name:"Amit Patel", role:"Director IT, RetailMax", initials:"AP", color:"#0e7490", bg:"#ecfeff" },
];

const ClientsSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden"
    style={{ paddingTop:"60px", background:"#ffffff" }}>

    {/* Dot pattern */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage:"radial-gradient(#dbeafe 1.5px,transparent 1.5px)", backgroundSize:"36px 36px", opacity:0.35 }} />

    {/* Orb */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[700px] h-[700px] rounded-full animate-orb"
        style={{ top:"50%", left:"50%", background:"radial-gradient(circle,rgba(37,99,235,0.05) 0%,transparent 65%)", filter:"blur(100px)", transform:"translate(-50%,-50%)" }} />
    </div>

    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 py-2">

      {/* Header */}
      <div className="flex items-end justify-between mb-3 lg:mb-4">
        <div data-aos="fade-right" data-aos-delay="0">
          <div className="section-label mb-2">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            Trusted By 50+ Companies
          </div>
          <h2 data-aos="fade-right" data-aos-delay="100"
            className="heading-section"
            style={{ marginBottom: '16px' }}>
            <span>Clients &amp; </span>
            <span className="text-gradient-warm">Testimonials</span>
          </h2>
        </div>
        <a data-aos="fade-left" data-aos-delay="100"
          href="#" className="text-blue-700 hover:text-blue-900 text-sm font-bold transition-colors flex items-center gap-1.5 group">
          View All
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Logo scroll */}
      <div data-aos="fade-up" data-aos-delay="140"
        className="mb-3 lg:mb-4 rounded-2xl overflow-hidden"
        style={{ background:"#ffffff", border:"1px solid #e2e8f0", boxShadow:"0 4px 20px rgba(37,99,235,0.06)" }}>
        <div className="overflow-hidden" style={{ padding:"clamp(16px,2.5vh,32px) 0" }}>
          <div className="flex animate-ticker whitespace-nowrap">
            {[...Array(3)].map((_, r) => (
              <div key={r} className="flex flex-shrink-0 items-center gap-10 px-5">
                {clients.map((c, i) => (
                  <div key={`${r}-${i}`}
                    className="flex-shrink-0 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{ width:"clamp(120px,14vw,180px)", height:"clamp(60px,8vh,90px)" }}>
                    <img src={c.src} alt={c.name} loading="lazy"
                      className="object-contain max-h-full transition-all duration-400 group-hover:scale-110"
                      style={{ width:c.w, maxWidth:"100%" }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-3 gap-3">
        {testimonials.map((t, i) => (
          <div key={i} data-aos="fade-up" data-aos-delay={280 + i * 110}
            className="testimonial-card shimmer-card rounded-2xl relative overflow-hidden cursor-default"
            style={{ background:"#ffffff", border:`1px solid ${t.color}20`, boxShadow:`0 4px 20px ${t.color}10`,
              padding:"clamp(12px,1.8vh,20px)" }}>
            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-14 h-14 rounded-bl-3xl opacity-60"
              style={{ background:`linear-gradient(225deg,${t.bg},transparent)` }} />
            {/* Quote icon */}
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background:t.bg, border:`1px solid ${t.color}20`, marginBottom:"clamp(6px,1vh,12px)" }}>
              <Quote className="w-3.5 h-3.5" style={{ color:t.color }} />
            </div>
            <p className="text-slate-600 leading-relaxed relative z-10"
              style={{ fontSize:"clamp(10px,1.1vh,12px)", marginBottom:"clamp(8px,1.2vh,16px)" }}>{t.quote}</p>
            <div className="flex items-center gap-2.5 relative z-10"
              style={{ borderTop:`1px solid ${t.color}15`, paddingTop:"clamp(8px,1.2vh,12px)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                style={{ background:`linear-gradient(135deg,${t.color},${t.color}aa)`, fontFamily:"'Outfit',sans-serif" }}>
                {t.initials}
              </div>
              <div>
                <p className="text-slate-900 text-xs font-bold" style={{ fontFamily:"'Outfit',sans-serif" }}>{t.name}</p>
                <p className="text-slate-400 font-medium" style={{ fontSize:"clamp(9px,1vh,10px)" }}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ticker */}
      <div data-aos="fade-up" data-aos-delay="580" className="overflow-hidden" style={{ opacity:0.4, marginTop:"clamp(8px,1.5vh,20px)" }}>
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_,r) => (
            <div key={r} className="flex flex-shrink-0">
              {["Cloud","AI Solutions","Cybersecurity","E-commerce","Digital Marketing","Custom Software","DevOps","Analytics","UI/UX","Mobile Apps"].map(t => (
                <span key={t} className="inline-flex items-center gap-3 px-5 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                  <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ClientsSection;

