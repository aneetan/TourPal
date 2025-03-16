import React from 'react'
import CustomMap from './pages/CustomMap';
import SeeDestinations from './pages/SeeDestinations';
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from './pages/LandingPage';
import CustomLayout from './pages/CustomLayout';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CustomLayout/>}>
            <Route path="/" element={<LandingPage />} />
            <Route path='/seeDestination' element={<CustomMap/>}/>
            <Route path='/seeMore' element={<SeeDestinations/>}/>
          </Route>
        </Routes>

      </BrowserRouter>
      {/* <CustomMap/> */}
    </>
  )
}

export default App
