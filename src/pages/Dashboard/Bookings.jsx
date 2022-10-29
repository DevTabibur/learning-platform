import React from "react";
import useBookings from "../hooks/useBookings";

const Bookings = () => {
  const [bookings] = useBookings();
  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-accent font-serif">
          Free Tuitions Bookings
        </h2>

        <div className="grid md:grid-cols-1 gap-4 mt-8">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, idx) => (
                  <ShowBookings booking={booking} key={idx} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;

const ShowBookings = ({ booking }) => {
  const { date, timeSlot, email, name, phoneNumber } = booking?.data;

  return (
    <tr>
      <th>1</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{booking?.subject}</td>
      <td>{date}</td>
      <td>{timeSlot}</td>
      <td>{phoneNumber}</td>
    </tr>
  );
};
