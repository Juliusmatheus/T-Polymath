import { useState } from 'react';
import { Code, Globe, Database, Cloud, Shield, Zap, Users, CheckCircle, Star } from 'lucide-react';

const WebDevelopment = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    { icon: Globe, title: 'Responsive Design', description: 'Websites that work perfectly on all devices and screen sizes' },
    { icon: Zap, title: 'Fast Performance', description: 'Optimized for speed with modern performance techniques' },
    { icon: Shield, title: 'Security First', description: 'Built with security best practices and SSL encryption' },
    { icon: Database, title: 'Scalable Architecture', description: 'Grows with your business needs and traffic' },
    { icon: Cloud, title: 'Cloud Hosting', description: 'Reliable and scalable hosting solutions with 99.9% uptime' },
    { icon: Users, title: 'User Experience', description: 'Intuitive and engaging user interfaces that convert' }
  ];

  const technologies = [
    { name: 'React.js', category: 'Frontend', description: 'Modern UI development' },
    { name: 'Next.js', category: 'Framework', description: 'Server-side rendering' },
    { name: 'Node.js', category: 'Backend', description: 'Scalable server solutions' },
    { name: 'TypeScript', category: 'Language', description: 'Type-safe development' },
    { name: 'Tailwind CSS', category: 'Styling', description: 'Utility-first CSS' },
    { name: 'Firebase', category: 'Backend', description: 'Google cloud services' },
    { name: 'Vite', category: 'Build Tool', description: 'Fast development' },
    { name: 'PostgreSQL', category: 'Database', description: 'Reliable data storage' }
  ];

  const process = [
    { step: 1, title: 'Discovery & Planning', description: 'Understanding your requirements, target audience, and business goals to create a comprehensive roadmap' },
    { step: 2, title: 'Design & Prototyping', description: 'Creating wireframes, visual designs, and interactive prototypes for your approval' },
    { step: 3, title: 'Development', description: 'Building your website with clean, maintainable code using modern technologies' },
    { step: 4, title: 'Testing & QA', description: 'Thorough testing across all devices, browsers, and performance optimization' },
    { step: 5, title: 'Deployment', description: 'Launching your website with proper hosting setup and domain configuration' },
    { step: 6, title: 'Support & Maintenance', description: 'Ongoing support, updates, and performance monitoring' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "T-PolyMath delivered an exceptional website that exceeded our expectations. The team was professional and delivered on time.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions",
      content: "Our new website has increased our conversion rate by 40%. The responsive design and fast loading times are impressive.",
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
              <Code size={64} className="text-green-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Transform your business with modern, responsive websites that drive results. 
              From simple landing pages to complex web applications, we build digital solutions that work.
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
            {['overview', 'features', 'technologies', 'process', 'pricing', 'testimonials'].map((tab) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Web Solutions</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              At T-PolyMath, we specialize in creating modern, high-performance websites that not only look great 
              but also drive business results. Our web development services cover everything from simple landing 
              pages to complex web applications, ensuring your online presence is both beautiful and functional.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive Design</h3>
                <p className="text-gray-600">Perfect on all devices and screen sizes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Performance</h3>
                <p className="text-gray-600">Optimized for speed and user experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">Built with security best practices</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-blue-600" />
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <h4 className="font-medium text-gray-900 mb-1">{tech.name}</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
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
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Website</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">$999</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">5 Pages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Responsive Design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Contact Form</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Basic SEO</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">1 Month Support</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Website</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">$1,999</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">10 Pages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">CMS Integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Blog Section</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Advanced SEO</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">3 Months Support</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">E-commerce</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">$3,999</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Unlimited Pages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Shopping Cart</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Payment Gateway</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Inventory Management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">6 Months Support</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
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

export default WebDevelopment;
