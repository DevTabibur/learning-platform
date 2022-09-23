import React, { useEffect, useState } from 'react'

const useBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() =>{
        const url = `http://localhost:5000/booking`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log('bookings inside', data);
            setBookings(data)
        })
    }, [bookings])
  return [bookings]
}

export default useBookings