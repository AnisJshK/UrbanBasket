import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const DashboardHero = () => {
  return (
    <div className='flex flex-col md:flex-row border border-gray-200 mt-10 rounded-2xl overflow-hidden bg-white shadow-xl transition-all duration-300 hover:shadow-2xl'>
        
        {/* Left/Top Content Panel */}
        <div className='w-full md:w-1/2 flex items-center justify-center py-12 px-8 sm:px-16 md:py-0 bg-linear-to-br from-gray-50 to-white'>
            <div className='text-[#414141] flex flex-col gap-3 md:gap-4 select-none'>
                
                {/* Top Badge Accent */}
                <div className='flex items-center gap-2.5'>
                    <span className='w-8 md:w-11 h-0.5 bg-[#414141] rounded-full' />
                    <p className='font-semibold text-xs md:text-sm tracking-widest text-gray-500'>
                        OUR BESTSELLERS
                    </p>
                </div>
                
                {/* Main Hero Headline */}
                <h1 className='font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-tight md:my-1'>
                    Latest Arrivals
                </h1>
                
                {/* Call To Action Trigger */}
                <div className='flex items-center gap-2.5 group cursor-pointer w-fit'>
                    <p className='font-bold text-sm md:text-base text-green-600 transition-colors group-hover:text-green-700'>
                        SHOP NOW
                    </p>
                    <span className='w-8 md:w-11 h-0.5 bg-green-600 rounded-full transition-all duration-300 group-hover:w-16 group-hover:bg-green-700' />
                </div>
                
            </div>
        </div>

        {/* Right/Bottom Image Panel */}
        <div className='w-full md:w-1/2 h-75 sm:h-100 md:h-112.5 lg:h-125 overflow-hidden bg-gray-100'>
            <img 
                src={assets.hero_4} 
                className='w-full h-full object-contain object-center transition-transform duration-700 hover:scale-105' 
                alt="Latest Arrivals Collection" 
            />
        </div>

    </div>
  )
}

export default DashboardHero