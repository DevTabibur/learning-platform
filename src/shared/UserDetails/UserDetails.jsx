import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useParams } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import useUserDetails from "../../pages/hooks/useUserDetails";
import Loader from "../Loader/Loader";
import "./UserDetails.css";
import { useForm } from "react-hook-form";

const UserDetails = () => {
  const [user, loading, error] = useAuthState(auth);

  const { displayName, photoURL, phoneNumber, _id } = user;
  const { id } = useParams();

  const [userDetails] = useUserDetails(id);
  const { email } = userDetails;

  // console.log(userDetails);

  // handling update form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <h2 className="text-xl font-bold mb-1">Update User</h2>
      <div className="text-sm breadcrumbs mb-5">
        <ul>
          <li>
            <Link to="/">
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
          <li>
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
              User Details
            </>
          </li>
        </ul>
      </div>

      <div className="md:flex flex-row gap-x-6 gap-y-4">
        <div className="basis-1/3">
          <div className="card w-full bg-base-100 shadow border-2">
            <div className=" relative">
              <img
                className="w-full h-44"
                src="https://placeimg.com/400/225/arch"
                alt="upload cover image"
              />
            </div>
            <div className="card-body items-left text-left relative">
              <div className="avatar online absolute -top-10 left-5">
                <div className="w-24 rounded-full">
                  <img src={photoURL} alt="Update Profile" />
                </div>
              </div>
              <div className="mt-10">
                <h2 className="card-title">{displayName}</h2>
                <p>Bio</p>
                <hr className="px-0 mx-0 w-full my-3"></hr>
                <p className="mb-0">
                  <strong className="pr-1">Student ID:</strong>321000001
                </p>
                <p className="mb-0">
                  <strong className="pr-1">Class:</strong>4
                </p>
                <p className="mb-0">
                  <strong className="pr-1">Section:</strong>A
                </p>
                <div className="card-actions mt-4">
                  <button className="btn btn-secondary">Update Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-2/3">
          <div className="card w-1full bg-base-100 shadow">
            <div className="card-body items-left text-left">
              <h2 className="card-title mb-3">General Info</h2>
              <hr></hr>
              <div className="general-info-list">
                <ul className="">
                  <li className="flex my-2">
                    <strong>Name:</strong>
                    <p className="ml-4">Tabibur Rahman</p>
                  </li>
                  <li className="flex my-2">
                    <strong>Father's Name:</strong>
                    <p className="ml-4">Tabibur Rahman</p>
                  </li>
                  <li className="flex my-2">
                    <strong>Mother's Name:</strong>
                    <p className="ml-4">Tabibur Rahman</p>
                  </li>
                  <li className="flex my-2">
                    <strong>Date of Birth:</strong>
                    <p className="ml-4">18-04-2000</p>
                  </li>
                  <li className="flex my-2">
                    <strong>Religion:</strong>
                    <p className="ml-4">Islam</p>
                  </li>
                  <li className="flex my-2">
                    <strong>Father Occupation:</strong>
                    <p className="ml-4">Graphic Designer</p>
                  </li>
                  <li className="flex my-2">
                    <strong>E-mail:</strong>
                    <p className="ml-4">{email}</p>
                  </li>
                  <li className="flex my-2">
                    <strong>Phone:</strong>
                    <p className="ml-4">Not Provided</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex flex-row mt-20  gap-x-6 gap-y-4">
        <div className="basis-1/3">
          <div class="card w-full bg-base-100 shadow">
            <div class="card-body">
              <h2 class="card-title justify-center items-center mb-3">
                Update Profile
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">What is your name?*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("firstName", {
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
                  <label class="label">
                    <span class="label-text-alt">
                      {errors.firstName?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.firstName.message}
                        </span>
                      )}
                      {errors.firstName?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.firstName.message}
                        </span>
                      )}
                    </span>
                  </label>
                </div>

                {/* gender */}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Select your Gender*</span>
                  </label>
                  <select
                    class="input input-bordered w-full max-w-xs"
                    {...register("gender", { required: true })}
                  >
                    <option value="female">Male</option>
                    <option value="male">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <label class="label">
                    <span class="label-text-alt">
                      {errors.gender?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          Gender is required
                        </span>
                      )}
                    </span>
                  </label>
                </div>

                {/* role */}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Select your Role*</span>
                  </label>
                  <select
                    class="input input-bordered w-full max-w-xs"
                    {...register("role", { required: true })}
                  >
                    <option value="female">Parents</option>
                    <option value="male">Teachers</option>
                    <option value="other">Students</option>
                    <option value="other">Admin</option>
                    <option value="other">Super Admin</option>
                  </select>
                  <label class="label">
                    <span class="label-text-alt">
                      {errors.role?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          Gender is required
                        </span>
                      )}
                    </span>
                  </label>
                </div>

                {/* Bio */}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Tell us about yourself*</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("bio", {
                      required: true,
                      maxLength: 300,
                    })}
                  />
                  <label class="label">
                    <span class="label-text-alt">
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
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Upload Your Cover Photo</span>
                  </label>
                  <input
                    type="file"
                    placeholder="Upload here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("cover")}
                  />
                </div>

                {/* profile photo */}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Upload Your Profile Photo*</span>
                  </label>
                  <input
                    type="file"
                    placeholder="Upload here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("profile", {
                      required: true,
                    })}
                  />
                  <label class="label">
                    <span class="label-text-alt">
                      {errors.profile?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          Profile pictures is required
                        </span>
                      )}
                    </span>
                  </label>
                </div>

                {/* <input
                  className="btn btn-accent mt-10"
                  type="submit"
                  value="UPDATE"
                /> */}
              </form>
            </div>
          </div>
        </div>

        <div className="basis-2/3">

          <div class="card w-full bg-base-100 shadow">
            <div class="card-body">
              <h2 class="card-title justify-center items-center mb-3">
                Update General Info
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>

                {/* fathers name */}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">What is your father's name?*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Father's Name"
                    class="input input-bordered w-full max-w-xs"
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
                  <label class="label">
                    <span class="label-text-alt">
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

                {/* gender */}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Select your Gender*</span>
                  </label>
                  <select
                    class="input input-bordered w-full max-w-xs"
                    {...register("gender", { required: true })}
                  >
                    <option value="female">Male</option>
                    <option value="male">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <label class="label">
                    <span class="label-text-alt">
                      {errors.gender?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          Gender is required
                        </span>
                      )}
                    </span>
                  </label>
                </div>

                {/* role */}
                {/* <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Select your Role*</span>
                  </label>
                  <select
                    class="input input-bordered w-full max-w-xs"
                    {...register("role", { required: true })}
                  >
                    <option value="female">Parents</option>
                    <option value="male">Teachers</option>
                    <option value="other">Students</option>
                    <option value="other">Admin</option>
                    <option value="other">Super Admin</option>
                  </select>
                  <label class="label">
                    <span class="label-text-alt">
                      {errors.role?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          Gender is required
                        </span>
                      )}
                    </span>
                  </label>
                </div> */}

                {/* Bio */}
                {/* <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Tell us about yourself*</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("bio", {
                      required: true,
                      maxLength: 300,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  <label class="label">
                    <span class="label-text-alt">
                      {errors.bio?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          Bio is required
                        </span>
                      )}
                      {errors.bio?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          Alphabetical characters only
                        </span>
                      )}
                      {errors.bio?.type === "maxLength" && (
                        <span className="label-text-alt text-red-500">
                          300 words only
                        </span>
                      )}
                    </span>
                  </label>
                </div> */}

                {/* cover photo */}
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Upload Your Cover Photo</span>
                  </label>
                  <input
                    type="file"
                    placeholder="Upload here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("cover")}
                  />
                </div>

                {/* profile photo */}
                {/* <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Upload Your Profile Photo*</span>
                  </label>
                  <input
                    type="file"
                    placeholder="Upload here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("profile", {
                      required: true,
                    })}
                  />
                  <label class="label">
                    <span class="label-text-alt">
                      {errors.profile?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          Profile pictures is required
                        </span>
                      )}
                    </span>
                  </label>
                </div> */}

                <input
                  className="btn btn-accent mt-10"
                  type="submit"
                  value="UPDATE"
                />
              </form>




            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
