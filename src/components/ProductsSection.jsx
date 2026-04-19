const cards = [
  { title:"Cloud Solutions",       desc:"AWS, Azure & GCP infrastructure, cloud migration, DevOps pipelines, and 24/7 managed services.",          color:"#3b82f6", tags:["AWS","Azure","GCP"] },
  { title:"Custom Software",       desc:"Full-stack web apps, mobile solutions, and enterprise platforms built with React, Node.js & Python.",      color:"#fbbf24", tags:["React","Node.js","Python"] },
  { title:"AI & Machine Learning", desc:"Intelligent automation, NLP chatbots, predictive analytics, and computer vision solutions.",               color:"#3b82f6", tags:["GPT","TensorFlow","PyTorch"] },
  { title:"Digital Marketing",     desc:"SEO, PPC, social media, content strategy, and data-driven campaigns that deliver measurable ROI.",         color:"#06b6d4", tags:["SEO","PPC","Analytics"] },
  { title:"Cybersecurity",         desc:"Penetration testing, VAPT, SOC monitoring, compliance audits, and zero-trust security architecture.",      color:"#10b981", tags:["VAPT","SOC","ISO 27001"] },
  { title:"E-commerce",            desc:"Custom storefronts, marketplace integrations, payment gateways, and headless commerce solutions.",         color:"#f59e0b", tags:["Shopify","WooCommerce","Stripe"] },
];

const svgIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>,
];

const ProductsSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden section-dark" style={{ paddingTop:"64px" }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full animate-orb"
        style={{ top:"50%", left:"-10%", background:"radial-gradient(circle,rgba(96,165,250,0.1) 0%,transparent 65%)", filter:"blur(80px)", transform:"translateY(-50%)" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full animate-orb"
        style={{ top:"-20%", right:"15%", background:"radial-gradient(circle,rgba(96,165,250,0.08) 0%,transparent 65%)", filter:"blur(70px)", animationDelay:"6s" }} />
    </div>
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage:"radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize:"40px 40px" }} />

    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 pt-0">
      <div className="flex items-end justify-between mb-3">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 glass">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-soft" />
            <span className="text-amber-300 text-xs font-semibold uppercase tracking-[0.2em]">What We Do</span>
          </div>
          <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.5rem,2.8vw,2.5rem)", fontWeight:800, letterSpacing:"-0.025em" }}>
            <span className="text-white">Our </span><span className="text-glow">Core Services</span>
          </h2>
          <p className="text-white/35 text-sm mt-1.5 max-w-lg">End-to-end technology solutions designed to accelerate your business growth</p>
        </div>
        <a href="#" className="hidden lg:flex items-center gap-1.5 text-white/30 hover:text-white text-sm transition-colors animate-fade-up delay-200">All Services â†’</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {cards.map((c, i) => (
          <div key={c.title}
            className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer animate-fade-up glass-card"
            style={{ animationDelay:`${0.08+i*0.07}s` }}>
            <div className="h-0.5 w-full transition-all duration-300 group-hover:h-1"
              style={{ background:`linear-gradient(90deg,${c.color},${c.color}60)` }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ background:`radial-gradient(circle at 50% 0%,${c.color}15 0%,transparent 65%)` }} />
            <div className="flex flex-col flex-1 p-4 relative z-10">
              <div className="mb-3 p-2 rounded-xl w-fit" style={{ background:`${c.color}18`, color:c.color }}>
                {svgIcons[i]}
              </div>
              <h3 className="text-white text-sm font-bold mb-1.5 leading-snug">{c.title}</h3>
              <p className="text-white/35 text-[10px] leading-relaxed flex-1 group-hover:text-white/55 transition-colors mb-3">{c.desc}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {c.tags.map(tag => (
                  <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded font-medium"
                    style={{ background:`${c.color}20`, color:c.color }}>{tag}</span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-1 text-[11px] font-semibold transition-all duration-300 group-hover:gap-2"
                style={{ color:c.color }}>Explore â†’</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;










