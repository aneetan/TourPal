import React from 'react'
import CustomMap from './pages/user/CustomMap';
import SeeDestinations from './pages/user/SeeDestinations';
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from './pages/LandingPage';
import CustomLayout from './pages/CustomLayout';
import Signin from './pages/authenticate/Signin';
import Login from './pages/authenticate/Login';
import Signup from './pages/authenticate/Signup';
import ViewGuides from './pages/user/ViewGuides';
import RequestPop from './pages/user/SendBookingRequest';
import GuideProfile from './pages/user/GuideProfile';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import CustomTable from './components/admin/CustomTable';
import UserSection from './pages/admin/UserSection';
import GuideSection from './pages/user/GuideSection';
import AdminGuideSection from './pages/admin/AdminGuideSection';

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
            <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
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
