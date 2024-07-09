import React from "react";
import { Tooltip, PieChart, Pie, Cell } from "recharts";

const Traffic_by_Location = () => {
  const locationData = [
    { name: "United States", value: 38.6 },
    { name: "Canada", value: 22.5 },
    { name: "Mexico", value: 30.8 },
    { name: "Other", value: 8.1 },
  ];

  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#8dd1e1",
    "#ffc658",
    "#d0ed57",
    "#a4de6c",
  ];
  return (
    <div className="">
      <h2 className="font-bold pl-10">Traffic by Location</h2>
      <div className="flex">
        <div>
          <PieChart width={200} height={200}>
            <Pie
              data={locationData}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {locationData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="flex flex-col justify-center  ">
          {locationData.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`h-2 w-2 rounded-full`}
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <div>{entry.name}</div>
              <div>{entry.value}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Traffic_by_Location;
