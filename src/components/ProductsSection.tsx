import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "B2B LIFT",
    description: "B2B LIFT (Lifescience Information @ Finger Tips) helps life science industries streamline processes for maximum efficiency.",
  },
  {
    title: "B2B Plant Maintenance",
    description: "Plant Maintenance Add-On supports engineering and process industries with real-time maintenance needs.",
  },
  {
    title: "B2B Quality Control",
    description: "B2B's Our Quality Control Add-On, built for Microsoft Dynamics 365 BC, helps businesses integrate quality checks",
  },
  {
    title: "B2B HR & Payroll",
    description: "B2B's HR & Payroll module streamlines HR functions, from recruitment and deployment to performance tracking.",
  },
  {
    title: "GeniusDoc",
    description: "GeniusDoc is a medical practice management system that automates office procedures and cuts operational costs.",
  },
  {
    title: "Emerging Technologies",
    description: "Emerging technologies include a variety of technologies such as artificial intelligence.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 bg-[hsl(200,15%,15%)]">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-foreground/50 text-xs tracking-widest uppercase">Products and add-on's</span>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="group"
            >
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-foreground/80 transition-colors cursor-pointer">
                {product.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4 font-light">
                {product.description}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-foreground/70 hover:text-foreground text-sm font-light transition-colors"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
