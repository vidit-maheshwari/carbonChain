import React from 'react';
import { MessageCircle, Mail, Phone, FileText, Video, Users } from 'lucide-react';

function Support() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond within 24 hours',
      action: 'Send Email',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call our support hotline for urgent issues',
      action: 'Call Now',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a screen-sharing session with our experts',
      action: 'Book Session',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const faqs = [
    {
      question: 'How do carbon credits work?',
      answer: 'Carbon credits represent one ton of CO₂ equivalent that has been avoided or removed from the atmosphere. They can be purchased to offset your emissions.'
    },
    {
      question: 'How is my carbon footprint calculated?',
      answer: 'Our AI analyzes your energy usage, transportation, supply chain, and operational data using industry-standard emission factors and methodologies.'
    },
    {
      question: 'Are the carbon credits verified?',
      answer: 'Yes, all credits on our platform are verified by third-party organizations like Verra and Gold Standard, with satellite monitoring for nature-based projects.'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Absolutely! We offer APIs and pre-built integrations with popular platforms like SAP, Oracle, Shopify, and many others.'
    },
    {
      question: 'What happens to my data?',
      answer: 'Your data is encrypted and stored securely. We never share your information with third parties and you maintain full control over your data.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Support & Help Center
          </h1>
          <p className="text-gray-600">
            Get the help you need to maximize your carbon management success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center mb-4`}>
                <option.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {option.description}
              </p>
              <button className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                {option.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Documentation
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Getting Started Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Integration Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Best Practices
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Video className="mr-2 h-5 w-5" />
                Video Tutorials
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Platform Overview (5 min)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Setting Up Your Dashboard (8 min)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Purchasing Carbon Credits (12 min)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Advanced Analytics (15 min)
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Community Forum
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with other users, share experiences, and learn from the community.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;