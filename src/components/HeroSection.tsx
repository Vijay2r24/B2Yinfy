import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[hsl(200,15%,15%)]/75" />

      {/* Vertical Established Text - Left Side */}
      <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20">
        <span className="vertical-text text-[10px] tracking-[0.4em] text-foreground/50 font-light uppercase">
          Established 2000
        </span>
      </div>

      {/* Section Navigation Dots - Right Side */}
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === 0 
                ? "bg-foreground ring-2 ring-foreground/30 ring-offset-2 ring-offset-transparent" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-24 py-32">
        <div className="max-w-4xl">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
            B2B Software Technologies Ltd
          </h1>

          {/* Subtitle - Uppercase */}
          <p className="text-xs md:text-sm text-foreground/90 tracking-[0.15em] uppercase mb-3 font-light">
            Your end-to-end partner for Dynamics 365 ERP, emerging technologies, and healthcare solutions.
          </p>

          {/* Description */}
          <p className="text-foreground/70 text-sm md:text-base mb-10 font-light">
            25 Years of enabling digital transformation with Dynamics 365, ERP, Analytics & Healthcare
          </p>

          {/* CTA Button */}
          <button className="bg-foreground/10 hover:bg-foreground/20 text-foreground border border-foreground/30 hover:border-foreground/50 transition-all px-8 py-3 text-sm tracking-widest uppercase font-light">
            Talk to B2B Software
          </button>
        </div>
      </div>

      {/* Years Experience Badge - Positioned */}
      <div className="absolute left-6 lg:left-24 top-1/2 -translate-y-1/2 translate-y-[-120px] z-20 hidden lg:block">
        <div className="flex items-baseline gap-1">
          <span className="text-6xl font-bold text-foreground">25</span>
          <div className="flex flex-col text-foreground/80">
            <span className="text-sm font-light">Years</span>
            <span className="text-xs text-foreground/60">Experience</span>
          </div>
        </div>
      </div>

      {/* Copyright - Bottom Left */}
      <div className="absolute bottom-6 left-6 lg:left-10 z-20">
        <p className="text-[10px] text-foreground/50 tracking-widest uppercase">
          Copyright © 2026 B2BSoftech
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
