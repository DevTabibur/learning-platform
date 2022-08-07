import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../shared/DashboardSidebar/DashboardSidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
        <DashboardSidebar>
            <Outlet/>
        </DashboardSidebar>
    </>
  )
}

export default Dashboard