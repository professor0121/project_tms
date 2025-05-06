import React from 'react';

const navItems = [
  { name: 'Dashboard', id: 'dashboard' },
  { name: 'Users', id: 'users' },
  { name: 'Tours', id: 'tours' },
  { name: 'Vendors', id: 'vendors' },
  { name: 'Reports', id: 'reports' },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 bg-white shadow h-screen sticky top-0">
      <div className="p-6 text-xl font-bold border-b text-black-900">Admin Panel</div>
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`block w-full text-left text-black-900 px-4 py-2 rounded hover:bg-blue-100 ${
              activeTab === item.id ? 'bg-blue-200 font-semibold' : ''
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
