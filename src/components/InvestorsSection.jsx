import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const InvestorsSection = () => {
  return (
    <section id="investors" className="py-16 bg-[hsl(200,15%,12%)]">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carousel Navigation */}
          <div className="flex items-center gap-4 lg:hidden mb-4">
            <button className="text-foreground/50 hover:text-foreground">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="text-foreground/50 hover:text-foreground">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Graph/Chart Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-[hsl(200,15%,18%)] rounded overflow-hidden">
              {/* Simulated bar chart */}
              <div className="h-full p-8 flex flex-col justify-end">
                <div className="flex items-end gap-2 h-48">
                  {[35, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 90].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-blue-600/80 to-blue-400/60 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Label */}
            <div className="absolute bottom-4 left-4 bg-[hsl(200,15%,15%)]/90 px-4 py-2">
              <span className="text-xs text-foreground/80">Annual Report 2025</span>
            </div>
          </div>

          {/* Investor Central Content */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Investor Central</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-foreground/10">
                <div>
                  <span className="text-foreground/60 text-sm">Results</span>
                  <a href="#" className="block text-foreground hover:text-foreground/80 transition-colors text-sm font-medium">
                    Annual Report – 2025
                  </a>
                </div>
              </div>
            </div>

            <a 
              href="#" 
              className="inline-flex items-center text-foreground/70 hover:text-foreground text-sm mt-6 transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;