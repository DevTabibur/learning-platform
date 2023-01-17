import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loader from "../../shared/Loader/Loader";
import { toast } from "react-toastify";
import useActiveUser from "../hooks/useActiveUser";
import Swal from "sweetalert2";

const Register = () => {
  // const [activeUser, activeUserData, isLoading] = useActiveUser();
  // console.log("register", activeUser, activeUserData, isLoading);
  const [registerLoading, setRegisterLoading] = useState(false);
  const isActive = localStorage.getItem("accessToken");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // if user is register once, then he'll not register again before logout.
    if (isActive) {
      Swal.fire({
        title: "Authentication is failed",
        text: "Please logout for again registration",
        icon: "error",
      });
    } else {
      const url = `http://localhost:5000/api/v1/user/register`;
      setRegisterLoading(true);
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === 400 || data.code === 401 || data.code === 403) {
            toast.error(data.error, { toastId: "customId" });
          } else {
            console.log("everything is perfect", data);
            const token = data?.data?.token;
            localStorage.setItem("accessToken", JSON.stringify(token));
            toast.success(data?.message, { toastId: "customId" });
            navigate("/");
            reset();
            // window.location.reload();
          }
          setRegisterLoading(false);
        });
    }
  };
  // for loading
  if (registerLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="h-screen flex bg-accent justify-center items-center">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center text-2xl font-serif">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="input input-bordered font-mono"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9 ]*$/,
                      message: "Name should be unique",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered font-mono"
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
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered font-mono"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <label className="label">
                {/* <span className="label-text">{signInError}</span> */}
              </label>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                ></input>
              </div>

              <div className="divider mb-0 pb-0">OR</div>
              <div className="label-text-alt link link-hover my-2 font-semibold font-serif">
                <Link to="/login">Already have account? Please login.</Link>
              </div>

              {/* <div
                className="btn btn-glass hover:btn-accent flex"
                onClick={() => signInWithGoogle()}
              >
                Continue with google
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
