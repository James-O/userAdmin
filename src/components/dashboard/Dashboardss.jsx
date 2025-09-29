import React from 'react'
import { BsCart, BsCurrencyDollar, BsPeople, BsThreeDots } from "react-icons/bs";

 function Dashboardss() {
  return (
    <div  className='ml-4  overflow-y-auto bg-gray-100 w-full'>
       <h1 className='text-2xl text-blue-900 font-semibold'>Dashboard</h1>
      <p><a href='#' className='text-gray-400'>Home /</a> <span className='text-gray-600'>Dashboard</span></p>
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full'>
     
      <div className='lg:col-span-2 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-3 w-full'>        
           <div className='bg-white rounded-xl shadow pb-8 pt-2  px-4 w-full'>
            
              <div className='flex flex-row items-center justify-between'>
                <div>
                  <span className='text-blue-900 text-lg font-medium mr-1'>Sales </span>
                  <span className='text-gray-400'>| Today</span>
                  </div>
                <div><BsThreeDots size={20} className='text-gray-500'/></div>
              </div>
              <div className='flex flex-row gap-5 items-center mt-5'>
            <div className='p-4 rounded-full bg-blue-100'><BsCart size={26} className='text-blue-900'/></div>
             <div><h3 className='text-xl text-blue-900 font-semibold'>145</h3>
            <p className='flex flex-row gap-1'><span className='text-green-800 font-medium'>12% </span><span className='text-gray-500'>increase</span></p></div>
           </div>
           </div>
         <div className='bg-white rounded-2xl shadow pb-8 pt-2 px-4 w-full'>
           <div className='flex flex-row items-center justify-between'>
            <div><span className='text-blue-900 text-lg font-medium mr-1'>Revenue </span>
            <span className='text-gray-400'> | This Month</span></div>            
           <div><BsThreeDots size={20} className='text-gray-500'/></div>
           </div>

           <div className='flex flex-row gap-5 items-center mt-4'>
            <div className='p-4 rounded-full bg-green-100'><BsCurrencyDollar  size={28} className='text-green-400'/></div>
             <div><h3 className='text-xl text-blue-900 font-semibold'>$3,264</h3>
            <p className='flex flex-row gap-1'><span className='text-green-800 font-bold'>8%</span><span className='text-gray-500'>increase</span></p></div>
           </div>
         </div>

         <div className='bg-white rounded-xl shadow pb-8 pt-2 px-4 w-full'>
           <div className=' flex flex-row items-center justify-between'>
            <div><span className='text-blue-900 text-lg font-medium mr-1'>Customers </span><span className='text-gray-400 ml-1'>| This Year</span></div>
            <div><BsThreeDots size={20} className='text-gray-500'/></div>
            </div>
           <div className='flex flex-row gap-5 items-center mt-4'>
            <div className='p-4 rounded-full bg-orange-100'><BsPeople size={28} className='text-orange-500'/></div>
             <div><h3 className='text-xl text-blue-900 font-semibold'>1244</h3>
            <p className='flex flex-row gap-1'><span className='text-red-800 font-bold'>12% </span><span className='text-gray-500'>decrease</span></p></div>
           </div>
         </div>
        
      </div>
      </div>


      <div className='bg-white rounded-2xl shadow p-6 w-full lg:col-span-1'>
        <h2>Recent Activity Today</h2>
      </div>
     </div>
    </div>
  )
}
export default Dashboardss