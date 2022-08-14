import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import DashboardSidebar from '../../shared/DashboardSidebar/DashboardSidebar';
import useToken from '../hooks/useToken';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken')
  useEffect(()=>{
    if(!token){
      signOut(auth);
      navigate("/login")
    }
  }, [token])

  return (
    <>
        <DashboardSidebar>
            <Outlet/>
        </DashboardSidebar>
    </>
  )
}

export default Dashboard;