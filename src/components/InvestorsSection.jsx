const reports = [
  { label: "Results",    text: "Annual Report - 2025",         href: "https://avccpalmdale.com/B2B/Investors_Column/AnnualReport_2025.pdf" },
  { label: "Governance", text: "Board of Directors & Policies", href: "#" },
  { label: "Financials", text: "Q4 2025 Earnings Release",      href: "#" },
];

const InvestorsSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden section-dark" style={{ paddingTop:"72px" }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full animate-orb"
        style={{ top:"50%", right:"-10%", background:"radial-gradient(circle,rgba(14,165,233,0.1) 0%,transparent 65%)", filter:"blur(90px)", transform:"translateY(-50%)" }} />
    </div>

    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-6">

      {/* Badge + Title row */}
      <div className="flex items-center justify-between mb-4 animate-fade-up">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2"
            style={{ background:"linear-gradient(135deg,#dbeafe,#e0f2fe)", border:"1px solid #93c5fd" }}>
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse-soft flex-shrink-0" />
            <span className="text-sky-700 text-[11px] font-bold uppercase tracking-[0.15em]">Investor Relations</span>
          </div>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,2.5vw,2.2rem)", fontWeight:800, letterSpacing:"-0.025em" }}>
            <span className="text-slate-900">Investor </span>
            <span className="text-glow-cool">Central</span>
          </h2>
        </div>
        <a href="#" className="text-sky-600 hover:text-sky-800 text-sm font-semibold transition-colors">All Reports →</a>
      </div>

      {/* Main layout — 2 columns */}
      <div className="grid lg:grid-cols-2 gap-4 animate-scale-up delay-100">

        {/* Left column */}
        <div className="flex flex-col gap-3">

          {/* Image card */}
          <div className="relative rounded-2xl overflow-hidden"
            style={{ height:180, border:"1px solid #dbeafe" }}>
            <img src="https://avccpalmdale.com/B2B/img/graphs.jpg" alt="Annual Report"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(2,132,199,0.7) 0%,transparent 55%)" }} />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="text-white text-xs font-bold">📊 Annual Report 2025</span>
              <a href="https://avccpalmdale.com/B2B/Investors_Column/AnnualReport_2025.pdf"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-xs font-semibold"
                style={{ background:"linear-gradient(135deg,#0ea5e9,#0284c7)" }}>
                Download
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { val:"BSE",    label:"Exchange",  color:"#0284c7" },
              { val:"AAA",    label:"Rating",    color:"#059669" },
              { val:"₹50Cr+", label:"Revenue",   color:"#7c3aed" },
              { val:"2000",   label:"Founded",   color:"#d97706" },
            ].map((h, i) => (
              <div key={i} className="rounded-xl p-2.5 text-center"
                style={{ background:"#ffffff", border:`1.5px solid ${h.color}20`, boxShadow:`0 1px 6px ${h.color}10` }}>
                <div className="font-black text-sm leading-none mb-0.5"
                  style={{ fontFamily:"'Outfit',sans-serif", color:h.color }}>{h.val}</div>
                <div className="text-slate-400 text-[8px] uppercase tracking-[0.1em] font-semibold">{h.label}</div>
              </div>
            ))}
          </div>

          {/* BSE badge */}
          <div className="p-3 rounded-xl flex items-center gap-3"
            style={{ background:"linear-gradient(135deg,#f0f9ff,#e0f2fe)", border:"1.5px solid #7dd3fc" }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background:"linear-gradient(135deg,#0ea5e9,#0284c7)" }}>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-slate-800 text-xs font-bold">BSE Listed Company</p>
              <p className="text-slate-500 text-[10px]">Bombay Stock Exchange · Symbol: B2YINFY</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-soft" />
              <span className="text-green-600 text-[10px] font-bold">Live</span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-3">

          {/* Description */}
          <div className="p-4 rounded-2xl"
            style={{ background:"#ffffff", border:"1px solid #dbeafe" }}>
            <h4 className="text-slate-900 text-sm font-bold mb-1" style={{ fontFamily:"'Outfit',sans-serif" }}>
              About Investor Relations
            </h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              B2YINFY is publicly listed on the Bombay Stock Exchange. Access our financial reports, governance documents, and shareholder information to make informed investment decisions.
            </p>
          </div>

          {/* Reports */}
          <div className="flex flex-col gap-2">
            {reports.map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ background:"#ffffff", border:"1px solid #dbeafe", boxShadow:"0 1px 4px rgba(14,165,233,0.06)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#dbeafe,#e0f2fe)" }}>
                  <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] text-sky-600 uppercase tracking-widest font-bold mb-0.5">{item.label}</p>
                  <p className="text-slate-800 text-sm font-semibold truncate group-hover:text-sky-700 transition-colors">{item.text}</p>
                </div>
                <svg className="w-4 h-4 text-slate-300 group-hover:text-sky-500 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#" className="inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 btn-glow">
            View All Investor Documents
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default InvestorsSection;
