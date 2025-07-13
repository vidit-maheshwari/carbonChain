import React from 'react';
import { TrendingUp, Users, Leaf, DollarSign } from 'lucide-react';

function Statistics() {
  const stats = [
    {
      icon: TrendingUp,
      value: '2.4M',
      label: 'Tons CO₂ Offset',
      color: 'text-green-600'
    },
    {
      icon: Users,
      value: '15K+',
      label: 'Active Users',
      color: 'text-blue-600'
    },
    {
      icon: Leaf,
      value: '847K',
      label: 'Trees Protected',
      color: 'text-emerald-600'
    },
    {
      icon: DollarSign,
      value: '$124M',
      label: 'Credits Traded',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Impact by the Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real environmental impact powered by our global community of 
            retailers and green asset owners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-white bg-opacity-10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Join the Carbon Revolution
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Be part of the largest transparent carbon marketplace. 
            Every transaction creates measurable environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              View Live Dashboard
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors">
              Download Impact Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;