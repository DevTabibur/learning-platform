import React from "react";
import { Link } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
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
                alt="car!"
              />
            </div>
            <div className="card-body items-left text-left relative">
              <div className="avatar online absolute -top-10 left-5">
                <div className="w-24 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div className="mt-10">
                <h2 className="card-title">Name</h2>
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
                        <p className="ml-4">tobiburrohman2@gmail.com</p>
                    </li>
                    <li className="flex my-2">
                        <strong>Phone:</strong>
                        <p className="ml-4">12345-67890</p>
                    </li>
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
