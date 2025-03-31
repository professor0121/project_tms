import React from 'react'

const SectionHolder = () => {
    return (
        <div className='bg-[#ffffff] py-56 md:py-16'>
            <div 
                className="bg-[url('/promo0.png')] bg-no-repeat  h-96 w-full flex items-center justify-center"
                style={{ backgroundPosition: 'left center' }}
            >
                <div className='w-full max-w-[1200px] mx-auto px-4'>
                    <div>
                        <h3 className='text-[24px] sm:text-[28px] md:text-[30px] uppercase font-[700] text-[#191919] text-center md:text-left'>Why Travel with Travol</h3>
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-16 pt-[30px] md:pt-[50px] items-center md:items-stretch'>
                        <div className='flex flex-col w-full md:w-[400px] h-auto items-center justify-around text-center p-4 '>
                            <img className='h-[80px] w-[80px]' src="/icons/promo1.png" alt="img" />
                            <h4 className='text-[20px] sm:text-[22px] text-[#191919]'>Stay Safe</h4>
                            <p className='text-[14px] sm:text-[16px] text-[#191919]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='flex flex-col w-full md:w-[400px] h-auto items-center justify-around text-center p-4  '>
                            <img className='h-[80px] w-[80px]' src="/icons/promo2.png" alt="img" />
                            <h4 className='text-[20px] sm:text-[22px] text-[#191919]'>Quality Services</h4>
                            <p className='text-[14px] sm:text-[16px] text-[#191919]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='flex flex-col w-full md:w-[400px] h-auto items-center justify-around text-center p-4   '>
                            <img className='h-[80px] w-[80px]' src="/icons/promo3.png" alt="img" />
                            <h4 className='text-[20px] sm:text-[22px] text-[#191919]'>Save Money</h4>
                            <p className='text-[14px] sm:text-[16px] text-[#191919]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHolder
