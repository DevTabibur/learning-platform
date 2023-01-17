import React, { useEffect, useState } from 'react'

const useLoadMessages = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() =>{
        const url = `http://localhost:5000/messages`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log('inside of useLoadMessages Hooks', data);
            setMessages(data)
        })
    }, [])
  return [messages]
}

export default useLoadMessages