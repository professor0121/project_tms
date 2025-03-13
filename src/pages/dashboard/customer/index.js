import withAuth from '@/utils/protectedRoute'
import React from 'react'

const CustomerDashboard=()=> {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-indigo-600">MyApp</div>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Orders
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Profile
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Settings
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
              C
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6">
        {/* Welcome Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome, Customer!</h2>
          <p className="text-gray-600">
            Here’s an overview of your account and recent activity.
          </p>
        </section>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">Total Orders</h3>
            <p className="text-3xl font-bold text-gray-900">15</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">Pending Orders</h3>
            <p className="text-3xl font-bold text-gray-900">3</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700">Rewards</h3>
            <p className="text-3xl font-bold text-gray-900">1,250 pts</p>
          </div>
        </section>

        {/* Recent Orders Table */}
        <section className="bg-white shadow rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Order ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Date
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-gray-700">#1001</td>
                  <td className="px-4 py-2 text-gray-700">2025-03-14</td>
                  <td className="px-4 py-2 text-gray-700">Delivered</td>
                  <td className="px-4 py-2 text-gray-700">$150</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-700">#1002</td>
                  <td className="px-4 py-2 text-gray-700">2025-03-12</td>
                  <td className="px-4 py-2 text-gray-700">Processing</td>
                  <td className="px-4 py-2 text-gray-700">$85</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-700">#1003</td>
                  <td className="px-4 py-2 text-gray-700">2025-03-10</td>
                  <td className="px-4 py-2 text-gray-700">Shipped</td>
                  <td className="px-4 py-2 text-gray-700">$230</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommended Section */}
        <section className="bg-white shadow rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Recommended for You</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700">Product A</h4>
              <p className="text-gray-600">Short description...</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700">Product B</h4>
              <p className="text-gray-600">Short description...</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700">Product C</h4>
              <p className="text-gray-600">Short description...</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-600">
          © 2025 Your Company Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}


// export default withAuth(CustomerDashboard, "customer");
export default CustomerDashboard;