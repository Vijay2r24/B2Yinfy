import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const heroRef = useRef(null);
  
  // Total number of slides (should match HeroSection slides)
  const totalSlides = 8;

  // Scroll-based slide navigation
  useEffect(() => {
    let isThrottled = false;
    
    const handleWheel = (e) => {
      if (isThrottled || isScrolling) return;
      
      e.preventDefault();
      isThrottled = true;
      setIsScrolling(true);
      
      if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
        // Scroll down - next slide
        setCurrentSlide(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        // Scroll up - previous slide
        setCurrentSlide(prev => prev - 1);
      }
      
      // Reset throttle
      setTimeout(() => {
        isThrottled = false;
        setIsScrolling(false);
      }, 800);
    };
    
    // Add event listener
    document.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [currentSlide, totalSlides, isScrolling]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isScrolling) return;
      
      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentSlide < totalSlides - 1) {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentSlide(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 800);
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSlide > 0) {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentSlide(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, totalSlides, isScrolling]);

  return (
    <div className="h-screen overflow-hidden bg-[hsl(200,15%,15%)]">
      <Header />
      
      {/* Slide Progress Indicator */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <div className="w-1 h-32 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="w-full bg-white/60 rounded-full transition-all duration-800 ease-out"
            style={{ 
              height: `${((currentSlide + 1) / totalSlides) * 100}%`,
              transform: 'translateY(0)'
            }}
          />
        </div>
      </div>

      {/* Main Content - Hero Section with Slider */}
      <main className="h-full">
        <div className="h-screen flex flex-col" style={{ minHeight: '100vh' }}>
          <HeroSection ref={heroRef} currentSlide={currentSlide} onSlideChange={setCurrentSlide} />
        </div>
      </main>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2">
        <div className="text-white/60 text-xs uppercase tracking-wide">Scroll</div>
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-8 right-8 z-40 text-white/60 text-sm">
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>
    </div>
  );
};

export default Index;