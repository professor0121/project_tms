import React from 'react';
import Link from 'next/link'

const PopularTour = () => {
  return (
    <div className='w-full bg-white text-[#191919] py-24 flex flex-col justify-center items-center'>
         <h2 className='text-[48px] font-[700] text-[#191919] pb-8'>Popular Tour</h2>
            <div className='flex flex-wrap gap-8 justify-center items-center md:px-0    px-4'>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className='shadow-lg rounded-lg overflow-hidden w-full sm:w-[350px] lg:w-[370px]'>
                        <img className='h-[200px] w-full object-cover' src="https://placehold.co/370x250" alt="" />
                        <div className='flex flex-col gap-2 p-4'>
                            <Link href="#" className='text-[16px] text-[#2DB2FF] font-[600] leading-[24px] text-[#191919] hover:underline'>
                                2 Day 1 Night Trip to Santorini, Greece
                            </Link>
                            <span className='text-sm text-gray-500'>Rating ⭐⭐⭐⭐</span>
                            <div className='flex flex-row justify-between text-sm text-gray-600'>
                                <span>New Zealand</span>
                                <span>2 Days</span>
                                <span>4 Person</span>
                            </div>
                            <div className='flex justify-between items-center mt-2'>
                                <div className='flex gap-1 text-sm'>
                                    <span>From</span>
                                    <span className='font-bold'>$230/person</span>
                                </div>
                                <button className='px-4 py-2 text-sm bg-[#2DB2FF] text-white rounded hover:bg-[#1994d1] transition'>
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        
    </div>
  )
}

export default PopularTour;
