import React, { useState } from 'react'
import CustomMap from './pages/user/CustomMap';
import SeeDestinations from './pages/user/SeeDestinations';
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from './pages/LandingPage';
import CustomLayout from './pages/CustomLayout';
import Signin from './pages/authenticate/Signin';
import Signup from './pages/authenticate/Signup';
import RequestPop from './pages/user/SendBookingRequest';
import GuideProfile from './pages/user/GuideProfile';
import AdminLayout from './pages/admin/AdminLayout';
import UserSection from './pages/admin/UserSection';
import AdminGuideSection from './pages/admin/AdminGuideSection';
import Dashboard from './pages/admin/Dashboard';
import GuideSection from './pages/user/GuideSection';
import AdminPlacesSection from './pages/admin/AdminPlacesSection';
import AddPlacesAdmin from './pages/admin/AddPlacesAdmin';
import RegisterGuides from './pages/guides/RegisterGuides';
import AddReviewForm from './pages/user/AddReviewForm';
import { ToastContainer } from 'react-toastify';
import GuideLayout from './pages/guides/GuideLayout';
import GuideDashboard from './pages/guides/GuideDashboard';
import Bookings from './pages/guides/Bookings';
import EditGuideProfile from './pages/guides/EditGuideProfile';
import GuideSettings from './pages/guides/GuideSettings';
import ChangePwForm from './components/ChangePwForm';
import PasswordForm from './components/PasswordForm';
import UserProfile from './pages/user/UserProfile';
import ForgotPw from './pages/authenticate/ForgotPw';
import OtpForm from './pages/authenticate/OtpForm';
import NewPassword from './pages/authenticate/NewPassword';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import NoAccessPage from './pages/NoAccessPage';
import PageNotFound from './pages/PageNotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ViewBookings from './pages/admin/ViewBookings';

function App() {
  return (
    <>
    {/* <AuthProvider> */}
      <BrowserRouter>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<CustomLayout/>}>
            <Route path="/" element={<LandingPage />} />
            <Route path='/seeDestination' element={<CustomMap/>}/>
            <Route path='/seeMore/:id' element={<SeeDestinations/>}/>
            <Route path='/viewGuides' element={<GuideSection/>}/>
            <Route path='/privacy' element={<PrivacyPolicy/>}/>
            <Route path='/terms' element={<TermsAndConditions/>}/>
          </Route>

          <Route element={<ProtectedRoute requiredUserType="2" />}>
            <Route path='/' element={<CustomLayout/>}>
              <Route path='/bookGuides/:id' element={<RequestPop/>}/>
              <Route path='/guideProfile/:id' element={<GuideProfile/>}/>
              <Route path='/addReview/:id' element={<AddReviewForm/>}/>
              <Route path='/profile/:id' element={<UserProfile/>}/>
              <Route path='/user/changePw/:id' element={<UserProfile active="password"/>}/>
            </Route>
          </Route>

          <Route element={<ProtectedRoute requiredUserType="1" />}>
            <Route path='/admin' element={<AdminLayout/>}>
              <Route path='/admin/dashboard' element={<Dashboard/>}/>
              <Route path='/admin/users' element={<UserSection/>}/>
              <Route path='/admin/guides' element={<AdminGuideSection/>}/>
              <Route path='/admin/places' element={<AdminPlacesSection/>}/>
              <Route path='/admin/bookings' element={<ViewBookings/>}/>
              <Route path='/admin/places/add' element={<AddPlacesAdmin/>}/>
              <Route path='/admin/editPlace/:id' element={<AddPlacesAdmin/>}/>
              <Route path='/admin/guideProfile/:id' element={<GuideProfile/>}/>
            </Route>
          </Route>

          <Route element={<ProtectedRoute requiredUserType="3" />}>
            <Route path='/guide' element={<GuideLayout/>}>
              <Route path ='/guide/dashboard' element={<GuideDashboard/>}/>
              <Route path ='/guide/bookings' element={<Bookings/>}/>
              <Route path ='/guide/profile/:id' element={<GuideProfile/>}/>
              <Route path ='/guide/edit/:id' element={<EditGuideProfile/>}/>
              <Route path ='/guide/settings' element={<GuideSettings/>}>
                  <Route path='/guide/settings/pw' element={<PasswordForm/>}/>
                  <Route path='/guide/settings/changePw/:id' element={<ChangePwForm/>}/>
              </Route>
            </Route>
          </Route>

          <Route path='/login' element={<Signin/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/forgotPw' element={<ForgotPw/>}/>
          <Route path='/otp/:id' element={<OtpForm/>}/>
          <Route path='/changePw/:id' element={<NewPassword/>}/>
          <Route path='/registerGuides' element={<RegisterGuides/>}/>
          <Route path='/unauthorized' element={<NoAccessPage/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>

      </BrowserRouter>
      {/* </AuthProvider> */}
    </>
  )
}

export default App
