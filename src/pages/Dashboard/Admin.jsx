import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faPersonChalkboard,
  faPeopleGroup,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useAdmin from "../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { Navigate, useNavigate } from "react-router-dom";
import PieCharts from "../Charts/PieCharts";
import AreaCharts from "../Charts/AreaCharts";

const Admin = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <>
      <h2 className="text-2xl mb-5 font-semibold">Admin Dashboard</h2>
      {/* <div className="grid md:grid-cols-4 gap-4 mb-4">
        <div className="first-col shadow-lg">
          <div className="card">
            <div className=" parent-icon mr-11">
              <FontAwesomeIcon
                className="text-info text-5xl"
                icon={faBookOpenReader}
              />
            </div>
            <div className="card-body  text-center p-0">
              <h2 className="text-xl font-semibold">Students</h2>
              <p>20000</p>
            </div>
          </div>
        </div>

        <div className="second-col shadow-lg">
          <div className="card card-side bg-base-100 border rounded-none p-5 clear-both">
            <div className=" parent-icon2 mr-11">
              <FontAwesomeIcon
                className="text-accent text-5xl"
                icon={faPersonChalkboard}
              />
            </div>
            <div className="card-body  text-center p-0">
              <h2 className="text-xl font-semibold">Teachers</h2>
              <p>1500</p>
            </div>
          </div>
        </div>

        <div className="third-col shadow-lg">
          <div className="card card-side bg-base-100 border rounded-none p-5 clear-both">
            <div className=" parent-icon3 mr-11">
              <FontAwesomeIcon
                className="text-success text-5xl"
                icon={faPeopleGroup}
              />
            </div>
            <div className="card-body  text-center p-0">
              <h2 className="text-xl font-semibold">Parents</h2>
              <p>15000</p>
            </div>
          </div>
        </div>

        <div className="fourth-col shadow-lg">
          <div className="card card-side bg-base-100 border rounded-none p-5 clear-both">
            <div className=" parent-icon4 mr-11">
              <FontAwesomeIcon
                className="text-warning text-5xl"
                icon={faSackDollar}
              />
            </div>
            <div className="card-body  text-center p-0">
              <h2 className="text-xl font-semibold">$Earnings</h2>
              <p>$234445.04</p>
            </div>
          </div>
        </div>
      </div> */}
      <h2 className="text-3xl font-bold font-serif mb-8 text-center">Admin Analytics</h2>{" "}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-base-100 shadow-lg  rounded-lg p-4">
          <h2 className="text-3xl font-bold font-serif mb-4">Earnings</h2>{" "}
          <AreaCharts />
        </div>
        <div className="bg-base-100 shadow-lg  rounded-lg p-4">
          <h2 className="text-3xl font-bold font-serif  mb-4">All User</h2>{" "}
          <PieCharts />
        </div>
      </div>
    </>
  );
};

export default Admin;
