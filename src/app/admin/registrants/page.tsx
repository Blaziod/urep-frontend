'use client';
import React from 'react';
import { FaSearch, FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function RegistrantsPage() {
  // Mock data for demonstration
  const registrants = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      phone: '08012345678', 
      status: 'Completed',
      dob: '1990-05-15',
      address: '123 Main St, Lagos',
      education: 'Bachelor of Science',
      occupation: 'Software Engineer',
      program: 'National Youth Program',
      registrationDate: '2023-10-05'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      phone: '08023456789', 
      status: 'Pending',
      dob: '1992-08-22',
      address: '456 Oak Ave, Abuja',
      education: 'Master of Arts',
      occupation: 'Teacher',
      program: 'African Youth Program',
      registrationDate: '2023-10-10'
    },
    { 
      id: 3, 
      name: 'Robert Johnson', 
      email: 'robert@example.com', 
      phone: '08034567890', 
      status: 'Completed',
      dob: '1988-12-03',
      address: '789 Pine Rd, Port Harcourt',
      education: 'PhD in Economics',
      occupation: 'Researcher',
      program: 'Bakeprenuer Program',
      registrationDate: '2023-09-28'
    },
  ];

  // State for selected registrant (in a real app, this would use React.useState)
  const selectedRegistrant = registrants[0]; // Default to first registrant for demo

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Registrants</h1>
        <p className="text-gray-600">Search and view detailed information about registrants</p>
      </div>

      {/* Search and Results Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Search Panel */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Search Registrants</h2>

          {/* Search Input */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Filters */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Filter by Status</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" checked />
                <span className="ml-2">All</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                <span className="ml-2">Completed</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                <span className="ml-2">Pending</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Filter by Program</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" checked />
                <span className="ml-2">All Programs</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                <span className="ml-2">National Youth Program</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                <span className="ml-2">African Youth Program</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                <span className="ml-2">Bakeprenuer Program</span>
              </label>
            </div>
          </div>

          {/* Registrants List */}
          <div>
            <h3 className="font-medium mb-2">Results</h3>
            <div className="space-y-2">
              {registrants.map(registrant => (
                <div 
                  key={registrant.id}
                  className={`p-3 rounded-md cursor-pointer ${
                    selectedRegistrant.id === registrant.id 
                      ? 'bg-green-100 border border-green-300' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="font-medium">{registrant.name}</div>
                  <div className="text-sm text-gray-600">{registrant.email}</div>
                  <div className="text-sm text-gray-600">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      registrant.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {registrant.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registrant Details */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Registrant Profile</h2>

          {selectedRegistrant ? (
            <div>
              {/* Basic Info */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 pb-2 border-b">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <FaUser className="mt-1 mr-2 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-500">Full Name</div>
                      <div className="font-medium">{selectedRegistrant.name}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="mt-1 mr-2 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-500">Email Address</div>
                      <div className="font-medium">{selectedRegistrant.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="mt-1 mr-2 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-500">Phone Number</div>
                      <div className="font-medium">{selectedRegistrant.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCalendarAlt className="mt-1 mr-2 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-500">Date of Birth</div>
                      <div className="font-medium">{selectedRegistrant.dob}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mt-1 mr-2 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-500">Address</div>
                      <div className="font-medium">{selectedRegistrant.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Occupation */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 pb-2 border-b">Education & Occupation</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <FaGraduationCap className="mt-1 mr-2 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-500">Education</div>
                      <div className="font-medium">{selectedRegistrant.education}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaBriefcase className="mt-1 mr-2 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-500">Occupation</div>
                      <div className="font-medium">{selectedRegistrant.occupation}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Information */}
              <div>
                <h3 className="text-lg font-medium mb-4 pb-2 border-b">Program Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-2 text-green-600">📋</div>
                    <div>
                      <div className="text-sm text-gray-500">Program</div>
                      <div className="font-medium">{selectedRegistrant.program}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCalendarAlt className="mt-1 mr-2 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-500">Registration Date</div>
                      <div className="font-medium">{selectedRegistrant.registrationDate}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-2 text-green-600">🔄</div>
                    <div>
                      <div className="text-sm text-gray-500">Status</div>
                      <div>
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          selectedRegistrant.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {selectedRegistrant.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64">
              <div className="text-gray-400 mb-2">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-gray-500">Select a registrant to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
