import React from 'react'
import HeroCarousel from '@/components/mainHome/heroCrousel'
import SectionHolder from '@/components/mainHome/sectionHolder'
import PopularTour from '@/components/mainHome/popularTour'
import CardComponent from '@/components/mainHome/cardComponent'
import Advanture from '@/components/advanture'
import MainFooter from '@/components/footer'
import MirrorContainer from '@/components/mainHome/mirrorContainer'
import Header from '@/components/mainHome/header'

const homePage = () => {
  return (
    <div>
        <Header/>
        <HeroCarousel/>
        <SectionHolder/>
        <PopularTour/>
        <CardComponent/>
        <Advanture/>
        <MirrorContainer/>
        <MainFooter/>
    </div>
  )
}

export default homePage