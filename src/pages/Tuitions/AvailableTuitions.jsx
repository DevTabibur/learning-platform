import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Services from "./Services";
import BookingModal from "./BookingModal";
import { Navigate, useNavigate } from "react-router-dom";


const AvailableTuitions = ({ date }) => {
  const [services, setServices] = useState([]);
  const [appointment, setAppointment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/tuition-services`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('services data', data);
        if(data.message === 'forbidden'){
          navigate("/login")
        }
        setServices(data);
      });
  }, []);


  return (
    <>
      <div className="py-12">
        {" "}
        <h1 className="font-semibold font-serif text-accent text-center">
          Available Tuitions on : {format(date, "PP")}.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
          {services.map((service) => (
            <Services
              key={service._id}
              service={service}
              setAppointment={setAppointment}
            />
          ))}
        </div>
        {appointment && (
          <BookingModal
            key={1}
            date={date}
            appointment={appointment}
            setAppointment={setAppointment}
          ></BookingModal>
        )}
      </div>
    </>
  );
};

export default AvailableTuitions;
