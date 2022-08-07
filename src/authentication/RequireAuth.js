import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
    const location = useLocation();
    const user = false;
    if(!user){
        return <Navigate to="/login" state={form:{}} replace/>
    }
  return <Outlet/>
}

export default RequireAuth