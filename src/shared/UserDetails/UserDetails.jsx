import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useParams } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import useUserDetails from "../../pages/hooks/useUserDetails";
import Loader from "../Loader/Loader";
import "./UserDetails.css";
import { useForm } from "react-hook-form";
import useProfile from "../../pages/hooks/useProfileInfo";
import Avatar from "../../assets/images/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png";
import Swal from "sweetalert2";

const UserDetails = () => {
  const [user, loading, error] = useAuthState(auth);

  const { id } = useParams();

  const [userDetails] = useUserDetails(id);
  const { email } = userDetails;

  const [userProfileInfo] = useProfile();

  // for loading
  if (loading) {
    return <Loader />;
  }

  // make admin function with API
  const makeAdmin = () => {
    const url = `http://localhost:5000/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          Swal.fire({
            title: "Failed to make Admin",
            icon: "error",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log('code', data.code)
        if (data.code === 200) {
          Swal.fire({
            title: "Made an Admin Successfully",
            icon: "success",
          });
        }
      });
  };

  // make super admin function with API
  const removeUser = () => {
    alert("removeUser");
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-1 text-accent">User Details</h2>
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
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="Update Profile" />
                  ) : (
                    <img src={Avatar} alt="Update Profile" />
                  )}
                </div>
              </div>
              <div className="mt-10">
                {user?.displayName ? (
                  <h2 className="card-title">{user?.displayName}</h2>
                ) : (
                  <h2 className="card-title">Provide your Name</h2>
                )}

                {userProfileInfo?.bio ? (
                  <p>{userProfileInfo?.bio}</p>
                ) : (
                  <p>Provide Bio Data</p>
                )}
                <hr className="px-0 mx-0 w-full my-3"></hr>
                {userProfileInfo?.role ? (
                  <p className="mb-0">
                    <strong className="pr-1">Role:</strong>
                    {userProfileInfo?.role}
                  </p>
                ) : (
                  <p className="mb-0">
                    <strong className="pr-1">Role:</strong>Update your role
                  </p>
                )}
                {userProfileInfo?.id ? (
                  <p className="mb-0">
                    <strong className="pr-1">ID:</strong>
                    {userProfileInfo?.id}
                  </p>
                ) : (
                  <p className="mb-0">
                    <strong className="pr-1">ID:</strong>Update Your ID
                  </p>
                )}
                {userProfileInfo?.class ? (
                  <p className="mb-0">
                    <strong className="pr-1">Class / Section:</strong>
                    {userProfileInfo?.class}
                  </p>
                ) : (
                  <p className="mb-0">
                    <strong className="pr-1">Class / Section:</strong>Update
                    Your class/ section
                  </p>
                )}
                <div className="card-actions mt-4">
                  <button
                    onClick={makeAdmin}
                    className="btn btn-accent"
                    to="/dashboard/settings"
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={removeUser}
                    className="btn btn-accent"
                    to="/dashboard/settings"
                  >
                    Remove User
                  </button>
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
                  {userProfileInfo?.name ? (
                    <li className="flex my-2">
                      <strong>Name:</strong>
                      <p className="ml-4">{userProfileInfo?.name}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Name:</strong>
                      <p className="ml-4">Update Your Name</p>
                    </li>
                  )}
                  {userProfileInfo?.fathersName ? (
                    <li className="flex my-2">
                      <strong>Father's Name:</strong>
                      <p className="ml-4">{userProfileInfo?.fathersName}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Father's Name:</strong>
                      <p className="ml-4">Update Father's Name</p>
                    </li>
                  )}
                  {userProfileInfo?.mothersName ? (
                    <li className="flex my-2">
                      <strong>Mother's Name:</strong>
                      <p className="ml-4">{userProfileInfo?.mothersName}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Mother's Name:</strong>
                      <p className="ml-4">Update Mother's Name</p>
                    </li>
                  )}
                  {userProfileInfo?.gender ? (
                    <li className="flex my-2">
                      <strong>Gender:</strong>
                      <p className="ml-4">{userProfileInfo?.gender}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Gender:</strong>
                      <p className="ml-4">Update Your Gender</p>
                    </li>
                  )}
                  {userProfileInfo?.dob ? (
                    <li className="flex my-2">
                      <strong>Date of Birth:</strong>
                      <p className="ml-4">{userProfileInfo?.dob}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Date of Birth:</strong>
                      <p className="ml-4">Update Date Of Birth</p>
                    </li>
                  )}
                  {userProfileInfo?.religion ? (
                    <li className="flex my-2">
                      <strong>Religion:</strong>
                      <p className="ml-4">{userProfileInfo?.religion}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Religion:</strong>
                      <p className="ml-4">Update religion</p>
                    </li>
                  )}
                  {userProfileInfo?.occupation ? (
                    <li className="flex my-2">
                      <strong>Father's Occupation:</strong>
                      <p className="ml-4">{userProfileInfo?.occupation}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Father's Occupation:</strong>
                      <p className="ml-4">Update Occupation</p>
                    </li>
                  )}
                  <li className="flex my-2">
                    <strong>E-mail:</strong>
                    <p className="ml-4">{user?.email}</p>
                  </li>
                  {userProfileInfo?.phone ? (
                    <li className="flex my-2">
                      <strong>Phone:</strong>
                      <p className="ml-4">{userProfileInfo?.phone}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Phone:</strong>
                      <p className="ml-4">Update Phone Number</p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
