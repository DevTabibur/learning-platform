import React, { Children } from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = ({ children }) => {
  let activeStyle = {
    color: "yellow",
    backgroundColor: "#051f3e",
  };

  let activeClassName = "underline";

  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          {children}
          
        </div>
        <div className="drawer-side border-collapse  h-auto">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu  w-80 bg-accent rounded text-lime-100">
            {/* <!-- Sidebar content here --> */}

            <div className="collapse collapse-arrow bg-secondary">
              <input type="checkbox" className="peer" />
              <div className="collapse-title font-medium">
                <NavLink to="/dashboard/parents">Dashboard</NavLink>
              </div>
              <div className="collapse-content peer-checked:bg-accent">
                <li className="mt-0.5">
                  <NavLink to="/dashboard/parents">Admin</NavLink>
                </li>
                <li className="mt-0.5">
                  <NavLink to="/dashboard/parents">Teachers</NavLink>
                </li>
                <li className="mt-0.5 ">
                  <NavLink to="/dashboard/parents">Parents</NavLink>
                </li>
                <li className="mt-0.5 ">
                  <NavLink to="/dashboard/parents">Students</NavLink>
                </li>
              </div>
            </div>

            <li className="bg-secondary mt-0.5">
              <NavLink to="/dashboard/parents">Parents</NavLink>
            </li>

            <li className="bg-secondary mt-0.5">
              <NavLink to="/dashboard/teachers">Teachers</NavLink>
            </li>

            <li className="bg-secondary mt-0.5">
              <NavLink to="/dashboard/students">Students</NavLink>
            </li>
            <li className="bg-secondary mt-0.5">
              <NavLink to="/dashboard/library">Library</NavLink>
            </li>
            <li className="bg-secondary mt-0.5">
              <NavLink to="/dashboard/account">Account</NavLink>
            </li>
            <li className="bg-secondary mt-0.5">
              <NavLink to="/dashboard/classes">Classes</NavLink>
            </li>
            <li className="bg-secondary mt-0.5">
              <NavLink to="/dashboard/subjects">Subjects</NavLink>
            </li>
            <li className="bg-secondary mt-0.5">
              <NavLink to="/dashboard/class-routines">Class Routines</NavLink>
            </li>
            <li className="bg-secondary mt-0.5">
              <NavLink to="/dashboard/attendance">Attendance</NavLink>
            </li>
            <li className="bg-secondary mt-0.5">
              <NavLink to="/dashboard/exam">Exam</NavLink>
            </li>
            <li className="bg-secondary my-0.5">
              <NavLink to="/dashboard/settings">Setting</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
