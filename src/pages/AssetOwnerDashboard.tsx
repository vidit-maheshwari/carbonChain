import React from 'react';
import { TreePine, MapPin, DollarSign, Shield, Satellite, TrendingUp } from 'lucide-react';
import { User } from '../App';

interface AssetOwnerDashboardProps {
  user: User;
}

function AssetOwnerDashboard({ user }: AssetOwnerDashboardProps) {
  const stats = [
    {
      icon: TreePine,
      title: 'Trees Registered',
      value: '12,847',
      unit: 'trees',
      change: '+247 this month',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: DollarSign,
      title: 'Credits Generated',
      value: '3,456',
      unit: 'tons CO₂',
      change: '+12% from last month',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Earned',
      value: '$87,234',
      unit: 'USD',
      change: '+18% from last month',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Verification Status',
      value: '98%',
      unit: 'verified',
      change: 'Fully compliant',
      color: 'bg-emerald-100 text-emerald-600'
    }
  ];

  const landParcels = [
    {
      id: 'LP001',
      name: 'Northern Forest Section',
      area: '847 hectares',
      trees: '4,523',
      status: 'Verified',
      coordinates: '40.7128°N, 74.0060°W'
    },
    {
      id: 'LP002',
      name: 'Riverside Reforestation',
      area: '623 hectares',
      trees: '3,891',
      status: 'Pending',
      coordinates: '40.7589°N, 73.9851°W'
    },
    {
      id: 'LP003',
      name: 'Mountain Conservation Area',
      area: '1,234 hectares',
      trees: '7,456',
      status: 'Verified',
      coordinates: '40.6892°N, 74.0445°W'
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
            Manage your green assets and track carbon sequestration
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
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Land Parcels Management
              </h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                Add New Parcel
              </button>
            </div>
            
            <div className="space-y-4">
              {landParcels.map((parcel, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{parcel.name}</h4>
                      <p className="text-sm text-gray-600">ID: {parcel.id}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      parcel.status === 'Verified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {parcel.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Area:</span>
                      <p className="font-medium">{parcel.area}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Trees:</span>
                      <p className="font-medium">{parcel.trees}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Coordinates:</span>
                      <p className="font-medium text-xs">{parcel.coordinates}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Sequestration Calculator
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">847</div>
                  <div className="text-sm text-green-600">tons CO₂/year</div>
                  <div className="text-xs text-gray-500 mt-1">Estimated sequestration</div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Generate Report
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Satellite className="h-5 w-5 mr-2" />
                Satellite Monitoring
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">Last Scan</span>
                  <span className="text-sm text-gray-600">2 days ago</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">Forest Health</span>
                  <span className="text-sm text-green-600 font-medium">Excellent</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">Change Detection</span>
                  <span className="text-sm text-blue-600 font-medium">+12 trees</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Recent Transactions
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-700">Date</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-700">Buyer</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-700">Credits</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-700">Price</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { date: '2025-01-15', buyer: 'GreenMart Retail', credits: '145 tons', price: '$14,500', status: 'Completed' },
                  { date: '2025-01-12', buyer: 'EcoTech Solutions', credits: '89 tons', price: '$8,900', status: 'Completed' },
                  { date: '2025-01-10', buyer: 'Sustainable Corp', credits: '234 tons', price: '$23,400', status: 'Processing' }
                ].map((transaction, index) => (
                  <tr key={index}>
                    <td className="py-3 text-sm text-gray-600">{transaction.date}</td>
                    <td className="py-3 text-sm font-medium text-gray-900">{transaction.buyer}</td>
                    <td className="py-3 text-sm text-gray-600">{transaction.credits}</td>
                    <td className="py-3 text-sm font-medium text-green-600">{transaction.price}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetOwnerDashboard;