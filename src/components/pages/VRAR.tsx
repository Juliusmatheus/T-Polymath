import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Smartphone, CheckCircle, Star, Globe, Zap, Users, Target, Code, Shield, Monitor, ChevronLeft, ChevronRight } from 'lucide-react';

const VRAR = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // VR/AR demo images - you can replace these with actual VR/AR project images
  const vrImages = [
    {
      src: '../../assets/images/VR.jpg',
      alt: 'Virtual Reality Headset Experience',
      title: 'Immersive VR Gaming',
      description: 'Next-generation virtual reality gaming experiences'
    },
    {
      src: '../../assets/images/VR1.jpg',
      alt: 'Augmented Reality Development',
      title: 'AR Mobile Applications',
      description: 'Interactive augmented reality for mobile devices'
    },
    {
      src: '../../assets/images/VR2.jpg',
      alt: 'VR Training Simulation',
      title: 'VR Training Solutions',
      description: 'Professional training and simulation environments'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === vrImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [vrImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === vrImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? vrImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const technologies = [
    { icon: Monitor, title: 'VR Development', description: 'Immersive virtual reality experiences using Unity and Unreal Engine' },
    { icon: Eye, title: 'AR Development', description: 'Augmented reality applications for mobile and wearable devices' },
    { icon: Smartphone, title: 'Mobile AR', description: 'AR experiences optimized for smartphones and tablets' },
    { icon: Globe, title: 'WebAR', description: 'Browser-based AR experiences accessible on any device' },
    { icon: Zap, title: 'Mixed Reality', description: 'Combined VR and AR experiences for next-gen computing' },
    { icon: Code, title: 'Custom Solutions', description: 'Tailored VR/AR solutions for specific business needs' }
  ];

  const applications = [
    { icon: Users, title: 'Training & Education', description: 'Immersive learning experiences and skill development' },
    { icon: Target, title: 'Marketing & Sales', description: 'Interactive product demonstrations and virtual showrooms' },
    { icon: Shield, title: 'Healthcare', description: 'Medical training, therapy, and patient education' },
    { icon: Globe, title: 'Real Estate', description: 'Virtual property tours and architectural visualization' },
    { icon: Code, title: 'Gaming & Entertainment', description: 'Immersive games and interactive experiences' },
    { icon: Zap, title: 'Industrial Training', description: 'Safety training and equipment operation simulation' }
  ];

  const process = [
    { step: 1, title: 'Concept & Strategy', description: 'Understanding your business goals and defining the VR/AR experience requirements to create a comprehensive development strategy' },
    { step: 2, title: 'Design & Prototyping', description: 'Creating wireframes, 3D models, and interactive prototypes to visualize the user experience' },
    { step: 3, title: 'Development', description: 'Building the VR/AR application using industry-leading engines and frameworks with optimized performance' },
    { step: 4, title: 'Testing & Optimization', description: 'Comprehensive testing across multiple devices and platforms, with performance optimization for smooth user experience' },
    { step: 5, title: 'Deployment & Distribution', description: 'Publishing to app stores, web platforms, or enterprise distribution channels' },
    { step: 6, title: 'Support & Updates', description: 'Ongoing maintenance, content updates, and technical support for your VR/AR solution' }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "TechVision Labs",
      content: "T-PolyMath's VR training solution has reduced our training time by 60% while improving retention rates. The immersive experience is incredible.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      company: "EduTech Innovations",
      content: "Our AR educational app has revolutionized how students learn complex concepts. The team delivered an exceptional product that exceeded expectations.",
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
              <Eye size={64} className="text-green-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">VR/AR Development</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Create immersive virtual and augmented reality experiences that captivate your audience. 
              Our cutting-edge VR/AR solutions bring your ideas to life in the digital realm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Free Consultation
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sliding VR Images Carousel */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">VR/AR Demo Gallery</h2>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={vrImages[currentImageIndex].src}
                alt={vrImages[currentImageIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{vrImages[currentImageIndex].title}</h3>
                <p className="text-white/90">{vrImages[currentImageIndex].description}</p>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Image Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {vrImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentImageIndex === index 
                    ? 'bg-green-500 scale-125' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>



      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {['overview', 'technologies', 'applications', 'process', 'pricing', 'testimonials'].map((tab) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Immersive Technology Solutions</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              At T-PolyMath, we're at the forefront of virtual and augmented reality development. 
              Our team creates immersive experiences that engage users, enhance learning, and drive business results. 
              From concept to deployment, we handle every aspect of VR/AR development with cutting-edge technology.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Immersive Experiences</h3>
                <p className="text-gray-600">Fully immersive virtual environments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Augmented Reality</h3>
                <p className="text-gray-600">Overlay digital content on real world</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Solutions</h3>
                <p className="text-gray-600">Engaging user interactions</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'technologies' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our VR/AR Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <tech.icon size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.title}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">VR/AR Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <app.icon size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic VR/AR</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Simple VR/AR Experience</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Basic Interactions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Mobile Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">3 Months Support</span>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced VR/AR</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Complex Interactions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Multi-platform Support</span>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise VR/AR</h3>
                <div className="text-3xl font-bold text-green-600 mb-6">N$...</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Everything in Advanced</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Custom Engine Development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span className="text-gray-600">Enterprise Integration</span>
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

export default VRAR;
