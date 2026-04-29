import { Linkedin, Twitter, Facebook, Instagram, ArrowUpRight, Heart, MapPin, Mail, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer style={{ background:"#0a1628" }} className="text-white">
    {/* Top accent */}
    <div className="h-1 w-full" style={{ background:"linear-gradient(90deg,#1e40af,#2563eb,#06b6d4,#22d3ee)" }} />

    <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-14">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Brand */}
        <div data-aos="fade-up" data-aos-delay="0" className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background:"linear-gradient(135deg,#1e40af,#0ea5e9)", boxShadow:"0 4px 14px rgba(37,99,235,0.4)" }}>
              <span className="text-white font-black text-sm" style={{ fontFamily:"'Outfit',sans-serif" }}>B2Y</span>
            </div>
            <div>
              <div className="text-white font-black text-base" style={{ fontFamily:"'Outfit',sans-serif" }}>B2YINFY</div>
              <div className="text-slate-500 text-[9px] tracking-[0.2em] uppercase font-semibold">Technologies</div>
            </div>
          </div>
          <p data-aos="fade-up" data-aos-delay="60" className="text-slate-400 text-sm leading-relaxed mb-5">
            Leading technology solutions provider specializing in digital transformation, cloud solutions, and innovative software development.
          </p>
          <div className="flex gap-2 stagger-children">
            {[
              { Icon:Linkedin,  bg:"hover:bg-blue-600",  label:"LinkedIn"  },
              { Icon:Twitter,   bg:"hover:bg-sky-500",   label:"Twitter"   },
              { Icon:Facebook,  bg:"hover:bg-blue-700",  label:"Facebook"  },
              { Icon:Instagram, bg:"hover:bg-pink-500",  label:"Instagram" },
            ].map(({ Icon, bg, label }, i) => (
              <a key={i} href="#" aria-label={label}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-250 hover:scale-110 hover:-translate-y-1 ${bg}`}
                style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)" }}>
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="80">
          <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2" style={{ fontFamily:"'Outfit',sans-serif" }}>
            Quick Links
            <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,rgba(37,99,235,0.5),transparent)" }} />
          </h4>
          <ul className="space-y-2.5">
            {["Home","About Us","Services","Solutions","Contact"].map((l, i) => (
              <li key={i}>
                <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-blue-400 transition-all duration-200 rounded-full" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div data-aos="fade-up" data-aos-delay="160">
          <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2" style={{ fontFamily:"'Outfit',sans-serif" }}>
            Our Services
            <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,rgba(37,99,235,0.5),transparent)" }} />
          </h4>
          <ul className="space-y-2.5">
            {["Cloud Solutions","Software Development","AI & Machine Learning","Digital Marketing","Cybersecurity","E-commerce Platforms"].map((s, i) => (
              <li key={i}>
                <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-200 rounded-full" />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-delay="240">
          <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2" style={{ fontFamily:"'Outfit',sans-serif" }}>
            Get In Touch
            <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,rgba(37,99,235,0.5),transparent)" }} />
          </h4>
          <div className="space-y-3.5">
            {[
              { Icon:MapPin, color:"text-blue-400",   label:"Office", val:"Technology Hub, Innovation Center, Tech City" },
              { Icon:Mail,   color:"text-cyan-400",   label:"Email",  val:"info@b2yinfy.com" },
              { Icon:Phone,  color:"text-green-400",  label:"Phone",  val:"+1 (555) 012-3456" },
              { Icon:Clock,  color:"text-purple-400", label:"Hours",  val:"Mon–Fri: 9AM – 6PM" },
            ].map(({ Icon, color, label, val }, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <div>
                  <p className="text-slate-500 text-[9px] uppercase tracking-[0.15em] font-bold mb-0.5">{label}</p>
                  <p className="text-slate-300 text-xs font-medium">{val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6"
        style={{ borderTop:"1px solid rgba(255,255,255,0.07)" }}>
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <span>© 2026 B2YINFY Technologies. Made with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
          <span>All rights reserved.</span>
        </div>
        <div className="flex gap-5">
          {["Privacy Policy","Terms of Service","Cookie Policy"].map(l => (
            <a key={l} href="#" className="text-slate-500 hover:text-white text-xs font-medium transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;





