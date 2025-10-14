'use client';
import React from 'react';
import Image from 'next/image';
import {FaBell, FaSearch, FaSortAmountDown} from 'react-icons/fa';

export default function AdminDashboard() {
  // Mock data for demonstration
  const stats = {
    totalRegistrations: 1250,
    completedRegistrations: 980,
    pendingCompletions: 270
  };

  const participants = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '08012345678', status: 'Completed' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '08023456789', status: 'Pending' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', phone: '08034567890', status: 'Completed' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '08045678901', status: 'Completed' },
    { id: 5, name: 'Michael Wilson', email: 'michael@example.com', phone: '08056789012', status: 'Pending' },
  ];

  return (
    <div className="p-6">
      {/* Admin Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaBell className="text-gray-600 text-xl cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <Image 
                src="/images/admin_avatar.png"
                alt="Admin" 
                width={40} 
                height={40}
                className="object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>';
                }}
              />
            </div>
            <span className="ml-2 font-medium">Admin</span>
          </div>
        </div>
      </div>

      {/* Registration Statistics */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-2">Total Registrations</h3>
          <p className="text-3xl font-bold">{stats.totalRegistrations}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-2">Completed Registrations</h3>
          <p className="text-3xl font-bold">{stats.completedRegistrations}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-2">Pending Completions</h3>
          <p className="text-3xl font-bold">{stats.pendingCompletions}</p>
        </div>
      </div>

      {/* Main Content - Two Rows */}
      <div className="grid grid-cols-1 gap-8">
        {/* Participant Profile */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Participant Profile</h2>
            <div className="flex space-x-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search participants..."
                  className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none">
                  <option value="">Sort by</option>
                  <option value="status">Status</option>
                  <option value="date">Date</option>
                  <option value="program">Program</option>
                </select>
                <FaSortAmountDown className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Participants Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {participants.map((participant) => (
                  <tr key={participant.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{participant.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{participant.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{participant.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        participant.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {participant.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Participant Group Charts */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Participant Group</h2>

          <div className="grid grid-cols-3 gap-6">
            {/* Pie Chart - Participant Groups */}
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4">Participant Categories</h3>
              <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                <p className="text-gray-500">Pie Chart: Student, Employed, Semi-employed, Others</p>
              </div>
            </div>

            {/* Bar Chart - Participating Options */}
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4">Participation Mode</h3>
              <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                <p className="text-gray-500">Bar Chart: In Person, Online, Not Started</p>
              </div>
            </div>

            {/* Line Graph - Registration Over Time */}
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4">Registration Trend</h3>
              <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                <p className="text-gray-500">Line Graph: Registration Over Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
