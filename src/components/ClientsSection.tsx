import { ArrowRight } from "lucide-react";

const ClientsSection = () => {
  // Create placeholder logos
  const clientLogos = Array(12).fill(null);

  return (
    <section className="py-16 bg-[hsl(200,15%,12%)]">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Section Header */}
        <h2 className="text-2xl font-bold text-foreground mb-10 text-center">
          Clients & Testimonials
        </h2>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mb-8">
          {clientLogos.map((_, index) => (
            <div
              key={index}
              className="aspect-[3/2] bg-foreground/5 rounded flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all cursor-pointer"
            >
              <div className="w-16 h-8 bg-foreground/10 rounded"></div>
            </div>
          ))}
        </div>

        {/* More Link */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-foreground/60 hover:text-foreground text-sm transition-colors"
          >
            ...More
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
