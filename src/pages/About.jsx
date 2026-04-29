import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lightbulb, Star, Handshake, Target, Eye, Users, Award, Clock, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=center')` 
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
              <span className="block text-white drop-shadow-lg">About</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                B2Yinfy
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
              <span className="text-blue-300 font-medium">About Us</span>
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
                About B2Yinfy Technologies
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              
              {/* Left Content - Text */}
              <div className="space-y-6">
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="text-lg mb-6 font-medium text-gray-800">
                    <strong className="text-blue-600">B2Yinfy Technologies</strong> is a leading technology solutions provider, 
                    specializing in digital transformation, cloud solutions, and innovative software development for modern businesses 
                    across various industries.
                  </p>
                  
                  <p className="mb-6">
                    We deliver enterprise solutions focusing on cutting-edge technologies for over 5 years, with a strong 
                    commitment to innovation and client satisfaction. We specialize in Cloud Solutions, Custom Software Development, 
                    AI & Machine Learning, Digital Marketing, Cybersecurity, and E-commerce platforms.
                  </p>

                  <p className="mb-6">
                    Founded in <strong className="text-blue-600">2020</strong>, B2Yinfy has built a legacy of innovation by developing cutting-edge solutions, 
                    launching industry-specific services, and receiving recognition for excellence in technology and client satisfaction.
                  </p>

                  <p className="mb-6">
                    Our expertise spans across multiple domains including Technology, E-commerce, Healthcare, Finance, Education, 
                    and Startups. We pride ourselves on delivering high-quality, scalable solutions that drive business growth 
                    and digital transformation.
                  </p>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-blue-800 font-medium">
                      With a focus on innovation, quality, and customer satisfaction, B2Yinfy continues to be a trusted partner 
                      for businesses looking to leverage technology for competitive advantage and sustainable growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Image and Stats */}
              <div className="space-y-8">
                
                {/* About Image */}
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center" 
                    alt="About B2Yinfy" 
                    className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Since 2020
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 hover:border-blue-600">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600">50+</div>
                        <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 hover:border-green-600">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-600">100+</div>
                        <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 hover:border-purple-600">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <Award className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-600">5+</div>
                        <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 hover:border-orange-600">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-600">24/7</div>
                        <div className="text-sm text-gray-600 font-medium">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To empower businesses with innovative technology solutions that drive digital transformation, 
                  enhance operational efficiency, and create sustainable competitive advantages in the modern digital landscape.
                </p>
              </div>
              
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                    <Eye className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be the leading technology partner for businesses worldwide, recognized for our innovation, 
                  quality, and commitment to delivering exceptional solutions that shape the future of digital business.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                  <Lightbulb className="w-10 h-10 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Innovation</h4>
                <p className="text-gray-600 leading-relaxed">
                  Continuously pushing boundaries with cutting-edge solutions and creative approaches to complex challenges.
                </p>
              </div>
              
              <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                  <Star className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Quality</h4>
                <p className="text-gray-600 leading-relaxed">
                  Delivering excellence in every project and service with meticulous attention to detail and best practices.
                </p>
              </div>
              
              <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                  <Handshake className="w-10 h-10 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Partnership</h4>
                <p className="text-gray-600 leading-relaxed">
                  Building lasting relationships with our clients through trust, transparency, and collaborative success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;


