import React from "react";

const OrdersTable = () => {
  const orders = [
    { id: "#1234", customer: "John Doe", amount: "$123.45", status: "Pending" },
    { id: "#1235", customer: "Jane Smith", amount: "$456.78", status: "Completed" },
    { id: "#1236", customer: "Alice Brown", amount: "$789.01", status: "Shipped" },
  ];

  return (
    <div className="mt-8 bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2>

      {/* Card layout for mobile */}
      <div className="space-y-4 md:hidden text-[#191919]">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4 shadow-sm">
            <div className="mb-2">
              <span className="font-medium text-gray-700">Order ID:</span> {order.id}
            </div>
            <div className="mb-2">
              <span className="font-medium text-gray-700">Customer:</span> {order.customer}
            </div>
            <div className="mb-2">
              <span className="font-medium text-gray-700">Amount:</span> {order.amount}
            </div>
            <div>
              <span className="font-medium text-gray-700">Status:</span> {order.status}
            </div>
          </div>
        ))}
      </div>

      {/* Table layout for medium and larger screens */}
      <div className="hidden md:block overflow-x-auto text-[#191919]">
        <table className="min-w-full">
          <thead>
            <tr>
              {["Order ID", "Customer", "Amount", "Status"].map((head) => (
                <th key={head} className="px-4 py-2 text-left text-sm font-medium text-gray-700">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-2 text-sm text-gray-700">{order.id}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{order.customer}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{order.amount}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
