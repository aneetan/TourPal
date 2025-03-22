import React from 'react'
import HeroSection from '../components/landing/HeroSection'
import Destinations from '../components/landing/Destinations'
import About from '../components/landing/About'
import RegisterAsGuide from '../components/landing/RegisterAsGuide'


const LandingPage = () => {
  return (
    <>
      <HeroSection/>
      <Destinations/>
      <RegisterAsGuide/>
      <About/>
    </>
  )
}

export default LandingPage
