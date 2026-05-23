import { MapPin, Mail, Phone, Send, ArrowUpRight } from "lucide-react";

const locations = [
  {
    city: "Bengaluru",
    address: "301/302, 3rd Floor, Saket Callipolis, Sarjapur – Marathahalli Road, Doddakannelli, Bengaluru, Karnataka 560035",
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    light: "#eff6ff",
  },
  {
    city: "Hyderabad",
    address: "Flat No 101, Providence Chamber Apartments, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    light: "#f5f3ff",
  },
];

const ContactSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden"
    style={{ paddingTop: "60px", background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}>

    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full"
        style={{ bottom: "-20%", left: "-10%", background: "radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 65%)", filter: "blur(80px)", animation: "pulse-slow 8s ease-in-out infinite" }} />
      <div className="absolute w-[500px] h-[500px] rounded-full"
        style={{ top: "-15%", right: "-5%", background: "radial-gradient(circle,rgba(124,58,237,0.05) 0%,transparent 65%)", filter: "blur(70px)", animation: "pulse-slow 10s ease-in-out infinite 3s" }} />
    </div>
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage: "radial-gradient(#dbeafe 1.5px,transparent 1.5px)", backgroundSize: "32px 32px", opacity: 0.3 }} />

    <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

        {/* ── LEFT: Locations ── */}
        <div>
          <div data-aos="fade-down" data-aos-delay="0" className="section-label mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            Our Locations
          </div>

          <h2 data-aos="fade-right" data-aos-delay="100" className="heading-section mb-2">
            <span className="text-[#0f172a]">Our </span>
            <span className="text-gradient">Locations</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="150" className="text-body mb-6 max-w-md">
            Connect with us at any of our two strategic locations across India.
          </p>

          {/* Location cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {locations.map((loc, i) => (
              <div key={loc.city} data-aos="fade-up" data-aos-delay={200 + i * 100}
                className="group rounded-2xl p-5 text-center transition-all duration-400 hover:-translate-y-2 cursor-default relative overflow-hidden"
                style={{
                  background: "#ffffff",
                  border: `1.5px solid ${loc.color}20`,
                  boxShadow: `0 4px 20px ${loc.color}10, 0 1px 3px rgba(15,23,42,0.06)`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${loc.color}20, 0 4px 12px ${loc.color}10`;
                  e.currentTarget.style.borderColor = loc.color + "40";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = `0 4px 20px ${loc.color}10, 0 1px 3px rgba(15,23,42,0.06)`;
                  e.currentTarget.style.borderColor = loc.color + "20";
                }}
              >
                {/* Glow accent */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: loc.gradient }} />

                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: loc.gradient, boxShadow: `0 4px 14px ${loc.color}30` }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-sm mb-2.5 uppercase tracking-[0.1em] transition-colors duration-300"
                  style={{ color: loc.color }}>
                  {loc.city}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {loc.address}
                </p>
              </div>
            ))}
          </div>

          {/* Contact info row */}
          <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="400">
            <a href="mailto:info@b2yinfy.com"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#eff6ff" }}>
                <Mail className="w-3.5 h-3.5 text-blue-600" />
              </div>
              info@b2yinfy.com
            </a>
            <a href="tel:+919999999999"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-green-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              style={{ background: "#ffffff", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#f0fdf4" }}>
                <Phone className="w-3.5 h-3.5 text-green-600" />
              </div>
              +91 XXXXX XXXXX
            </a>
          </div>
        </div>

        {/* ── RIGHT: Contact Form ── */}
        <div data-aos="fade-left" data-aos-delay="200">
          <div className="rounded-2xl p-6 md:p-7 relative overflow-hidden"
            style={{
              background: "#ffffff",
              border: "1.5px solid #e2e8f0",
              boxShadow: "0 8px 40px rgba(15,23,42,0.08), 0 2px 8px rgba(37,99,235,0.04)",
            }}>

            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(90deg, #2563eb, #7c3aed, #06b6d4)" }} />

            <h3 className="heading-sub mb-5">
              Get in <span className="text-gradient">Touch</span>
            </h3>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                style={{ fontFamily: "'Inter',sans-serif" }}
              />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                style={{ fontFamily: "'Inter',sans-serif" }}
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                  style={{ fontFamily: "'Inter',sans-serif" }}
                />
                <input
                  type="tel"
                  placeholder="+91 Phone"
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                  style={{ fontFamily: "'Inter',sans-serif" }}
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 focus:bg-white transition-all duration-200 resize-none placeholder:text-slate-400"
                style={{ fontFamily: "'Inter',sans-serif" }}
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #7c3aed 100%)",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
                }}
              >
                <Send className="w-4 h-4" />
                Send Message
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ContactSection;
