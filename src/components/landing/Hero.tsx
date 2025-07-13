import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onAuth: (mode: 'login' | 'register', type: 'retailer' | 'assetOwner') => void;
}

function Hero({ onAuth }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Democratizing
              <span className="text-green-600 block">Carbon Markets</span>
              Through AI
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
              Connect retailers with green asset owners for transparent carbon tracking, 
              offsetting, and credit trading. Measure your footprint, reduce emissions, 
              and achieve net-zero goals with AI-powered insights.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <button
                onClick={() => onAuth('register', 'retailer')}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Join as Retailer
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => onAuth('register', 'assetOwner')}
                className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-lg font-medium rounded-xl text-green-600 bg-white hover:bg-green-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Join as Asset Owner
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500 sm:justify-center lg:justify-start">
              <div className="flex items-center">
                <Play className="h-4 w-4 mr-1" />
                Watch Demo
              </div>
              <div>✓ Free Trial Available</div>
              <div>✓ No Setup Fees</div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div>
                    <p className="text-sm text-green-600 font-medium">CO₂ Offset This Month</p>
                    <p className="text-2xl font-bold text-green-700">1,247 tons</p>
                  </div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-2xl">🌱</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-blue-600 font-medium">Active Credits</p>
                    <p className="text-xl font-bold text-blue-700">$847K</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <p className="text-sm text-purple-600 font-medium">Trees Protected</p>
                    <p className="text-xl font-bold text-purple-700">12,458</p>
                  </div>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl">
                  <p className="text-sm text-orange-600 font-medium">Net-Zero Progress</p>
                  <div className="mt-2 bg-orange-200 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: '73%' }}></div>
                  </div>
                  <p className="text-xs text-orange-600 mt-1">73% Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;