import React, { useEffect, useState } from "react";

const useUploadTuitions = () => {
  const [tuitions, setTuitions] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/tuition-services`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('services data', data);
        setTuitions(data)
      });
  }, []);
};

export default useUploadTuitions;
