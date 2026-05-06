import { useState } from "react";
import { Cpu, Zap, Star } from "lucide-react";

const categories = [
  {
    label: "Frontend",
    color: "#2563eb", light: "#eff6ff",
    desc: "Pixel-perfect UIs with modern frameworks",
    techs: [
      { name: "React",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Flutter",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ],
  },
  {
    label: "Backend",
    color: "#059669", light: "#ecfdf5",
    desc: "Scalable APIs and server-side solutions",
    techs: [
      { name: "Node.js",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Go",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "PHP",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Django",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "#0891b2", light: "#ecfeff",
    desc: "Reliable infrastructure at any scale",
    techs: [
      { name: "AWS",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Azure",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Docker",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Jenkins",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Linux",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
  },
  {
    label: "Database",
    color: "#d97706", light: "#fffbeb",
    desc: "Fast, reliable data storage solutions",
    techs: [
      { name: "MongoDB",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Redis",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Firebase",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "GraphQL",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    ],
  },
  {
    label: "AI & ML",
    color: "#7c3aed", light: "#f5f3ff",
    desc: "Intelligent automation and analytics",
    techs: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "OpenCV",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Jupyter",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Pandas",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    ],
  },
  {
    label: "Mobile",
    color: "#db2777", light: "#fdf2f8",
    desc: "Native & cross-platform mobile apps",
    techs: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Swift",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Kotlin",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Android",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "Xcode",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" },
    ],
  },
];

const stats = [
  { val: "5+",   label: "Years Experience" },
  { val: "100+", label: "Projects Delivered" },
  { val: "20+",  label: "Certified Engineers" },
  { val: "99%",  label: "Client Satisfaction" },
];

/* ── Single tech logo card ── */
const TechCard = ({ tech, color, light, i }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      data-aos="zoom-in"
      data-aos-delay={i * 50}
      className="flex flex-col items-center gap-2 cursor-default"
      style={{ transform: hov ? "translateY(-8px) scale(1.06)" : "translateY(0) scale(1)", transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)" }}>

      {/* Logo box */}
      <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
        style={{
          background: hov ? `linear-gradient(135deg,${light},${color}18)` : "#ffffff",
          border: hov ? `2px solid ${color}60` : "2px solid #e2e8f0",
          boxShadow: hov ? `0 8px 24px rgba(10,22,40,0.10)` : "0 2px 8px rgba(10,22,40,0.06)",
        }}>
        {/* Glow ring on hover */}
        <div className="absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{ background: `radial-gradient(circle at 50% 50%, ${color}20, transparent 70%)`, opacity: hov ? 1 : 0 }} />
        <img src={tech.logo} alt={tech.name}
          className="w-9 h-9 object-contain relative z-10 transition-all duration-300"
          style={{ filter: hov ? "none drop-shadow(0 0 6px rgba(0,0,0,0.15))" : "grayscale(20%)", opacity: hov ? 1 : 0.85 }}
          onError={e => { e.target.style.display = "none"; }} />
      </div>

      {/* Name */}
      <span className="text-[10px] font-bold text-center leading-tight transition-colors duration-200"
        style={{ color: hov ? color : "#475569" }}>
        {tech.name}
      </span>
    </div>
  );
};

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const cat = categories[activeTab];

  return (
    <section className="h-screen w-full flex items-center relative overflow-hidden"
      style={{ paddingTop: "60px", background: "#ffffff" }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1px,transparent 1px)", backgroundSize: "28px 28px", opacity: 0.35 }} />

      {/* Dynamic ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full transition-all duration-700"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            background: `radial-gradient(circle, ${cat.color}0e 0%, transparent 65%)`, filter: "blur(80px)" }} />
        <div className="absolute w-[300px] h-[300px] rounded-full animate-orb"
          style={{ top: "-10%", right: "5%", background: `radial-gradient(circle,${cat.color}08 0%,transparent 65%)`, filter: "blur(60px)", transition: "background 0.7s ease" }} />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 xl:px-20">

        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div data-aos="fade-down" data-aos-delay="0" className="section-label mb-2">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              Tech Stack
            </div>
            <h2 data-aos="fade-up" data-aos-delay="70"
              style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(1.4rem,2.4vw,2.4rem)", fontWeight:800, letterSpacing:"-0.015em", color:"#0f172a" }}>
              Technologies <span className="text-gradient">We Master</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="130" className="text-slate-500 text-sm mt-0.5 font-medium">
              Modern, battle-tested tools across every layer of the stack
            </p>
          </div>

          {/* Stats row */}
          <div data-aos="fade-left" data-aos-delay="100" className="hidden lg:flex items-center gap-5">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-black text-lg leading-none transition-colors duration-500"
                  style={{ fontFamily:"'Outfit',sans-serif", color: cat.color }}>{s.val}</p>
                <p className="text-slate-400 text-[9px] font-semibold uppercase tracking-[0.1em] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Category tabs ── */}
        <div data-aos="fade-up" data-aos-delay="160" className="flex items-center gap-2 mb-4 flex-wrap">
          {categories.map((c, i) => (
            <button key={c.label} onClick={() => setActiveTab(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-250"
              style={{
                background: i === activeTab ? c.color : "#f8fafc",
                color: i === activeTab ? "#ffffff" : "#64748b",
                border: i === activeTab ? `1.5px solid ${c.color}` : "1.5px solid #e2e8f0",
                boxShadow: i === activeTab ? "none" : "none",
                transform: i === activeTab ? "translateY(-2px) scale(1.05)" : "translateY(0) scale(1)",
              }}>
              {i === activeTab && <Star className="w-3 h-3" fill="currentColor" />}
              {c.label}
            </button>
          ))}
        </div>

        {/* ── Main panel ── */}
        <div data-aos="fade-up" data-aos-delay="220"
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${cat.light} 0%, #ffffff 60%)`,
            border: `1.5px solid ${cat.color}30`,
            boxShadow: `0 4px 24px rgba(10,22,40,0.08)`,
            transition: "all 0.4s ease",
          }}>

          {/* Decorative corner glow */}
          <div className="absolute top-0 right-0 w-48 h-48 rounded-bl-full pointer-events-none"
            style={{ background: `radial-gradient(circle at top right, ${cat.color}18, transparent 70%)` }} />

          <div className="relative z-10 p-5">
            {/* Panel header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: cat.color, boxShadow: `0 4px 14px rgba(10,22,40,0.15)` }}>
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base leading-tight"
                    style={{ fontFamily:"'Outfit',sans-serif", color: cat.color }}>{cat.label}</h3>
                  <p className="text-slate-500 text-xs mt-0.5">{cat.desc}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "#f1f5f9", color: "#334155" }}>
                {cat.techs.length} Technologies
              </span>
            </div>

            {/* ── Logo grid ── */}
            <div className="grid grid-cols-6 gap-4">
              {cat.techs.map((tech, i) => (
                <TechCard key={tech.name} tech={tech} color={cat.color} light={cat.light} i={i} />
              ))}
            </div>

            {/* ── Bottom divider + progress bars ── */}
            <div className="mt-5 pt-4" style={{ borderTop: `1px solid ${cat.color}20` }}>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "Expertise Level", val: 95 },
                  { label: "Projects Delivered", val: 88 },
                  { label: "Client Satisfaction", val: 99 },
                  { label: "Team Certified", val: 80 },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-600 text-[10px] font-semibold">{bar.label}</span>
                      <span className="font-black text-[10px]" style={{ color: cat.color }}>{bar.val}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${cat.color}18` }}>
                      <div className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${bar.val}%`, background: `linear-gradient(90deg, ${cat.color}, ${cat.color}80)` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Ticker ── */}
        <div data-aos="fade-up" data-aos-delay="300"
          className="mt-3 overflow-hidden" style={{ opacity: 0.4 }}>
          <div className="flex animate-ticker whitespace-nowrap">
            {[...Array(2)].map((_, r) => (
              <div key={r} className="flex flex-shrink-0">
                {categories.flatMap(c => c.techs).map(t => (
                  <span key={t.name + r} className="inline-flex items-center gap-2 px-5 text-slate-500 text-[10px] uppercase tracking-[0.18em] font-bold">
                    <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />{t.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
