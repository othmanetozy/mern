import React from 'react'
import Banner from '../components/Banner'
import Box from '../components/Box'
import Slide from '../components/Slide'
import Booking from '../components/Booking'
const Home = () => {
  return (
    <div className='home'>
      <Slide />
      <Box />
      <Banner />
      <Booking />
    </div>
  )
}

export default Home