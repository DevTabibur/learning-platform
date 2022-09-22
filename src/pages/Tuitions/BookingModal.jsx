import React from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const BookingModal = ({ date, appointment, setAppointment }) => {
  const { _id, name, slots } = appointment;

  // const handleBooking = (event) => {
  //   event.preventDefault();
  //   const slot = event.target.slot.value;
  //   // to close the modal
  //   setAppointment(null);
  //   alert(`your ${name} booking is done`);
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {

    const url = `http://localhost:5000/booking`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({data, subject: name}),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("inside of onSubmit booking", data);
        if (data.code === 200) {
          Swal.fire({
            title: "Your Booking is Done",
            icon: "success",
          });
          e.target.reset();
          // to close modal
          setAppointment(null);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid md:grid-cols-1 gap-3 justify-items-center mt-4"
          >
            {/* subject */}
            {/* <div className="form-control w-full">
              <input
                type="text"
                readOnly
                value={name}
                className="input input-bordered w-full"
                {...register("subject")}
              />
            </div> */}

            {/* date */}
            <div className="form-control w-full">
              <input
                type="text"
                readOnly
                defaultValue={format(date, "PP")}
                className="input input-bordered w-full"
                {...register("date")}
              />
            </div>

            {/* time slots */}
            <div className="form-control w-full">
              <select
                name="slot"
                className="select select-bordered w-full"
                {...register("timeSlot")}
              >
                {slots.map((slot, idx) => (
                  <option key={idx} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* email */}
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {/* name */}
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/* number */}
            <div className="form-control w-full">
              <input
                type="number"
                placeholder="Your Phone Number"
                className="input input-bordered w-full"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Phone Number is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.phoneNumber?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full">
              <input
                type="submit"
                value="SUBMIT BOOKING"
                className="btn btn-secondary w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
