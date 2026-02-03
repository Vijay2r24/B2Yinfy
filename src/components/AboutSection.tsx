const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[hsl(200,15%,12%)]">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Trust Our Best IT Solution For Your Business
          </h2>

          {/* Content */}
          <div className="text-foreground/70 text-sm leading-relaxed space-y-4">
            <p>
              <span className="text-foreground font-medium">B2B Software Technologies Ltd</span>, is a Microsoft-Gold Enterprise Resource Planning partner and listed in Bombay Stock Exchange, and is the leading Business Solution implementation company in the Microsoft Dynamics space for the last 16 years with a footprint of more than 150+ clients in INDIA & Abroad. B2B also Won the Best Regional Partner South Award for two consecutive years (2007 & 2008).
            </p>
            <p>
              B2B has expertise in Microsoft Dynamics ERP (BC/F&O). Major focus areas for implementation are discrete Manufacturing, Life-Science Industries like Pharma (API & Formulations), Food Processing, Chemicals, Telecom Industries etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
