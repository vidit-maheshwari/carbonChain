import React from 'react';
import { BarChart3, Leaf, ArrowRightLeft, Shield, Zap, Globe } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: BarChart3,
      title: 'AI-Powered Tracking',
      description: 'Advanced algorithms analyze your supply chain, operations, and energy usage to provide accurate carbon footprint measurements.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Leaf,
      title: 'Smart Offsetting',
      description: 'Connect directly with verified forest owners and green asset managers for transparent, high-quality carbon credits.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: ArrowRightLeft,
      title: 'Seamless Trading',
      description: 'Buy and sell carbon credits in our secure marketplace with real-time pricing and instant settlement.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Verified Credits',
      description: 'All credits are third-party verified with satellite monitoring and blockchain-based provenance tracking.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Zap,
      title: 'Real-time Insights',
      description: 'Get instant feedback on your environmental impact with actionable recommendations for improvement.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access a worldwide network of green asset owners from tropical rainforests to urban reforestation projects.',
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Three Pillars of Carbon Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform covers every aspect of carbon management, 
            from measurement to trading, with AI-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
            Explore All Features
            <ArrowRightLeft className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;