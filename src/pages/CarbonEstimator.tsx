import React, { useState } from 'react';
import { Calculator, Truck, Zap, Trash2, Package, BarChart3 } from 'lucide-react';

function CarbonEstimator() {
  const [activeTab, setActiveTab] = useState('transportation');
  const [formData, setFormData] = useState({
    transportation: {
      distance: '',
      fuelType: 'diesel',
      fuelConsumption: '',
      trips: ''
    },
    energy: {
      electricity: '',
      gas: '',
      heating: '',
      renewable: '0'
    },
    waste: {
      general: '',
      recyclable: '',
      organic: '',
      disposal: 'landfill'
    },
    operations: {
      employees: '',
      businessTravel: '',
      facilities: ''
    }
  });

  const [results, setResults] = useState(null);

  const calculateEmissions = () => {
    // Simplified emission calculation for demo
    const transportationEmissions = (
      (parseFloat(formData.transportation.distance) || 0) * 
      (parseFloat(formData.transportation.fuelConsumption) || 0) * 
      (parseFloat(formData.transportation.trips) || 0) * 
      2.3 // kg CO2 per liter diesel
    ) / 1000; // Convert to tons

    const energyEmissions = (
      (parseFloat(formData.energy.electricity) || 0) * 0.5 + // kWh to tons CO2
      (parseFloat(formData.energy.gas) || 0) * 2.0 + // gas units to tons CO2
      (parseFloat(formData.energy.heating) || 0) * 2.5 // heating units to tons CO2
    ) * (1 - (parseFloat(formData.energy.renewable) || 0) / 100);

    const wasteEmissions = (
      (parseFloat(formData.waste.general) || 0) * 0.5 +
      (parseFloat(formData.waste.organic) || 0) * 1.2
    );

    const operationsEmissions = (
      (parseFloat(formData.operations.employees) || 0) * 2.5 +
      (parseFloat(formData.operations.businessTravel) || 0) * 0.3
    );

    const total = transportationEmissions + energyEmissions + wasteEmissions + operationsEmissions;

    setResults({
      transportation: transportationEmissions,
      energy: energyEmissions,
      waste: wasteEmissions,
      operations: operationsEmissions,
      total: total
    });
  };

  const updateFormData = (category, field, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const tabs = [
    { id: 'transportation', name: 'Transportation', icon: Truck },
    { id: 'energy', name: 'Energy', icon: Zap },
    { id: 'waste', name: 'Waste', icon: Trash2 },
    { id: 'operations', name: 'Operations', icon: Package }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AI Carbon Footprint Estimator
          </h1>
          <p className="text-gray-600">
            Input your business data to get an accurate carbon footprint calculation 
            with AI-powered insights and recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-green-500 text-green-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <tab.icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'transportation' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Transportation & Logistics
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Average Distance per Trip (km)
                        </label>
                        <input
                          type="number"
                          value={formData.transportation.distance}
                          onChange={(e) => updateFormData('transportation', 'distance', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter distance"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Fuel Type
                        </label>
                        <select
                          value={formData.transportation.fuelType}
                          onChange={(e) => updateFormData('transportation', 'fuelType', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="diesel">Diesel</option>
                          <option value="gasoline">Gasoline</option>
                          <option value="electric">Electric</option>
                          <option value="hybrid">Hybrid</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Fuel Consumption (L/100km)
                        </label>
                        <input
                          type="number"
                          value={formData.transportation.fuelConsumption}
                          onChange={(e) => updateFormData('transportation', 'fuelConsumption', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter consumption"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Trips per Month
                        </label>
                        <input
                          type="number"
                          value={formData.transportation.trips}
                          onChange={(e) => updateFormData('transportation', 'trips', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter trips"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'energy' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Energy Consumption
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Monthly Electricity Usage (kWh)
                        </label>
                        <input
                          type="number"
                          value={formData.energy.electricity}
                          onChange={(e) => updateFormData('energy', 'electricity', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter kWh"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Monthly Gas Usage (cubic meters)
                        </label>
                        <input
                          type="number"
                          value={formData.energy.gas}
                          onChange={(e) => updateFormData('energy', 'gas', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter gas usage"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Heating/Cooling (kWh)
                        </label>
                        <input
                          type="number"
                          value={formData.energy.heating}
                          onChange={(e) => updateFormData('energy', 'heating', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter heating usage"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Renewable Energy Percentage (%)
                        </label>
                        <input
                          type="number"
                          value={formData.energy.renewable}
                          onChange={(e) => updateFormData('energy', 'renewable', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="0-100%"
                          min="0"
                          max="100"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'waste' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Waste Management
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          General Waste (kg/month)
                        </label>
                        <input
                          type="number"
                          value={formData.waste.general}
                          onChange={(e) => updateFormData('waste', 'general', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter waste amount"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Recyclable Waste (kg/month)
                        </label>
                        <input
                          type="number"
                          value={formData.waste.recyclable}
                          onChange={(e) => updateFormData('waste', 'recyclable', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter recyclable waste"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Organic Waste (kg/month)
                        </label>
                        <input
                          type="number"
                          value={formData.waste.organic}
                          onChange={(e) => updateFormData('waste', 'organic', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter organic waste"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Waste Disposal Method
                        </label>
                        <select
                          value={formData.waste.disposal}
                          onChange={(e) => updateFormData('waste', 'disposal', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="landfill">Landfill</option>
                          <option value="incineration">Incineration</option>
                          <option value="composting">Composting</option>
                          <option value="recycling">Recycling</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'operations' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Business Operations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Employees
                        </label>
                        <input
                          type="number"
                          value={formData.operations.employees}
                          onChange={(e) => updateFormData('operations', 'employees', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter employee count"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Travel (km/month)
                        </label>
                        <input
                          type="number"
                          value={formData.operations.businessTravel}
                          onChange={(e) => updateFormData('operations', 'businessTravel', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter travel distance"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Facility Size (square meters)
                        </label>
                        <input
                          type="number"
                          value={formData.operations.facilities}
                          onChange={(e) => updateFormData('operations', 'facilities', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter facility size"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={calculateEmissions}
                className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-lg"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Carbon Footprint
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {results && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Carbon Footprint Results
                </h3>
                
                <div className="space-y-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-700">
                      {results.total.toFixed(1)}
                    </div>
                    <div className="text-sm text-red-600">tons CO₂ per month</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Transportation</span>
                      <span className="text-sm font-bold">{results.transportation.toFixed(1)} tons</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Energy</span>
                      <span className="text-sm font-bold">{results.energy.toFixed(1)} tons</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Waste</span>
                      <span className="text-sm font-bold">{results.waste.toFixed(1)} tons</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Operations</span>
                      <span className="text-sm font-bold">{results.operations.toFixed(1)} tons</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Generate Detailed Report
                  </button>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Industry Benchmarks
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Retail Average</span>
                  <span className="text-sm font-medium">145 tons/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Manufacturing</span>
                  <span className="text-sm font-medium">287 tons/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Services</span>
                  <span className="text-sm font-medium">89 tons/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Technology</span>
                  <span className="text-sm font-medium">67 tons/month</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                AI Recommendations
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Switch to electric vehicles for short-distance delivery</li>
                <li>• Implement energy-efficient lighting systems</li>
                <li>• Partner with local suppliers to reduce transportation</li>
                <li>• Increase renewable energy usage to 50%</li>
                <li>• Optimize route planning with AI algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarbonEstimator;