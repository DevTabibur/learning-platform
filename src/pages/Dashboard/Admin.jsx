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

const Admin = () => {
  const data = [
    {
      "name": "Mon",
      "uv": 4000,
      "pv": 2400,
      "amt": 1000
    },
    {
      "name": "Tue",
      "uv": 3000,
      "pv": 1398,
      "amt": 800
    },
    {
      "name": "Wed",
      "uv": 2000,
      "pv": 9800,
      "amt":600
    },
    {
      "name": "Thu",
      "uv": 2780,
      "pv": 3908,
      "amt": 400
    },
    {
      "name": "Fri",
      "uv": 1890,
      "pv": 4800,
      "amt": 350
    },
    {
      "name": "Sat",
      "uv": 2390,
      "pv": 3800,
      "amt": 300
    },
    {
      "name": "Sun",
      "uv": 3490,
      "pv": 4300,
      "amt": 100
    }
  ]

  return (
    <>
      <h2 className="text-2xl mb-5 font-semibold">Admin Dashboard</h2>

      <div className="md:grid grid-cols-4 gap-4 mb-4">
        <div className="first-col">
          <div className="card card-side bg-base-100 border rounded-none p-5 clear-both">
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

        <div className="second-col">
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

        <div className="third-col">
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

        <div className="fourth-col">
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
      </div>

      {/* charts */}
      <div className="md:flex flex-row gap-4 mt-10">
        <div className="earnings-chart relative shadow border basis-1/2 w-50">
        <h2 className="text-2xl mb-5">Earnings</h2>
          <AreaChart
            width={540}
            height={400}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>

        <div className="expenses-chart basis-1/4">22</div>

        <div className="students-chart basis-1/4">33</div>
      </div>
    </>
  );
};

export default Admin;
