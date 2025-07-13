import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, User } from 'lucide-react';
import { User as UserType } from '../../App';

interface HeaderProps {
  user: UserType | null;
  onAuth: (mode: 'login' | 'register', type: 'retailer' | 'assetOwner') => void;
  onLogout: () => void;
}

function Header({ user, onAuth, onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Carbon Estimator', href: '/carbon-estimator' },
    { name: 'Analytics', href: '/analytics' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
  ];

  const getDashboardLink = () => {
    if (!user) return '/';
    return user.type === 'retailer' ? '/retailer-dashboard' : '/asset-owner-dashboard';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">CarbonChain</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href ? 'text-green-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to={getDashboardLink()}
                  className="flex items-center space-x-2 text-gray-700 hover:text-green-600"
                >
                  <User className="h-5 w-5" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={onLogout}
                  className="text-gray-700 hover:text-green-600 text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => onAuth('login', 'retailer')}
                  className="text-gray-700 hover:text-green-600 text-sm font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => onAuth('register', 'retailer')}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 transition-colors ${
                  location.pathname === item.href ? 'text-green-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  to={getDashboardLink()}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    onAuth('login', 'retailer');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    onAuth('register', 'retailer');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;