import React, { useEffect, useState } from 'react'

const useTeachers = () => {
    const [loadTeachers, setLoadTeachers] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/teachers`)
        .then(res => res.json())
        .then(data =>{
            // console.log("data inside use students", data);
            setLoadTeachers(data)
        })
    }, [])

  return [loadTeachers]
}

export default useTeachers