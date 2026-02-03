const CareersSection = () => {
  return (
    <section id="careers" className="py-16 bg-[hsl(200,15%,15%)]">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="relative">
          {/* Background Banner */}
          <div className="relative h-64 md:h-80 bg-gradient-to-r from-[hsl(200,30%,25%)] to-[hsl(200,20%,20%)] rounded overflow-hidden">
            {/* Abstract shapes for visual interest */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 border border-foreground/20 rounded-full"></div>
              <div className="absolute bottom-10 right-20 w-24 h-24 border border-foreground/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-foreground/10 rounded-full"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <a 
                href="#" 
                className="bg-foreground/10 hover:bg-foreground/20 text-foreground border border-foreground/30 hover:border-foreground/50 transition-all px-10 py-4 text-sm tracking-widest uppercase font-light"
              >
                Explore Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
