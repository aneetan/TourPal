import React from 'react'
import {Layout } from 'antd';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
const { Header, Footer, Content } = Layout;

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
    </>
  )
}

export default App
