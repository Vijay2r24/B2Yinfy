import { useState, useEffect, forwardRef } from "react";

// You can replace these with actual image URLs or import actual image files
const slides = [
  {
    id: 0,
    title: "Digital Innovation Partner",
    subtitle: "Leading technology solutions company driving digital transformation",
    description: "Innovative solutions • Global reach • Cutting-edge technology • Award-winning digital platforms",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center",
    ctaText: "Explore Our Solutions"
  },
  {
    id: 1,
    title: "Cloud Solutions & Infrastructure",
    subtitle: "Comprehensive cloud migration and infrastructure management",
    description: "Expert cloud architecture, migration services, and scalable infrastructure solutions for modern businesses",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&h=1080&fit=crop&crop=center",
    ctaText: "Cloud Solutions"
  },
  {
    id: 2,
    title: "Custom Software Development",
    subtitle: "Tailored software solutions for your business needs",
    description: "Full-stack development, mobile applications, and enterprise software solutions with cutting-edge technologies",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop&crop=center",
    ctaText: "Development Services"
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    subtitle: "Intelligent automation and data-driven insights",
    description: "Advanced AI solutions, machine learning models, and intelligent automation for business optimization",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop&crop=center",
    ctaText: "AI Solutions"
  },
  {
    id: 4,
    title: "Digital Marketing & Analytics",
    subtitle: "Data-driven marketing strategies and analytics",
    description: "Comprehensive digital marketing solutions with advanced analytics and performance optimization",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=center",
    ctaText: "Marketing Solutions"
  },
  {
    id: 5,
    title: "Cybersecurity Solutions",
    subtitle: "Comprehensive security for digital assets",
    description: "Advanced cybersecurity services, threat detection, and security infrastructure for enterprise protection",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop&crop=center",
    ctaText: "Security Solutions"
  },
  {
    id: 6,
    title: "E-commerce Platforms",
    subtitle: "Complete e-commerce solutions and platforms",
    description: "Custom e-commerce development, marketplace solutions, and digital commerce platforms for growth",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1920&h=1080&fit=crop&crop=center",
    ctaText: "E-commerce Solutions"
  },
  {
    id: 7,
    title: "Technology Consulting",
    subtitle: "Strategic technology guidance and consulting",
    description: "Expert technology consulting, digital strategy, and innovation roadmaps for business transformation",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center",
    ctaText: "Consulting Services"
  }
];

const HeroSection = forwardRef(({ currentSlide: externalCurrentSlide, onSlideChange }, ref) => {
  const [internalCurrentSlide, setInternalCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Use external slide control if provided, otherwise use internal
  const currentSlide = externalCurrentSlide !== undefined ? externalCurrentSlide : internalCurrentSlide;
  const setCurrentSlide = onSlideChange || setInternalCurrentSlide;

  // Auto-play functionality (disabled when external control is used)
  useEffect(() => {
    if (!isAutoPlaying || externalCurrentSlide !== undefined) return;
    
    const interval = setInterval(() => {
      setInternalCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, externalCurrentSlide]);

  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const currentSlideData = slides[currentSlide];
  
  return (
    <section 
      id="hero-section"
      className="relative h-full flex items-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image - Different image for each slide */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${currentSlideData.imageUrl})` }}
      />
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Slide Navigation Dots - Right Side */}
      <div className="absolute right-24 lg:right-32 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => handleSlideChange(i)}
            className={`group relative w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentSlide 
                ? "bg-white/80 ring-1 ring-white/30 ring-offset-1 ring-offset-transparent scale-125"
                : "bg-white/30 hover:bg-white/50 hover:scale-110"
            }`}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
          >
            {/* Tooltip on hover */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white/90 text-black px-2 py-1 rounded text-[10px] whitespace-nowrap backdrop-blur-sm">
                {slide.title}
              </div>
              {/* Arrow */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1 w-0 h-0 border-l-2 border-l-white/90 border-t-1 border-t-transparent border-b-1 border-b-transparent"></div>
            </div>
            
            {/* Progress indicator for current slide */}
            {i === currentSlide && isAutoPlaying && (
              <div className="absolute inset-0 rounded-full">
                <div className="w-full h-full rounded-full border border-white/50 animate-spin-slow"></div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12 xl:px-24">
          <div className="grid lg:grid-cols-12 gap-8 items-center h-full py-20">
            {/* Left Content - Text */}
            <div className="lg:col-span-7 xl:col-span-6">
              <div className="transition-all duration-500">
                {/* Slide indicator */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-0.5 bg-white/60"></div>
                  <span className="text-xs text-white/70 tracking-[0.2em] uppercase font-medium">
                    {currentSlide === 0 ? 'Digital Innovation' : 
                     currentSlide === 1 ? 'Cloud Solutions' :
                     currentSlide === 2 ? 'Software Development' :
                     currentSlide === 3 ? 'AI & ML' :
                     currentSlide === 4 ? 'Digital Marketing' :
                     currentSlide === 5 ? 'Cybersecurity' :
                     currentSlide === 6 ? 'E-commerce' : 'Consulting'}
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
                  {currentSlideData.title}
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 font-light leading-relaxed max-w-2xl">
                  {currentSlideData.subtitle}
                </p>

                {/* Description */}
                <p className="text-base md:text-lg text-white/75 mb-10 font-light leading-relaxed max-w-xl">
                  {currentSlideData.description}
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 transition-all duration-300 px-8 py-4 text-sm tracking-wide uppercase font-medium group backdrop-blur-sm rounded-lg">
                    {currentSlideData.ctaText}
                    <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </button>
                  <button className="text-white/80 hover:text-white text-sm tracking-wide uppercase font-medium transition-colors duration-300 flex items-center gap-2">
                    Learn More
                    <span className="w-4 h-4 border border-white/50 rounded-full flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-white/70 rounded-full"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Stats/Info */}
            <div className="lg:col-span-5 xl:col-span-6 lg:pl-8">
              <div className="hidden lg:block">
                {/* Empty space for balance */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Bottom Left */}
      <div className="absolute bottom-6 left-6 lg:left-10 z-20">
        <p className="text-[10px] text-white/50 tracking-widest uppercase">
          Copyright © 2026 B2Yinfy
        </p>
      </div>
    </section>
  );
});

export default HeroSection;