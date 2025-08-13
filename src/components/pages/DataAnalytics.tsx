import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Database, TrendingUp, CheckCircle, Star, Brain, Target, Zap } from 'lucide-react';

const DataAnalytics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const services = [
    { icon: Database, title: 'Data Collection', description: 'Comprehensive data gathering from multiple sources and platforms' },
    { icon: Brain, title: 'Data Processing', description: 'Cleaning, transforming, and preparing data for analysis' },
    { icon: BarChart3, title: 'Statistical Analysis', description: 'Advanced statistical methods and hypothesis testing' },
    { icon: TrendingUp, title: 'Predictive Modeling', description: 'Machine learning models for future trend prediction' },
    { icon: Target, title: 'Business Intelligence', description: 'Interactive dashboards and KPI tracking' },
    { icon: Zap, title: 'Real-time Analytics', description: 'Live data monitoring and instant insights' }
  ];

  const tools = [
    { name: 'Python', category: 'Programming', description: 'Data science and machine learning' },
    { name: 'R', category: 'Statistical', description: 'Advanced statistical analysis' },
    { name: 'Tableau', category: 'Visualization', description: 'Interactive data visualization' },
    { name: 'Power BI', category: 'Business Intelligence', description: 'Microsoft analytics platform' },
    { name: 'Apache Spark', category: 'Big Data', description: 'Large-scale data processing' },
    { name: 'TensorFlow', category: 'Machine Learning', description: 'Deep learning framework' }
  ];

  const process = [
    { step: 1, title: 'Data Discovery', description: 'Understanding your data sources, quality, and business requirements to define clear objectives' },
    { step: 2, title: 'Data Collection & Integration', description: 'Gathering data from various sources and creating a unified data warehouse' },
    { step: 3, title: 'Data Cleaning & Preparation', description: 'Removing inconsistencies, handling missing values, and structuring data for analysis' },
    { step: 4, title: 'Exploratory Analysis', description: 'Investigating patterns, trends, and relationships in your data' },
    { step: 5, title: 'Modeling & Analysis', description: 'Applying statistical methods and machine learning algorithms to extract insights' },
    { step: 6, title: 'Visualization & Reporting', description: 'Creating interactive dashboards and comprehensive reports for stakeholders' }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Retail Analytics Corp",
      content: "T-PolyMath's data analytics helped us increase our conversion rate by 35%. Their insights were game-changing for our business strategy.",
      rating: 5
    },
    {
      name: "Robert Thompson",
      company: "Financial Services Inc",
      content: "The predictive models they built for us have improved our risk assessment accuracy by 40%. Exceptional work and ongoing support.",
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
              <BarChart3 size={64} className="text-green-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Analytics</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Transform raw data into actionable insights that drive business growth. 
              Our advanced analytics solutions help you make data-driven decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Free Consultation
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {['overview', 'services', 'tools', 'process', 'pricing', 'testimonials'].map((tab) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Data-Driven Decision Making</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              At T-PolyMath, we specialize in transforming complex data into clear, actionable insights. 
              Our data analytics services help businesses of all sizes understand their customers, 
              optimize operations, and predict future trends using cutting-edge technology and proven methodologies.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Insights</h3>
                <p className="text-gray-600">AI-powered analysis for deeper understanding</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Forecast trends and identify opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Actionable Results</h3>
                <p className="text-gray-600">Clear recommendations for business growth</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Analytics Services</h2>
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

        {activeTab === 'tools' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies & Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <h4 className="font-medium text-gray-900 mb-1">{tool.name}</h4>
                    <span className="text-sm text-green-500 bg-green-100 px-2 py-1 rounded">{tool.category}</span>
                    <p className="text-xs text-gray-600 mt-2">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Analytics Process</h2>
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

        {activeTab === 'pricing' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Analytics</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Data Collection Setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Basic Reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Monthly Dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">2 Months Support</span>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Predictive Modeling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Real-time Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">6 Months Support</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Analytics</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Everything in Advanced</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Custom ML Models</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Team Training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">1 Year Support</span>
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

export default DataAnalytics;
