import React from 'react'

const historicalArchetechture = () => {
    return (
        <div className='flex flex-col w-full bg-[#f1e6d9] py-[40px] px-[80px]' >
            <span className='text-[#000000] text-italic'>Historical Architecture</span>
            <h1 className='text-[70px] font-[700] text-[#000000] w-[65%]'>Are You Ready to Visit Historical Architectures?</h1>
            <div className='flex gap-4'>
                <div className='bg-[#ffffff] pb-[30px] pt-[10px] px-[10px] rounded-[30px]'>
                    <img className='rounded-[30px]' src="https://placehold.co/650X380" alt="" />
                    <div className='flex justify-between items-center px-[10px] pt-[10px]'>
                        <h2 className='text-[48px] font-[700] text-[#000000]'>Gwalior Fort</h2>
                        <img src="icons/UpLeft.svg" alt="" className='h-[48px] w-[48px] ' />
                    </div>
                </div>
                <div className='bg-[#ffffff] pb-[30px] pt-[10px] px-[10px] rounded-[30px]'>
                    <img className='rounded-[30px]' src="https://placehold.co/650X380" alt="" />
                    <div className='flex justify-between items-center px-[10px] pt-[10px]'>
                        <h2 className='text-[48px] font-[700] text-[#000000]'>Gwalior Fort</h2>
                        <img src="icons/UpLeft.svg" alt="" className='h-[48px] w-[48px] ' />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default historicalArchetechture
