import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import useUsers from "../hooks/useUsers";

const Users = () => {
  const [users] = useUsers();
  const navigate = useNavigate();

  const getToken = localStorage.getItem('accessToken');
  const accessToken = getToken;

  //  || getToken === null || getToken === undefined || getToken === "" || automaticRedirect === true
  // const automaticRedirect =()=>{
  //   alert()
  //   // if(getToken !== accessToken){
  //   //   // navigate("/login");
  //   //   alert('dont match')
  //   // }
  // }

  // setInterval(automaticRedirect, 3600);
  

  // only automaticRedirect when only protected route is visited
  

  return (
    <>
      <div className="page-detail mt-0 pt-0">
        <h2 className="text-xl font-bold mb-1">Users</h2>
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
                All User
              </>
            </li>
          </ul>
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table table-compact w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>SEE MORE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index, refetch) => (
              <ShowUserList key={index} user={user} refetch={refetch} />
            ))}
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>SEE MORE</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Users;

const ShowUserList = ({ user }) => {
  
  return (
    <>
      {<tr>
        <td className="font-bold"></td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user?.name}</div>
              <div className="text-sm opacity-50">Address</div>
            </div>
          </div>
        </td>
        <td>{user?.email}</td>
        <td>{user?.role ? user?.role : "New User"}</td>
        <th>
          <Link to={`/dashboard/users/${user._id}`} className="btn btn-secondary">Details</Link>
        </th>
      </tr>}
    </>
  );
};
