import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, TrendingUp, BarChart3 } from "lucide-react";

const InvestorsSection = () => {
  return (
    <section id="investors" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Visual */}
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <div className="glass-effect rounded-2xl p-6 relative">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-card to-secondary/50 p-6 flex flex-col justify-end">
                {/* Simulated Chart Bars */}
                <div className="flex items-end gap-3 h-48">
                  {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t transition-all duration-500 hover:from-primary hover:to-primary/70"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                  <span>2016</span>
                  <span>2020</span>
                  <span>2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Annual Report 2025</span>
            <h2 className="section-title mb-6">Investor Central</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:border-primary/50 transition-all cursor-pointer group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-foreground font-medium">Annual Report – 2025</span>
                  <span className="text-muted-foreground text-sm block">Download PDF</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>

              <div className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:border-primary/50 transition-all cursor-pointer group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-foreground font-medium">Quarterly Results</span>
                  <span className="text-muted-foreground text-sm block">Q4 2024-25</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>

              <div className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:border-primary/50 transition-all cursor-pointer group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-foreground font-medium">Stock Information</span>
                  <span className="text-muted-foreground text-sm block">BSE Listed</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            <Button variant="ghost" className="text-primary hover:text-primary/80 font-medium group">
              View All
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
