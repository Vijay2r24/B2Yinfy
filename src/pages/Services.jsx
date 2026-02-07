import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cloud, Code, Brain, TrendingUp, Shield, ShoppingCart, Users, Headphones, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Cloud,
    title: "Cloud Solutions & Infrastructure",
    description: "Comprehensive cloud migration, architecture design, and infrastructure management services for scalable and secure business operations.",
    features: ["Cloud Migration", "Infrastructure Design", "DevOps Implementation", "24/7 Monitoring"],
    color: "blue"
  },
  {
    id: 2,
    icon: Code,
    title: "Custom Software Development",
    description: "Full-stack development services including web applications, mobile apps, and enterprise software solutions tailored to your business needs.",
    features: ["Web Development", "Mobile Apps", "Enterprise Software", "API Integration"],
    color: "green"
  },
  {
    id: 3,
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Advanced artificial intelligence and machine learning solutions for intelligent automation, predictive analytics, and data-driven insights.",
    features: ["AI Solutions", "Machine Learning", "Data Analytics", "Automation"],
    color: "purple"
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Digital Marketing & Analytics",
    description: "Comprehensive digital marketing strategies with advanced analytics, SEO optimization, and performance tracking for business growth.",
    features: ["SEO Optimization", "Social Media Marketing", "Analytics", "Content Strategy"],
    color: "orange"
  },
  {
    id: 5,
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Advanced cybersecurity services including threat detection, security audits, infrastructure protection, and compliance management.",
    features: ["Security Audits", "Threat Detection", "Compliance", "Risk Management"],
    color: "red"
  },
  {
    id: 6,
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description: "Custom e-commerce development, marketplace solutions, and digital commerce platforms with integrated payment and inventory systems.",
    features: ["E-commerce Development", "Payment Integration", "Inventory Management", "Mobile Commerce"],
    color: "cyan"
  },
  {
    id: 7,
    icon: Users,
    title: "Technology Consulting",
    description: "Strategic technology consulting services for digital transformation, system architecture, and innovation roadmap development.",
    features: ["Digital Strategy", "System Architecture", "Technology Roadmap", "Process Optimization"],
    color: "indigo"
  },
  {
    id: 8,
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Comprehensive support and maintenance services ensuring your systems run smoothly with 24/7 monitoring and quick issue resolution.",
    features: ["24/7 Support", "System Maintenance", "Performance Monitoring", "Issue Resolution"],
    color: "pink"
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    hoverBg: "group-hover:bg-blue-200",
    text: "text-blue-600",
    border: "border-blue-500",
    gradient: "from-blue-500 to-blue-600"
  },
  green: {
    bg: "bg-green-100",
    hoverBg: "group-hover:bg-green-200",
    text: "text-green-600",
    border: "border-green-500",
    gradient: "from-green-500 to-green-600"
  },
  purple: {
    bg: "bg-purple-100",
    hoverBg: "group-hover:bg-purple-200",
    text: "text-purple-600",
    border: "border-purple-500",
    gradient: "from-purple-500 to-purple-600"
  },
  orange: {
    bg: "bg-orange-100",
    hoverBg: "group-hover:bg-orange-200",
    text: "text-orange-600",
    border: "border-orange-500",
    gradient: "from-orange-500 to-orange-600"
  },
  red: {
    bg: "bg-red-100",
    hoverBg: "group-hover:bg-red-200",
    text: "text-red-600",
    border: "border-red-500",
    gradient: "from-red-500 to-red-600"
  },
  cyan: {
    bg: "bg-cyan-100",
    hoverBg: "group-hover:bg-cyan-200",
    text: "text-cyan-600",
    border: "border-cyan-500",
    gradient: "from-cyan-500 to-cyan-600"
  },
  indigo: {
    bg: "bg-indigo-100",
    hoverBg: "group-hover:bg-indigo-200",
    text: "text-indigo-600",
    border: "border-indigo-500",
    gradient: "from-indigo-500 to-indigo-600"
  },
  pink: {
    bg: "bg-pink-100",
    hoverBg: "group-hover:bg-pink-200",
    text: "text-pink-600",
    border: "border-pink-500",
    gradient: "from-pink-500 to-pink-600"
  }
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&crop=center')` 
          }}
        />
        
        {/* Modern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-slate-900/85 to-indigo-900/90"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              <span className="block text-white drop-shadow-lg">Our</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-3 text-sm mb-8">
              <a href="/" className="flex items-center gap-2 text-white/80 hover:text-blue-300 transition-colors group">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
                Home
              </a>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <span className="text-blue-300 font-medium">Services</span>
            </nav>
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 text-gray-50">
          <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            
            {/* Title Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Comprehensive Technology Solutions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end technology services to help businesses transform, innovate, and succeed in the digital landscape.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
              {services.map((service) => {
                const IconComponent = service.icon;
                const colors = colorClasses[service.color];
                
                return (
                  <div
                    key={service.id}
                    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-gray-200 hover:border-blue-500"
                  >
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 ${colors.bg} ${colors.hoverBg} rounded-xl flex items-center justify-center transition-colors duration-300`}>
                        <IconComponent className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white rounded-2xl shadow-lg p-12 mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose B2Yinfy?</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Proven Expertise</h4>
                  <p className="text-gray-600">
                    5+ years of experience delivering successful technology solutions across various industries.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Dedicated Team</h4>
                  <p className="text-gray-600">
                    Expert professionals committed to delivering high-quality solutions and exceptional service.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h4>
                  <p className="text-gray-600">
                    Round-the-clock support and maintenance to ensure your systems run smoothly.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-8 opacity-90">
                Let's discuss how our services can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;