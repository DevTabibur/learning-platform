import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Loader from "../../shared/Loader/Loader";
import Swal from "sweetalert2";

const Login = () => {
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const getToken = localStorage.getItem("accessToken");
  const url = `http://localhost:5000/api/v1/user/login`;

  const onSubmit = async (data) => {
    console.log("data", data);
    if (getToken) {
      Swal.fire({
        title: "Failed",
        text: "Please Logout for again login",
        icon: "error",
      });
    } else {
      setLoginLoading(true);
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data", data);
          setLoginLoading(false);
          if (data.code === 200) {
            Swal.fire({
              title: data?.status,
              text: data?.message,
              icon: "success",
            });
            const token = data?.data?.token;
            localStorage.setItem("accessToken", JSON.stringify(token));
            navigate("/");
            window.location.reload();
          } else if (
            data.code === 401 ||
            data.code === 403 ||
            data.code === 400
          ) {
            Swal.fire({
              title: data?.status,
              text: data?.error,
              icon: "error",
            });
          }
        });
    }
  };

  // for loader
  if (loginLoading) {
    return <Loader />;
  }

  return (
    <div className="h-screen flex bg-accent justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-center text-2xl font-serif text-accent">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <label
                className="label"
                onClick={async () => {
                  // await sendPasswordResetEmail(email);
                }}
              >
                <p className="label-text-alt link link-hover font-semibold font-serif">
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="LOGIN"
              ></input>
            </div>
            <div className="divider mb-0 pb-0">OR</div>
            <div className="label-text-alt link link-hover my-2 font-semibold font-serif">
              <Link to="/register">Are you new here? Please register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
