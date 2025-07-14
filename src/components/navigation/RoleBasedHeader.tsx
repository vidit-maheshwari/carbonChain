import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu, X, User, ChevronDown, Bell, Search, Building2, Users } from 'lucide-react';
import { User as UserType } from '../../App';

interface RoleBasedHeaderProps {
  user: UserType | null;
  onAuth: (mode: 'login' | 'register', type: 'retailer' | 'assetOwner') => void;
  onLogout: () => void;
}

export function RoleBasedHeader({ user, onAuth, onLogout }: RoleBasedHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Role-based navigation items
  const getNavigationItems = () => {
    if (!user) {
      // Public navigation for non-authenticated users
      return [
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Carbon Estimator', href: '/carbon-estimator' },
        { name: 'Analytics', href: '/analytics' },
        { name: 'Support', href: '/support' },
      ];
    }

    if (user.type === 'assetOwner') {
      // Asset owner specific navigation
      return [
        { name: 'Dashboard', href: '/asset-owner-dashboard' },
        { name: 'Manage My Listings', href: '/manage-listings', highlight: true },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Analytics', href: '/analytics' },
        { name: 'Support', href: '/support' },
      ];
    } else {
      // Retailer navigation (includes carbon estimator)
      return [
        { name: 'Dashboard', href: '/retailer-dashboard' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Carbon Estimator', href: '/carbon-estimator' },
        { name: 'Analytics', href: '/analytics' },
        { name: 'Support', href: '/support' },
      ];
    }
  };

  const navigation = getNavigationItems();

  const getDashboardLink = () => {
    if (!user) return '/';
    return user.type === 'retailer' ? '/retailer-dashboard' : '/asset-owner-dashboard';
  };

  const getUserTypeIcon = () => {
    if (!user) return User;
    return user.type === 'assetOwner' ? Building2 : Users;
  };

  const getUserTypeLabel = () => {
    if (!user) return '';
    return user.type === 'assetOwner' ? 'Asset Owner' : 'Retailer';
  };

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
    exit: { y: -100 }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const navItemVariants = {
    hover: {
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-white shadow-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div variants={logoVariants} whileHover="hover">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Leaf className="h-8 w-8 text-green-600" />
              </motion.div>
              <span className="text-xl font-bold text-gray-900">CarbonChain</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                variants={navItemVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${location.pathname === item.href
                    ? 'text-green-600 bg-green-50'
                    : item.highlight
                      ? 'text-white bg-green-600 hover:bg-green-700'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                >
                  {item.name}
                  {location.pathname === item.href && !item.highlight && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-green-100 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                {/* Notifications */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </motion.button>

                {/* User Dropdown */}
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${user.type === 'assetOwner' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                      {React.createElement(getUserTypeIcon(), {
                        className: `h-4 w-4 ${user.type === 'assetOwner' ? 'text-blue-600' : 'text-green-600'}`
                      })}
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-gray-500">{getUserTypeLabel()}</div>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </motion.button>

                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2"
                      >
                        <Link
                          to={getDashboardLink()}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Dashboard
                        </Link>
                        {user.type === 'assetOwner' && (
                          <Link
                            to="/manage-listings"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            Manage Listings
                          </Link>
                        )}
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Profile Settings
                        </Link>
                        <hr className="my-2 border-gray-200" />
                        <button
                          onClick={() => {
                            onLogout();
                            setIsUserMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                {/* Sign In Dropdown */}
                <div className="relative group">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors px-4 py-2 rounded-lg"
                  >
                    Sign In
                  </motion.button>
                  <div className="absolute left-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200 py-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity z-50">
                    <button
                      onClick={() => onAuth('login', 'retailer')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      As Retailer
                    </button>
                    <button
                      onClick={() => onAuth('login', 'assetOwner')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      As Asset Owner
                    </button>
                  </div>
                </div>
                {/* Join Dropdown */}
                <div className="relative group">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-200 shadow-md"
                  >
                    Join
                  </motion.button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity z-50">
                    <button
                      onClick={() => onAuth('register', 'retailer')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      As Retailer
                    </button>
                    <button
                      onClick={() => onAuth('register', 'assetOwner')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      As Asset Owner
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-green-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location.pathname === item.href
                      ? 'text-green-600 bg-green-50'
                      : item.highlight
                        ? 'text-white bg-green-600'
                        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {user ? (
                <div className="pt-4 border-t border-gray-200">
                  <div className="px-3 py-2 text-sm text-gray-500">
                    Signed in as {getUserTypeLabel()}
                  </div>
                  <Link
                    to={getDashboardLink()}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  {user.type === 'assetOwner' && (
                    <Link
                      to="/manage-listings"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Manage Listings
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      onLogout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <button
                    onClick={() => {
                      onAuth('login', 'retailer');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    Sign In as Retailer
                  </button>
                  <button
                    onClick={() => {
                      onAuth('login', 'assetOwner');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Sign In as Asset Owner
                  </button>
                  <button
                    onClick={() => {
                      onAuth('register', 'retailer');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Join as Retailer
                  </button>
                  <button
                    onClick={() => {
                      onAuth('register', 'assetOwner');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Join as Asset Owner
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}