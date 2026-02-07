const AboutSection = () => {
  return (
    <section id="about" className="h-full flex items-center bg-[hsl(200,15%,12%)]">
      <div className="container mx-auto px-6 lg:px-24 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Trust Our Best Technology Solutions For Your Business
          </h2>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-foreground/70 text-base leading-relaxed space-y-6">
              <p>
                <span className="text-foreground font-semibold">B2Yinfy Technologies</span>, is a leading technology solutions provider specializing in digital transformation, cloud solutions, and innovative software development for modern businesses across various industries.
              </p>
              <p>
                B2Yinfy has been recognized for <span className="text-foreground font-medium">Excellence in Technology Innovation</span> and outstanding client satisfaction in delivering cutting-edge solutions.
              </p>
              <p>
                B2Yinfy has expertise in Cloud Solutions, Custom Software Development, AI & Machine Learning, Digital Marketing, Cybersecurity, and E-commerce platforms. Major focus areas include Technology, Healthcare, Finance, E-commerce, and Education sectors.
              </p>
            </div>

            {/* Right Content - Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-foreground/5 rounded-lg border border-foreground/10">
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-sm text-foreground/60 uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-foreground/5 rounded-lg border border-foreground/10">
                <div className="text-3xl font-bold text-foreground mb-2">5+</div>
                <div className="text-sm text-foreground/60 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-foreground/5 rounded-lg border border-foreground/10">
                <div className="text-3xl font-bold text-foreground mb-2">100+</div>
                <div className="text-sm text-foreground/60 uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-foreground/5 rounded-lg border border-foreground/10">
                <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-sm text-foreground/60 uppercase tracking-wide">Support</div>
              </div>
            </div>
          </div>

          {/* Industry Focus */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Industry Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "E-commerce",
                "Technology",
                "Healthcare", 
                "Finance",
                "Education",
                "Startups",
                "Digital Marketing",
                "Cloud Solutions"
              ].map((industry, index) => (
                <div key={index} className="text-center p-4 bg-foreground/5 rounded border border-foreground/10 hover:bg-foreground/10 transition-colors">
                  <span className="text-sm text-foreground/80">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;