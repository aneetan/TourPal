import React from 'react'
import Navbar from '../components/landing/Navbar'
import Footer from '../components/landing/Footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      
    </>
  )
}

export default Layout
