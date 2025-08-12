import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-green-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-green-100 mb-4">T-PolyMath Tech</h3>
            <p className="text-green-200 mb-6 leading-relaxed">
              Empowering businesses with innovative technology solutions that drive growth and success. 
              We specialize in web development, mobile apps, data analytics, VR/AR, UI/UX design, and AI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-green-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-green-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-green-100 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web-development" className="text-green-200 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-green-200 hover:text-white transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services/data-analytics" className="text-green-200 hover:text-white transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/services/vr-ar" className="text-green-200 hover:text-white transition-colors">
                  VR/AR Development
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux" className="text-green-200 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services/ai" className="text-green-200 hover:text-white transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-green-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-green-200 text-sm">Email</p>
                <p className="text-white font-medium">tangenicoachlam@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-green-200 text-sm">Phone</p>
                <p className="text-white font-medium">+264 81 4526741</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-green-200 text-sm">Address</p>
                <p className="text-white font-medium">Evelin Street, Windhoek</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-green-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm">
              © 2024 T-PolyMath Tech. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-green-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-green-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
