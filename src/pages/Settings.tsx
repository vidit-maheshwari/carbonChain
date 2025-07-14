import React, { useState } from 'react';
import { User, Lock, Bell, Mail, Building } from 'lucide-react';

function Settings() {
    // Mock user data
    const [profile, setProfile] = useState({
        name: 'Jane Doe',
        email: 'jane.doe@email.com',
        company: 'Green Asset Corp',
        phone: '+1 555-123-4567',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    });
    const [password, setPassword] = useState({
        current: '',
        new: '',
        confirm: '',
    });
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        product: true,
    });
    const [message, setMessage] = useState('');

    const handleProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };
    const handlePasswordChange = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value });
    };
    const handleNotificationsChange = (e) => {
        setNotifications({ ...notifications, [e.target.name]: e.target.checked });
    };
    const handleProfileSave = (e) => {
        e.preventDefault();
        setMessage('Profile updated!');
        setTimeout(() => setMessage(''), 2000);
    };
    const handlePasswordSave = (e) => {
        e.preventDefault();
        setMessage('Password changed!');
        setTimeout(() => setMessage(''), 2000);
    };
    const handleNotificationsSave = (e) => {
        e.preventDefault();
        setMessage('Notification preferences saved!');
        setTimeout(() => setMessage(''), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
                {message && (
                    <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium">
                        {message}
                    </div>
                )}
                {/* Profile Section */}
                <form onSubmit={handleProfileSave} className="mb-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <User className="h-5 w-5 mr-2 text-green-600" /> Profile Information
                    </h2>
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src={profile.avatar}
                            alt="Profile Avatar"
                            className="w-24 h-24 rounded-full object-cover border-4 border-green-200 shadow mb-2"
                        />
                        <div className="text-gray-700 font-medium">{profile.name}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleProfileChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleProfileChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={profile.phone}
                                onChange={handleProfileChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                            <input
                                type="text"
                                name="company"
                                value={profile.company}
                                onChange={handleProfileChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                        Save Profile
                    </button>
                </form>
                {/* Password Section */}
                <form onSubmit={handlePasswordSave} className="mb-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <Lock className="h-5 w-5 mr-2 text-blue-600" /> Change Password
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                            <input
                                type="password"
                                name="current"
                                value={password.current}
                                onChange={handlePasswordChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                            <input
                                type="password"
                                name="new"
                                value={password.new}
                                onChange={handlePasswordChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                            <input
                                type="password"
                                name="confirm"
                                value={password.confirm}
                                onChange={handlePasswordChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        Change Password
                    </button>
                </form>
                {/* Notification Preferences */}
                <form onSubmit={handleNotificationsSave}>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <Bell className="h-5 w-5 mr-2 text-purple-600" /> Notification Preferences
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="email"
                                name="email"
                                checked={notifications.email}
                                onChange={handleNotificationsChange}
                                className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <label htmlFor="email" className="ml-3 text-gray-700">Email Notifications</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="sms"
                                name="sms"
                                checked={notifications.sms}
                                onChange={handleNotificationsChange}
                                className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <label htmlFor="sms" className="ml-3 text-gray-700">SMS Notifications</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="product"
                                name="product"
                                checked={notifications.product}
                                onChange={handleNotificationsChange}
                                className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <label htmlFor="product" className="ml-3 text-gray-700">Product Updates</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 bg-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                    >
                        Save Preferences
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Settings; 