import React from 'react'
import Hero from '@/components/hero'
import Header from '@/components/header'
import DestinationComponent from '@/components/destination-component'
import TravelerTypeSection from '@/components/travlerTypeSection'

const Destination = () => {
    const destinationData = {
        tittle: "Destination",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, velit?",
     }
  return (
    <div>
        <Header/>
        <Hero {...destinationData}/>
        <TravelerTypeSection/>
        <DestinationComponent/>
    </div>
  )
}

export default Destination