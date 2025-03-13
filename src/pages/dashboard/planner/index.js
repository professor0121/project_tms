import { useState } from "react";
import withAuth from "@/utils/protectedRoute";

const PlannerDashboard=()=> {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Planner Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Notifications
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
              P
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden bg-gray-200 p-2 rounded focus:outline-none focus:ring"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {sidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block w-64 bg-white shadow md:h-screen`}
        >
          <nav className="mt-10">
            <a
              href="#"
              className="block py-2.5 px-4 text-gray-700 hover:bg-green-600 hover:text-white transition rounded"
            >
              Overview
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 text-gray-700 hover:bg-green-600 hover:text-white transition rounded"
            >
              Calendar
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 text-gray-700 hover:bg-green-600 hover:text-white transition rounded"
            >
              Tasks
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 text-gray-700 hover:bg-green-600 hover:text-white transition rounded"
            >
              Projects
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 text-gray-700 hover:bg-green-600 hover:text-white transition rounded"
            >
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Upcoming Events
                  </h2>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Completed Tasks
                  </h2>
                  <p className="text-2xl font-bold text-gray-900">25</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Pending Tasks
                  </h2>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Table */}
          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Event Name
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Date
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Location
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Annual Planning Meeting
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      2025-04-05
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      New York
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Scheduled
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Project Kickoff
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      2025-04-10
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Remote
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Confirmed
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Client Review Session
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      2025-04-15
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      San Francisco
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Pending
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// export default withAuth(PlannerDashboard,'planner');
export default PlannerDashboard;