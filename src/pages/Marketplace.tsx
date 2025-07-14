import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Shield, TreePine } from 'lucide-react';

function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    location: 'all',
    priceRange: 'all',
    verification: 'all'
  });

  const credits = [
    {
      id: 1,
      title: 'Amazon Rainforest Conservation',
      type: 'Nature-based',
      location: 'Brazil',
      price: 95,
      available: 2450,
      rating: 4.9,
      verified: true,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=400&h=250&fit=crop', // Lush rainforest
      seller: 'Forest Conservation Inc.',
      description: 'High-quality carbon credits from protected rainforest areas with satellite monitoring.'
    },
    {
      id: 2,
      title: 'Mountain River Protection',
      type: 'Nature-based',
      location: 'Nepal',
      price: 102,
      available: 980,
      rating: 4.8,
      verified: true,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=compress&w=400&h=250&fit=crop', // Mountain river
      seller: 'Himalayan Eco Trust',
      description: 'Preserving pristine mountain rivers and their surrounding forests.'
    },
    {
      id: 3,
      title: 'Mangrove Restoration',
      type: 'Nature-based',
      location: 'Philippines',
      price: 112,
      available: 856,
      rating: 4.8,
      verified: true,
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=compress&w=400&h=250&fit=crop', // Mangroves
      seller: 'Coastal Restoration Org',
      description: 'Mangrove reforestation project with community involvement and biodiversity benefits.'
    },
    {
      id: 4,
      title: 'Wildlife Habitat Preservation',
      type: 'Nature-based',
      location: 'Kenya',
      price: 120,
      available: 700,
      rating: 4.9,
      verified: true,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=400&h=250&fit=crop', // Wildlife/savannah
      seller: 'Savannah Guardians',
      description: 'Protecting wildlife habitats and supporting biodiversity in African savannahs.'
    },
    {
      id: 5,
      title: 'Peat Bog Restoration',
      type: 'Nature-based',
      location: 'Scotland',
      price: 134,
      available: 789,
      rating: 4.9,
      verified: true,
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=compress&w=400&h=250&fit=crop', // Peat bog
      seller: 'Highland Conservation',
      description: 'Peat bog restoration with exceptional carbon storage capacity and biodiversity benefits.'
    },
    {
      id: 6,
      title: 'Forest Waterfall Sanctuary',
      type: 'Nature-based',
      location: 'Canada',
      price: 110,
      available: 1200,
      rating: 4.7,
      verified: true,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=compress&w=400&h=250&fit=crop', // Waterfall
      seller: 'Maple Forest Trust',
      description: 'Preserving forested areas with beautiful waterfalls and rich biodiversity.'
    },
    {
      id: 7,
      title: 'Grassland Carbon Project',
      type: 'Nature-based',
      location: 'Argentina',
      price: 80,
      available: 2100,
      rating: 4.6,
      verified: true,
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=compress&w=400&h=250&fit=crop', // Grassland
      seller: 'Pampas Green Initiative',
      description: 'Restoring native grasslands for carbon sequestration and wildlife.'
    }
  ];

  const filteredCredits = credits.filter(credit => {
    const matchesSearch = credit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      credit.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filters.type === 'all' || credit.type.toLowerCase().includes(filters.type);
    const matchesLocation = filters.location === 'all' || credit.location === filters.location;

    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Carbon Credit Marketplace
          </h1>
          <p className="text-gray-600">
            Discover and purchase verified carbon credits from trusted green asset owners worldwide.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by project name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="nature">Nature-based</option>
                <option value="technology">Technology-based</option>
                <option value="agriculture">Agriculture-based</option>
              </select>

              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="Brazil">Brazil</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Philippines">Philippines</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Scotland">Scotland</option>
              </select>

              <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4" />
                Filters
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCredits.map((credit) => (
            <div key={credit.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img
                  src={credit.image}
                  alt={credit.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {credit.verified && (
                  <div className="absolute top-3 right-3 bg-green-600 text-white p-2 rounded-full">
                    <Shield className="h-4 w-4" />
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-900">{credit.type}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {credit.title}
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{credit.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{credit.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {credit.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      ${credit.price}
                      <span className="text-sm text-gray-500 font-normal">/ton CO₂</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {credit.available.toLocaleString()} tons available
                    </div>
                  </div>
                  <div className="text-right">
                    <TreePine className="h-8 w-8 text-green-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">Verified</div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 mb-4">
                  Sold by: {credit.seller}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Purchase
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCredits.length === 0 && (
          <div className="text-center py-16">
            <TreePine className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No credits found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Marketplace;