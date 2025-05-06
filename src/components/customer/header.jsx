import react from  'react';
import {useRouter} from 'next/router';
import {useState} from 'react';


const Header = () => {
     const [sidebarOpen, setSidebarOpen] = useState();
     return (
     <header className="bg-white shadow">
     <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
       <div className="flex items-center space-x-4">
         <div className="text-2xl font-bold text-indigo-600">MyApp</div>
         <nav className="hidden md:flex space-x-4">
           <a href="#" className="text-gray-700 hover:text-indigo-600">
             Home
           </a>
           <a href="#" className="text-gray-700 hover:text-indigo-600">
             Orders
           </a>
           <a href="#" className="text-gray-700 hover:text-indigo-600">
             Profile
           </a>
           <a href="#" className="text-gray-700 hover:text-indigo-600">
             Settings
           </a>
         </nav>
       </div>
       <div className="flex items-center space-x-4">
         <button className="p-2 rounded-full hover:bg-gray-100">
           {/* <svg
             className="h-6 w-6 text-gray-700"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
             />
           </svg> */}
         </button>
         <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
           C
         </div>
       </div>
     </div>
   </header>
     );
}

export default Header;