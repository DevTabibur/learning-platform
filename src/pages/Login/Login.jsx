import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loader from "../../shared/Loader/Loader";
import useToken from "../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, resetLoading, resetError] =
    useSendPasswordResetEmail(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState([]);
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    await setEmail(data.email);
  };

  // for returning user the exact page he wants to enter after login
  const navigate = useNavigate();
  const location = useLocation();

  // for getting user
  // if user is login, then we'll give it token.. and then redirect to the home page
  const [token] = useToken(googleUser || signInUser);
  // if token is valid, then user will automatically redirect their page..
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  // for loading
  if (signInLoading || googleLoading || resetLoading) {
    return <Loader />;
  }

  // for error showing message
  let showError;
  if (signInError || googleError || resetError) {
    showError = (
      <small>
        <p className="text-red-500  font-mono">
          {signInError?.message || googleError?.message || resetError?.message}
        </p>
      </small>
    );
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
                  await sendPasswordResetEmail(email);
                }}
              >
                <p className="label-text-alt link link-hover font-semibold font-serif">
                  Forgot password?
                </p>
              </label>
            </div>
            {showError}
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

            <div
              className="btn btn-glass hover:btn-accent flex"
              onClick={() => signInWithGoogle()}
            >
              Continue with google
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
