import React, { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/user`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return [users, setUsers];
};

export default useUsers;
