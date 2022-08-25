import React, { useEffect, useState } from 'react'

const useSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() =>{
        const url = `http://localhost:5000/subjects`;
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            // console.log('inside useSubjects', data)
            setSubjects(data)
        })
    }, [])

  return [subjects, setSubjects]
}

export default useSubjects;