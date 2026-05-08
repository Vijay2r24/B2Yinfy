import { useState } from "react";
import { Cpu, Zap, Code2, Cloud, Database, Brain, Smartphone, Layout } from "lucide-react";

const categories = [
  {
    label: "Frontend",     color: "#2563eb", light: "#eff6ff", Icon: Layout,
    techs: ["React","Next.js","Vue.js","TypeScript","Tailwind","Flutter"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    ],
  },
  {
    label: "Backend",      color: "#059669", light: "#ecfdf5", Icon: Code2,
    techs: ["Node.js","Python","Java","Go","PHP","Django"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    ],
  },
  {
    label: "Cloud & DevOps", color: "#0891b2", light: "#ecfeff", Icon: Cloud,
    techs: ["AWS","Azure","Docker","Kubernetes","Jenkins","Linux"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    ],
  },
  {
    label: "Database",     color: "#d97706", light: "#fffbeb", Icon: Database,
    techs: ["MongoDB","PostgreSQL","MySQL","Redis","Firebase","GraphQL"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    ],
  },
  {
    label: "AI & ML",      color: "#7c3aed", light: "#f5f3ff", Icon: Brain,
    techs: ["TensorFlow","PyTorch","OpenCV","Jupyter","Pandas","NumPy"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    ],
  },
  {
    label: "Mobile",       color: "#db2777", light: "#fdf2f8", Icon: Smartphone,
    techs: ["React Native","Flutter","Swift","Kotlin","Android","Xcode"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
    ],
  },
];

const stats = [
  { val: "5+",   label: "Years",       color: "#2563eb" },
  { val: "100+", label: "Projects",    color: "#059669" },
  { val: "50+",  label: "Technologies",color: "#7c3aed" },
  { val: "99%",  label: "Satisfaction",color: "#d97706" },
];

/* Single logo icon with tooltip */
const LogoIcon = ({ logo, name, color, light }) => {
  const [hov, setHov] = useState(false);
  return (
    <div className="relative flex flex-col items-center"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}>
      <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-250 cursor-default"
        style={{
          background: hov ? light : "#ffffff",
          border: hov ? `1.5px solid ${color}40` : "1.5px solid #e2e8f0",
          transform: hov ? "translateY(-4px) scale(1.1)" : "translateY(0) scale(1)",
          boxShadow: hov ? "0 6px 16px rgba(10,22,40,0.10)" : "0 1px 3px rgba(10,22,40,0.04)",
        }}>
        <img src={logo} alt={name}
          className="w-5 h-5 object-contain transition-all duration-250"
          style={{ filter: hov ? "none" : "grayscale(10%)", opacity: hov ? 1 : 0.8 }}
          onError={e => { e.target.style.display = "none"; }} />
      </div>
      {/* Tooltip */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-200 whitespace-nowrap"
        style={{ opacity: hov ? 1 : 0, transform: `translateX(-50%) translateY(${hov ? 0 : -4}px)` }}>
        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-md"
          style={{ background: color, color: "#fff" }}>{name}</span>
      </div>
    </div>
  );
};

const TechnologiesSection = () => (
  <section className="h-screen w-full flex items-center relative overflow-hidden"
    style={{ paddingTop: "60px", background: "#ffffff" }}>

    {/* Dot grid */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage: "radial-gradient(#cbd5e1 1px,transparent 1px)", backgroundSize: "28px 28px", opacity: 0.3 }} />

    {/* Orb */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full animate-orb"
        style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 65%)", filter: "blur(80px)" }} />
    </div>

    <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 xl:px-20">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
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
        {/* Inline stats */}
        <div data-aos="fade-left" data-aos-delay="100" className="hidden lg:flex items-center gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-black text-xl leading-none" style={{ fontFamily:"'Outfit',sans-serif", color: s.color }}>{s.val}</p>
              <p className="text-slate-400 text-[9px] font-semibold uppercase tracking-[0.1em] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3×2 category grid ── */}
      <div data-aos="fade-up" data-aos-delay="180"
        className="grid grid-cols-3 gap-3">
        {categories.map((cat, ci) => (
          <div key={cat.label}
            data-aos="fade-up" data-aos-delay={180 + ci * 50}
            className="rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 group"
            style={{
              background: "#fafbfc",
              border: "1.5px solid #e2e8f0",
              boxShadow: "0 2px 8px rgba(10,22,40,0.04)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = cat.color + "40";
              e.currentTarget.style.background = cat.light;
              e.currentTarget.style.boxShadow = `0 8px 24px rgba(10,22,40,0.08)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.background = "#fafbfc";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(10,22,40,0.04)";
            }}>

            {/* Category label */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: cat.light, border: `1.5px solid ${cat.color}30` }}>
                <cat.Icon className="w-3.5 h-3.5" style={{ color: cat.color }} />
              </div>
              <span className="text-xs font-black" style={{ fontFamily:"'Outfit',sans-serif", color: "#0f172a" }}>
                {cat.label}
              </span>
            </div>

            {/* 6 logos in a single row */}
            <div className="flex items-center gap-2 pb-1">
              {cat.logos.map((logo, li) => (
                <LogoIcon key={cat.techs[li]} logo={logo} name={cat.techs[li]} color={cat.color} light={cat.light} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Ticker */}
      <div data-aos="fade-up" data-aos-delay="400"
        className="mt-4 overflow-hidden" style={{ opacity: 0.4 }}>
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex flex-shrink-0">
              {categories.flatMap(c => c.techs).map(t => (
                <span key={t + r} className="inline-flex items-center gap-2 px-5 text-slate-500 text-[10px] uppercase tracking-[0.18em] font-bold">
                  <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechnologiesSection;
