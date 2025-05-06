import React, { useState } from 'react';
import { useRouter } from 'next/router';

const AdminLogin = () => {
  const [email, setEmail] = useState('admin@example.com'); // default value for test
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data); // Log the response for debugging
    if (res.ok) {
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('adminId', data.admin._id);
      alert('Login successful');
      router.push('/dashboard/admin'); // redirect to dashboard
    } else {
      setError(data.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Admin Login</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
