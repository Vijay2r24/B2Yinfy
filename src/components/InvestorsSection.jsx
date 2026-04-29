import { TrendingUp, FileText, BarChart2, Building2, ArrowRight, Download, Activity } from "lucide-react";

const reports = [
  { label:"Results",    text:"Annual Report - 2025",          href:"https://avccpalmdale.com/B2B/Investors_Column/AnnualReport_2025.pdf", Icon: BarChart2  },
  { label:"Governance", text:"Board of Directors & Policies",  href:"#",                                                                   Icon: Building2  },
  { label:"Financials", text:"Q4 2025 Earnings Release",       href:"#",                                                                   Icon: TrendingUp },
];

const highlights = [
  { val:"BSE",    label:"Exchange",  color:"#2563eb", bg:"#eff6ff", border:"#bfdbfe" },
  { val:"AAA",    label:"Rating",    color:"#059669", bg:"#ecfdf5", border:"#a7f3d0" },
  { val:"₹50Cr+", label:"Revenue",   color:"#0e7490", bg:"#ecfeff", border:"#a5f3fc" },
  { val:"2000",   label:"Founded",   color:"#d97706", bg:"#fffbeb", border:"#fde68a" },
];

const InvestorsSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden"
    style={{ paddingTop:"60px", background:"#ffffff" }}>

    {/* Dot pattern */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage:"radial-gradient(#dbeafe 1.5px,transparent 1.5px)", backgroundSize:"32px 32px", opacity:0.35 }} />

    {/* Orb */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full animate-orb"
        style={{ top:"50%", right:"-8%", background:"radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)", filter:"blur(90px)", transform:"translateY(-50%)" }} />
    </div>

    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28">

      {/* Title row */}
      <div className="flex items-center justify-between mb-3">
        <div data-aos="fade-right" data-aos-delay="0">
          <div className="section-label mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            Investor Relations
          </div>
          <h2 data-aos="fade-up" data-aos-delay="60"
            style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.5rem,2.8vw,2.8rem)", fontWeight:800, letterSpacing:"-0.015em" }}>
            <span className="text-[#0f172a]">Investor </span>
            <span className="text-gradient-warm">Central</span>
          </h2>
        </div>
        <a data-aos="fade-left" data-aos-delay="100" href="#" className="btn-ghost text-sm py-2 px-4">
          All Reports
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">

        {/* Left */}
        <div className="flex flex-col gap-2.5">

          {/* Image card */}
          <div data-aos="fade-right" data-aos-delay="140"
            className="relative rounded-2xl overflow-hidden group flex-shrink-0"
            style={{ height:"clamp(130px,18vh,185px)", border:"1px solid #e2e8f0", boxShadow:"0 4px 20px rgba(37,99,235,0.08)" }}>
            <img src="https://avccpalmdale.com/B2B/img/graphs.jpg" alt="Annual Report"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(30,64,175,0.88) 0%,rgba(30,64,175,0.2) 60%,transparent 100%)" }} />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div>
                <p className="text-white text-xs font-bold mb-0.5 flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5" /> Annual Report 2025
                </p>
                <p className="text-white/60 text-[10px]">Full year financial results</p>
              </div>
              <a href="https://avccpalmdale.com/B2B/Investors_Column/AnnualReport_2025.pdf"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary text-xs py-1.5 px-3">
                <Download className="w-3 h-3" />
                Download
              </a>
            </div>
          </div>

          {/* Stat pills */}
          <div className="grid grid-cols-4 gap-2">
            {highlights.map((h, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={200 + i * 70}
                className="rounded-xl text-center group cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{ background:h.bg, border:`1.5px solid ${h.border}`, boxShadow:`0 2px 10px ${h.color}10`,
                  padding:"clamp(8px,1.2vh,12px) 8px" }}>
                <div className="font-black text-sm leading-none mb-0.5"
                  style={{ fontFamily:"'Outfit',sans-serif", color:h.color }}>{h.val}</div>
                <div className="text-slate-500 text-[8px] uppercase tracking-[0.12em] font-bold">{h.label}</div>
              </div>
            ))}
          </div>

          {/* BSE badge */}
          <div data-aos="fade-up" data-aos-delay="390"
            className="rounded-2xl flex items-center gap-3 group cursor-default transition-all duration-300 hover:-translate-y-1"
            style={{ background:"linear-gradient(135deg,#eff6ff,#ecfeff)", border:"1.5px solid #bfdbfe",
              boxShadow:"0 4px 16px rgba(37,99,235,0.1)", padding:"clamp(10px,1.5vh,16px)" }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#1e40af,#0ea5e9)", boxShadow:"0 4px 12px rgba(37,99,235,0.3)" }}>
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-slate-900 text-xs font-bold" style={{ fontFamily:"'Outfit',sans-serif" }}>BSE Listed Company</p>
              <p className="text-slate-500 text-[10px] font-medium">Bombay Stock Exchange · Symbol: B2YINFY</p>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-green-500 animate-pulse-soft" />
              <span className="text-green-600 text-[10px] font-bold">Live</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-2.5">

          {/* About card */}
          <div data-aos="fade-left" data-aos-delay="140"
            className="rounded-2xl"
            style={{ background:"#ffffff", border:"1px solid #e2e8f0", boxShadow:"0 2px 12px rgba(37,99,235,0.05)",
              padding:"clamp(12px,1.8vh,20px)" }}>
            <h4 data-aos="fade-left" data-aos-delay="160"
              className="text-slate-900 text-sm font-bold mb-1.5 flex items-center gap-2" style={{ fontFamily:"'Outfit',sans-serif" }}>
              <Building2 className="w-4 h-4 text-blue-600" />
              About Investor Relations
            </h4>
            <p data-aos="fade-left" data-aos-delay="220" className="text-slate-500 text-xs leading-relaxed">
              B2YINFY is publicly listed on the Bombay Stock Exchange. Access our financial reports, governance documents, and shareholder information to make informed investment decisions.
            </p>
          </div>

          {/* Report rows */}
          <div className="flex flex-col gap-2">
            {reports.map(({ label, text, href, Icon }, i) => (
              <a key={i} data-aos="fade-left" data-aos-delay={210 + i * 90}
                href={href} target="_blank" rel="noopener noreferrer"
                className="report-row flex items-center gap-3 rounded-xl group"
                style={{ background:"#ffffff", border:"1px solid #e2e8f0", padding:"clamp(10px,1.4vh,16px)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background:"#eff6ff", border:"1px solid #bfdbfe" }}>
                  <Icon className="w-4 h-4 text-blue-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] text-blue-700 uppercase tracking-[0.15em] font-bold mb-0.5">{label}</p>
                  <p className="text-slate-800 text-sm font-semibold truncate group-hover:text-blue-700 transition-colors"
                    style={{ fontFamily:"'Outfit',sans-serif" }}>{text}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
              </a>
            ))}
          </div>

          <a data-aos="fade-up" data-aos-delay="520"
            href="#" className="btn-primary btn-ripple text-sm justify-center">
            View All Investor Documents
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default InvestorsSection;





