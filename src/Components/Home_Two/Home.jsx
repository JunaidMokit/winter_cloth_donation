import React from 'react'
import Banner from './Banner'
import About from './About'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'


function Home() {
  return (
    <div className='w-7xl m-auto mt-3 '>
        <Banner></Banner>
        <About></About>
        <HowItWorks></HowItWorks>
        <Testimonials></Testimonials>
        <CallToAction></CallToAction>
      
    </div>
  )
}

export default Home
