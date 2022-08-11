import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.init";

const Login = () => {
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    navigate("/")
  };


  // for error showing message
  let signInError;
  // if(createError){
  //   return (
  //     <>
  //       <p className="text-red-500">
  //       </p>
  //     </>
  //   )
  // }
  return (
    <div className="h-screen flex bg-accent justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-center text-2xl">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                // className="input input-bordered w-full max-w-xs"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
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
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover font-semibold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            {signInError}
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="LOGIN"
              ></input>
            </div>
            <div className="divider mb-0 pb-0">OR</div>
            <div className="label-text-alt link link-hover my-2 font-semibold">
              <Link to="/register">Are you new here? Please register</Link>
            </div>

            <div  className="btn btn-glass hover:btn-accent flex">
              <Link to="/register">Continue with google</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
