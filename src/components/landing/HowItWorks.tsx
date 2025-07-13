import React from 'react';
import { Building2, TreePine, HandCoins, ArrowRight } from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      icon: Building2,
      title: 'Retailers Track Emissions',
      description: 'Upload supply chain data, energy usage, and operational metrics. Our AI calculates your complete carbon footprint.',
      number: '01'
    },
    {
      icon: TreePine,
      title: 'Asset Owners Register',
      description: 'Forest and garden owners verify their land with GPS coordinates and third-party validation.',
      number: '02'
    },
    {
      icon: HandCoins,
      title: 'Trade & Offset',
      description: 'Match verified carbon credits with retailer needs through our secure marketplace platform.',
      number: '03'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How CarbonChain Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple three-step process connecting carbon emitters with 
            carbon sequestration projects for transparent, verified trading.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-600 text-white rounded-2xl mb-6 shadow-lg">
                    <step.icon className="h-10 w-10" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-12 h-px bg-green-300 transform translate-x-6">
                    <ArrowRight className="absolute -top-2 right-0 h-4 w-4 text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Carbon Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of retailers and asset owners already using CarbonChain 
                to create a more sustainable future. Get started with our free trial today.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">14 Days</div>
                <div className="text-green-600 font-medium mb-4">Free Trial</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Full platform access</li>
                  <li>✓ AI carbon estimation</li>
                  <li>✓ Marketplace browsing</li>
                  <li>✓ Basic analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;