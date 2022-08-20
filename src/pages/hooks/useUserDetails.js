import React, { useEffect, useState } from "react";

const useUserDetails = (id) => {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/userWithID/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data);
      });
  }, []);

  return [userDetails];
};

export default useUserDetails;
