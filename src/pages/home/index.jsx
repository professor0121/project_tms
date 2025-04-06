import React from 'react'
import HeroCarousel from '@/components/mainHome/heroCrousel'
import SectionHolder from '@/components/mainHome/sectionHolder'
import PopularTour from '@/components/mainHome/popularTour'
import CardComponent from '@/components/mainHome/cardComponent'
import Advanture from '@/components/advanture'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Packadge from '@/components/packadgeTable'
import SearchForm from '@/components/searchForm'
import BlogArchive from '@/pages/blog-archive/index'
import TravelImage from '@/components/travelImage'
import Newsletter from '@/components/newSletter'
const homePage = () => {
  return (
    <div>
        <Header/>
        <HeroCarousel/>
        <SectionHolder/>
        <PopularTour/>
        <TravelImage/>
        <CardComponent/>
        <Advanture/>
        {/* <MirrorContainer/> */}
        {/* <Packadge/>
        <SearchForm/> */}
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default homePage