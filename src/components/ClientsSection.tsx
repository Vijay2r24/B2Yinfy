import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const clients = [
  "APMDC", "Caxton", "Client 1", "Client 2", "Client 3", "Client 4",
  "Client 5", "Client 6", "Client 7", "Client 8", "Client 9", "Client 10"
];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Clients & Testimonials</h2>
          <p className="section-subtitle mx-auto">
            Trusted by 150+ organizations across India and abroad
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-6 flex items-center justify-center h-24 client-logo animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-16 h-12 bg-muted-foreground/20 rounded flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-medium">{client}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="ghost" className="text-primary hover:text-primary/80 font-medium group">
            View All Clients
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
