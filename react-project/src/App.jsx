import React from 'react'
import {Layout } from 'antd';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Destinations from './components/Destinations';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Destinations/>
      <Footer/>
    </>
  )
}

export default App
