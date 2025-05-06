'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/admin/sidebar';
import DashboardHome from '@/components/admin/dashboardHome';
import Users from '@/components/admin/users';
import Tours from '@/components/admin/Tours';
import Vendors from '@/components/admin/vendors';
import Reports from '@/components/admin/reports';
import Header from '@/components/admin/header';
import { useRouter } from 'next/router';      
import { useEffect } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/dashboard/admin/login'); // Redirect to login if not authenticated
    }
  }, [router]);

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <Users />;
      case 'tours':
        return <Tours />;
      case 'vendors': 
        return <Vendors />;
      case 'reports':
        return <Reports />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex min-h-screen text-[#191919] bg-gray-100">

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6">
        <Header activeTab={activeTab}/>
        {renderContent()}
        </main>
    </div>
  );
};

export default AdminDashboard;
