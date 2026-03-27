import React from 'react'
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer bg-[#101828] text-pink-600 py-8'>
        <div className='container mx-auto px-6  text-pink-600 text-center'>
            <p className=' text-pink-600 text-sm md:text-xl lg:text-2xl flex items-center justify-center gap-1'>
                <FaCopyright /> 2026 CodeWithSuleman. All rights reserved.
            </p>

        </div>
    </div>
  )
}

export default Footer
