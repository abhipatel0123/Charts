import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const DevicetrafficChart = () => {
  const deviceData = [
    { name: "Linux", value: 2000000 },
    { name: "Mac", value: 22000000 },
    { name: "iOS", value: 23000000 },
    { name: "Windows", value: 25000000 },
    { name: "Android", value: 11000000 },
    { name: "Other", value: 22000000 },
  ];

  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#d0ed57",
    "#a4de6c",
    "#8dd1e1",
  ];

  const formatYAxis = (tickItem) => {
    if (tickItem === 0) return "0";
    return `${tickItem / 1000000}M`;
  };

  return (
    <div className="">
      <p className="font-bold pl-5">Traffic By Devices</p>
      <BarChart
        width={500}
        height={200}
        data={deviceData}
        margin={{ top: 20, right: 0, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis className="text-xs" dataKey="name" />
        <YAxis tickFormatter={formatYAxis} />
        <Tooltip />
        <Bar dataKey="value">
          {deviceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default DevicetrafficChart;
