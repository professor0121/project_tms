import React from 'react';
import { Menu } from 'lucide-react'; // You can use any icon here

const AdminHeader = ({activeTab }) => {
  return (
    <header className="w-full bg-white shadow px-4 py-3 flex items-center justify-between">
     
      <h1 className="text-lg font-semibold text-gray-800">Admin Dashboard</h1>

      {/* Optional profile/info area */}
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">{activeTab}</span>
        <span className="text-sm text-gray-600">Hello, Admin</span>
        <img
          src="https://placehold.co/40x40"
          alt="Admin Avatar"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
};

export default AdminHeader;
