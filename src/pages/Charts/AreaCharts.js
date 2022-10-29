import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarCharts = () => {
  const data = [
    {
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mon",
      uv: 4000,
      pv: 2400,
      amt: 2400,
      money: "0k"
    },
    {
      name: "Tue",
      uv: 3000,
      pv: 1398,
      amt: 2210,
      money: "0k"
    },
    {
      name: "Wed",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Thu",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Fri",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sat",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      uv: 2390,
      pv: 3800,
      amt: 2500,
    }
  ];

  const money = [
    {
      
    },
    {
      value: "25k"
    },
    {
      value:"50k"
    },
    {
      value: "75k"
    },
    {
      value: "100k"
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      {/* <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="red" />
        <Bar dataKey="uv" fill="blue" />
      </BarChart> */}
      <AreaChart
        data={data}
        // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
        <YAxis data={money} dataKey={money}/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="red"
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
    </ResponsiveContainer>
  );
};

export default BarCharts;
