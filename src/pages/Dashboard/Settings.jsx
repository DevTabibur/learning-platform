import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import "./Dashboard.css";
import Swal from "sweetalert2";
import useActiveUser from "../hooks/useActiveUser";
import { toast } from "react-toastify";

const Settings = () => {
  const [activeUser, isLoading] = useActiveUser();

  // handling update form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const id = activeUser?._id;

  const onSubmit = async (data, e) => {
    // console.log("data", data);
    const formData = new FormData();
    formData.append("name", activeUser?.name);
    formData.append("religion", data.religion);
    formData.append("gender", data.gender);
    formData.append("role", data.role);
    formData.append("cover", data.cover[0]);
    formData.append("profile", data.profile[0]);
    formData.append("bio", data.bio);

    formData.append("fathersName", data.fathersName);
    formData.append("mothersName", data.mothersName);
    formData.append("email", activeUser?.email);
    formData.append("phone", data.phone);
    formData.append("userID", data.userID);
    formData.append("class", data.class);
    formData.append("dob", data.dob);

    const img1 = data.cover[0];
    const img2 = data.profile[0];
    const validExt = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];

    if (img1 !== "" || img2 !== "") {
      // checking image extension
      // imageName.jpeg
      const pos_of_dot1 = img1?.name.lastIndexOf(".") + 1;
      const pos_of_dot2 = img2?.name.lastIndexOf(".") + 1;
      const img_ext1 = img1.name.substring(pos_of_dot1);
      const img_ext2 = img2.name.substring(pos_of_dot2);
      const result1 = validExt.includes(img_ext1);
      const result2 = validExt.includes(img_ext2);

      if (result1 === false || result2 === false) {
        Swal.fire({
          title: "Warning",
          text: "Only jpg, png and jpeg files are allowed",
          icon: "warning",
        });
        return false;
      }
      // checking image size
      else if (
        parseFloat(img1.size / (1024 * 1024)) >= 5 ||
        parseFloat(img2.size / (1024 * 1024)) >= 5
      ) {
        // perform operation
        Swal.fire({
          title: "File Size must be smaller than 5MB",
          icon: "warning",
        });
        return false;
      } else if (id) {
        // console.log("everything is perfect");
        fetch(`http://localhost:5000/api/v1/user/${id}`, {
          method: "PUT",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("data", data);
            if (data.code === 400 || data.code === 401 || data.code === 403) {
              Swal.fire({
                title: data.status,
                text: data?.error || data?.message,
                icon: "error",
              });
            } else {
              toast.success("Update successfully", { toastId: "customId" });
              reset();
            }
          });
      }
    } else {
      Swal.fire({
        title: "Warning",
        text: "No Image is selected",
        icon: "warning",
      });
      return false;
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-1 text-accent">User Settings</h2>
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
              Update Profile
            </>
          </li>
        </ul>
      </div>

      <div className="md:flex flex-row my-12  gap-x-6 gap-y-4">
        {/* update profile */}
        <div className="basis-2/4 mb-6">
          <div className="card w-full bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title justify-center items-center mb-3">
                Update Profile
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-2">
                  {/* name */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Your name?*</span>
                    </label>
                    <input
                      type="text"
                      readOnly
                      defaultValue={activeUser?.name}
                      className="input input-bordered w-full max-w-xs cursor-not-allowed"
                      {...register("name")}
                    />
                  </div>

                  {/* religion */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Your religion?*</span>
                    </label>
                    <select
                      className="input input-bordered w-full max-w-xs"
                      {...register("religion", { required: true })}
                    >
                      <option value="islam">Islam</option>
                      <option value="hindu">Hindu</option>
                      <option value="christian">Christian</option>
                      <option value="buddho">Buddho</option>
                      <option value="others">Others</option>
                    </select>
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.religion?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            Religion is required
                          </span>
                        )}
                      </span>
                    </label>
                  </div>

                  {/* gender */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Your Gender?*</span>
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
                      <span className="label-text">Your Role?*</span>
                    </label>
                    <select
                      className="input input-bordered w-full max-w-xs"
                      {...register("role", { required: true })}
                    >
                      <option value="parents">Parents</option>
                      <option value="teachers">Teachers</option>
                      <option value="students">Students</option>
                      <option value="others">Others</option>
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

                  {/* cover photo */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">
                        Upload Your Cover Photo
                      </span>
                    </label>
                    <input
                      type="file"
                      placeholder="Upload here"
                      className="input input-bordered w-full max-w-xs"
                      {...register("cover", {
                        required: true,
                        message: "Cover photo is required",
                      })}
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.cover?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            Cover pictures is required
                          </span>
                        )}
                      </span>
                    </label>
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
                        message: "Profile is required",
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
                </div>
                {/* Bio */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Tell us about yourself*</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Type here"
                    className="textarea textarea-bordered w-full"
                    {...register("bio")}
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
              </form>
            </div>
          </div>
        </div>

        {/* update general info */}
        <div className="basis-2/4">
          <div className="card w-full bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title justify-center items-center mb-3">
                Update General Info
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-2">
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

                  {/* Email */}
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email*</span>
                    </label>
                    <input
                      readOnly
                      defaultValue={activeUser?.email}
                      type="text"
                      className="input input-bordered cursor-not-allowed"
                      {...register("email")}
                    />
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
                      {...register("userID", {
                        required: {
                          value: true,
                          message: "ID is Required",
                        },
                      })}
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.userID?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.userID.message}
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

                {/* date of birth */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">
                      What is your date of birth?*
                    </span>
                  </label>
                  <input
                    type="date"
                    placeholder="DOB"
                    className="input input-bordered w-full"
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
