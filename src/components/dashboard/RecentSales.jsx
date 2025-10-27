import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import {
  BsThreeDots
} from "react-icons/bs";
import Threedotmenu from "./Threedotmenu";

function RecentSales() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchQuery, setSearchQuery] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const data = [
    { id: "#2664", customer: "Angus Grady", product: "Ut voluptatem id earum et", price: 67, status: "Rejected" },
    { id: "#2049", customer: "Ashleigh Langosh", product: "At recusandae consectetur", price: 147, status: "Approved" },
    { id: "#2457", customer: "Brandon Jacob", product: "At praesentium minu", price: 64, status: "Approved" },
    { id: "#2147", customer: "Birdie Kessler", product: "Blanditiis dolor omnis similique", price: 47, status: "Pending" },
    { id: "#2664", customer: "Raheem Lehner", product: "Sunt similique distinctio", price: 165, status: "Approved" },
  ];

  // Sorting logic
  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];
    if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Search filter logic
  const filteredData = sortedData.filter(
    (item) =>
      item.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting toggle function
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  return (
    <div className="bg-white rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Sales <span className="text-gray-400 font-medium">| Today</span>
        </h2>
        <Threedotmenu/>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-4 relative">
        <div className="flex items-center space-x-2">
          <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>All</option>
          </select>
          <label className="text-sm text-gray-600">entries per page</label>
        </div>

        {/* Search Input with Tooltip */}
        <div
          className="relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {showTooltip && (
            <div className="absolute -bottom-7 right-0 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-md">
              Search within the table
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className=" text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-2 cursor-pointer select-none"
                onClick={() => requestSort("#")}>
                <div className="flex items-center gap-1">
                  #
                  <span className="text-gray-400 flex flex-col leading-none">
                    <BsFillCaretUpFill
                      size={8}
                      className={
                        sortConfig.key === "product" && sortConfig.direction === "asc"
                          ? "text-blue-500"
                          : ""
                      }
                    />
                    <BsFillCaretDownFill
                      size={8}
                      className={
                        sortConfig.key === "product" && sortConfig.direction === "desc"
                          ? "text-blue-500"
                          : ""
                      }
                    />
                  </span>
                </div>
              </th>

              {/* Customer */}
              <th
                className="px-4 py-2 cursor-pointer select-none"
                onClick={() => requestSort("customer")}
              >
                <div className="flex items-center gap-1">
                  Customer
                  <span className="text-gray-400 flex flex-col leading-none">
                  
                    <BsFillCaretUpFill
                      size={8}
                      className={
                        sortConfig.key === "customer" && sortConfig.direction === "asc"
                          ? "text-blue-500"
                          : ""
                      }
                    />
                    <BsFillCaretDownFill
                      size={8}
                      className={
                        sortConfig.key === "customer" && sortConfig.direction === "desc"
                          ? "text-blue-500"
                          : ""
                      }
                    />
                  </span>
                </div>
              </th>

              {/* Product */}
              <th
                className="px-4 py-2 cursor-pointer select-none"
                onClick={() => requestSort("product")}
              >
                <div className="flex items-center gap-1">
                  Product
                  <span className="text-gray-400 flex flex-col leading-none">
                    <BsFillCaretUpFill
                      size={8}
                      className={
                        sortConfig.key === "product" && sortConfig.direction === "asc"
                          ? "text-blue-500"
                          : ""
                      }
                    />
                    <BsFillCaretDownFill
                      size={8}
                      className={
                        sortConfig.key === "product" && sortConfig.direction === "desc"
                          ? "text-blue-500"
                          : ""
                      }
                    />
                  </span>
                </div>
              </th>

              {/* Price */}
              <th
                className="px-4 py-2 cursor-pointer select-none"
                onClick={() => requestSort("price")}
              >
                <div className="flex items-center gap-1">
                  Price
                  <span className="text-gray-400 flex flex-col leading-none">
                    <BsFillCaretUpFill
                      size={8}
                      className={
                        sortConfig.key === "price" && sortConfig.direction === "asc"
                          ? "text-blue-500"
                          : ""
                      }
                    />
                    <BsFillCaretDownFill
                      size={8}
                      className={
                        sortConfig.key === "price" && sortConfig.direction === "desc"
                          ? "text-blue-500"
                          : ""
                      }
                    />
                  </span>
                </div>
              </th>

              {/* Status */}
              <th
                className="px-4 py-2 cursor-pointer select-none"
                onClick={() => requestSort("status")}
              >
                <div className="flex items-center gap-1">
                  Status
                  <span className="text-gray-400 flex flex-col leading-none">
                    <BsFillCaretUpFill
                      size={8}
                      className={
                        sortConfig.key === "status" && sortConfig.direction === "asc"
                          ? "text-blue-500"
                          : ""
                      }
                    />
                    <BsFillCaretDownFill
                      size={8}
                      className={
                        sortConfig.key === "status" && sortConfig.direction === "desc"
                          ? "text-blue-500"
                          : ""
                      }
                    />
                  </span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-blue-600">{item.id}</td>
                  <td className="px-4 py-2">{item.customer}</td>
                  <td className="px-4 py-2 text-blue-600 cursor-pointer">{item.product}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 pb-0.5 rounded-lg text-[10px] ${
                        item.status === "Approved"
                          ? "text-green-100 bg-green-700"
                          : item.status === "Pending"
                          ? "text-yellow-100 bg-yellow-400"
                          : "text-red-100 bg-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No results match your search query.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500 border-t pt-4">
        <p>
          Showing 1 to {filteredData.length} of {data.length} entries
        </p>
      </div>
    </div>
  );
}

export default RecentSales;
