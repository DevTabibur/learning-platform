import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

const useProfile = () => {
  const [user] = useAuthState(auth);
  const [userProfileInfo, setUserProfileInfo] = useState([]);

  useEffect(() => {
    // filter with email data
    const email = user?.email;
    const url = `http://localhost:5000/userWithEmail/${email}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserProfileInfo(data);
      });
  }, [user]);

  return [userProfileInfo];
};

export default useProfile;
