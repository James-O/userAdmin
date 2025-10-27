import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill, BsThreeDots } from "react-icons/bs";
import Threedotmenu from "./Threedotmenu";

function SearchableTable() {
  

  return (
    <div className="bg-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-blue-950">
         Top Selling<span className="text-gray-400 font-medium text-sm ml-1">| Today</span>
        </h2>
        <Threedotmenu/>
      </div>
      
       <div>
        <table className="w-full text-sm text-left">
          <thead className="text-gray-800">
            <tr>
              <th className="py-2">Preview</th>
              <th className="py-2">Product</th>
              <th className="py-2">Price</th>
              <th className="py-2">Sold</th>
              <th className="py-2">Revenue</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            <tr>
              <td className="py-2"><img src="/images/product-1.jpg" alt="Shoe" className="w-10 h-10"/></td>
              <td className="py-2 text-blue-600 font-medium">	Ut inventore ipsa voluptas nulla</td>
              <td className="py-2">$64</td>
              <td className="py-2 font-medium text-gray-800">124</td>
              <td className="py-2">$5,828</td>
            </tr>

            <tr>
              <td className="py-2"><img src="/images/product-2.jpg" alt="Shoe" className="w-10 h-10"/></td>
              <td className="py-2 font-medium"><a href="#dashboard" className="text-blue-600">	Exercitationem similique doloremque</a></td>
              <td className="py-2">$46</td>
              <td className="py-2 font-medium text-gray-800">98</td>
              <td className="py-2">$4,508</td>
            </tr>

            <tr>
              <td className="py-2"><img src="/images/product-3.jpg" alt="Eye glass" className="w-10 h-10"/></td>
              <td className="py-2 font-medium"><a href="#dashboard" className="text-blue-600">Doloribus nisi exercitationem</a></td>
              <td className="py-2">$59</td>
              <td className="py-2 font-medium text-gray-800">74</td>
              <td className="py-2">$4,366</td>
            </tr>

            <tr>
              <td className="py-2"><img src="/images/product-4.jpg" alt="Eye glass" className="w-10 h-10"/></td>
              <td className="py-2 font-medium"><a href="#dashboard" className="text-blue-600">Officiis quaerat sint rerum error</a></td>
              <td className="py-2">$32</td>
              <td className="py-2 font-medium text-gray-800">63</td>
              <td className="py-2">	$2,016</td>
            </tr>

            <tr>
              <td className="py-2"><img src="/images/product-5.jpg" alt="Head-set" className="w-10 h-10"/></td>
              <td className="py-2  font-medium"><a href="#dashboard" className="text-blue-600">Sit unde debitis delectus repellendus</a>	</td>
              <td className="py-2">	$79</td>
              <td className="py-2 font-medium text-gray-800">41</td>
              <td className="py-2">$3,239</td>
            </tr>
          </tbody>
        </table>
       </div>  
    </div>
  );
}

export default SearchableTable;
