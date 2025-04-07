import { useState } from "react";
import withAuth from "@/utils/protectedRoute";
import Header from '@/components/vender/header';
import Overview from '@/components/vender/Overview';
import Tours from '@/components/vender/Tours';
import Order from '@/components/vender/Order';
import Reports from '@/components/vender/Reports';
import Settings from '@/components/vender/Settings';
import Sidebar from '@/components/vender/sidebar';

const views = {
  overview: Overview,
  order: Order,
  tour:Tours,
  report: Reports,
  settings: Settings,
};

const VendorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("overview");

  const ActiveComponent = views[activeView];
  
  console.log(sidebarOpen,activeView,ActiveComponent)

  return (
    <div className="min-h-screen bg-gray-100 text-[#191919]">
    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} onSelect={setActiveView} />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
};

export default withAuth(VendorDashboard, "vendor");
