import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../firebase/firebase.init";
import useAdmin from "../pages/hooks/useAdmin";
import Loader from "../shared/Loader/Loader";

const RequireAdmin = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);

  const [admin, adminLoading] = useAdmin(user);

  if(loading || adminLoading){
    return <Loader/>
  }

  if (!user || !admin) {
    // signOut(auth)
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RequireAdmin;
