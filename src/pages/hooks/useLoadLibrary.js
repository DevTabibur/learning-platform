import React, { useEffect, useState } from 'react'

const useLoadLibrary = () => {
    const [libraryBooks, setLibraryBooks] = useState([]);
    useEffect(() =>{
        const url = `http://localhost:5000/library`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log('inside use library hooks data', data);
            setLibraryBooks(data)
        })
    }, [libraryBooks])
  return [libraryBooks]
}

export default useLoadLibrary