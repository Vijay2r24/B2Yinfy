import { MapPin, Mail, Phone, MessageSquare, Clock, Headphones, ThumbsUp, Send } from "lucide-react";

const contactItems = [
  { label:"Address", val:"Technology Hub, Innovation Center, Digital Solutions Complex, Tech City", href:null,
    Icon: MapPin, color:"#2563eb", bg:"#eff6ff", border:"#bfdbfe" },
  { label:"Email",   val:"info@b2yinfy.com", href:"mailto:info@b2yinfy.com",
    Icon: Mail,   color:"#0284c7", bg:"#f0f9ff", border:"#bae6fd" },
  { label:"Phone",   val:"+1 (555) 012-3456", href:"tel:+15550123456",
    Icon: Phone,  color:"#0e7490", bg:"#ecfeff", border:"#a5f3fc" },
];

const quickStats = [
  { label:"Response Time", val:"< 2 hrs", color:"#2563eb", bg:"#eff6ff", border:"#bfdbfe", Icon: Clock     },
  { label:"Support",       val:"24/7",    color:"#0284c7", bg:"#f0f9ff", border:"#bae6fd", Icon: Headphones },
  { label:"Satisfaction",  val:"99.9%",   color:"#059669", bg:"#ecfdf5", border:"#a7f3d0", Icon: ThumbsUp  },
];

const ContactSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden"
    style={{ paddingTop:"60px", background:"#ffffff" }}>

    {/* Orbs */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full animate-orb"
        style={{ bottom:"-15%", left:"-5%", background:"radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%)", filter:"blur(80px)" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full animate-orb"
        style={{ top:"-10%", right:"18%", background:"radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 65%)", filter:"blur(70px)", animationDelay:"5s" }} />
    </div>
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage:"radial-gradient(rgba(37,99,235,0.04) 1px,transparent 1px)", backgroundSize:"36px 36px" }} />

    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* Left */}
        <div>
          <div data-aos="fade-down" data-aos-delay="0" className="section-label mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            Get In Touch
          </div>

          <h2 data-aos="fade-right" data-aos-delay="80"
            className="mb-2 leading-[1.08]"
            style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.5rem,2.8vw,2.8rem)", fontWeight:800, letterSpacing:"-0.015em" }}>
            <span data-aos="fade-right" data-aos-delay="80" className="text-gradient" style={{ display:"block" }}>B2YINFY</span>
            <span data-aos="fade-right" data-aos-delay="160" className="text-[#0f172a]" style={{ display:"block" }}>Technologies</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="220"
            className="text-slate-500 text-sm leading-relaxed mb-4 max-w-sm">
            Ready to transform your business? Let's talk about your next big project.
          </p>

          {/* Contact items */}
          <div className="space-y-2 mb-4">
            {contactItems.map(({ label, val, href, Icon, color, bg, border }, i) => (
              <div key={i} data-aos="fade-right" data-aos-delay={200 + i * 90}
                className="contact-item flex items-start gap-3 rounded-xl cursor-default"
                style={{ border:"1px solid #f1f5f9", padding:"clamp(10px,1.4vh,14px)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background:bg, border:`1px solid ${border}` }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase tracking-[0.15em] mb-0.5 font-bold">{label}</p>
                  {href
                    ? <a href={href} className="text-slate-700 hover:text-blue-700 text-sm font-semibold transition-colors">{val}</a>
                    : <p className="text-slate-700 text-sm font-medium">{val}</p>}
                </div>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="490">
            <a href="#" className="btn-primary btn-ripple text-sm">
              <Send className="w-4 h-4" />
              Send Message
            </a>
          </div>
        </div>

        {/* Right */}
        <div data-aos="fade-left" data-aos-delay="180">

          {/* Map image */}
          <div className="relative group rounded-2xl overflow-hidden mb-3"
            style={{ border:"1px solid #e2e8f0", boxShadow:"0 8px 32px rgba(37,99,235,0.1)" }}>
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=380&fit=crop"
              alt="Office" className="w-full transition-transform duration-500 group-hover:scale-105"
              style={{ maxHeight:"clamp(160px,22vh,280px)", objectFit:"cover" }} />
            {/* Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              style={{ background:"rgba(10,22,40,0.45)", backdropFilter:"blur(4px)" }}>
              <a href="#" className="btn-primary text-sm">
                <MapPin className="w-4 h-4" />
                View on Maps
              </a>
            </div>
            {/* Bottom info bar */}
            <div className="absolute bottom-0 left-0 right-0 p-3"
              style={{ background:"linear-gradient(to top,rgba(10,22,40,0.85),transparent)" }}>
              <p className="text-white text-xs font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Technology Hub, Tech City
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-2.5">
            {quickStats.map(({ label, val, color, bg, border, Icon }, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={320 + i * 70}
                className="rounded-xl text-center group cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{ background:bg, border:`1.5px solid ${border}`, boxShadow:`0 2px 10px ${color}0e`,
                  padding:"clamp(10px,1.5vh,14px) 8px" }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110"
                  style={{ background:"#ffffff", border:`1px solid ${border}`, marginBottom:"clamp(4px,0.8vh,8px)" }}>
                  <Icon className="w-3.5 h-3.5" style={{ color }} />
                </div>
                <div className="font-black text-sm mb-0.5" style={{ fontFamily:"'Outfit',sans-serif", color }}>{val}</div>
                <div className="text-slate-500 text-[9px] uppercase tracking-[0.12em] font-bold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;





