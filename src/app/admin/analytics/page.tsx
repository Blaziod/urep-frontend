'use client';
import React from 'react';
import { FaCalendarAlt, FaFilter } from 'react-icons/fa';

export default function AnalyticsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-gray-600">Detailed analytics and insights about registrations and participants</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filters</h2>
          <div className="flex space-x-4">
            {/* Date Range Picker */}
            <div className="relative">
              <div className="flex items-center border rounded-md px-3 py-2">
                <FaCalendarAlt className="text-gray-400 mr-2" />
                <span>Last 30 days</span>
              </div>
            </div>

            {/* Program Filter */}
            <div className="relative">
              <select className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none">
                <option value="">All Programs</option>
                <option value="national">National Youth Program</option>
                <option value="african">African Youth Program</option>
                <option value="bakeprenuer">Bakeprenuer Program</option>
              </select>
              <FaFilter className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Registration Trends */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Registration Trends</h2>
          <div className="h-80 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Line Chart: Daily Registration Trends</p>
          </div>
        </div>

        {/* Completion Rate */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Completion Rate</h2>
          <div className="h-80 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Pie Chart: Completed vs Pending Registrations</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Participant Demographics */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Participant Demographics</h2>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Pie Chart: Age Groups</p>
          </div>
        </div>

        {/* Geographical Distribution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Geographical Distribution</h2>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Bar Chart: Registrations by State</p>
          </div>
        </div>

        {/* Program Popularity */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Program Popularity</h2>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Bar Chart: Registrations by Program</p>
          </div>
        </div>
      </div>

      {/* Detailed Statistics */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-6">Detailed Statistics</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Registrations</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Rate</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">National Youth Program</td>
                <td className="px-6 py-4 whitespace-nowrap">450</td>
                <td className="px-6 py-4 whitespace-nowrap">350</td>
                <td className="px-6 py-4 whitespace-nowrap">100</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">78%</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">African Youth Program</td>
                <td className="px-6 py-4 whitespace-nowrap">380</td>
                <td className="px-6 py-4 whitespace-nowrap">320</td>
                <td className="px-6 py-4 whitespace-nowrap">60</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">84%</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Bakeprenuer Program</td>
                <td className="px-6 py-4 whitespace-nowrap">420</td>
                <td className="px-6 py-4 whitespace-nowrap">310</td>
                <td className="px-6 py-4 whitespace-nowrap">110</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '74%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">74%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
