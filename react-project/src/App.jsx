import React from 'react'
import CustomMap from './pages/user/CustomMap';
import SeeDestinations from './pages/user/SeeDestinations';
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from './pages/LandingPage';
import CustomLayout from './pages/CustomLayout';
import Signin from './pages/authenticate/Signin';
import Login from './pages/authenticate/Login';
import Signup from './pages/authenticate/Signup';
import Admin from './pages/admin/Admin';



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
          <Route path='/login' element={<Signin/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>

      </BrowserRouter>
      {/* <CustomMap/> */}
    </>
  )
}

export default App
