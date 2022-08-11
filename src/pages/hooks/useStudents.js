import React, { useEffect, useState } from 'react'

const useStudents = () => {
    const [loadStudents, setLoadStudents] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/students`)
        .then(res => res.json())
        .then(data =>{
            // console.log("data inside use students", data);
            setLoadStudents(data)
        })
    }, [])

  return [loadStudents, setLoadStudents]
}

export default useStudents