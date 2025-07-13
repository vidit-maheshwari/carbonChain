import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TreePine, 
  MapPin, 
  DollarSign, 
  Shield, 
  Satellite, 
  TrendingUp,
  Calendar,
  AlertCircle,
  Settings,
  Download,
  Plus,
  Eye
} from 'lucide-react';
import { User } from '../App';
import { BaseChart } from '../components/charts/BaseChart';
import { MetricCard } from '../components/dashboard/MetricCard';
import { DashboardSkeleton } from '../components/ui/LoadingSkeleton';
import { EnhancedHeader } from '../components/navigation/EnhancedHeader';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs';

interface EnhancedAssetOwnerDashboardProps {
  user: User;
}

export function EnhancedAssetOwnerDashboard({ user }: EnhancedAssetOwnerDashboardProps) {
  const [loading, setLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('6m');
  const [activeWidget, setActiveWidget] = useState<string | null>(null);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: TreePine,
      title: 'Trees Registered',
      value: '12,847',
      unit: 'trees',
      change: '+247 this month',
      changeType: 'positive' as const,
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: DollarSign,
      title: 'Credits Generated',
      value: '3,456',
      unit: 'tons CO₂',
      change: '+12% from last month',
      changeType: 'positive' as const,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Earned',
      value: '$87,234',
      unit: 'USD',
      change: '+18% from last month',
      changeType: 'positive' as const,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Verification Status',
      value: '98%',
      unit: 'verified',
      change: 'Fully compliant',
      changeType: 'positive' as const,
      color: 'bg-emerald-100 text-emerald-600'
    }
  ];

  // Chart data
  const sequestrationData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'CO₂ Sequestered (tons)',
        data: [120, 135, 148, 162, 178, 195],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const revenueData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [25000, 32000, 28000, 35000],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(249, 115, 22, 0.8)'
        ],
        borderWidth: 0
      }
    ]
  };

  const landDistributionData = {
    labels: ['Forest', 'Grassland', 'Wetland', 'Agricultural'],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: [
          '#10b981',
          '#84cc16',
          '#06b6d4',
          '#f59e0b'
        ],
        borderWidth: 0
      }
    ]
  };

  const landParcels = [
    {
      id: 'LP001',
      name: 'Northern Forest Section',
      area: '847 hectares',
      trees: '4,523',
      status: 'Verified',
      coordinates: '40.7128°N, 74.0060°W',
      lastInspection: '2025-01-10',
      health: 'Excellent'
    },
    {
      id: 'LP002',
      name: 'Riverside Reforestation',
      area: '623 hectares',
      trees: '3,891',
      status: 'Pending',
      coordinates: '40.7589°N, 73.9851°W',
      lastInspection: '2025-01-08',
      health: 'Good'
    },
    {
      id: 'LP003',
      name: 'Mountain Conservation Area',
      area: '1,234 hectares',
      trees: '7,456',
      status: 'Verified',
      coordinates: '40.6892°N, 74.0445°W',
      lastInspection: '2025-01-12',
      health: 'Excellent'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <DashboardSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.name}
              </h1>
              <p className="text-gray-600 mt-2">
                Manage your green assets and track carbon sequestration performance
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Export Report</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Add Parcel</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <MetricCard
                key={stat.title}
                {...stat}
                index={index}
                onClick={() => setActiveWidget(stat.title)}
              />
            ))}
          </motion.div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <BaseChart
                type="line"
                data={sequestrationData}
                title="Carbon Sequestration Trend"
                height={300}
                onRefresh={() => console.log('Refreshing sequestration data')}
                onExport={() => console.log('Exporting sequestration chart')}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <BaseChart
                type="bar"
                data={revenueData}
                title="Quarterly Revenue"
                height={300}
                onRefresh={() => console.log('Refreshing revenue data')}
                onExport={() => console.log('Exporting revenue chart')}
              />
            </motion.div>
          </div>

          {/* Land Management and Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Land Parcels */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Land Parcels Management
                  </h3>
                  <div className="flex items-center space-x-2">
                    <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                      <option>All Parcels</option>
                      <option>Verified Only</option>
                      <option>Pending Review</option>
                    </select>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      Add New Parcel
                    </motion.button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {landParcels.map((parcel, index) => (
                    <motion.div
                      key={parcel.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{parcel.name}</h4>
                          <p className="text-sm text-gray-600">ID: {parcel.id}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            parcel.status === 'Verified' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {parcel.status}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                          >
                            <Eye className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Area:</span>
                          <p className="font-medium">{parcel.area}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Trees:</span>
                          <p className="font-medium">{parcel.trees}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Health:</span>
                          <p className={`font-medium ${
                            parcel.health === 'Excellent' ? 'text-green-600' : 'text-blue-600'
                          }`}>
                            {parcel.health}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-500">Last Inspection:</span>
                          <p className="font-medium text-xs">{parcel.lastInspection}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar Widgets */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Land Distribution Chart */}
              <BaseChart
                type="doughnut"
                data={landDistributionData}
                title="Land Distribution"
                height={250}
              />

              {/* Satellite Monitoring */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Satellite className="h-5 w-5 mr-2" />
                  Satellite Monitoring
                </h3>
                <div className="space-y-3">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <span className="text-sm font-medium">Last Scan</span>
                    <span className="text-sm text-gray-600">2 days ago</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <span className="text-sm font-medium">Forest Health</span>
                    <span className="text-sm text-green-600 font-medium">Excellent</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <span className="text-sm font-medium">Change Detection</span>
                    <span className="text-sm text-blue-600 font-medium">+12 trees</span>
                  </motion.div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  View Satellite Images
                </motion.button>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Schedule Inspection</span>
                    </div>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <Settings className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Update Parcel Info</span>
                    </div>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                      <span className="font-medium">Report Issue</span>
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recent Transactions */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Transactions
                </h3>
                <div className="flex items-center space-x-2">
                  <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Last year</option>
                  </select>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    View All
                  </motion.button>
                </div>
              </div>
              
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
                      <motion.tr 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.5)' }}
                        className="transition-colors"
                      >
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
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}