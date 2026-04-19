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
  { quote:"B2YINFY transformed our entire digital infrastructure. Delivery was on time, on budget, and exceeded expectations.", name:"Rajesh Kumar", role:"CTO, TechCorp India", initials:"RK", color:"#3b82f6" },
  { quote:"Their AI solutions reduced our operational costs by 40%. The team is highly skilled and incredibly responsive.", name:"Priya Sharma", role:"VP Engineering, FinanceHub", initials:"PS", color:"#fbbf24" },
  { quote:"Outstanding cloud migration. Zero downtime, seamless transition, and excellent post-launch support.", name:"Amit Patel", role:"Director IT, RetailMax", initials:"AP", color:"#3b82f6" },
];

const ClientsSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden section-dark" style={{ paddingTop:"64px" }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full animate-orb"
        style={{ top:"50%", left:"50%", background:"radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 65%)", filter:"blur(100px)", transform:"translate(-50%,-50%)" }} />
    </div>
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage:"radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize:"40px 40px" }} />

    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-0">
      <div className="flex items-end justify-between mb-4 animate-fade-up">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 glass">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-soft" />
            <span className="text-cyan-300 text-xs font-semibold uppercase tracking-[0.2em]">Trusted By 50+ Companies</span>
          </div>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.5rem,2.8vw,2.5rem)", fontWeight:800, letterSpacing:"-0.025em" }}>
            <span className="text-white">Clients &amp; </span><span className="text-glow-cool">Testimonials</span>
          </h2>
        </div>
        <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">View All â†’</a>
      </div>

      {/* Logo grid */}
      <div className="grid grid-cols-6 gap-2 mb-3">
        {clients.map((c, i) => (
          <div key={i} className="group flex items-center justify-center p-2.5 rounded-xl cursor-pointer glass-card animate-fade-up"
            style={{ animationDelay:`${0.04+i*0.04}s`, minHeight:56 }}>
            <img src={c.src} alt={`Client ${i+1}`} loading="lazy"
              className="object-contain transition-all duration-400 filter brightness-50 group-hover:brightness-100 group-hover:scale-110"
              style={{ width:c.w, maxWidth:"100%" }} />
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-3 gap-2.5 animate-fade-up delay-400">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-card rounded-xl p-3.5 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
              style={{ background:`radial-gradient(circle at 0% 0%,${t.color}12 0%,transparent 70%)` }} />
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background:`linear-gradient(90deg,${t.color}60,transparent)` }} />
            <div className="relative z-10">
              <div className="text-white/20 text-3xl font-serif leading-none mb-2">"</div>
              <p className="text-white/55 text-xs leading-relaxed mb-4">{t.quote}</p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background:`linear-gradient(135deg,${t.color},${t.color}80)` }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white/80 text-xs font-semibold">{t.name}</p>
                  <p className="text-white/30 text-[10px]">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ticker */}
      <div className="mt-4 overflow-hidden opacity-40">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_,r) => (
            <div key={r} className="flex flex-shrink-0">
              {["Cloud","AI Solutions","Cybersecurity","E-commerce","Digital Marketing","Custom Software","DevOps","Analytics","UI/UX","Mobile Apps"].map(t => (
                <span key={t} className="inline-flex items-center gap-3 px-6 text-white/30 text-xs uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-indigo-500/50 flex-shrink-0" />{t}
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









