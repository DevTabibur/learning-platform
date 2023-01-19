import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";
import Loader from "../shared/Loader/Loader";
import useActiveUser from "../pages/hooks/useActiveUser";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const RequireAuth = () => {
  const location = useLocation();
  const [verifyUser, setVerifyUser] = useState([]);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const getToken = localStorage.getItem("accessToken");
  const getTokenDecoded = JSON.parse(getToken);

  useEffect(() => {
    if (getToken !== null && getToken !== undefined) {
      const decoded = jwt_decode(getTokenDecoded);
      const id = decoded.id;
      // const response = await fetch(url)
      const url = `http://localhost:5000/api/v1/user/register/${id}`;
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === 403 || data.code === 401 || data.code === 400) {
            return Swal.fire({
              title: data?.status,
              text: data?.message,
              icon: "error",
            });
          } else {
            // console.log("inside active user hooks", data);
            setVerifyUser(data?.data);
          }
        });
    }
  }, [verifyUser, getToken, getTokenDecoded]);

  // it is necessary for rendering the element with loader
  if (verifyLoading) {
    return <Loader />;
  }
  if (!verifyUser || !getToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
