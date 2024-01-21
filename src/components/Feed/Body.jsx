import React from 'react'
import Body from './Tarjets'
import WhyTravelo from './WhyTravelo'
import PopularDestinations from './PopularDestinations'
import Carousel from './Carousel'
import Recommendations from './Recommendations'
import Population from './Population'

function Bodys() {
  return (
    <>
    <Carousel/>
    <WhyTravelo/>
    <PopularDestinations/>
    <Recommendations/>
   <Population/>
    </> 
  )
}

export default Bodys