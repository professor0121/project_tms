import React from 'react'
import Mission from '@/components/mission'
import Hero from '@/components/hero'
import Header from '@/components/header'
import CompanyStats from '@/components/companyStates'
import Team from '@/components/team'
import Newsletter from '@/components/newSletter'
import Footer from '@/components/footer'

const about = () => {
    const aboutData = {
        tittle: "About Us",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, velit?",
     }
  return (
    <div>
        <Header/>
        <Hero {...aboutData}/>
        <Mission/>  
        <CompanyStats/>
        <Team/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default about