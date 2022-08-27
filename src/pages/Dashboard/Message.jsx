import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Swal from "sweetalert2";
import useLoadMessageByEmail from "../hooks/useLoadMessageByEmail";
import useLoadMessages from "../hooks/useLoadMessages";
import ModalOfMessage from "./ModalOfMessage";

const Message = () => {
  const [modalMessages, setModalMessages] = useState(null);

  const [user] = useAuthState(auth);
  const userEmail = user?.email;

  const [emailMessages] = useLoadMessageByEmail();
  const [messages] = useLoadMessages();

  // filtering only user's messages with email
  const filteredMessage = messages.filter((message) => {
    return message.email === userEmail;
  });
  // console.log('filteredMessage', filteredMessage)

  // for date
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedToday = dd + "/" + mm + "/" + yyyy;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    const url = `http://localhost:5000/messages`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "success!",
          text: "Message send!",
          icon: "success",
          confirmButtonText: "COOL",
        });
        e.target.reset();
      });
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-1 text-accent">Write Messages</h2>
      <div className="text-sm breadcrumbs mb-5">
        <ul>
          <li className="font-bold text-accent font-sans">
            <Link to="/dashboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </Link>
          </li>
          <li className="font-bold text-accent font-sans">
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Compose Messages
            </>
          </li>
        </ul>
      </div>

      <div className="md:flex flex-row gap-4">
        <div className="basis-2/3">
          <div className="card w-full bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Write New Message</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* title */}
                <div className="form-control  ">
                  <label className="label">
                    <span className="text-xl">Email</span>
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    readOnly
                    placeholder="Type here"
                    className="input input-bordered  my-1"
                    {...register("email")}
                  />
                </div>

                {/* date */}
                <div className="form-control  ">
                  <label className="label">
                    <span className="text-xl">Date</span>
                  </label>
                  <input
                    type="email"
                    value={formattedToday}
                    readOnly
                    placeholder="Type here"
                    className="input input-bordered  my-1"
                    {...register("formattedToday")}
                  />
                </div>

                {/* title */}
                <div className="form-control  ">
                  <label className="label">
                    <span className="text-xl">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered"
                    {...register("title", {
                      required: {
                        value: true,
                        message: "Title is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.title?.type === "required" && (
                      <span className="label-text font-sans text-red-500 my-1">
                        {errors.title.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* recipient */}
                <div className="form-control  ">
                  <label className="label">
                    <span className="text-xl">Recipient</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered"
                    {...register("recipient", {
                      required: {
                        value: true,
                        message: "Recipient is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.recipient?.type === "required" && (
                      <span className="label-text font-sans text-red-500 my-1">
                        {errors.recipient.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* message */}
                <div className="form-control  ">
                  <label className="label">
                    <span className="text-xl">Message</span>
                  </label>
                  <textarea
                    placeholder="Write Message"
                    className="textarea textarea-bordered h-24 input input-bordered"
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Message is required",
                      },
                    })}
                  ></textarea>
                  <label className="label">
                    {errors.message?.type === "required" && (
                      <span className="label-text font-sans text-red-500 my-1">
                        {errors.message.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="md:flex gap-4 mt-5">
                  <input
                    className="btn btn-accent w-full mr-4 mb-3"
                    type="submit"
                    value="SEND"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="basis-1/3">
          <div className="card w-96 bg-base-100 shadow">
            <div className="card-body text-white">
              <h2 className="card-title text-accent">
                See Your Older Messages
              </h2>
              <ul className="menu bg-base-100 w-full mt-5">
                {filteredMessage.map((fm, idx) => (
                  <ShowMessageList key={idx} fm={fm} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;

const ShowMessageList = ({fm}) => {
  const {title, formattedToday, recipient, messages, email} = fm;
  return (
    <>
      <li className="bg-accent"><a>{fm.title}</a></li>
    </>
  )
};
