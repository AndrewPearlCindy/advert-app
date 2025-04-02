import React from 'react';
import { 
  Eye,
  TrendingUp,
  MessageSquare, 
  Phone,
  Star, 
  Users,
  Instagram
} from 'lucide-react';

const Overview = () => {
  return (
    <div className="min-h-screen bg-red-50">
      {/* Main Content */}
      <header className="bg-red-600 shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-white">Vendor Dashboard</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard title="Total Ad Views" icon={<Eye className="text-blue-500" />} />
          <StatCard title="Contact Rate" icon={<TrendingUp className="text-green-500" />} />
          <StatCard title="Total Contacts" icon={<MessageSquare className="text-purple-500" />} />
          <StatCard title="Rating" icon={<Star className="text-yellow-500" />} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Contact Breakdown */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Contact Methods</h2>
            <div className="flex h-64">
              <div className="w-1/2 flex flex-col items-center justify-center">
                <div className="relative h-32 w-32">
                  {/* Phone circle chart placeholder */}
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#e5e7eb"
                      strokeWidth="15"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#4f46e5"
                      strokeWidth="15"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={Math.PI * 40}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">50%</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <Phone size={20} className="text-indigo-600 mr-2" />
                  <span className="font-medium">Phone Calls</span>
                </div>
              </div>
              <div className="w-1/2 flex flex-col items-center justify-center">
                <div className="relative h-32 w-32">
                  {/* Message circle chart placeholder */}
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#e5e7eb"
                      strokeWidth="15"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#10b981"
                      strokeWidth="15"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={Math.PI * 40}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">50%</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <MessageSquare size={20} className="text-green-600 mr-2" />
                  <span className="font-medium">Messages</span>
                </div>
              </div>
              <div className="w-1/2 flex flex-col items-center justify-center">
                <div className="relative h-32 w-32">
                  {/* Message circle chart placeholder */}
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#e5e7eb"
                      strokeWidth="15"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#D81B60"
                      strokeWidth="15"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={Math.PI * 40}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">50%</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <Instagram size={20} className="text-pink-600 mr-2" />
                  <span className="font-medium">Instagram</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ad Views Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Monthly Ad Views</h2>
            <div className="h-64 flex items-end space-x-2">
              {[1, 2, 3, 4, 5, 6].map((month) => (
                <div key={month} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-indigo-500 rounded-t"
                    style={{ height: `${(month * 15)}%` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-1">Month {month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Popular Menu Items */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-medium mb-4">Most Viewed Menu Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between border-b pb-4">
                <span className="text-gray-700">Menu Item {item}</span>
                <div className="flex items-center">
                  <span className="text-gray-900 font-medium">Views</span>
                  <div className="ml-2 w-24 bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${100 - (item * 15)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </main>
    </div>
  );
};

// Helper component
const StatCard = ({ title, icon }) => (
  <div className="bg-white rounded-lg shadow p-5">
    <div className="flex justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">--</p>
        </div>
      </div>
      <div>
        {icon}
      </div>
    </div>
  </div>
);


export default Overview;




