import React from 'react';
import { Star, Quote } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Sustainability Director',
      company: 'GreenMart Retail',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'CarbonChain revolutionized our carbon tracking. We reduced our footprint by 35% in just 8 months using their AI recommendations.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Forest Conservation Manager',
      company: 'Amazon Reforestation Project',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'As a forest owner, CarbonChain connected me with retailers worldwide. I\'ve sold over $2M in verified carbon credits.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      title: 'COO',
      company: 'EcoTech Solutions',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The transparency and verification process gives us confidence. Our stakeholders trust our carbon offset claims completely.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how retailers and asset owners are using CarbonChain to 
            create real environmental impact and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-green-200" />
                <p className="text-gray-600 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.title}
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Certified Partners & Integrations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
              Verra Registry
            </div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Gold Standard
            </div>
            <div className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
              CDP Certified
            </div>
            <div className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
              SBTi Validated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;