const ContactSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden section-dark" style={{ paddingTop:"72px" }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full animate-orb"
        style={{ bottom:"-15%", left:"-5%", background:"radial-gradient(circle,rgba(96,165,250,0.09) 0%,transparent 65%)", filter:"blur(80px)" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full animate-orb"
        style={{ top:"-10%", right:"20%", background:"radial-gradient(circle,rgba(251,191,36,0.07) 0%,transparent 65%)", filter:"blur(70px)", animationDelay:"5s" }} />
    </div>
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage:"radial-gradient(rgba(14,165,233,0.08) 1px,transparent 1px)", backgroundSize:"40px 40px" }} />

    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-4">
      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* Left */}
        <div className="animate-slide-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3" style={{ background:"linear-gradient(135deg,#dbeafe,#e0f2fe)", border:"1px solid #93c5fd" }}>
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-soft" />
            <span className="text-sky-700 text-xs font-bold uppercase tracking-[0.15em]">Get In Touch</span>
          </div>

          <h2 className="mb-4 leading-tight" style={{ fontFamily:"'Outfit',sans-serif",
            fontSize:"clamp(1.5rem,2.8vw,2.5rem)", fontWeight:800, letterSpacing:"-0.025em" }}>
            <span className="text-glow">B2YINFY</span><br />
            <span className="text-slate-900">Technologies</span>
          </h2>

          <div className="space-y-2 mb-3">
            {[
              { label:"Address", val:"Technology Hub, Innovation Center, Digital Solutions Complex, Tech City",
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              { label:"Email", val:"info@b2yinfy.com", href:"mailto:info@b2yinfy.com",
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
              { label:"Phone", val:"+1 (555) 012-3456", href:"tel:+15550123456",
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
            ].map((item,i) => (
              <div key={i} className="flex items-start gap-3 py-2.5 border-b border-slate-200 last:border-0">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-white"
                  style={{ background:"linear-gradient(135deg,#0ea5e9,#0284c7)" }}>{item.icon}</div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-0.5 font-semibold">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="text-slate-700 hover:text-sky-600 text-sm font-medium transition-colors">{item.val}</a>
                    : <p className="text-slate-700 text-sm">{item.val}</p>}
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 btn-glow">
            Send Message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Right */}
        <div className="animate-slide-right">
          <div className="relative group rounded-2xl overflow-hidden"
            style={{ border:"1px solid #dbeafe" }}>
            <div className="relative rounded-2xl overflow-hidden"
              style={{ border:"1px solid #dbeafe" }}>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=450&fit=crop"
                alt="Office" className="w-full transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background:"rgba(6,9,18,0.5)", backdropFilter:"blur(4px)" }}>
                <span className="text-white text-sm font-semibold px-6 py-3 rounded-full btn-glow">View on Maps â†’</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;



















