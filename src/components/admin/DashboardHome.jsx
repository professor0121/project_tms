import React from 'react';

const sections = [
  { title: 'Total Users', value: '1,024', icon: '👥' },
  { title: 'Total Tours', value: '243', icon: '🧳' },
  { title: 'Active Vendors', value: '85', icon: '🏨' },
  { title: 'Pending Requests', value: '12', icon: '⏳' },
  { title: 'Total Revenue', value: '$32,500', icon: '💰' },
  { title: 'Reports', value: '34', icon: '📈' },
  { title: 'Messages', value: '78', icon: '✉️' },
  { title: 'Support Tickets', value: '9', icon: '🎫' },
];

const DashboardHome = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex-1 min-w-[200px] max-w-[300px] bg-white shadow rounded-lg p-4"
        >
          <div className="text-3xl mb-2">{section.icon}</div>
          <div className="text-sm text-gray-500">{section.title}</div>
          <div className="text-xl font-bold text-gray-800">{section.value}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardHome;
