import withAuth from '@/utils/protectedRoute'
import React from 'react'
import HeroCarousel from '@/components/mainHome/heroCrousel'
import SectionHolder from '@/components/mainHome/sectionHolder'
import PopularTour from '@/components/mainHome/popularTour'
import CardComponent from '@/components/mainHome/cardComponent'
import Advanture from '@/components/advanture'
import Footer from '@/components/footer'
import Header from '@/components/header'
import TravelImage from '@/components/travelImage'
import Newsletter from '@/components/newSletter'
const CustomerDashboard = () => {
  return (
    <div>
        <Header/>
        <HeroCarousel/>
        <SectionHolder/>
        <PopularTour/>
        <TravelImage/>
        <CardComponent/>
        <Advanture/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}


// export default withAuth(CustomerDashboard, "customer");
export default CustomerDashboard;