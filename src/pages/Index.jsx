import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ClientsSection from "@/components/ClientsSection";
import CareersSection from "@/components/CareersSection";
import InvestorsSection from "@/components/InvestorsSection";
import ContactSection from "@/components/ContactSection";

const sections = [
  { id: "hero",      label: "Home",       Component: HeroSection },
  { id: "about",     label: "About",      Component: AboutSection },
  { id: "products",  label: "Products",   Component: ProductsSection },
  { id: "clients",   label: "Clients",    Component: ClientsSection },
  { id: "careers",   label: "Careers",    Component: CareersSection },
  { id: "investors", label: "Investors",  Component: InvestorsSection },
  { id: "contact",   label: "Contact",    Component: ContactSection },
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
    setTimeout(() => { locked.current = false; }, 1000);
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
    <div className="h-screen w-screen overflow-hidden relative" style={{ background:"#03071e" }}>
      <Header currentSection={current} onNavigate={goTo} />

      {/* Cinematic overlay transition */}
      <div
        className="fixed inset-0 z-30 pointer-events-none"
        style={{
          background: "linear-gradient(160deg,#03071e 0%,#050d2e 50%,#03071e 100%)",
          transform: overlayActive
            ? "translateY(0%)"
            : overlayDir === "down" ? "translateY(-100%)" : "translateY(100%)",
          transition: overlayActive
            ? "transform 0.38s cubic-bezier(0.76,0,0.24,1)"
            : "transform 0.44s cubic-bezier(0.76,0,0.24,1)",
        }}
      />

      {/* Section */}
      <main className="h-full w-full">
        <ActiveSection />
      </main>

      {/* Right nav dots */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 items-end">
        {sections.map((s, i) => (
          <button key={s.id} onClick={() => goTo(i)} aria-label={s.label}
            className="group flex items-center gap-1.5">
            <span className={`text-[9px] tracking-widest uppercase transition-all duration-300 ${
              i === current ? "text-white/70" : "text-white/0 group-hover:text-white/50"
            }`}>{s.label}</span>
            <span className={`block rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-1 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                : "w-1 h-1 bg-white/20 group-hover:bg-blue-400/50 group-hover:w-2.5"
            }`} />
          </button>
        ))}
      </div>

      {/* Bottom counter */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-1.5">
        <span className="text-white/60 font-bold text-xs">{String(current + 1).padStart(2,"0")}</span>
        <div className="w-6 h-px bg-white/25" />
        <span className="text-white/30 text-xs">{String(sections.length).padStart(2,"0")}</span>
      </div>

      {/* Scroll hint */}
      {current < sections.length - 1 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1">
          <div className="w-px h-6 bg-gradient-to-b from-transparent to-white/40 animate-pulse" />
          <span className="text-white/25 text-[8px] uppercase tracking-[0.3em]">scroll</span>
        </div>
      )}
    </div>
  );
};

export default Index;

