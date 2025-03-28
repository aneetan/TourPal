import React from 'react'
import { Navigate, Outlet } from 'react-router';
import AuthContext from '../context/user.context';

const ProtectedRoute = ({requiredUserType, redirectTo ='/login'}) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const is_user = localStorage.getItem("is_user");


    if(!isAuthenticated){
        return <Navigate to={redirectTo} replace/>;
    }

    if(requiredUserType && is_user !== requiredUserType.toString()){
        return <Navigate to="/unauthorized" replace/>
    }

  return <Outlet/>
}

export default ProtectedRoute
