import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../firebase/firebase.init";

const RequireAuth = () => {
  const location = useLocation();
  // const [user, loading, error] = useAuthState(auth);
  const user = false;
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
