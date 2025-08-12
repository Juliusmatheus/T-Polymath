import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Palette, Users, CheckCircle, Star, Eye, Zap, Target, Code, Shield, Smartphone } from 'lucide-react';

const UIUX = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const services = [
    { icon: Eye, title: 'User Research', description: 'In-depth user interviews, surveys, and behavioral analysis to understand your audience' },
    { icon: Layout, title: 'UI Design', description: 'Beautiful, intuitive interfaces that align with your brand and user expectations' },
    { icon: Users, title: 'UX Design', description: 'User experience optimization for seamless navigation and engagement' },
    { icon: Palette, title: 'Visual Design', description: 'Compelling visual elements, color schemes, and typography that enhance usability' },
    { icon: Smartphone, title: 'Responsive Design', description: 'Designs that work perfectly across all devices and screen sizes' },
    { icon: Zap, title: 'Prototyping', description: 'Interactive prototypes to test and validate design concepts before development' }
  ];

  const process = [
    { step: 1, title: 'Discovery & Research', description: 'Understanding your business goals, target audience, and competitive landscape through comprehensive research and analysis' },
    { step: 2, title: 'User Personas & Journey Mapping', description: 'Creating detailed user personas and mapping their journey through your product to identify pain points and opportunities' },
    { step: 3, title: 'Information Architecture', description: 'Organizing content and functionality in a logical, intuitive structure that guides users to their goals' },
    { step: 4, title: 'Wireframing & Prototyping', description: 'Building low-fidelity wireframes and interactive prototypes to test user flows and interactions' },
    { step: 5, title: 'Visual Design & Branding', description: 'Applying visual design principles, creating design systems, and ensuring brand consistency across all touchpoints' },
    { step: 6, title: 'Testing & Iteration', description: 'Conducting user testing, gathering feedback, and iterating on designs to optimize the user experience' }
  ];

  const deliverables = [
    { icon: Layout, title: 'Wireframes', description: 'Low-fidelity layouts showing structure and content hierarchy' },
    { icon: Palette, title: 'Mockups', description: 'High-fidelity visual designs with colors, typography, and imagery' },
    { icon: Code, title: 'Prototypes', description: 'Interactive prototypes for user testing and stakeholder approval' },
    { icon: Shield, title: 'Design System', description: 'Comprehensive design guidelines and component library' },
    { icon: Target, title: 'User Research Report', description: 'Detailed findings and recommendations from user research' },
    { icon: Zap, title: 'Style Guide', description: 'Brand guidelines, color palettes, and typography specifications' }
  ];

  const testimonials = [
    {
      name: "Lisa Rodriguez",
      company: "Digital Marketing Pro",
      content: "T-PolyMath's UI/UX design transformed our website. User engagement increased by 45% and conversion rates improved significantly.",
      rating: 5
    },
    {
      name: "Mark Thompson",
      company: "E-commerce Solutions",
      content: "The design system they created for us is exceptional. Our development team can now build features faster and maintain consistency.",
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
              <Layout size={64} className="text-green-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">UI/UX Design</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Create exceptional user experiences that delight your customers and drive business results. 
              Our user-centered design approach ensures your products are both beautiful and functional.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">User-Centered Design Excellence</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              At T-PolyMath, we believe great design is invisible. Our UI/UX design process focuses on creating 
              intuitive, engaging experiences that users love and businesses benefit from. We combine research, 
              creativity, and technical expertise to deliver designs that convert visitors into customers.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">User-First Approach</h3>
                <p className="text-gray-600">Design decisions based on user needs and behavior</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Beautiful & Functional</h3>
                <p className="text-gray-600">Aesthetics that enhance usability and engagement</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Results-Driven</h3>
                <p className="text-gray-600">Designs that improve conversion and user satisfaction</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Design Services</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Design Process</h2>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Design</h3>
                                            <div className="text-3xl font-bold text-green-600 mb-6">$3,999</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">User Research</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Wireframes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">UI Design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">2 Rounds of Revisions</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Design</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">$8,999</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-blue-500 mr-2" />
                    <span className="text-gray-600">Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-blue-500 mr-2" />
                    <span className="text-gray-600">Interactive Prototypes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-blue-500 mr-2" />
                    <span className="text-gray-600">Design System</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-blue-500 mr-2" />
                    <span className="text-gray-600">5 Rounds of Revisions</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Design</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">$19,999</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-blue-500 mr-2" />
                    <span className="text-gray-600">Everything in Complete</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-blue-500 mr-2" />
                    <span className="text-gray-600">User Testing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-blue-500 mr-2" />
                    <span className="text-gray-600">Ongoing Support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-blue-500 mr-2" />
                    <span className="text-gray-600">Unlimited Revisions</span>
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

export default UIUX;
