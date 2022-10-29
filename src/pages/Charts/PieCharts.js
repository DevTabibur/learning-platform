import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const PieCharts = () => {
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];
  const data03 = [
    {
      name: "Abul",
      value: 700,
      color: "red",
    },
    {
      name: "Mukul",
      value: 100,
    },
  ];

  return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart >
          <Pie
            data={data03}
            dataKey="value"
            nameKey="name"
            outerRadius={50}
            fill="color"
          />
          {/* <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="auto"
          cy="auto"
          innerRadius={60}
          outerRadius={80}
          fill="accent"
          label
        /> */}
        </PieChart>
      </ResponsiveContainer>
  );
};

export default PieCharts;
