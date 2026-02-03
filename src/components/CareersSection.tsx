import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, TrendingUp } from "lucide-react";

const CareersSection = () => {
  return (
    <section id="careers" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Join Our Team</span>
            <h2 className="section-title mb-6">Build Your Career With Us</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join our team of 200+ professionals and be part of an innovative company 
              that's been transforming businesses for over 25 years.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-2xl font-bold text-foreground block">50+</span>
                <span className="text-xs text-muted-foreground">Open Positions</span>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-2xl font-bold text-foreground block">200+</span>
                <span className="text-xs text-muted-foreground">Employees</span>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-2xl font-bold text-foreground block">90%</span>
                <span className="text-xs text-muted-foreground">Growth Rate</span>
              </div>
            </div>

            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-8 group">
              Explore Careers
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Visual */}
          <div className="animate-fade-in-right">
            <div className="glass-effect rounded-2xl p-8 relative">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Career Opportunities</h3>
                  <p className="text-muted-foreground text-sm">Discover your next role</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
