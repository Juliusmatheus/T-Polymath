import { Code, Smartphone, Brain, Database, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['SME Businesses Website', 'Businesses Website', 'Corperate Websites', 'E-Comerce/ OlineShop'],
      price: 'Starting at N$...',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['React Native', 'Flutter', 'iOS Native', 'Android Native'],
      price: 'Starting at N$...',
    },
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Intelligent AI solutions to automate processes and enhance decision-making.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'AI Chatbots'],
      price: 'Starting at $6,000',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights for better decision making.',
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Reporting'],
      price: 'Starting at N$...',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Training'],
      price: 'Starting at N$...',
    },
    {
      icon: Zap,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      features: ['AWS/Azure/GCP', 'Migration Services', 'DevOps', 'Monitoring'],
      price: 'Starting at N$...',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business needs and project requirements.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Detailed project plan with timelines and milestones.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development process with regular updates.',
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Testing, deployment, and ongoing support.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-green-300 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-green-600 font-semibold">{service.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Services;
