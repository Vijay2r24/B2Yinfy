import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Cloud Solutions & Infrastructure",
    description: "Comprehensive cloud migration, architecture design, and infrastructure management services for scalable and secure business operations.",
    category: "Cloud Services"
  },
  {
    title: "Custom Software Development",
    description: "Full-stack development services including web applications, mobile apps, and enterprise software solutions tailored to your business needs.",
    category: "Development"
  },
  {
    title: "AI & Machine Learning",
    description: "Advanced artificial intelligence and machine learning solutions for intelligent automation, predictive analytics, and data-driven insights.",
    category: "AI/ML"
  },
  {
    title: "Digital Marketing & Analytics",
    description: "Comprehensive digital marketing strategies with advanced analytics, SEO optimization, and performance tracking for business growth.",
    category: "Marketing"
  },
  {
    title: "Cybersecurity Solutions",
    description: "Complete cybersecurity services including threat detection, security audits, infrastructure protection, and compliance management.",
    category: "Security"
  },
  {
    title: "E-commerce Platforms",
    description: "Custom e-commerce development, marketplace solutions, and digital commerce platforms with integrated payment and inventory systems.",
    category: "E-commerce"
  },
  {
    title: "Technology Consulting",
    description: "Strategic technology consulting services for digital transformation, system architecture, and innovation roadmap development.",
    category: "Consulting"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile application development for iOS and Android with modern UI/UX and robust backend integration.",
    category: "Mobile"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="h-full flex items-center bg-[hsl(200,15%,15%)]">
      <div className="container mx-auto px-6 lg:px-24 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Solutions & Services
          </h2>
          <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
            Comprehensive technology solutions for digital transformation, cloud infrastructure, and innovative software development
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-foreground/10 text-foreground/70 text-xs uppercase tracking-wide rounded-full mb-4">
                {product.category}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-foreground/90 transition-colors">
                {product.title}
              </h3>
              
              <p className="text-foreground/60 text-sm leading-relaxed mb-4 font-light">
                {product.description}
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center text-foreground/70 hover:text-foreground text-sm font-medium transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-foreground/60 mb-6">
              Our expert team can design and implement tailored technology solutions for your specific business requirements and industry needs.
            </p>
            <button className="bg-foreground/10 hover:bg-foreground/20 text-foreground border border-foreground/30 hover:border-foreground/50 transition-all px-8 py-3 text-sm tracking-wide uppercase font-medium rounded">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;