import { ArrowRight, FlaskConical, Wrench, CheckCircle, Users, FileText, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: FlaskConical,
    title: "B2B LIFT",
    description: "B2B LIFT (Lifescience Information @ Finger Tips) helps life science industries streamline processes for maximum efficiency.",
    link: "#",
  },
  {
    icon: Wrench,
    title: "B2B Plant Maintenance",
    description: "Plant Maintenance Add-On supports engineering and process industries with real-time maintenance needs.",
    link: "#",
  },
  {
    icon: CheckCircle,
    title: "B2B Quality Control",
    description: "B2B's Quality Control Add-On, built for Microsoft Dynamics 365 BC, helps businesses integrate quality checks.",
    link: "#",
  },
  {
    icon: Users,
    title: "B2B HR & Payroll",
    description: "B2B's HR & Payroll module streamlines HR functions, from recruitment and deployment to performance tracking.",
    link: "#",
  },
  {
    icon: FileText,
    title: "GeniusDoc",
    description: "GeniusDoc is a medical practice management system that automates office procedures and cuts operational costs.",
    link: "#",
  },
  {
    icon: Cpu,
    title: "Emerging Technologies",
    description: "Emerging technologies include a variety of technologies such as artificial intelligence, IoT, and more.",
    link: "#",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Solutions</span>
          <h2 className="section-title">Products and Add-on's</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="product-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{product.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {product.description}
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-medium group/btn">
                Read More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
