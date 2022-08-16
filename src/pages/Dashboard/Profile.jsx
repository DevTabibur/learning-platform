import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Link,
  Navigate,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import auth from "../../firebase/firebase.init";
import Loader from "../../shared/Loader/Loader";
import Avatar from "../../assets/images/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png";
import useToken from "../hooks/useToken";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);

  console.log("user", user);

  // for loading
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-1 text-accent">User Profile</h2>
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
              Profile
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

                <p>Bio</p>
                <hr className="px-0 mx-0 w-full my-3"></hr>
                <p className="mb-0">
                  <strong className="pr-1">Student ID:</strong>321000001
                </p>
                <p className="mb-0">
                  <strong className="pr-1">Class / Section:</strong>4
                </p>
                <div className="card-actions mt-4">
                  <Link className="btn btn-accent" to="/dashboard/settings">
                    Update Profile
                  </Link>
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
                  {user?.displayName ? (
                    <li className="flex my-2">
                      <strong>Name:</strong>
                      <p className="ml-4">Tabibur Rahman</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Name:</strong>
                      <p className="ml-4">Update Your Name</p>
                    </li>
                  )}
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
                    <p className="ml-4">{user?.email}</p>
                  </li>
                  {user?.phoneNumber ? (<li className="flex my-2">
                    <strong>Phone:</strong>
                    <p className="ml-4">{user?.phoneNumber}</p>
                  </li>) : (<li className="flex my-2">
                    <strong>Phone:</strong>
                    <p className="ml-4">Update Phone Number</p>
                  </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
