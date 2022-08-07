import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../shared/DashboardSidebar/DashboardSidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
        <DashboardSidebar>
        <h2>Welcome to dashboard</h2>
            <Outlet/>
        </DashboardSidebar>
    </>
  )
}

export default Dashboard