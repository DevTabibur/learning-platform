import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import "./Dashboard.css";

const Settings = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log("user", user);

  // handling update form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [userUpdate, setUserUpdate] = useState([]);
  const onSubmit = async (data) => {
    await setUserUpdate(data);
    // console.log(data);
  };

  const displayName = "";
  // send data in server
  //   useEffect(()=>{
  //     const url = `http://localhost:5000/user/${email}`
  //     fetch(url,{
  //       method: "POST",
  //       headers:{
  //         'content-type' : 'application/json',
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //       body: JSON.stringify(userUpdate),
  //     })
  //     .then(res => res.json())
  //     // .then(data =>{
  //     //   alert('Data updated successfully')
  //     // })
  //   }, [])

  // console.log('userUpdate', userUpdate)

  return (
    <>
      <h2 className="text-xl font-bold mb-1 text-accent">User Settings</h2>
      <div className="text-sm breadcrumbs mb-5">
        <ul>
          <li className="font-bold text-accent font-mono">
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
          <li className="font-bold text-accent font-mono">
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
              Update Profile
            </>
          </li>
        </ul>
      </div>

      <div className="md:flex flex-row mt-20  gap-x-6 gap-y-4">
        <div className="basis-1/3">
          <div className="card w-full bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title justify-center items-center mb-3">
                Update Profile
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is your name?*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                      pattern: {
                        value: /^[a-z ,.'-]+$/i,
                        message: "Name is not valid",
                      },
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {errors.name?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                      {errors.name?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </span>
                  </label>
                </div>

                {/* gender */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Select your Gender*</span>
                  </label>
                  <select
                    className="input input-bordered w-full max-w-xs"
                    {...register("gender", { required: true })}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <label className="label">
                    <span className="label-text-alt">
                      {errors.gender?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          Gender is required
                        </span>
                      )}
                    </span>
                  </label>
                </div>

                {/* role */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Select your Role*</span>
                  </label>
                  <select
                    className="input input-bordered w-full max-w-xs"
                    {...register("role", { required: true })}
                  >
                    <option value="parents">Parents</option>
                    <option value="teachers">Teachers</option>
                    <option value="students">Students</option>
                    <option value="admin">Admin</option>
                    <option value="super-admin">Super Admin</option>
                  </select>
                  <label className="label">
                    <span className="label-text-alt">
                      {errors.role?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          Gender is required
                        </span>
                      )}
                    </span>
                  </label>
                </div>

                {/* Bio */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Tell us about yourself*</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    {...register("bio", {
                      required: true,
                      maxLength: 300,
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {errors.bio?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          Bio is required
                        </span>
                      )}
                      {errors.bio?.type === "maxLength" && (
                        <span className="label-text-alt text-red-500">
                          300 words only
                        </span>
                      )}
                    </span>
                  </label>
                </div>

                {/* cover photo */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Upload Your Cover Photo</span>
                  </label>
                  <input
                    type="file"
                    placeholder="Upload here"
                    className="input input-bordered w-full max-w-xs"
                    {...register("cover")}
                  />
                </div>

                {/* profile photo */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">
                      Upload Your Profile Photo*
                    </span>
                  </label>
                  <input
                    type="file"
                    placeholder="Upload here"
                    className="input input-bordered w-full max-w-xs"
                    {...register("profile", {
                      required: true,
                    })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {errors.profile?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          Profile pictures is required
                        </span>
                      )}
                    </span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="basis-2/3">
          <div className="card w-full bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title justify-center items-center mb-3">
                Update General Info
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex gap-8 justify-center items-center">
                  {/* fathers name */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">
                        What is your father's name?*
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Father's Name"
                      className="input input-bordered w-full max-w-xs"
                      {...register("fathersName", {
                        required: {
                          value: true,
                          message: "Father's Name is Required",
                        },
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: "Name is not valid",
                        },
                      })}
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.fathersName?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.fathersName.message}
                          </span>
                        )}
                        {errors.fathersName?.type === "pattern" && (
                          <span className="label-text-alt text-red-500">
                            {errors.fathersName.message}
                          </span>
                        )}
                      </span>
                    </label>
                  </div>

                  {/* mothers name */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">
                        What is your mothers's name?*
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="mothers's Name"
                      className="input input-bordered w-full max-w-xs"
                      {...register("mothersName", {
                        required: {
                          value: true,
                          message: "Mother's Name is Required",
                        },
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: "Name is not valid",
                        },
                      })}
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.mothersName?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.mothersName.message}
                          </span>
                        )}
                        {errors.mothersName?.type === "pattern" && (
                          <span className="label-text-alt text-red-500">
                            {errors.mothersName.message}
                          </span>
                        )}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="md:flex gap-8 justify-center items-center">
                  {/* date of birth */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">
                        What is your date of birth?*
                      </span>
                    </label>
                    <input
                      type="date"
                      placeholder="DOB"
                      className="input input-bordered w-full max-w-xs"
                      {...register("dob", {
                        required: {
                          value: true,
                          message: "DOB is Required",
                        },
                      })}
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.dob?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.dob.message}
                          </span>
                        )}
                      </span>
                    </label>
                  </div>

                  {/* father occupation */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">
                        What is Father Occupation?*
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Father Occupation"
                      className="input input-bordered w-full max-w-xs"
                      {...register("occupation", {
                        required: {
                          value: true,
                          message: "Occupation is Required",
                        },
                      })}
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.occupation?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.occupation.message}
                          </span>
                        )}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="md:flex gap-8 justify-center items-center">
                  {/* Email */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email*</span>
                    </label>
                    <input
                      readOnly
                      value={user?.email}
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

                  {/* phone */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Phone*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="phone"
                      className="input input-bordered w-full max-w-xs"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Phone Number is Required",
                        },
                        pattern: {
                          // value: ,
                          message: "Phone is required",
                        },
                      })}
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.phone?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.phone.message}
                          </span>
                        )}
                        {errors.phone?.type === "pattern" && (
                          <span className="label-text-alt text-red-500">
                            {errors.phone.message}
                          </span>
                        )}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="md:flex gap-8 justify-center items-center">
                  {/* student ID */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">
                        Student/Teacher/Parents ID?*
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="ID"
                      className="input input-bordered w-full max-w-xs"
                      {...register("id", {
                        required: {
                          value: true,
                          message: "ID is Required",
                        },
                      })}
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.id?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.id.message}
                          </span>
                        )}
                      </span>
                    </label>
                  </div>

                  {/* Class */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">
                        Class/Section (only student fill this)
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Class / Section"
                      className="input input-bordered w-full max-w-xs"
                      {...register("class")}
                    />
                  </div>
                </div>

                <div className="md:flex gap-8 justify-center items-center">
                  <input
                    className="btn btn-accent mt-10 w-full"
                    type="submit"
                    value="UPDATE"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
