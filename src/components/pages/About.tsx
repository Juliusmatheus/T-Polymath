import { useState, useRef, useEffect } from 'react';

// Correct paths for images in the assets/images directory
import JuliusImage from "../../assets/images/Julius.jpeg";
import JenitaImage from "../../assets/images/Jenita.jpeg";
import MeriamImage from "../../assets/images/Meriam.jpg";
import MariaImage from "../../assets/images/Maria.jpg";
import VR1Image from "../../assets/images/VR1.jpg";
import VR2Image from "../../assets/images/VR2.jpg";
import CodeImage from "../../assets/images/Code.png";
import { Target, Eye, Heart, MessageCircle, X, Send, Bot, User, ChevronLeft, ChevronRight } from 'lucide-react';


const About = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm TpolyMath's virtual assistant. I can help you learn more about our company, services, and team. What would you like to know?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth and success.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading technology partner for businesses seeking digital transformation.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Integrity, innovation, excellence, and customer-centricity guide everything we do.',
    },
  ];

  const team = [
    {
      name: 'Julius T Matheus',
      role: 'CTO',
      image: JuliusImage,
      description: 'Full-stack development expert with 5+ years in cutting-edge technologies',
    },
    {
      name: 'Jenita T Matheus',
      role: 'Project Manager',
      image: JenitaImage,
    
      description: 'Strategic Project Manager | Agile & Digital Transformation Expert | Delivering',
    },
    {
      name: 'Maria T Matheus',
      role: 'Lead Developer',
      image: MariaImage,
      description: 'AI and machine learning specialist with focus on innovative solutions',
    },
    {
      name: 'Mariam T Matheus',
      role: 'Research Co-ordinator',
      image: MeriamImage,
      description: 'User experience designer creating intuitive digital experiences"Detail-oriented Research Coordinator and UX Designer with a proven track record of enhancing digital products through user research, prototyping, and iterative testing. Adept at collaborating with stakeholders to deliver data-driven design solutions',
    },
    
  ];

  const techImages = [
    {
      url: CodeImage,
      alt: 'CODEBASE'
    },
    {
      url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Digital innovation and coding'
    },
    {
      url: VR1Image,
      alt: 'VR TEC'
    },
    {
      url: VR2Image,
      alt: 'VR TEC'
    },
    {
      url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Advanced technology solutions'
    }
  ];

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-slide for team carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(team.length / 2));
    }, 4000);
    return () => clearInterval(interval);
  }, [team.length]);

  // Auto-slide for image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSlide((prev) => (prev + 1) % techImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [techImages.length]);

  const getBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('mission') || message.includes('what do you do')) {
      return "Our mission is to empower businesses with innovative technology solutions that drive growth and success. We help companies leverage technology for digital transformation.";
    }
    
    if (message.includes('vision')) {
      return "Our vision is to be the leading technology partner for businesses seeking digital transformation. We aim to be at the forefront of technological innovation.";
    }
    
    if (message.includes('values')) {
      return "Our core values are Integrity, Innovation, Excellence, and Customer-centricity. These principles guide everything we do at TpolyMath.";
    }
    
    if (message.includes('team') || message.includes('who') || message.includes('staff')) {
      return "Our talented team includes Maria T Matheus (CTO), Jenita T Matheus (Project Manager), Maria T Matheus (Lead Developer),  Meriam T Matheus (Research Co-Ordinator) and Matheus L Mandume (Cyber Security Analists). Together, we bring decades of experience in technology solutions.";
    }
    
    if (message.includes('Julius T Matheus')) {
      return "Julius T Matheus is our CTO and a full-stack development expert with 8+ years in cutting-edge technologies. She leads our technical vision and development initiatives.";
    }
    
    if (message.includes('Jenita T Matheus')) {
      return "Jenita T Matheus is our Project Manager and an expert in Agile methodology, specializing in digital transformation projects. He ensures our projects are delivered efficiently and effectively.";
    }
    
    if (message.includes('Maria T Matheus')) {
      return "Maria T Matheus is our Lead Developer and AI specialist with a focus on machine learning and innovative solutions. She drives our technical excellence.";
    }
    
    if (message.includes('Mariam T Matheus')) {
      return "Mariam T Matheus is our UX Designer who creates intuitive digital experiences. He ensures our solutions are user-friendly and engaging.";
    }
    
    if (message.includes('founded') || message.includes('history') || message.includes('story')) {
      return "TpolyMath was founded in 2019 as a small team of passionate developers. We've grown into a full-service technology company, serving clients across various industries with our commitment to excellence and innovation.";
    }
    
    if (message.includes('services') || message.includes('what can you help')) {
      return "We provide innovative technology solutions including AI/ML development, digital transformation services, custom software development, and UX/UI design. We help businesses across various industries leverage technology for growth and success.";
    }
    
    if (message.includes('contact') || message.includes('get in touch')) {
      return "I'd be happy to help you get in touch! While I don't have direct contact information here, you can typically reach out through our main website or look for our contact section for phone numbers and email addresses.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to TpolyMath. I'm here to help you learn more about our company. Feel free to ask about our mission, team, services, or anything else you'd like to know!";
    }
    
    if (message.includes('thank')) {
      return "You're very welcome! Is there anything else you'd like to know about TpolyMath? I'm here to help!";
    }
    
    // Default response
    return "That's a great question! I can help you learn about TpolyMath's mission, vision, values, team members, company history, or services. What specifically would you like to know more about?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(team.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(team.length / 2)) % Math.ceil(team.length / 2));
  };

  const nextImageSlide = () => {
    setCurrentImageSlide((prev) => (prev + 1) % techImages.length);
  };

  const prevImageSlide = () => {
    setCurrentImageSlide((prev) => (prev - 1 + techImages.length) % techImages.length);
  };


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TpolyMath</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              We're a passionate team dedicated to transforming businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, TpolyMath began as a small team of passionate developers with a simple mission: 
                to help businesses leverage technology for growth and success.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we've grown into a full-service technology company, serving clients across various 
                industries. Our commitment to excellence and innovation has made us a trusted partner for businesses 
                looking to thrive in the digital age.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to push boundaries, embrace new technologies like AI and machine learning, 
                and deliver solutions that make a real difference in our clients' success stories.
              </p>
            </div>
            
            {/* Sliding Tech Images */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentImageSlide * 100}%)` }}
              >
                {techImages.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Image Navigation Buttons */}
              <button
                onClick={prevImageSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImageSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Image Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {techImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImageSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Icon size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section with Slider */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind TpolyMath's success.
            </p>
          </div>
          
          {/* Team Slider Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(team.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="flex justify-center gap-12 lg:gap-16">
                      {team.slice(slideIndex * 2, slideIndex * 2 + 2).map((member, index) => (
                        <div key={index} className="text-center group">
                          <div className="relative mb-6">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                            />
                            <div className="absolute inset-0 rounded-full bg-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-green-600 font-medium mb-2">{member.role}</p>
                          <p className="text-gray-600 text-sm max-w-xs mx-auto">{member.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(team.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Chat Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <span className="font-semibold">TpolyMath Assistant</span>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-red-700 p-1 rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs px-3 py-2 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 text-gray-800'
                }`}>
                  <div className="flex items-center space-x-1 mb-1">
                    {message.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
                    <span className="text-xs opacity-75">{message.timestamp}</span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 max-w-xs px-3 py-2 rounded-lg">
                  <div className="flex items-center space-x-1">
                    <Bot size={14} />
                    <span className="text-xs opacity-75">typing...</span>
                  </div>
                  <div className="flex space-x-1 mt-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about TpolyMath..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-red-600"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;