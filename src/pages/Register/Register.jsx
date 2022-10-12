import React, { useEffect } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loader from "../../shared/Loader/Loader";
import useToken from "../hooks/useToken";

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    createUser,
    createLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  // for getting successful user
  const [token] = useToken(createUser || googleUser);
  // dependency is must be given here.. otherwise it will not work..correctly
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  // for loading/processing
  if (createLoading || googleLoading || updating) {
    return (
      <>
        <Loader />
      </>
    );
  }

  // fow showing error messages
  let signInError;
  if (createError || googleError || updateError) {
    signInError = (
      <small>
        <p className="text-red-500 font-mono">
          {createError?.message || googleError?.message || updateError?.message}
        </p>
      </small>
    );
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
                <span className="label-text">{signInError}</span>
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
    </>
  );
};

export default Register;
