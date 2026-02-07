import { ArrowRight, Users, Briefcase, TrendingUp, Award } from "lucide-react";

const CareersSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with talented professionals in a supportive and innovative team culture"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career advancement paths"
    },
    {
      icon: Briefcase,
      title: "Exciting Projects",
      description: "Work on cutting-edge technology projects with leading industry clients"
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Competitive compensation and recognition for outstanding performance"
    }
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Remote / Hybrid", 
      type: "Full-time"
    },
    {
      title: "AI/ML Engineer",
      department: "Data Science",
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote / Hybrid",
      type: "Full-time"
    }
  ];

  return (
    <section className="h-full flex items-center bg-[hsl(200,15%,10%)]">
      <div className="container mx-auto px-6 lg:px-24 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Innovation Team
          </h2>
          <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
            Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Why Join Us */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Why Choose B2Yinfy?</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-foreground/70" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-foreground/60 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Open Positions */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Open Positions</h3>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:bg-foreground/10 hover:border-foreground/20 transition-all group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-medium text-foreground group-hover:text-foreground/90">{position.title}</h4>
                    <span className="text-xs bg-foreground/10 text-foreground/70 px-2 py-1 rounded-full">{position.type}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-foreground/60 mb-4">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                  </div>
                  <button className="inline-flex items-center text-foreground/70 hover:text-foreground text-sm font-medium transition-colors group">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 bg-foreground/5 border border-foreground/10 rounded-lg p-6 text-center">
              <h4 className="text-lg font-medium text-foreground mb-3">Don't see the right role?</h4>
              <p className="text-foreground/60 text-sm mb-4">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="bg-foreground/10 hover:bg-foreground/20 text-foreground border border-foreground/30 hover:border-foreground/50 transition-all px-6 py-2 text-sm tracking-wide uppercase font-medium rounded">
                Send Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;