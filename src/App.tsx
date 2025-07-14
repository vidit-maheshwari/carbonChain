import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoleBasedHeader } from './components/navigation/RoleBasedHeader';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import RetailerDashboard from './pages/RetailerDashboard';
import { EnhancedAssetOwnerDashboard } from './pages/EnhancedAssetOwnerDashboard';
import { ManageListings } from './pages/ManageListings';
import Marketplace from './pages/Marketplace';
import CarbonEstimator from './pages/CarbonEstimator';
import Analytics from './pages/Analytics';
import Support from './pages/Support';
import Settings from './pages/Settings';
import { RoleBasedAuthModal } from './components/auth/RoleBasedAuthModal';

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'retailer' | 'assetOwner';
  company?: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [userType, setUserType] = useState<'retailer' | 'assetOwner'>('retailer');

  const handleAuth = (userData: User) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const logout = () => {
    setUser(null);
  };

  const openAuth = (mode: 'login' | 'register', type: 'retailer' | 'assetOwner') => {
    setAuthMode(mode);
    setUserType(type);
    setShowAuthModal(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <RoleBasedHeader
          user={user}
          onAuth={openAuth}
          onLogout={logout}
        />

        <main>
          <Routes>
            <Route path="/" element={<LandingPage onAuth={openAuth} />} />
            <Route
              path="/retailer-dashboard"
              element={user?.type === 'retailer' ? <RetailerDashboard user={user} /> : <LandingPage onAuth={openAuth} />}
            />
            <Route
              path="/asset-owner-dashboard"
              element={user?.type === 'assetOwner' ? <EnhancedAssetOwnerDashboard user={user} /> : <LandingPage onAuth={openAuth} />}
            />
            <Route
              path="/manage-listings"
              element={user?.type === 'assetOwner' ? <ManageListings /> : <LandingPage onAuth={openAuth} />}
            />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/carbon-estimator" element={<CarbonEstimator />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        <Footer />

        {showAuthModal && (
          <RoleBasedAuthModal
            mode={authMode}
            userType={userType}
            onClose={() => setShowAuthModal(false)}
            onAuth={handleAuth}
            setAuthMode={setAuthMode}
            setUserType={setUserType}
          />
        )}
      </div>
    </Router>
  );
}

export default App;