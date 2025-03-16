import React from 'react'
import HeroSection from '../components/landing/HeroSection'
import Destinations from '../components/landing/Destinations'
import Navbar from '../components/landing/Navbar'
import BookGuide from '../components/landing/BookGuide'
import About from '../components/landing/About'
import Footer  from '../components/landing/Footer'


const LandingPage = () => {
  return (
    <>
      <HeroSection/>
      <Destinations/>
      <BookGuide/>
      <About/>
    </>
  )
}

export default LandingPage
