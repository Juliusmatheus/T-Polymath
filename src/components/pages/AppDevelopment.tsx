import { useState } from 'react';
import { Smartphone, Code, Zap, Shield, Users, BarChart3, CheckCircle, Star, Download, Globe } from 'lucide-react';

const AppDevelopment = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const platforms = [
    { icon: Smartphone, title: 'iOS Development', description: 'Native iOS apps for iPhone and iPad using Swift and SwiftUI' },
    { icon: Globe, title: 'Android Development', description: 'Native Android apps using Kotlin and modern Android architecture' },
    { icon: Code, title: 'Cross-Platform', description: 'React Native and Flutter apps that work on both platforms' },
    { icon: Download, title: 'Progressive Web Apps', description: 'Web apps that feel and work like native applications' }
  ];

  const features = [
    { icon: Zap, title: 'High Performance', description: 'Optimized for speed and smooth user experience' },
    { icon: Shield, title: 'Security First', description: 'Built with security best practices and data encryption' },
    { icon: Users, title: 'User Experience', description: 'Intuitive interfaces designed for mobile users' },
    { icon: BarChart3, title: 'Analytics & Insights', description: 'Built-in analytics to track user behavior and app performance' }
  ];

  const process = [
    { step: 1, title: 'Discovery & Strategy', description: 'Understanding your business goals, target audience, and app requirements to create a comprehensive development strategy' },
    { step: 2, title: 'Design & UX', description: 'Creating wireframes, user flows, and high-fidelity designs that prioritize user experience' },
    { step: 3, title: 'Development', description: 'Building your app with clean, maintainable code using modern development practices and frameworks' },
    { step: 4, title: 'Testing & QA', description: 'Comprehensive testing across multiple devices, platforms, and user scenarios' },
    { step: 5, title: 'App Store Submission', description: 'Preparing and submitting your app to the App Store and Google Play Store' },
    { step: 6, title: 'Launch & Support', description: 'Launching your app and providing ongoing support, updates, and maintenance' }
  ];

  const technologies = [
    { name: 'Swift', category: 'iOS', description: 'Apple\'s modern programming language' },
    { name: 'Kotlin', category: 'Android', description: 'Google\'s preferred language' },
    { name: 'React Native', category: 'Cross-Platform', description: 'JavaScript-based framework' },
    { name: 'Flutter', category: 'Cross-Platform', description: 'Google\'s UI toolkit' },
    { name: 'Firebase', category: 'Backend', description: 'Mobile app backend services' },
    { name: 'AWS', category: 'Cloud', description: 'Scalable cloud infrastructure' }
  ];

  const testimonials = [
    {
      name: "Emily Rodriguez",
      company: "HealthTech Solutions",
      content: "T-PolyMath developed our healthcare app with exceptional attention to detail. The user interface is intuitive and the performance is outstanding.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "EduTech Innovations",
      content: "Our educational app has seen a 60% increase in user engagement since launch. The team delivered exactly what we envisioned.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Smartphone size={64} className="text-green-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile App Development</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Transform your ideas into powerful mobile applications that users love. 
              From concept to launch, we build apps that drive engagement and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {['overview', 'platforms', 'features', 'technologies', 'process', 'pricing', 'testimonials'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === 'overview' && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Innovative Mobile Solutions</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              At T-PolyMath, we specialize in creating cutting-edge mobile applications that deliver exceptional 
              user experiences. Whether you need an iOS app, Android app, or cross-platform solution, our team 
              of expert developers brings your vision to life with modern technologies and best practices.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Native Performance</h3>
                <p className="text-gray-600">Optimized for each platform's unique capabilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Responsive</h3>
                <p className="text-gray-600">Lightning-fast performance and smooth animations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">Built with enterprise-grade security standards</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'platforms' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Platforms We Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <platform.icon size={32} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.title}</h3>
                  <p className="text-gray-600">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'technologies' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies We Use</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <h4 className="font-medium text-gray-900 mb-1">{tech.name}</h4>
                    <span className="text-sm text-purple-500 bg-purple-100 px-2 py-1 rounded">{tech.category}</span>
                    <p className="text-xs text-gray-600 mt-2">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Development Process</h2>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic App</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Single Platform</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Basic Features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">App Store Submission</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">2 Months Support</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional App</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Cross-Platform</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Advanced Features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Backend Integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">6 Months Support</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise App</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Multi-Platform</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Custom Backend</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Analytics & Monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">1 Year Support</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


    </div>
  );
};

export default AppDevelopment;
