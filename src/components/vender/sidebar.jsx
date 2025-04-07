import React from "react";

const Sidebar = ({ sidebarOpen, onSelect }) => {
  const menuItems = [
    { label: "Overview", view: "overview" },
    { label: "Orders", view: "order" },
    { label: "Tours", view: "tour" },
    { label: "Reports", view: "report" },
    { label: "Settings", view: "settings" },
  ];

  return (
    <aside className={`${sidebarOpen ? "block" : "hidden"}  mt-[2px] md:block w-64 bg-white shadow md:h-screen`}>
      <nav className="mt-10">
        {menuItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onSelect(item.view)}
            className="w-full text-left py-2.5 px-4 text-gray-700 hover:bg-indigo-600 hover:text-white transition rounded"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
