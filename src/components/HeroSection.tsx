import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Vertical Established Text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="vertical-text text-xs tracking-[0.3em] text-muted-foreground font-light">
          ESTABLISHED 2000
        </span>
      </div>

      {/* Section Navigation Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === 0 ? "bg-primary w-3 h-3" : "bg-muted-foreground/40 hover:bg-primary/60"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 lg:py-0">
        <div className="max-w-4xl">
          {/* Years Badge */}
          <div className="flex items-baseline gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-6xl md:text-8xl font-bold text-primary">25</span>
            <div className="flex flex-col">
              <span className="text-lg text-foreground font-medium">Years</span>
              <span className="text-sm text-muted-foreground">Experience</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            B2B Software Technologies Ltd
          </h1>

          {/* Subtitle */}
          <p 
            className="text-sm md:text-base text-primary tracking-wider uppercase mb-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Your end-to-end partner for Dynamics 365 ERP, emerging technologies, and healthcare solutions.
          </p>

          <p 
            className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            25 Years of enabling digital transformation with Dynamics 365, ERP, Analytics & Healthcare
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button 
              size="lg" 
              className="bg-muted/50 hover:bg-muted text-foreground border border-border hover:border-primary transition-all duration-300 px-8"
            >
              TALK TO B2B SOFTWARE
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-6 left-6">
        <p className="text-xs text-muted-foreground">COPYRIGHT © 2026 B2BSOFTECH</p>
      </div>
    </section>
  );
};

export default HeroSection;
