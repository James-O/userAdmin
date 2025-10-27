import React from 'react'

 function Footer() {
  return (
    <div className='border-t border-t-gray-400 w-full left-0 right-0 '>
      <div className='flex text-center pt-3'> 
        <div className='flex justify-center flex-col gap-2 w-full text-sm text-gray-500'>
        <span>© Copyright <strong className='text-blue-900'>NiceAdmin.</strong> All Rights Reserved</span>
        <span>Designed by <a href="#dashboard" className='text-blue-900'>BootstrapMade</a></span>
      </div>
      </div>
    </div>
  )
}
export default Footer