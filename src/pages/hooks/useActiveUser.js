import  { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const useActiveUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getToken = localStorage.getItem("accessToken");
  const getTokenDecoded = JSON.parse(getToken);

  useEffect(() => {
    setIsLoading(true);
    if (getToken !== null && getToken !== undefined) {
      const decoded = jwt_decode(getTokenDecoded);
      const id = decoded.id;

      if (id !== undefined) {
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
            setIsLoading(false);
            // console.log('useActiveUser inside hooks', data)
            if (data.code === 403 || data.code === 401 || data.code === 400) {
              return Swal.fire({
                title: data?.status,
                text: data?.message,
                icon: "error",
              });
            } else {
              setActiveUser(data?.data);
            }
          });
      }
    }
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return [activeUser, isLoading];
};


export default useActiveUser;