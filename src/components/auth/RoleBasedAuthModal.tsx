import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Building, MapPin, Building2, Users, TreePine, BarChart3 } from 'lucide-react';
import { User as UserType } from '../../App';

interface RoleBasedAuthModalProps {
  mode: 'login' | 'register';
  userType: 'retailer' | 'assetOwner';
  onClose: () => void;
  onAuth: (user: UserType) => void;
}

export function RoleBasedAuthModal({ mode, userType, onClose, onAuth }: RoleBasedAuthModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: '',
    location: '',
    landSize: '',
    assetType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate authentication
    const user: UserType = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name || 'Demo User',
      email: formData.email,
      type: userType,
      company: formData.company || undefined
    };
    
    onAuth(user);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getModalConfig = () => {
    if (userType === 'assetOwner') {
      return {
        title: mode === 'login' ? 'Asset Owner Portal' : 'Join as Asset Owner',
        subtitle: 'Manage your green assets and earn from carbon credits',
        primaryColor: 'blue',
        icon: Building2,
        bgGradient: 'from-blue-50 to-green-50',
        features: [
          'List and manage your forest assets',
          'Track carbon sequestration metrics',
          'Earn revenue from verified credits',
          'Satellite monitoring and verification'
        ]
      };
    } else {
      return {
        title: mode === 'login' ? 'Retailer Portal' : 'Join as Retailer',
        subtitle: 'Track emissions and purchase carbon credits',
        primaryColor: 'green',
        icon: Users,
        bgGradient: 'from-green-50 to-blue-50',
        features: [
          'AI-powered carbon footprint tracking',
          'Access verified carbon credit marketplace',
          'ESG compliance reporting',
          'Supply chain emission analysis'
        ]
      };
    }
  };

  const config = getModalConfig();
  const IconComponent = config.icon;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.2, duration: 0.3 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.4, duration: 0.3 }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        <div className="flex">
          {/* Left Panel - Form */}
          <motion.div 
            variants={formVariants}
            className="flex-1 p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  config.primaryColor === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  <IconComponent className={`h-6 w-6 ${
                    config.primaryColor === 'blue' ? 'text-blue-600' : 'text-green-600'
                  }`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {config.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {config.subtitle}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              {mode === 'register' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {userType === 'retailer' ? 'Company Name' : 'Organization/Property Name'}
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder={userType === 'retailer' ? 'Your company name' : 'Your organization or property name'}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="City, Country"
                        required
                      />
                    </div>
                  </div>

                  {userType === 'assetOwner' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Land/Asset Size (hectares)
                        </label>
                        <div className="relative">
                          <TreePine className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="number"
                            name="landSize"
                            value={formData.landSize}
                            onChange={handleInputChange}
                            className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Total area in hectares"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Asset Type
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select asset type</option>
                          <option value="forest">Forest/Woodland</option>
                          <option value="grassland">Grassland</option>
                          <option value="wetland">Wetland</option>
                          <option value="agricultural">Agricultural Land</option>
                          <option value="urban">Urban Green Space</option>
                        </select>
                      </div>
                    </>
                  )}
                </>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  config.primaryColor === 'blue'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {mode === 'login' ? 'Sign In' : 'Create Account'}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                <button
                  onClick={() => {
                    // This would toggle between login/register modes
                    onClose();
                  }}
                  className={`ml-1 font-medium ${
                    config.primaryColor === 'blue'
                      ? 'text-blue-600 hover:text-blue-700'
                      : 'text-green-600 hover:text-green-700'
                  }`}
                >
                  {mode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </motion.div>

          {/* Right Panel - Features */}
          <motion.div 
            variants={featureVariants}
            className={`flex-1 bg-gradient-to-br ${config.bgGradient} p-8 flex flex-col justify-center`}
          >
            <div className="text-center mb-8">
              <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                config.primaryColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'
              }`}>
                {userType === 'assetOwner' ? (
                  <TreePine className="h-10 w-10 text-white" />
                ) : (
                  <BarChart3 className="h-10 w-10 text-white" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {userType === 'assetOwner' ? 'Monetize Your Green Assets' : 'Track & Reduce Emissions'}
              </h3>
              <p className="text-gray-600">
                {userType === 'assetOwner' 
                  ? 'Turn your forests and green spaces into verified carbon credits'
                  : 'AI-powered carbon management for sustainable business growth'
                }
              </p>
            </div>

            <div className="space-y-4">
              {config.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    config.primaryColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'
                  }`}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/50 rounded-xl">
              <p className="text-sm text-gray-600 text-center">
                <strong>Trusted by 15,000+ users</strong> worldwide for transparent carbon management
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}