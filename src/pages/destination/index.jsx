import React from 'react'
import Hero from '@/components/hero'
import Header from '@/components/header'
import DestinationComponent from '@/components/destination-component'
import TravelerTypeSection from '@/components/travlerTypeSection'
import Newsletter from '@/components/newSletter'
import PopularActivities from '@/components/popularActivities'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'

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
        <PopularActivities/>
        <Testimonials/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Destination