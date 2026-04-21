const clients = [
  { src:"https://avccpalmdale.com/B2B/img/APMDC.png",  w:65  },
  { src:"https://avccpalmdale.com/B2B/img/caxton.png", w:100 },
  { src:"https://avccpalmdale.com/B2B/img/1.png",      w:100 },
  { src:"https://avccpalmdale.com/B2B/img/2.png",      w:90  },
  { src:"https://avccpalmdale.com/B2B/img/3.png",      w:95  },
  { src:"https://avccpalmdale.com/B2B/img/4.png",      w:75  },
  { src:"https://avccpalmdale.com/B2B/img/5.png",      w:120 },
  { src:"https://avccpalmdale.com/B2B/img/6.png",      w:120 },
  { src:"https://avccpalmdale.com/B2B/img/15.png",     w:90  },
  { src:"https://avccpalmdale.com/B2B/img/16.png",     w:130 },
  { src:"https://avccpalmdale.com/B2B/img/17.png",     w:95  },
  { src:"https://avccpalmdale.com/B2B/img/18.png",     w:90  },
];

const testimonials = [
  { quote:"B2YINFY transformed our entire digital infrastructure. Delivery was on time, on budget, and exceeded expectations.", name:"Rajesh Kumar", role:"CTO, TechCorp India", initials:"RK", color:"#0284c7" },
  { quote:"Their AI solutions reduced our operational costs by 40%. The team is highly skilled and incredibly responsive.", name:"Priya Sharma", role:"VP Engineering, FinanceHub", initials:"PS", color:"#0891b2" },
  { quote:"Outstanding cloud migration. Zero downtime, seamless transition, and excellent post-launch support.", name:"Amit Patel", role:"Director IT, RetailMax", initials:"AP", color:"#1d4ed8" },
];

const ClientsSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden section-dark" style={{ paddingTop:"72px" }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full animate-orb"
        style={{ top:"50%", left:"50%", background:"radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 65%)", filter:"blur(100px)", transform:"translate(-50%,-50%)" }} />
    </div>

    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-8">

      {/* Header */}
      <div className="flex items-end justify-between mb-5 animate-fade-up">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
            style={{ background:"linear-gradient(135deg,#dbeafe,#e0f2fe)", border:"1px solid #93c5fd" }}>
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse-soft flex-shrink-0" />
            <span className="text-sky-700 text-[11px] font-bold uppercase tracking-[0.15em]">Trusted By 50+ Companies</span>
          </div>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.5rem,2.8vw,2.5rem)", fontWeight:800, letterSpacing:"-0.025em" }}>
            <span className="text-slate-900">Clients &amp; </span>
            <span className="text-glow-cool">Testimonials</span>
          </h2>
        </div>
        <a href="#" className="text-sky-600 hover:text-sky-800 text-sm font-semibold transition-colors">View All →</a>
      </div>

      {/* Logo grid — NO white cards, just transparent rows with subtle separator */}
      <div className="mb-5 rounded-2xl overflow-hidden"
        style={{ background:"#ffffff", border:"1px solid #dbeafe", boxShadow:"0 2px 16px rgba(14,165,233,0.08)" }}>
        <div className="grid grid-cols-6 divide-x divide-y divide-blue-100">
          {clients.map((c, i) => (
            <div key={i}
              className="group flex items-center justify-center p-3 cursor-pointer transition-all duration-300 hover:bg-sky-50"
              style={{ minHeight:60 }}>
              <img src={c.src} alt={`Client ${i+1}`} loading="lazy"
                className="object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                style={{ width:c.w, maxWidth:"100%", opacity:0.7 }}
                onMouseEnter={e => e.target.style.opacity = "1"}
                onMouseLeave={e => e.target.style.opacity = "0.7"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials — colored left-border style, no heavy white cards */}
      <div className="grid grid-cols-3 gap-3 animate-fade-up delay-300">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-xl p-4 relative transition-all duration-300 hover:-translate-y-1"
            style={{ background:"#ffffff", borderLeft:`4px solid ${t.color}`, boxShadow:`0 2px 16px ${t.color}15` }}>
            {/* Quote mark */}
            <div className="text-4xl font-serif leading-none mb-2 font-black"
              style={{ color:`${t.color}30`, lineHeight:1 }}>"</div>
            <p className="text-slate-600 text-xs leading-relaxed mb-3">{t.quote}</p>
            <div className="flex items-center gap-2.5 pt-2.5"
              style={{ borderTop:`1px solid ${t.color}20` }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background:`linear-gradient(135deg,${t.color},${t.color}cc)` }}>
                {t.initials}
              </div>
              <div>
                <p className="text-slate-800 text-xs font-bold">{t.name}</p>
                <p className="text-slate-500 text-[10px]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scrolling ticker */}
      <div className="mt-4 overflow-hidden" style={{ opacity:0.5 }}>
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_,r) => (
            <div key={r} className="flex flex-shrink-0">
              {["Cloud","AI Solutions","Cybersecurity","E-commerce","Digital Marketing","Custom Software","DevOps","Analytics","UI/UX","Mobile Apps"].map(t => (
                <span key={t} className="inline-flex items-center gap-3 px-6 text-slate-600 text-xs uppercase tracking-widest font-medium">
                  <span className="w-1 h-1 rounded-full bg-sky-400 flex-shrink-0" />{t}
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
