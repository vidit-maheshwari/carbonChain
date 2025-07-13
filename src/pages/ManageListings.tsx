import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  MapPin, 
  TreePine, 
  DollarSign, 
  Calendar,
  TrendingUp,
  Filter,
  Search,
  MoreVertical,
  Star,
  Shield
} from 'lucide-react';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs';

interface Listing {
  id: string;
  title: string;
  type: string;
  location: string;
  area: string;
  price: number;
  available: number;
  status: 'active' | 'pending' | 'sold' | 'draft';
  views: number;
  inquiries: number;
  rating: number;
  image: string;
  createdAt: string;
  lastUpdated: string;
}

export function ManageListings() {
  const [listings, setListings] = useState<Listing[]>([
    {
      id: '1',
      title: 'Amazon Rainforest Conservation',
      type: 'Nature-based',
      location: 'Brazil',
      area: '2,450 hectares',
      price: 95,
      available: 2450,
      status: 'active',
      views: 1247,
      inquiries: 23,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      createdAt: '2025-01-10',
      lastUpdated: '2025-01-15'
    },
    {
      id: '2',
      title: 'Mangrove Restoration Project',
      type: 'Nature-based',
      location: 'Philippines',
      area: '856 hectares',
      price: 112,
      available: 856,
      status: 'active',
      views: 892,
      inquiries: 18,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3889687/pexels-photo-3889687.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      createdAt: '2025-01-08',
      lastUpdated: '2025-01-14'
    },
    {
      id: '3',
      title: 'Urban Forest Initiative',
      type: 'Nature-based',
      location: 'USA',
      area: '1,250 hectares',
      price: 89,
      available: 1250,
      status: 'pending',
      views: 634,
      inquiries: 12,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      createdAt: '2025-01-12',
      lastUpdated: '2025-01-13'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showDeleteModal, setShowDeleteModal] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'sold':
        return 'bg-gray-100 text-gray-800';
      case 'draft':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || listing.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDeleteListing = (id: string) => {
    setListings(listings.filter(listing => listing.id !== id));
    setShowDeleteModal(null);
  };

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
                Manage My Listings
              </h1>
              <p className="text-gray-600 mt-2">
                Track performance, edit details, and manage your carbon credit listings
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              <Plus className="h-5 w-5" />
              <span>Add New Listing</span>
            </motion.button>
          </motion.div>

          {/* Stats Overview */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Listings', value: listings.length, icon: TreePine, color: 'text-green-600' },
                { label: 'Active Listings', value: listings.filter(l => l.status === 'active').length, icon: Eye, color: 'text-blue-600' },
                { label: 'Total Views', value: listings.reduce((sum, l) => sum + l.views, 0).toLocaleString(), icon: TrendingUp, color: 'text-purple-600' },
                { label: 'Total Inquiries', value: listings.reduce((sum, l) => sum + l.inquiries, 0), icon: DollarSign, color: 'text-orange-600' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filters and Search */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search listings by title or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="sold">Sold</option>
                    <option value="draft">Draft</option>
                  </select>
                  
                  <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter className="h-4 w-4" />
                    More Filters
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Listings Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredListings.map((listing, index) => (
                  <motion.div
                    key={listing.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative">
                      <img 
                        src={listing.image} 
                        alt={listing.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
                          {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="relative">
                          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      {listing.status === 'active' && (
                        <div className="absolute bottom-3 right-3 bg-green-600 text-white p-2 rounded-full">
                          <Shield className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                          {listing.title}
                        </h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{listing.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{listing.location}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{listing.area}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            ${listing.price}
                            <span className="text-sm text-gray-500 font-normal">/ton CO₂</span>
                          </div>
                          <div className="text-sm text-gray-600">
                            {listing.available.toLocaleString()} tons available
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">
                            {listing.views} views
                          </div>
                          <div className="text-sm text-green-600 font-medium">
                            {listing.inquiries} inquiries
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500 mb-4">
                        Created: {listing.createdAt} • Updated: {listing.lastUpdated}
                      </div>
                      
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                          <Eye className="h-4 w-4" />
                          <span>View</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                        >
                          <Edit3 className="h-4 w-4" />
                          <span>Edit</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setShowDeleteModal(listing.id)}
                          className="py-2 px-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredListings.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <TreePine className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No listings found</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'Try adjusting your search criteria or filters.'
                    : 'Get started by creating your first carbon credit listing.'
                  }
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Add New Listing
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {showDeleteModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trash2 className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Delete Listing
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Are you sure you want to delete this listing? This action cannot be undone.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowDeleteModal(null)}
                      className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleDeleteListing(showDeleteModal)}
                      className="flex-1 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}