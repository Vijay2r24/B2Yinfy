import { TrendingUp, Globe, BookOpen, DollarSign, Briefcase, ArrowRight } from "lucide-react";

const perks = [
  { title:"Fast Growth",     desc:"Clear career paths with rapid advancement opportunities", color:"#2563eb", bg:"#eff6ff", border:"#bfdbfe", Icon: TrendingUp },
  { title:"Remote Friendly", desc:"Flexible hybrid work arrangements across global teams",   color:"#0284c7", bg:"#f0f9ff", border:"#bae6fd", Icon: Globe      },
  { title:"Learn & Grow",    desc:"Sponsored certifications and continuous learning budget",  color:"#0e7490", bg:"#ecfeff", border:"#a5f3fc", Icon: BookOpen   },
  { title:"Great Pay",       desc:"Competitive compensation, equity, and performance bonuses",color:"#059669", bg:"#ecfdf5", border:"#a7f3d0", Icon: DollarSign },
];

const openRoles = [
  { title:"Senior Full Stack Developer", dept:"Engineering",    type:"Full-time", hot:true  },
  { title:"AI/ML Engineer",              dept:"Data Science",   type:"Full-time", hot:true  },
  { title:"Cloud Architect",             dept:"Infrastructure", type:"Full-time", hot:false },
];

const CareersSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden"
    style={{ paddingTop:"60px", background:"#ffffff" }}>

    {/* Orbs */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full animate-orb"
        style={{ top:"-20%", right:"-5%", background:"radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)", filter:"blur(90px)" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full animate-orb"
        style={{ bottom:"-15%", left:"8%", background:"radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 65%)", filter:"blur(70px)", animationDelay:"6s" }} />
    </div>
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage:"radial-gradient(rgba(37,99,235,0.04) 1px,transparent 1px)", backgroundSize:"36px 36px" }} />

    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">

        {/* Left */}
        <div>
          <div data-aos="fade-down" data-aos-delay="0" className="section-label mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            Join Our Team
          </div>

          <h2 data-aos="fade-right" data-aos-delay="80"
            className="mb-3 leading-[1.08]"
            style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.5rem,2.8vw,2.8rem)", fontWeight:800, letterSpacing:"-0.015em" }}>
            <span data-aos="fade-right" data-aos-delay="80" className="text-[#0f172a]" style={{ display:"block" }}>Build the Future</span>
            <span data-aos="fade-right" data-aos-delay="160" className="text-gradient" style={{ display:"block" }}>With B2YINFY</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="220"
            className="text-slate-500 text-sm leading-relaxed mb-4 max-w-md">
            Join passionate technologists driving digital transformation. Work on real-world problems with cutting-edge technology and a team that cares.
          </p>

          {/* Open roles */}
          <div className="space-y-2 mb-4">
            {openRoles.map((r, i) => (
              <div key={i} data-aos="fade-right" data-aos-delay={230 + i * 75}
                className="role-card flex items-center justify-between px-3.5 py-3 rounded-xl cursor-pointer"
                style={{ background:"rgba(255,255,255,0.7)", border:"1px solid #e2e8f0" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background:"#eff6ff", border:"1px solid #bfdbfe" }}>
                    <Briefcase className="w-3.5 h-3.5 text-blue-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-slate-900 text-sm font-bold" style={{ fontFamily:"'Outfit',sans-serif" }}>{r.title}</p>
                      {r.hot && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold text-white"
                          style={{ background:"linear-gradient(135deg,#ef4444,#dc2626)" }}>HOT</span>
                      )}
                    </div>
                    <p className="text-slate-400 text-xs font-medium">{r.dept} · {r.type}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="480" className="flex items-center gap-4">
            <a href="#" className="btn-primary text-sm">
              View All Roles
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-slate-400 text-sm font-medium">10+ open positions</span>
          </div>
        </div>

        {/* Right — perks */}
        <div className="grid grid-cols-2 gap-2.5">
          {perks.map(({ title, desc, color, bg, border, Icon }, i) => (
            <div key={i} data-aos="zoom-in-up" data-aos-delay={i * 90}
              className="perk-card shimmer-card rounded-2xl relative overflow-hidden cursor-default"
              style={{ background:"#ffffff", border:`1px solid ${color}18`, boxShadow:`0 4px 20px ${color}0e`,
                padding:"clamp(12px,1.8vh,20px)" }}>
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background:`linear-gradient(135deg,${bg},transparent 70%)` }} />
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background:`linear-gradient(90deg,${color},${color}40)` }} />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center icon-bounce transition-transform duration-300 group-hover:scale-110"
                  style={{ background:bg, border:`1px solid ${border}`, marginBottom:"clamp(8px,1.2vh,12px)" }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h4 className="text-slate-900 text-sm font-bold mb-1 transition-colors duration-200 group-hover:text-blue-700"
                  style={{ fontFamily:"'Outfit',sans-serif" }}>{title}</h4>
                <p className="text-slate-500 leading-relaxed transition-colors duration-200 group-hover:text-slate-600"
                  style={{ fontSize:"clamp(10px,1.1vw,12px)" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CareersSection;





