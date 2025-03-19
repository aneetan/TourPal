import React from 'react'
import CustomMap from './pages/user/CustomMap';
import SeeDestinations from './pages/user/SeeDestinations';
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from './pages/LandingPage';
import CustomLayout from './pages/CustomLayout';
import Signin from './pages/authenticate/Signin';
import Signup from './pages/authenticate/Signup';
import ViewGuides from './pages/user/ViewGuides';
import RequestPop from './pages/user/SendBookingRequest';
import GuideProfile from './pages/user/GuideProfile';
import AdminLayout from './pages/admin/AdminLayout';
import UserSection from './pages/admin/UserSection';
import AdminGuideSection from './pages/admin/AdminGuideSection';
import Dashboard from './pages/admin/Dashboard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CustomLayout/>}>
            <Route path="/" element={<LandingPage />} />
            <Route path='/seeDestination' element={<CustomMap/>}/>
            <Route path='/seeMore' element={<SeeDestinations/>}/>
            <Route path='/viewGuides' element={<ViewGuides/>}/>
            <Route path='/bookGuides' element={<RequestPop/>}/>
            <Route path='/guideProfile' element={<GuideProfile/>}/>
          </Route>

          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='/admin/dashboard' element={<Dashboard/>}/>
            <Route path='/admin/users' element={<UserSection/>}/>
            <Route path='/admin/guides' element={<AdminGuideSection/>}/>
          </Route>

          <Route path='/login' element={<Signin/>}/>
          <Route path='/register' element={<Signup/>}/>
        </Routes>

      </BrowserRouter>
      {/* <CustomMap/> */}
    </>
  )
}

export default App
