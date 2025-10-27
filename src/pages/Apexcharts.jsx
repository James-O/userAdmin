import React from "react";
import Chart from "react-apexcharts";
 function Apexcharts() {
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
    },
    stroke: { curve: "smooth", width: 3 },
    markers: { size: 4 },
    colors: ["#3b82f6", "#10b981", "#f97316"],
    grid: {
      borderColor: "#f3f4f6",
      strokeDashArray: 4,
    },
    xaxis: {
      type: "datetime",
      min: new Date("2025-10-08T00:00:00").getTime(),
      max: new Date("2025-10-08T06:30:00").getTime(),
      tickAmount: 7, // 00:00 through 06:30 evenly spaced

      // labels: {
      //   datetimeFormatter: {
      //     hour: "HH:mm",
      //     minute: "HH:mm",
      //   },
      //   format: "HH:mm",
      // },

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
        format: "dd/MM/yy HH:mm", // 👈 full date+time on hover only
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      markers: { radius: 12 },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Sales Report</h2>
      <Chart options={options} series={chartData} type="line" height={350} />
    </div>
  );
}

export default Apexcharts