// src/components/Admin/AdminDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const adminUser = localStorage.getItem('adminUser');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const stats = [
    { name: 'Total Projects', value: '24', change: '+4', changeType: 'positive' },
    { name: 'Messages', value: '12', change: '+2', changeType: 'positive' },
    { name: 'Services', value: '8', change: '+0', changeType: 'neutral' },
    { name: 'Team Members', value: '15', change: '+1', changeType: 'positive' }
  ];

  const quickActions = [
    { name: 'Manage Projects', description: 'Add, edit or remove projects', href: '#', icon: '📁' },
    { name: 'View Messages', description: 'Check contact form submissions', href: '#', icon: '✉️' },
    { name: 'Update Services', description: 'Modify services offered', href: '#', icon: '🛠️' },
    { name: 'Site Settings', description: 'Update website content', href: '#', icon: '⚙️' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {adminUser}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-base font-normal text-gray-900">{stat.name}</dt>
                <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-blue-800">
                    {stat.value}
                  </div>
                  <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 ${
                    stat.changeType === 'positive' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {stat.change}
                  </div>
                </dd>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Actions</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage your website content</p>
          </div>
          <div className="border-t border-gray-200">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-6">
              {quickActions.map((action) => (
                <div key={action.name} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <h4 className="font-semibold text-gray-900">{action.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              <li className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-800 truncate">New contact form submission</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      New
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      From: john@example.com
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>2 hours ago</p>
                  </div>
                </div>
              </li>
              <li className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-800 truncate">Project updated</p>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Commercial Office Building project details updated
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>1 day ago</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;