import React from 'react';
import { Check, Star } from 'lucide-react';

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 29,
      description: 'Perfect for small businesses starting their carbon journey',
      features: [
        'Basic carbon tracking',
        'Monthly reports',
        'Email support',
        'Up to 50 transactions',
        'Standard verification'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: 99,
      description: 'Ideal for growing companies with comprehensive needs',
      features: [
        'Advanced AI analytics',
        'Real-time monitoring',
        'Priority support',
        'Unlimited transactions',
        'Premium verification',
        'API access',
        'Custom reports'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 299,
      description: 'For large organizations requiring full-scale solutions',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced compliance tools',
        'White-label options',
        'Training sessions',
        'SLA guarantee'
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your carbon management needs. 
            All plans include access to our verified carbon credit marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.recommended ? 'ring-2 ring-green-500 relative' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.recommended
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Need a custom solution for your organization? We offer tailored packages 
            for enterprises with specific requirements, including government partnerships 
            and multi-national corporations.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;