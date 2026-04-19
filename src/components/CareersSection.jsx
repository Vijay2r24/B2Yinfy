const btnStyle = {
  background: "linear-gradient(135deg,rgba(14,165,233,0.15),rgba(6,182,212,0.1))",
  border: "1px solid rgba(14,165,233,0.35)",
  color: "#7dd3fc",
  boxShadow: "0 0 16px rgba(14,165,233,0.12)",
};

const perks = [
  { title: "Fast Growth",     desc: "Clear career paths with rapid advancement opportunities", color: "#0ea5e9",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.82m2.56-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg> },
  { title: "Remote Friendly", desc: "Flexible hybrid work arrangements across global teams",   color: "#06b6d4",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg> },
  { title: "Learn & Grow",    desc: "Sponsored certifications and continuous learning budget",  color: "#0ea5e9",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg> },
  { title: "Great Pay",       desc: "Competitive compensation, equity, and performance bonuses", color: "#38bdf8",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
];

const openRoles = [
  { title: "Senior Full Stack Developer", dept: "Engineering",    type: "Full-time" },
  { title: "AI/ML Engineer",              dept: "Data Science",   type: "Full-time" },
  { title: "Cloud Architect",             dept: "Infrastructure", type: "Full-time" },
];

const CareersSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden section-dark" style={{ paddingTop:"64px" }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full animate-orb"
        style={{ top: "-20%", right: "-5%", background: "radial-gradient(circle,rgba(14,165,233,0.1) 0%,transparent 65%)", filter: "blur(90px)" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full animate-orb"
        style={{ bottom: "-15%", left: "10%", background: "radial-gradient(circle,rgba(6,182,212,0.08) 0%,transparent 65%)", filter: "blur(70px)", animationDelay: "6s" }} />
    </div>
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-0">
      <div className="grid lg:grid-cols-2 gap-8 xl:gap-14 items-center">

        {/* Left */}
        <div className="animate-slide-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 glass">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-soft" />
            <span className="text-sky-300 text-xs font-semibold uppercase tracking-[0.2em]">Join Our Team</span>
          </div>

          <h2 className="mb-4 leading-tight" style={{ fontFamily: "'Outfit',sans-serif",
            fontSize: "clamp(1.6rem,3vw,2.8rem)", fontWeight: 800, letterSpacing: "-0.025em" }}>
            <span className="text-white">Build the Future</span><br />
            <span className="text-glow">With B2YINFY</span>
          </h2>

          <p className="text-white/45 text-sm leading-relaxed mb-3 max-w-md">
            Join passionate technologists driving digital transformation. Work on real-world problems with cutting-edge technology.
          </p>

          {/* Open roles */}
          <div className="space-y-2 mb-3">
            {openRoles.map((r, i) => (
              <div key={i} className="glass-card flex items-center justify-between px-4 py-3 rounded-xl group cursor-pointer">
                <div>
                  <p className="text-white/80 text-sm font-semibold group-hover:text-white transition-colors">{r.title}</p>
                  <p className="text-white/30 text-xs">{r.dept} Â· {r.type}</p>
                </div>
                <svg className="w-4 h-4 text-white/30 group-hover:text-sky-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:brightness-125"
              style={btnStyle}>
              View All Roles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <span className="text-white/30 text-sm">10+ open positions</span>
          </div>
        </div>

        {/* Right â€” perks */}
        <div className="animate-slide-right">
          <div className="grid grid-cols-2 gap-3">
            {perks.map((p, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 30%,${p.color}15 0%,transparent 70%)` }} />
                <div className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg,transparent,${p.color}50,transparent)` }} />
                <div className="relative z-10">
                  <div className="mb-3 p-2 rounded-xl w-fit" style={{ background: `${p.color}18`, color: p.color }}>{p.icon}</div>
                  <h4 className="text-white text-sm font-bold mb-1.5" style={{ fontFamily: "'Outfit',sans-serif" }}>{p.title}</h4>
                  <p className="text-white/35 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CareersSection;








