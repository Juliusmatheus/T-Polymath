import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  CheckCircle, 
  Star, 
  Database,
  BarChart3,
  Shield,
  Bot,
  TrendingUp,
  Lightbulb,
  Code2,
  Eye
} from 'lucide-react';

const AIPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const services = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and data-driven decision making.',
      icon: Brain
    },
    {
      title: 'Natural Language Processing',
      description: 'AI-powered text analysis, chatbots, sentiment analysis, and language understanding systems.',
      icon: Bot
    },
    {
      title: 'Computer Vision',
      description: 'Image and video recognition, object detection, facial recognition, and visual AI applications.',
      icon: Eye
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced forecasting models using historical data to predict future trends and behaviors.',
      icon: TrendingUp
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation, workflow optimization, and smart business process management.',
      icon: Zap
    },
    {
      title: 'AI Consulting',
      description: 'Strategic AI roadmap development, technology selection, and implementation guidance.',
      icon: Lightbulb
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, data availability, and AI opportunities to create a strategic roadmap.'
    },
    {
      step: '2',
      title: 'Data Preparation',
      description: 'We clean, structure, and prepare your data for AI model training, ensuring quality and relevance.'
    },
    {
      step: '3',
      title: 'Model Development',
      description: 'Our AI engineers develop custom models using state-of-the-art algorithms and frameworks.'
    },
    {
      step: '4',
      title: 'Testing & Validation',
      description: 'Rigorous testing ensures accuracy, reliability, and performance meet your business requirements.'
    },
    {
      step: '5',
      title: 'Deployment & Integration',
      description: 'Seamless integration with your existing systems and ongoing monitoring for optimal performance.'
    }
  ];

  const deliverables = [
    {
      title: 'AI Models',
      description: 'Production-ready machine learning models optimized for your specific use case.',
      icon: Brain
    },
    {
      title: 'API Integration',
      description: 'RESTful APIs for easy integration with your existing applications and workflows.',
      icon: Code2
    },
    {
      title: 'Documentation',
      description: 'Comprehensive technical documentation and user guides for your development team.',
      icon: Database
    },
    {
      title: 'Training Materials',
      description: 'Training sessions and materials to help your team understand and maintain the AI systems.',
      icon: Users
    },
    {
      title: 'Performance Reports',
      description: 'Regular performance monitoring reports and optimization recommendations.',
      icon: BarChart3
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing technical support and model updates to ensure continued performance.',
      icon: Shield
    }
  ];

  const testimonials = [
    {
      content: "T-PolyMath's AI solution transformed our customer service with an intelligent chatbot that handles 80% of inquiries automatically.",
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      content: "The predictive analytics model they built helped us increase sales by 35% through better customer targeting and inventory management.",
      name: "Michael Chen",
      company: "Retail Dynamics",
      rating: 5
    },
    {
      content: "Their AI automation system streamlined our operations, reducing processing time by 60% and eliminating manual errors.",
      name: "Emily Rodriguez",
      company: "ProcessPro Inc.",
      rating: 5
    },
    {
      content: "The computer vision solution they developed for quality control has improved our defect detection accuracy to 99.2%.",
      name: "David Thompson",
      company: "Manufacturing Plus",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain size={48} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">AI & Machine Learning Solutions</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence. We build intelligent systems that learn, adapt, and deliver results that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Free Consultation
              </Link>
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
            {['overview', 'services', 'process', 'deliverables', 'pricing', 'testimonials'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === 'overview' && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Intelligent Solutions for the Digital Age</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              At T-PolyMath, we harness the power of artificial intelligence to solve complex business challenges. 
              Our AI solutions combine cutting-edge technology with deep industry expertise to deliver intelligent 
              systems that learn, adapt, and drive measurable business outcomes.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced AI Technology</h3>
                <p className="text-gray-600">State-of-the-art machine learning algorithms and neural networks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business-Focused Results</h3>
                <p className="text-gray-600">AI solutions that directly impact your bottom line and operational efficiency</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise-Grade Security</h3>
                <p className="text-gray-600">Robust security measures and compliance with industry standards</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Development Process</h2>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
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

        {activeTab === 'deliverables' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You'll Receive</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <deliverable.icon size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{deliverable.title}</h3>
                  <p className="text-gray-600">{deliverable.description}</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Starter</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Basic ML Model</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Data Preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">API Integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Basic Documentation</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Professional</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Everything in Starter</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Advanced ML Models</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Real-time Processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Performance Monitoring</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Enterprise</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Custom AI Architecture</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Scalable Infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">24/7 Support & Maintenance</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
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

export default AIPage;
