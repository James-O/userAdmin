import React from "react";
import { BsCart, BsCurrencyDollar, BsPeople, BsThreeDots } from "react-icons/bs";

function Dashboardss() {
  return (
    <div className="overflow-y-auto w-full">
      {/* Page Header */}
      <h1 className="text-2xl text-blue-900 font-semibold">Dashboard</h1>
      <p className="text-sm">
        <a href="#" className="text-gray-400">Home / </a>
        <span className="text-gray-600">Dashboard</span>
      </p>

      {/* Main Grid: Stats (left) + Recent Activity (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 w-full">
        
        {/* Stats Section (takes 2 columns on lg+) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:col-span-2">
          {/* Sales Card */}
          <div className="bg-white rounded-xl shadow p-6 w-full">
            <div className="flex flex-row items-center justify-between">
              <div>
                <span className="text-blue-900 text-lg font-medium mr-1">
                  Sales
                </span>
                <span className="text-gray-400">| Today</span>
              </div>
              <BsThreeDots size={20} className="text-gray-500" />
            </div>
            <div className="flex flex-row gap-5 items-center mt-5">
              <div className="p-4 rounded-full bg-blue-100">
                <BsCart size={26} className="text-blue-900" />
              </div>
              <div>
                <h3 className="text-xl text-blue-900 font-semibold">145</h3>
                <p className="flex flex-row gap-1 text-sm">
                  <span className="text-green-800 font-medium">12%</span>
                  <span className="text-gray-500">increase</span>
                </p>
              </div>
            </div>
          </div>

          {/* Revenue Card */}
          <div className="bg-white rounded-xl shadow p-6 w-full">
            <div className="flex flex-row items-center justify-between">
              <div>
                <span className="text-blue-900 text-lg font-medium mr-1">
                  Revenue
                </span>
                <span className="text-gray-400">| This Month</span>
              </div>
              <BsThreeDots size={20} className="text-gray-500" />
            </div>
            <div className="flex flex-row gap-5 items-center mt-5">
              <div className="p-4 rounded-full bg-green-100">
                <BsCurrencyDollar size={28} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-xl text-blue-900 font-semibold">$3,264</h3>
                <p className="flex flex-row gap-1 text-sm">
                  <span className="text-green-800 font-bold">8%</span>
                  <span className="text-gray-500">increase</span>
                </p>
              </div>
            </div>
          </div>

          {/* Customers Card */}
          <div className="bg-white rounded-xl shadow p-6 w-full">
            <div className="flex flex-row items-center justify-between">
              <div>
                <span className="text-blue-900 text-lg font-medium mr-1">
                  Customers
                </span>
                <span className="text-gray-400">| This Year</span>
              </div>
              <BsThreeDots size={20} className="text-gray-500" />
            </div>
            <div className="flex flex-row gap-5 items-center mt-5">
              <div className="p-4 rounded-full bg-orange-100">
                <BsPeople size={28} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl text-blue-900 font-semibold">1244</h3>
                <p className="flex flex-row gap-1 text-sm">
                  <span className="text-red-800 font-bold">12%</span>
                  <span className="text-gray-500">decrease</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-xl shadow p-6 w-full">
          {/* Recent Activity Section */}
          <div className="flex flex-row items-center justify-between">
              <div>
                <span className=" mr-1 text-xl font-semibold text-blue-900 mb-4">
                  Recent Activity 
                </span>
                <span className="text-gray-400">| Today</span>
              </div>
              <BsThreeDots size={20} className="text-gray-500" />
            </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboardss;