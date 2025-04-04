import React from 'react'

const hero = ({tittle,description}) => {
  return (
    <div className='h-[550px] w-full mt[-65px] flex flex-col items-center justify-center text-[#191919]' style={{ marginTop: '-64px' ,backgroundImage:'url("https://placehold.co/1550x450")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <h1 className='text-[48px] font-[700]'>{tittle}</h1>
    <p>{description}</p>
    </div>
  )
}

export default hero