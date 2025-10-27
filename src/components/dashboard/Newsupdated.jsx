import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Threedotmenu from './Threedotmenu'

 function Newsupdated() {
  return (
    <div className='w-full'>
       {/*Header*/}
           <div className='flex justify-between items-center mb-4 w-full'>
            <h2 className="text-lg font-semibold text-blue-950">News & Updates<span className="text-gray-400 font-medium text-sm ml-1">| This Month</span></h2>
             <Threedotmenu/>
           </div>

           
             <div className='w-full'>
              <div className='flex flex-row gap-4 py-4'>
               <div className="py-2"><img src="/images/news-1.jpg" alt="Head-set" className="w-25 h-13 rounded"/></div>
                <div className='flex flex-col gap-1 w-full'>
                  <a href="#dashboard" className='text-sm text-blue-950 font-semibold transition-colors ease-in-out duration-300 hover:text-blue-700'>Nihil blanditiis at in nihil autem</a>
                  <div className='flex flex-col text-sm text-gray-500'><span> Sit recusandae non aspernatur </span><span> laboriosam. Quia enim eligendi </span><span>sed ut harum...</span></div>
                </div>                
              </div>
              

              <div className='flex flex-row gap-4 py-4'>
               <div className="py-2"><img src="/images/news-2.jpg" alt="Head-set" className="w-25 h-13 rounded"/></div>
                <div className='flex flex-col gap-1 w-full'>
                  <a href="#dashboard" className='text-sm text-blue-950 font-semibold transition-colors ease-in-out duration-300 hover:text-blue-700'>Quidem autem et impedit</a>
                  <div className='flex flex-col text-sm text-gray-500'><span> Illo nemo neque maiores vitae </span><span> officiis cum eum turos elan dries </span><span>werona nande...</span></div>
                </div>                
              </div>

              <div className='flex flex-row gap-4 py-4'>
               <div className="py-2"><img src="/images/news-3.jpg" alt="Head-set" className="w-25 h-13 rounded"/></div>
                <div className='flex flex-col gap-1 w-full'>
                  <a href="#dashboard" className='text-sm text-blue-950 font-semibold transition-colors ease-in-out duration-300 hover:text-blue-700'>Id quia et et ut maxime similique occaecati ut</a>
                  <div className='flex flex-col text-sm text-gray-500'><span> Fugiat voluptas vero eaque </span><span> laboriosam. Quia enim eligendi </span><span>sed ut harum...</span></div>
                </div>                
              </div>

              <div className='flex flex-row gap-4 py-4'>
               <div className="py-2"><img src="/images/news-4.jpg" alt="Head-set" className="w-25 h-13 rounded"/></div>
                <div className='flex flex-col gap-1 w-full'>
                  <a href="#dashboard" className='text-sm text-blue-950 font-semibold transition-colors ease-in-out duration-300 hover:text-blue-700'>Laborum corporis quo dara net para</a>
                  <div className='flex flex-col text-sm text-gray-500'><span>Qui enim quia optio. Eligendi</span><span> asperiores enim repellendusvel </span><span>sed ut harum...</span></div>
                </div>                
              </div>

              <div className='flex flex-row gap-4 py-4'>
               <div className="py-2"><img src="/images/news-5.jpg" alt="Head-set" className="w-25 h-13 rounded"/></div>
                <div className='flex flex-col gap-1 w-full'>
                  <a href="#dashboard" className='text-sm text-blue-950 font-semibold transition-colors ease-in-out duration-300 hover:text-blue-700'>Et dolores corrupti quae illo quod dolor</a>
                  <div className='flex flex-col text-sm text-gray-500'><span>Odit ut eveniet modi reiciendis. </span><span> laboriosam. Quia enim eligendi </span><span>sed ut harum...</span></div>
                </div>                
              </div>
             </div>
    </div>
  )
}
export default Newsupdated