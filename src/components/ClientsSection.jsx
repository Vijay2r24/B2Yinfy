import { ArrowRight, Building2, Smartphone, Globe, Code, Shield, ShoppingCart } from "lucide-react";

const ClientsSection = () => {
  const industries = [
    { name: "E-commerce", icon: ShoppingCart, count: "30+" },
    { name: "Technology", icon: Code, count: "25+" },
    { name: "Healthcare", icon: Shield, count: "20+" },
    { name: "Finance", icon: Building2, count: "15+" },
    { name: "Education", icon: Globe, count: "10+" },
    { name: "Startups", icon: Smartphone, count: "20+" },
  ];

  const testimonials = [
    {
      quote: "B2Yinfy delivered exceptional digital transformation solutions that revolutionized our business operations.",
      company: "Leading E-commerce Platform",
      industry: "E-commerce"
    },
    {
      quote: "Their expertise in cloud solutions and modern development practices made our project a huge success.",
      company: "Tech Startup", 
      industry: "Technology"
    },
    {
      quote: "Outstanding support and innovative approach to solving complex business challenges. Highly recommended.",
      company: "Healthcare Solutions Provider",
      industry: "Healthcare"
    }
  ];

  return (
    <section className="h-full flex items-center bg-[hsl(200,15%,12%)]">
      <div className="container mx-auto px-6 lg:px-24 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by 50+ Companies
          </h2>
          <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
            Serving innovative companies across Technology, E-commerce, Healthcare, and Finance industries globally
          </p>
        </div>

        {/* Industry Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-foreground/5 rounded-lg border border-foreground/10 hover:bg-foreground/10 transition-all group"
              >
                <IconComponent className="w-8 h-8 text-foreground/60 mx-auto mb-3 group-hover:text-foreground/80 transition-colors" />
                <div className="text-2xl font-bold text-foreground mb-1">{industry.count}</div>
                <div className="text-xs text-foreground/60 uppercase tracking-wide">{industry.name}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Client Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:bg-foreground/10 transition-all"
              >
                <div className="text-foreground/70 text-sm leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </div>
                <div className="border-t border-foreground/10 pt-4">
                  <div className="text-foreground font-medium text-sm">{testimonial.company}</div>
                  <div className="text-foreground/50 text-xs uppercase tracking-wide">{testimonial.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="text-center bg-foreground/5 border border-foreground/10 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Awards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground mb-2">Technology Excellence</div>
              <div className="text-sm text-foreground/60">Innovation in Digital Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground mb-2">Best Service Provider</div>
              <div className="text-sm text-foreground/60">Client Satisfaction Award 2024</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground mb-2">Certified Partner</div>
              <div className="text-sm text-foreground/60">Leading Technology Platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;