import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardSidebar from "../../shared/DashboardSidebar/DashboardSidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <DashboardSidebar>
        <Outlet />
      </DashboardSidebar>
    </>
  );
};

export default Dashboard;
