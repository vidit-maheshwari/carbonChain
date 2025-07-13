import React from 'react';
import { BarChart3, TrendingDown, Target, AlertCircle, Zap, Leaf } from 'lucide-react';
import { User } from '../App';

interface RetailerDashboardProps {
  user: User;
}

function RetailerDashboard({ user }: RetailerDashboardProps) {
  const stats = [
    {
      icon: BarChart3,
      title: 'Total Emissions',
      value: '2,847',
      unit: 'tons CO₂',
      change: '+12% from last month',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Leaf,
      title: 'Credits Purchased',
      value: '1,523',
      unit: 'tons CO₂',
      change: '+8% from last month',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Target,
      title: 'Net-Zero Progress',
      value: '67%',
      unit: 'complete',
      change: '+5% from last month',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: TrendingDown,
      title: 'ESG Score',
      value: '84',
      unit: '/100',
      change: '+3 points this quarter',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-600 mt-2">
            Here's your carbon footprint overview for {user.company}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className="text-xs text-gray-500">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
                <span className="text-sm text-gray-500 font-normal ml-1">
                  {stat.unit}
                </span>
              </div>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Emissions Breakdown
            </h3>
            <div className="space-y-4">
              {[
                { category: 'Transportation', percentage: 45, value: '1,281 tons' },
                { category: 'Energy Usage', percentage: 30, value: '854 tons' },
                { category: 'Supply Chain', percentage: 20, value: '569 tons' },
                { category: 'Waste', percentage: 5, value: '143 tons' }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.category}</span>
                    <span className="text-sm text-gray-600">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              AI Recommendations
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: Zap,
                  title: 'Switch to Renewable Energy',
                  impact: '-23% emissions',
                  priority: 'High'
                },
                {
                  icon: TrendingDown,
                  title: 'Optimize Transportation Routes',
                  impact: '-15% emissions',
                  priority: 'Medium'
                },
                {
                  icon: AlertCircle,
                  title: 'Partner with Local Suppliers',
                  impact: '-8% emissions',
                  priority: 'Low'
                }
              ].map((rec, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      rec.priority === 'High' ? 'bg-red-100 text-red-600' :
                      rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      <rec.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{rec.title}</p>
                      <p className="text-xs text-gray-600">{rec.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Data Input Center
            </h3>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
              Upload Data
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Supply Chain Data', status: 'Updated', color: 'text-green-600' },
              { title: 'Energy Bills', status: 'Pending', color: 'text-yellow-600' },
              { title: 'Transportation Logs', status: 'Updated', color: 'text-green-600' },
              { title: 'Waste Management', status: 'Needs Review', color: 'text-red-600' }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                <span className={`text-sm ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RetailerDashboard;