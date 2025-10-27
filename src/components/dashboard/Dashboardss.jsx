import React from "react";
import Chart from "react-apexcharts";

import {
  BsCart,
  BsCurrencyDollar,
  BsPeople,
  BsThreeDots,
  BsChevronDown,
} from "react-icons/bs";
import SearchableTable from "./SearchableTable";
import RecentSales from "./RecentSales";
import Recharts from "./Recharts";
import Webtraffic from "./Webtraffic";
import Newsupdated from "./Newsupdated";
import Threedotmenu from "./Threedotmenu";

function Dashboardss() {
  const chartData = [
    {
      name: "Sales",
      data: [
        { x: "2025-10-08T00:00:00", y: 31 },
        { x: "2025-10-08T01:30:00", y: 40 },
        { x: "2025-10-08T02:30:00", y: 28 },
        { x: "2025-10-08T03:30:00", y: 51 },
        { x: "2025-10-08T04:30:00", y: 42 },
        { x: "2025-10-08T05:30:00", y: 82 },
        { x: "2025-10-08T06:30:00", y: 56 },
      ],
    },
    {
      name: "Revenue",
      data: [
        { x: "2025-10-08T00:00:00", y: 11 },
        { x: "2025-10-08T01:30:00", y: 32 },
        { x: "2025-10-08T02:30:00", y: 45 },
        { x: "2025-10-08T03:30:00", y: 32 },
        { x: "2025-10-08T04:30:00", y: 34 },
        { x: "2025-10-08T05:30:00", y: 52 },
        { x: "2025-10-08T06:30:00", y: 41 },
      ],
    },
    {
      name: "Customers",
      data: [
        { x: "2025-10-08T00:00:00", y: 15 },
        { x: "2025-10-08T01:30:00", y: 11 },
        { x: "2025-10-08T02:30:00", y: 32 },
        { x: "2025-10-08T03:30:00", y: 18 },
        { x: "2025-10-08T04:30:00", y: 9 },
        { x: "2025-10-08T05:30:00", y: 24 },
        { x: "2025-10-08T06:30:00", y: 11 },
      ],
    },
  ];

  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: false },
    },
    stroke: { curve: "smooth", width: 3 },
    markers: { size: 4 },
    colors: ["#3b82f6", "#10b981", "#f97316"],

    grid: {
      borderColor: "#d1d5db",
      strokeDashArray: 0,
    },
    xaxis: {
      type: "datetime",
      min: new Date("2025-10-08T00:00:00").getTime(),
      max: new Date("2025-10-08T06:30:00").getTime(),
      tickAmount: 7, // 00:00 through 06:30 evenly spaced

      labels: {
        format: "HH:mm",
        datetimeUTC: false,
      },
      axisBorder: { show: false },
      axisTicks: { show: true },
    },
    tooltip: {
      shared: true,
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      markers: { radius: 12 },
    },
  };


  return (
    <div className="pb-15 w-full overflow-y-auto" id="dashboard">
      {/* Page Header */}
      <h1 className="text-2xl text-blue-900 font-semibold">Dashboard</h1>
      <p className="text-sm mt-1">
        <a href="#" className="text-gray-400">
          Home /
        </a>
        <span className="text-gray-600"> Dashboard</span>
      </p>

      <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap  gap-6 mt-4 w-full overflow-y-auto">
        {/* Left Section */}
        <div className="lg:w-2/3 w-full  flex-shrink-0 md:w-full flex flex-col gap-6  rounded-lg overflow-y-hidden">
          <div className="rounded-lg">
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 w-full items-stretch">
              {/* Sales Card */}
              <div className="bg-[#f8f9fa] rounded-lg shadow p-6 w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <div>
                    <span className="text-blue-900 text-md font-medium mr-1">
                      Sales
                    </span>
                    <span className="text-gray-400 text-sm">| Today</span>
                  </div>
                  
                  <Threedotmenu/>
                </div>
                <div className="flex flex-row gap-5 items-center mt-5">
                  <div className="p-4 rounded-full bg-blue-100">
                    <BsCart size={26} className="text-blue-600" />
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
              <div className="bg-[#f8f9fa] rounded-lg shadow p-6 w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <div>
                    <span className="text-blue-900 text-md font-medium mr-1">
                      Revenue
                    </span>
                    <span className="text-gray-400 text-sm">| This Month</span>
                  </div>
                  <Threedotmenu/>
                </div>
                <div className="flex flex-row gap-5 items-center mt-5">
                  <div className="p-4 rounded-full bg-green-100">
                    <BsCurrencyDollar size={28} className="text-green-500" />
                  </div>

                  <div>
                    <h3 className="text-xl text-blue-900 font-semibold">
                      $3,264
                    </h3>
                    <p className="flex flex-row gap-1 text-sm">
                      <span className="text-green-800 font-bold">8%</span>
                      <span className="text-gray-500">increase</span>
                    </p>
                  </div>
                </div>
              </div>



              {/* Customers Card */}
              <div className="bg-[#f8f9fa] rounded-lg shadow p-5 sm:col-span-full lg:col-span-1">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-1">
                    <span className="text-blue-900 text-md font-medium">
                      Customers
                    </span>
                    <span className="text-gray-400 text-sm">| This Year</span>
                  </div>
                  <Threedotmenu/>
                </div>



                {/* Content Section */}
                <div className="flex flex-row gap-5 items-center mt-5">
                  <div className="p-4 rounded-full bg-orange-100">
                    <BsPeople size={28} className="text-orange-500" />
                  </div>

                  <div>
                    <h3 className="text-xl text-blue-900 font-semibold">
                      1244
                    </h3>
                    <p className="flex flex-row gap-1 text-sm">
                      <span className="text-red-800 font-bold">12%</span>
                      <span className="text-gray-500">decrease</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          
          {/*graph part*/}
          <div className="bg-white rounded-lg p-4 shadow-md overflow-hidden overflow-y-auto">
            <div className="flex flex-row items-center justify-between">
              <div>
                <span className="text-blue-900 text-lg font-medium mr-1">
                  Reports
                </span>
                <span className="text-gray-400">| Today</span>
              </div>
              <Threedotmenu/>
            </div>
            <div className="bg-white rounded-xl">
              <Chart
                options={options}
                series={chartData}
                type="line"
                height={350}
              />
            </div>
          </div>


            {/*Recentsales part*/}
          <div className="bg-white rounded-lg p-4 shadow-md overflow-y-auto">
            <RecentSales />
          </div>
         

         {/*Topsales part*/}
          <div className="bg-white rounded-lg p-4 shadow overflow-y-auto">
            <SearchableTable />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 flex flex-col gap-6 rounded-lg overflow-hidden w-full overflow-y-auto">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex flex-row items-center justify-between">
              <div>
                <span className="text-blue-900 text-lg font-medium mr-1">
                  Recent Activity
                </span>
                <span className="text-gray-400">| Today</span>
              </div>
              <Threedotmenu/>
            </div>

            {/*1*/}
            <div className="flex mt-4 w-full">
              <div className="w-20 flex-shrink-0">
                <p className="text-sm text-gray-400">32 min</p>
              </div>

              <div className="relative border-l-6 border-gray-200 ml-4">
                <div className="mb-8 ml-4 relative">
                  <div className="absolute w-3 h-3 rounded-full -left-[25px] bg-green-600"></div>
                  <p className="text-sm">
                    Quia quae rerum <strong>explicabo officiis</strong> beatae
                  </p>
                </div>
              </div>
            </div>
           
           {/*2*/}
            <div className="flex w-full">
              <div className="w-20 flex-shrink-0">
                <p className="text-sm text-gray-400">56 min</p>
              </div>

              <div className="relative border-l-6 border-gray-200 ml-4">
                <div className="mb-8 ml-4 relative">
                  <div className="absolute w-3 h-3 rounded-full -left-[25px] bg-red-600"></div>
                  <p className="text-sm">
                    Voluptatem blanditiis blanditiis eveniet
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full">
              <div className="w-20 flex-shrink-0">
                <p className="text-sm text-gray-400">2 hrs</p>
              </div>

              <div className="relative border-l-6 border-gray-200 ml-4">
                <div className="mb-8 ml-4 relative">
                  <div className="absolute w-3 h-3 rounded-full -left-[25px] bg-blue-600"></div>
                  <p className="text-sm">
                    Voluptates corrupti molestias voluptatem
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full">
              <div className="w-20 flex-shrink-0">
                <p className="text-sm text-gray-400">1 day</p>
              </div>

              <div className="relative border-l-6 border-gray-200 ml-4">
                <div className="mb-8 ml-4 relative">
                  <div className="absolute w-3 h-3 rounded-full -left-[25px] bg-blue-400"></div>
                  <p className="text-sm">
                    Tempore autem saepe <strong>occaecati voluptatem</strong>{" "}
                    tempore
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full">
              <div className="w-20 flex-shrink-0">
                <p className="text-sm text-gray-400">2 days</p>
              </div>
              <div className="relative border-l-6 border-gray-200 ml-4">
                <div className="mb-8 ml-4 relative">
                  <div className="absolute w-3 h-3 rounded-full -left-[25px] bg-[#ffc107]"></div>
                  <p className="text-sm">
                    Est sit eum reiciendis exercitationem
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full">
              <div className="w-20 flex-shrink-0">
                <p className="text-sm text-gray-400">4 weeks</p>
              </div>
              <div className="relative border-l-6 border-gray-200 ml-4">
                <div className="mb-8 ml-4 relative">
                  <div className="absolute w-3 h-3 rounded-full -left-[25px] bg-[#2b2f32]"></div>
                  <p className="text-sm">
                    Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                  </p>
                </div>
              </div>
            </div>
          </div>


            {/*Budgetreport part*/}
          <div className="bg-white rounded-lg p-4 shadow-md w-full overflow-y-auto">
            <Recharts />
          </div>

          {/*website traffic part*/}
          <div className="bg-white rounded-lg p-4 shadow-md w-full overflow-y-auto">
            <Webtraffic />
          </div>

          {/*newsupdate part*/}
          <div className="bg-white rounded-lg p-4 shadow-md w-full overflow-y-auto">
            <Newsupdated />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboardss;
