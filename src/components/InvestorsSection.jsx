const reports = [
  { label: "Results",    text: "Annual Report - 2025",         href: "https://avccpalmdale.com/B2B/Investors_Column/AnnualReport_2025.pdf" },
  { label: "Governance", text: "Board of Directors & Policies", href: "#" },
  { label: "Financials", text: "Q4 2025 Earnings Release",      href: "#" },
];

const InvestorsSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden section-dark" style={{ paddingTop:"64px" }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full animate-orb"
        style={{ top: "50%", right: "-10%", background: "radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 65%)", filter: "blur(90px)", transform: "translateY(-50%)" }} />
    </div>
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-0">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-3 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3 glass">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-soft" />
            <span className="text-sky-300 text-xs font-semibold uppercase tracking-[0.2em]">Investor Relations</span>
          </div>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "clamp(1.5rem,2.8vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.025em" }}>
            <span className="text-white">Investor </span>
            <span style={{ background: "linear-gradient(135deg,#38bdf8,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Central</span>
          </h2>
        </div>

        {/* Card */}
        <div className="rounded-2xl overflow-hidden animate-scale-up delay-200"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
          <div className="grid md:grid-cols-2">

            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: 260 }}>
              <img src="https://avccpalmdale.com/B2B/img/graphs.jpg" alt="Annual Report"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(14,165,233,0.25),rgba(6,182,212,0.15))", mixBlendMode: "multiply" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(6,9,18,0.7) 0%,transparent 50%)" }} />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-semibold glass">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Annual Report 2025
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-1"
                style={{ fontFamily: "'Outfit',sans-serif", background: "linear-gradient(135deg,#38bdf8,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Investor Central
              </h4>
              <p className="text-white/35 text-xs mb-4">B2YINFY is publicly listed. Access financial reports, governance documents, and shareholder information.</p>

              <div className="space-y-2 mb-4">
                {reports.map((item, i) => (
                  <div key={i} className="glass-card p-3 rounded-xl">
                    <p className="text-[9px] text-sky-400 uppercase tracking-widest font-semibold mb-0.5">{item.label}</p>
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-white/60 hover:text-white font-medium transition-colors">
                      {item.text}
                      <span className="ml-1 text-sky-400">→</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl glass">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#06b6d4)" }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-semibold">BSE Listed Company</p>
                  <p className="text-white/30 text-[10px]">Bombay Stock Exchange · Symbol: B2YINFY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InvestorsSection;







