import React from 'react';
import { TrendingUp, BarChart3, PieChart, Calendar } from 'lucide-react';

function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Analytics & Reporting
          </h1>
          <p className="text-gray-600">
            Comprehensive insights into your carbon footprint, offset activities, and sustainability progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: TrendingUp, title: 'Emission Reduction', value: '23%', color: 'text-green-600' },
            { icon: BarChart3, title: 'Credits Purchased', value: '1,847', color: 'text-blue-600' },
            { icon: PieChart, title: 'Net-Zero Progress', value: '67%', color: 'text-purple-600' },
            { icon: Calendar, title: 'Days to Target', value: '847', color: 'text-orange-600' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className={`w-12 h-12 bg-gray-100 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Emissions Trend
            </h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Interactive Chart Placeholder</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Offset Distribution
            </h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Pie Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;