import React from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
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
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Occupation</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>SEE MORE</th>
            </tr>
          </thead>
          <tbody>
            {/* {parents.map((parent, index) => (
              <ShowParentList key={index} parent={parent} />
            ))} */}
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Occupation</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>SEE MORE</th>
            </tr>
          </tfoot>
        </table>
      </div>
      </>
  )
}

export default Users;


const ShowUserList = ({ user }) => {
    return(
        <>
      <tr>
        <td className="font-bold">#ID</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Name</div>
              <div className="text-sm opacity-50">Address</div>
            </div>
          </div>
        </td>
        <td>gender</td>
        <td>occ</td>
        <th>
          <button className="btn btn-secondary">Details</button>
        </th>
      </tr>
    </>
    )
}