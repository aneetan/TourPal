import React from 'react'
import {Layout } from 'antd';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Destinations from './components/Destinations';
import About from './components/About';
import Footer from './components/Footer';
import BookGuide from './components/BookGuide';

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Destinations/>
      <BookGuide/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
