import "./ForgotPassword.css";

import { useForm } from "react-hook-form";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useState } from "react";
import Loader from "../Loader/Loader";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [resetLoading, setResetLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    const email = data.email;

    const url = `http://localhost:5000/api/v1/forgot-password`;
    setResetLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("forgotpassword posted", data);
        setResetLoading(false);
        if (data.code === 200) {
          Swal.fire({
            title: " Email was sent!",
            text: "Check your Email, for reset",
            icon: "success",
          });
          navigate("/");
        }
      });
  };

  if (resetLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="container m-auto">
        <div className="grid md:grid-cols-3 gap-0 ">
          <div></div>

          <div className="login-right-col p-12 bg-current">
            <h1 className="text-primary font-bold text-3xl mb-4">
              Forgot Password?
            </h1>
            {/* login form */}

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered "
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
                    <span className="label-text-alt text-red-500 ">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>


              <div className="mt-4">
                <button
                  className="btn mr-4 btn-primary"
                  onClick={() => navigate(-1)}
                >
                  Go Back
                </button>
                <input
                  className="btn btn-primary text-accent"
                  type="submit"
                  value="RESET"
                ></input>
              </div>
            </form>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
