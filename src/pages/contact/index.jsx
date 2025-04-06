import React from 'react'
import ContactInfoCard from '@/components/contactInfoCard'
import Hero from '@/components/hero'
import Header from '@/components/header'
import Newsletter from '@/components/newSletter'
import Footer from '@/components/footer'
import LocationMap from '@/components/locationMap'

const contact = () => {
    const heroData = {
        tittle: "Contact Us",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, velit?",
     }
  return (
    <div>
        <Header/>
        <Hero {...heroData}/>
        <ContactInfoCard/>
        <LocationMap/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default contact