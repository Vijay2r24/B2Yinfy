import { useState, useEffect, useRef } from "react";
import { Cpu, Briefcase, DollarSign, Zap, Shield } from "lucide-react";

const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);
  return [ref, isInView];
};

const techLogos = [
  { name: "HTML5",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Angular",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Django",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Flutter",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: ".NET",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "Node.js",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "WordPress",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Azure",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Python",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "AWS",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "MySQL",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Redis",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "PHP",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const features = [
  {
    Icon: Briefcase,
    color: "#7c3aed",
    title: "Professionalism",
    desc: "Our global tech experts deliver with the same professionalism found in world-class software engineering.",
  },
  {
    Icon: DollarSign,
    color: "#2563eb",
    title: "Affordable",
    desc: "We promise to offer you the best rate we can — at par with the industry standard.",
  },
  {
    Icon: Zap,
    color: "#059669",
    title: "Fast Delivery",
    desc: "Agile sprints and CI/CD pipelines ensure your product ships on time, every time.",
  },
  {
    Icon: Shield,
    color: "#d97706",
    title: "Secure & Reliable",
    desc: "Enterprise-grade security and 99.9% uptime SLAs built into every solution we deliver.",
  },
];

const LogoCell = ({ name, logo, delay, isInView }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-center py-2 px-1 rounded-xl cursor-default"
      style={{
        background: hov ? "#f8fafc" : "#ffffff",
        border: hov ? "1.5px solid #bfdbfe" : "1.5px solid #e2e8f0",
        boxShadow: hov ? "0 6px 18px rgba(37,99,235,0.12)" : "0 1px 3px rgba(10,22,40,0.05)",
        transform: hov ? "translateY(-3px) scale(1.05)" : isInView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <img
        src={logo}
        alt={name}
        style={{ width: "clamp(24px,3vw,36px)", height: "clamp(24px,3vw,36px)", objectFit: "contain",
          filter: hov ? "none" : "grayscale(15%)", opacity: hov ? 1 : 0.85 }}
        onError={e => { e.target.style.display = "none"; }}
      />
      <span className="font-semibold text-slate-500 mt-1 text-center leading-tight"
        style={{ fontSize: "clamp(7px,0.7vw,9px)" }}>{name}</span>
    </div>
  );
};

const TechnologiesSection = () => {
  const [sectionRef, isInView] = useInView();

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full relative overflow-hidden flex items-center"
      style={{ paddingTop: "60px", background: "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#dbeafe 1.5px,transparent 1.5px)", backgroundSize: "32px 32px", opacity: 0.3 }} />

      {/* Orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 65%)", filter: "blur(80px)",
            animation: "pulse-slow 8s ease-in-out infinite" }} />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          {/* ── LEFT: Text content ── */}
          <div>
            {/* Label */}
            <div
              className="section-label mb-2.5"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(-16px)",
                transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              Technologies
            </div>

            {/* Quote heading */}
            <h2
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: "clamp(1.3rem,2.2vw,2.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#0f172a",
                lineHeight: 1.2,
                marginBottom: "0.6rem",
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(-40px)",
                transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s",
              }}
            >
              "In code, We{" "}
              <span className="text-gradient">innovate</span>
              <br />the future."
            </h2>

            {/* Description */}
            <p
              className="text-slate-500 leading-relaxed mb-5 max-w-md"
              style={{
                fontSize: "clamp(10px,1vw,12px)",
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s",
              }}
            >
              "In code, we innovate the future" symbolizes the transformative power of
              software technology. It underscores how our engineering initiatives are
              essential for preparing businesses to drive innovation, address complex
              challenges, and lead the digital revolution of tomorrow.
            </p>

            {/* Feature list */}
            <div className="space-y-2.5">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateX(0)" : "translateX(-30px)",
                    transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: f.color + "15", border: `1.5px solid ${f.color}30` }}
                  >
                    <f.Icon className="w-3 h-3" style={{ color: f.color }} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-bold mb-0.5" style={{ fontSize: "11px", color: f.color, fontFamily: "'Outfit',sans-serif" }}>
                      {f.title}
                    </p>
                    <p className="text-slate-500 leading-relaxed" style={{ fontSize: "10px" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Logo grid ── */}
          <div
            className="grid grid-cols-4 gap-1.5"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "opacity 0.4s ease 0.2s",
            }}
          >
            {techLogos.map((t, i) => (
              <LogoCell
                key={t.name}
                name={t.name}
                logo={t.logo}
                isInView={isInView}
                delay={0.3 + i * 0.04}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
