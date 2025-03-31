import React from 'react'

const SectionHolder = () => {
    return (
        <div className='bg-[#ffffff]'>
            <div className="bg-[url('/promo0.png')] bg-no-repeat  bg-center h-96 w-full">
                <div className=' md:w-[1200px] w-full mx-auto pt-[15px] items-around'>
                    <div>
                        <h3 className='text-[30px] uppercase font-[700] text-[#191919]'>Why Travel with travol</h3>
                    </div>
                    <div className='flex gap-8'>
                        <div className='flex flex-col w-[400px] h-[220px] items-center justify-around'>
                            <img className='h-[80px] w-[80px] '  src="https://placehold.co/80x80" alt="img" />
                            <h4 className='text-[22px] text-[#191919]'>Stay Safe</h4>
                            <p className='text-[18px] text-[#191919] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHolder
