import React from 'react'
import HeroCarousel from '@/components/mainHome/heroCrousel'
import SectionHolder from '@/components/mainHome/sectionHolder'
import PopularTour from '@/components/mainHome/popularTour'
import CardComponent from '@/components/mainHome/cardComponent'
import Advanture from '@/components/advanture'
import MainFooter from '@/components/footer'

const homePage = () => {
  return (
    <div>
        <HeroCarousel/>
        <SectionHolder/>
        <PopularTour/>
        <CardComponent/>
        <Advanture/>
        <MainFooter/>
    </div>
  )
}

export default homePage