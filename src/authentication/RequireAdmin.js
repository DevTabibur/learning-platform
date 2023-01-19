import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../firebase/firebase.init";
import useActiveUser from "../pages/hooks/useActiveUser";
import useAdmin from "../pages/hooks/useAdmin";
import Loader from "../shared/Loader/Loader";

const RequireAdmin = () => {
  const location = useLocation();
  const [activeUser, isLoading] =useActiveUser()

  // const [admin, adminLoading] = useAdmin(activeUser);
  const admin = true;

  // if(isLoading || adminLoading){
  //   return <Loader/>
  // }
  if(isLoading){
    return <Loader/>
  }

  if (!activeUser || !admin) {
    // signOut(auth)
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RequireAdmin;
