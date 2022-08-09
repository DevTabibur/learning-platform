import React, { useState, useEffect } from "react";

const useParents = () => {

  const [loadParents, setLoadParents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/parents`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("data inside use parents", data);
        setLoadParents(data);
      });
  }, []);

  return [loadParents, setLoadParents];
};

export default useParents;
