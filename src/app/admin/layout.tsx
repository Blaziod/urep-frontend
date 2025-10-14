import React from 'react';
import Link from 'next/link';
import {FaChartBar, FaHome, FaUsers} from 'react-icons/fa';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar with gradient */}
      <div 
        className="w-64 h-full flex flex-col"
        style={{ 
          background: 'linear-gradient(to bottom, #2B7B12, #F9E79F)'
        }}
      >
        <div className="p-4 text-white text-2xl font-bold">
          Admin Portal
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link 
            href="/admin" 
            className="flex items-center text-white hover:bg-white/20 p-2 rounded-md"
          >
            <FaHome className="mr-2" />
            Dashboard
          </Link>
          <Link 
            href="/admin/registrants" 
            className="flex items-center text-white hover:bg-white/20 p-2 rounded-md"
          >
            <FaUsers className="mr-2" />
            Registrants
          </Link>
          <Link 
            href="/admin/analytics" 
            className="flex items-center text-white hover:bg-white/20 p-2 rounded-md"
          >
            <FaChartBar className="mr-2" />
            Analytics
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-white overflow-auto">
        {children}
      </div>
    </div>
  );
}