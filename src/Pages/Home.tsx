import React from 'react'
import Hero from '../Components/Hero'
import Latestcollections from '../Components/Latestcollections'
import Bestseller from '../Components/Bestseller'
import OurPolicy from '../Components/OurPolicy'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Latestcollections/>
      <Bestseller/>
      <OurPolicy/>
      <Newsletter/>
    </div>
  )
}

export default Home