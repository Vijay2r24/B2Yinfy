import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";

const sections = [
  { id: "hero",          label: "Home",          Component: HeroSection },
  { id: "about",         label: "About",         Component: AboutSection },
  { id: "products",      label: "Products",      Component: ProductsSection },
  { id: "industries",    label: "Industries",    Component: IndustriesSection },
  { id: "technologies",  label: "Technologies",  Component: TechnologiesSection },
  { id: "clients",       label: "Clients",       Component: ClientsSection },
  { id: "contact",       label: "Contact",       Component: ContactSection },
];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [overlayActive, setOverlayActive] = useState(false);
  const [overlayDir, setOverlayDir] = useState("down");
  const locked = useRef(false);

  const goTo = (next) => {
    if (locked.current || next === current || next < 0 || next >= sections.length) return;
    locked.current = true;
    setOverlayDir(next > current ? "down" : "up");
    setOverlayActive(true);
    setTimeout(() => setCurrent(next), 380);
    setTimeout(() => setOverlayActive(false), 520);
    setTimeout(() => { locked.current = false; AOS.refreshHard(); }, 1000);
  };

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) goTo(current + 1);
      else goTo(current - 1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [current]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); goTo(current + 1); }
      if (e.key === "ArrowUp"   || e.key === "PageUp")   { e.preventDefault(); goTo(current - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  const { Component: ActiveSection } = sections[current];

  return (
    <div className="h-screen w-screen overflow-hidden relative" style={{ background:"#ffffff" }}>
      <Header currentSection={current} onNavigate={goTo} />

      {/* Cinematic overlay transition */}
      <div
        className="fixed inset-0 z-30 pointer-events-none page-overlay"
        style={{
          background: "#ffffff",
          transform: overlayActive
            ? "translateY(0%)"
            : overlayDir === "down" ? "translateY(-100%)" : "translateY(100%)",
        }}
      />

      {/* Section */}
      <main className="h-full w-full section-enter" key={current}>
        <ActiveSection />
      </main>

      {/* Right nav dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 items-end">
        {sections.map((s, i) => (
          <button key={s.id} onClick={() => goTo(i)} aria-label={s.label}
            className="group flex items-center gap-2 cursor-pointer">
            <span className={`text-[9px] tracking-[0.15em] uppercase font-bold transition-all duration-300 ${
              i === current ? "text-blue-700 opacity-100" : "text-slate-400 opacity-0 group-hover:opacity-100"
            }`}>{s.label}</span>
            <span className={`block rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-1.5 bg-blue-600 nav-dot-active"
                : "w-1.5 h-1.5 bg-slate-300 group-hover:bg-blue-400 group-hover:w-3"
            }`} />
          </button>
        ))}
      </div>

      {/* Bottom counter */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <span className="text-slate-700 font-black text-xs" style={{ fontFamily:"'Outfit',sans-serif" }}>{String(current + 1).padStart(2,"0")}</span>
        <div className="w-8 h-px bg-slate-300" />
        <span className="text-slate-400 text-xs font-medium">{String(sections.length).padStart(2,"0")}</span>
      </div>

      {/* Scroll hint */}
      {current < sections.length - 1 && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1.5">
          <div className="w-px h-7 bg-gradient-to-b from-transparent to-blue-500/60 animate-pulse" />
          <span className="text-slate-400 text-[8px] uppercase tracking-[0.3em] font-semibold">scroll</span>
        </div>
      )}
    </div>
  );
};

export default Index;





