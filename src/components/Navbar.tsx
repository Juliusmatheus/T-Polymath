import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Briefcase, 
  Mail,
  Code,
  Smartphone,
  BarChart2,
  Eye,
  Layout,
  Brain
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Get To Know Us', href: '/about', icon: Users },
    { 
      name: 'Services', 
      href: '/services', 
      icon: Briefcase,
      subItems: [
        { name: 'Web Development', href: '/services/web-development', icon: Code },
        { name: 'App Development', href: '/services/app-development', icon: Smartphone },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart2 },
        { name: 'VR/AR Development', href: '/services/vr-ar', icon: Eye },
        { name: 'UI/UX Design', href: '/services/ui-ux', icon: Layout },
        { name: 'AI & Machine Learning', href: '/services/ai', icon: Brain }
      ]
    },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = navigation[2].subItems?.some(item => isActive(item.href)) || false;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
            >
              T-PolyMath tech
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              if (!item.subItems) {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-green-600 bg-green-50 border-b-2 border-green-600'
                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              } else {
                return (
                  <div key={item.name} className="relative group">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isServicesActive
                          ? 'text-green-600 bg-green-50 border-b-2 border-green-600'
                          : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{item.name}</span>
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {servicesOpen && (
                      <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {item.subItems.map((subItem) => {
                            const SubIcon = subItem.icon;
                            return (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setServicesOpen(false)}
                                className={`flex items-center px-4 py-2 text-sm ${
                                  isActive(subItem.href)
                                    ? 'bg-green-50 text-green-600'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                              >
                                <SubIcon size={16} className="mr-2" />
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => {
              const Icon = item.icon;
              if (!item.subItems) {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              } else {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                        isServicesActive
                          ? 'text-green-600 bg-green-50'
                          : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon size={18} />
                        <span>{item.name}</span>
                      </div>
                      <svg
                        className={`h-5 w-5 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {servicesOpen && (
                      <div className="pl-6">
                        {item.subItems.map((subItem) => {
                          const SubIcon = subItem.icon;
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => {
                                setIsOpen(false);
                                setServicesOpen(false);
                              }}
                              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                isActive(subItem.href)
                                  ? 'text-green-600 bg-green-50'
                                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                              }`}
                            >
                              <SubIcon size={16} />
                              <span>{subItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
