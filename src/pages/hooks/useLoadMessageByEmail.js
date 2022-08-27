import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const useLoadMessageByEmail = () => {
    const [user] = useAuthState(auth);

    const [emailMessages, setEmailMessages] = useState([]);
    useEffect(() =>{
        const email = user?.email;
        const url = `http://localhost:5000/messages/${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log('inside messageby email', data);
            setEmailMessages(data)
        })
    }, [user])
  return [emailMessages];
}

export default useLoadMessageByEmail