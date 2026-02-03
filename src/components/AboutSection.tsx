const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title animate-fade-in">
            Trust Our Best IT Solution For Your Business
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-effect rounded-xl p-8 md:p-12 animate-scale-in">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              <span className="text-foreground font-semibold">B2B Software Technologies Ltd</span>, is a Microsoft-Gold Enterprise Resource Planning partner and listed in Bombay Stock Exchange, and is the leading Business Solution implementation company in the Microsoft Dynamics space for the last 16 years with a footprint of more than 150+ clients in INDIA & Abroad.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              B2B also Won the <span className="text-primary font-medium">Best Regional Partner South Award</span> for two consecutive years (2007 & 2008).
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              B2B has expertise in Microsoft Dynamics ERP (BC/F&O). Major focus areas for implementation are discrete Manufacturing, Life-Science Industries like Pharma (API & Formulations), Food Processing, Chemicals, Telecom Industries etc.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-primary">150+</span>
                <span className="text-sm text-muted-foreground">Clients</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-primary">25+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-primary">2</span>
                <span className="text-sm text-muted-foreground">Awards Won</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-primary">BSE</span>
                <span className="text-sm text-muted-foreground">Listed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
