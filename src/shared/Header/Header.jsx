import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-secondary text-white lg:px-20">
            <label
              className="btn btn-ghost btn-circle lg:hidden text-white mr-4"
              htmlFor="my-drawer-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <div className="flex-1 text-xl font-medium text-white">
             <Link to="/"> E-Learning</Link>
            </div>
            

            {/* profile / admin */}

            <div className="dropdown dropdown-end">
              <div className="flex">
                <label
                  tabIndex="0"
                  className="btn btn-ghost btn-circle w-20 mr-5"
                >
                  <div className="indicator mt-0 pt-0">
                    <h2>John Doe</h2>
                    <span className="badge badge-sm indicator-item -mt-2 lowercase">
                      Admin
                    </span>
                  </div>
                </label>
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                  </div>
                </label>
              </div>

              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
              >
                <li>
                  <NavLink to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings">Settings</NavLink>
                </li>
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Header;
