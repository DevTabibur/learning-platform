import React from "react";
import {
  Link,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import useLoadMessages from "../../pages/hooks/useLoadMessages";
import useActiveUser from "../../pages/hooks/useActiveUser";
import Swal from "sweetalert2";

const Header = ({ children }) => {
  const [activeUser, isLoading] = useActiveUser();
  const [messages] = useLoadMessages();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  // for logout

  const logOut = () => {
    localStorage.removeItem("accessToken");
    Swal.fire({
      title: "Logout Successfully",
      icon: "success",
    });
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div
            className="w-full navbar bg-secondary text-white lg:px-20"
            style={
              pathname.includes("forgot-password") ||
              pathname.includes("/login") ||
              pathname.includes("/register")
                ? { display: "none" }
                : { display: "flex" }
            }
          >
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
            {activeUser?.email ? (
              <div className="dropdown dropdown-end">
                <div className="flex">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle w-20 mr-5"
                  >
                    <div className="indicator mt-0 pt-0">
                      <h2>{activeUser?.name}</h2>
                    </div>
                  </label>
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    {activeUser?.profile ? (
                      <div className="w-10 rounded-full">
                        <img
                          src={`http://localhost:5000/${activeUser?.profile}`}
                          alt="user_Photo"
                        />
                      </div>
                    ) : (
                      <img
                        src="https://placeimg.com/80/80/people"
                        alt="placing_avatar"
                      />
                    )}
                  </label>
                </div>

                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
                >
                  <li>
                    <NavLink
                      to="/dashboard/profile"
                      className="justify-between"
                    >
                      Profile
                      <span className="badge">New</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/settings">Settings</NavLink>
                  </li>
                  <li>
                    <button onClick={logOut}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex">
                <label
                  tabIndex="0"
                  className="btn btn-ghost btn-circle w-20 mr-5"
                >
                  <div className="indicator mt-0 pt-0">
                    <Link to="/login">Login</Link>
                  </div>
                </label>
              </div>
            )}
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Header;
