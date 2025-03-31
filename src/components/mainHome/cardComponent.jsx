import React from 'react';

const CardComponent = () => {
    return (
        <div className='bg-white w-full py-24 flex flex-col justify-center items-center'>
              <h2 className='text-[48px] font-[700] text-[#191919] pb-8'>Popular Tour</h2>
            <div className='max-w-[1200px] w-full flex flex-wrap gap-8 justify-center items-center mx-auto md:px-0 px-4'>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div 
                        key={index} 
                        className='w-full sm:w-[300px] md:w-[370px] bg-white border border-gray-200 rounded-lg shadow-sm transition-transform hover:scale-105'
                    >
                        <a href='#'>
                            <img 
                                className='rounded-t-lg w-full h-[200px] object-cover' 
                                src='https://placehold.co/370x270' 
                                alt='' 
                            />
                        </a>
                        <div className='p-5'>
                            <a href='#'>
                                <h5 className='mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900'>
                                    Noteworthy Technology Acquisitions 2021
                                </h5>
                            </a>
                            <p className='mb-3 font-normal text-gray-700'>
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                            <a 
                                href='#' 
                                className='inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300'
                            >
                                Read more
                                <svg 
                                    className='w-4 h-4 ml-2' 
                                    xmlns='http://www.w3.org/2000/svg' 
                                    fill='none' 
                                    viewBox='0 0 14 10'
                                >
                                    <path 
                                        stroke='currentColor' 
                                        strokeLinecap='round' 
                                        strokeLinejoin='round' 
                                        strokeWidth='2' 
                                        d='M1 5h12m0 0L9 1m4 4L9 9' 
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardComponent;
