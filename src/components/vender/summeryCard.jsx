import React from "react";

const SummaryCard = ({ title, value }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <div className="flex items-center">
      <div className="bg-indigo-500 rounded-full p-3">
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3z" />
        </svg>
      </div>
      <div className="ml-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

export default SummaryCard;
