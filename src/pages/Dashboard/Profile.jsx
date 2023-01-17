import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import Avatar from "../../assets/images/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png";
import useActiveUser from "../hooks/useActiveUser";

const Profile = () => {
  const [activeUser, isLoading] = useActiveUser();
  // for loading
  if (isLoading) {
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
            {activeUser?.cover ? (
              <div className=" relative">
                <img
                  className="w-full h-44"
                  src={`http://localhost:5000/${activeUser?.cover}`}
                  alt="cover_img"
                />
              </div>
            ) : (
              <div className=" relative">
                <img
                  className="w-full h-44"
                  src="https://placeimg.com/400/225/arch"
                  alt="cover_image"
                />
              </div>
            )}

            <div className="card-body items-left text-left relative">
              {activeUser?.profile ? (
                <div className="avatar online absolute -top-10 left-5">
                  <div className="w-24 rounded-full">
                    {activeUser?.profile ? (
                      <img
                        src={`http://localhost:5000/${activeUser?.profile}`}
                        alt="Profile"
                      />
                    ) : (
                      <img src={Avatar} alt="Update Profile" />
                    )}
                  </div>
                </div>
              ) : (
                <div className="avatar online absolute -top-10 left-5">
                  <div className="w-24 rounded-full">
                    {activeUser?.profile ? (
                      <img
                        src="https://placeimg.com/400/225/arch"
                        alt="Profile"
                      />
                    ) : (
                      <img src={Avatar} alt="Update Profile" />
                    )}
                  </div>
                </div>
              )}

              <div className="mt-10">
                {activeUser?.name ? (
                  <h2 className="card-title">{activeUser?.name}</h2>
                ) : (
                  <h2 className="card-title">Provide your Name</h2>
                )}

                {activeUser?.bio ? (
                  <p>{activeUser?.bio}</p>
                ) : (
                  <p>Provide Bio Data</p>
                )}
                <hr className="px-0 mx-0 w-full my-3"></hr>
                {activeUser?.role ? (
                  <p className="mb-0">
                    <strong className="pr-1">Role:</strong>
                    {activeUser?.role}
                  </p>
                ) : (
                  <p className="mb-0">
                    <strong className="pr-1">Role:</strong>Update your role
                  </p>
                )}
                {activeUser?.userID ? (
                  <p className="mb-0">
                    <strong className="pr-1">ID:</strong>
                    {activeUser?.userID}
                  </p>
                ) : (
                  <p className="mb-0">
                    <strong className="pr-1">ID:</strong>Update Your ID
                  </p>
                )}
                {activeUser?.class ? (
                  <p className="mb-0">
                    <strong className="pr-1">Class / Section:</strong>
                    {activeUser?.class}
                  </p>
                ) : (
                  <p className="mb-0">
                    <strong className="pr-1">Class / Section:</strong>Update
                    Your class/ section
                  </p>
                )}
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
                  {activeUser?.name ? (
                    <li className="flex my-2">
                      <strong>Name:</strong>
                      <p className="ml-4">{activeUser?.name}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Name:</strong>
                      <p className="ml-4">Update Your Name</p>
                    </li>
                  )}
                  {activeUser?.fathersName ? (
                    <li className="flex my-2">
                      <strong>Father's Name:</strong>
                      <p className="ml-4">{activeUser?.fathersName}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Father's Name:</strong>
                      <p className="ml-4">Update Father's Name</p>
                    </li>
                  )}
                  {activeUser?.mothersName ? (
                    <li className="flex my-2">
                      <strong>Mother's Name:</strong>
                      <p className="ml-4">{activeUser?.mothersName}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Mother's Name:</strong>
                      <p className="ml-4">Update Mother's Name</p>
                    </li>
                  )}
                  {activeUser?.gender ? (
                    <li className="flex my-2">
                      <strong>Gender:</strong>
                      <p className="ml-4">{activeUser?.gender}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Gender:</strong>
                      <p className="ml-4">Update Your Gender</p>
                    </li>
                  )}
                  {activeUser?.dob ? (
                    <li className="flex my-2">
                      <strong>Date of Birth:</strong>
                      <p className="ml-4">{activeUser?.dob}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Date of Birth:</strong>
                      <p className="ml-4">Update Date Of Birth</p>
                    </li>
                  )}
                  {activeUser?.religion ? (
                    <li className="flex my-2">
                      <strong>Religion:</strong>
                      <p className="ml-4">{activeUser?.religion}</p>
                    </li>
                  ) : (
                    <li className="flex my-2">
                      <strong>Religion:</strong>
                      <p className="ml-4">Update religion</p>
                    </li>
                  )}
                  <li className="flex my-2">
                    <strong>E-mail:</strong>
                    <p className="ml-4">{activeUser?.email}</p>
                  </li>
                  {activeUser?.phone ? (
                    <li className="flex my-2">
                      <strong>Phone:</strong>
                      <p className="ml-4">{activeUser?.phone}</p>
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

export default Profile;
