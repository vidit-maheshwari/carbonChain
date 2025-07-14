import React from 'react';
import { TrendingUp, BarChart3, PieChart, Calendar } from 'lucide-react';
import { BaseChart } from '../components/charts/BaseChart';

function Analytics() {
  // Mock data for charts
  const emissionsTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Emissions (tons CO₂)',
        data: [120, 110, 105, 98, 90, 85],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };
  const offsetDistributionData = {
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
            <BaseChart
              type="line"
              data={emissionsTrendData}
              title="Emissions Trend"
              height={250}
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Offset Distribution
            </h3>
            <BaseChart
              type="doughnut"
              data={offsetDistributionData}
              title="Offset Distribution"
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;