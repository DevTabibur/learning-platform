import React from "react";

const Services = ({ service, setAppointment }) => {
  const { name, slots } = service;


  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date.</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots?.length === 0}
            onClick={() => setAppointment(service)}
            className="btn uppercase btn-secondary border-none"
          >
            Book Tuitions
          </label>
        </div>
      </div>
    </div>
  );
};

export default Services;
