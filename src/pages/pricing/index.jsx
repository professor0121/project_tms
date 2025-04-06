import React from 'react'
import Hero from '@/components/hero'
import Footer from '@/components/footer'
import Header from '@/components/header'
import PricingSec from '@/components/pricingSec'
import DealBanner from '@/components/dealBanner'
import PlanSec from '@/components/planSec'
import Newsletter from '@/components/newSletter'

const Pricing = () => {
    const heroData = {
        tittle: "Pricing Plans",
        description: "Choose the best plan that suits your needs.",
         
    }
  return (
    <div>
        <Header/>
        <Hero {...heroData}/>
        <PricingSec/>
        <PlanSec/>
        <DealBanner/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Pricing