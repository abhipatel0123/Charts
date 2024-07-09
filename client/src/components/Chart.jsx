import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", thisYear: 10000000, lastYear: 15000000 },
  { name: "Feb", thisYear: 12000000, lastYear: 20000000 },
  { name: "Mar", thisYear: 18256598, lastYear: 18000000 },
  { name: "Apr", thisYear: 14000000, lastYear: 15000000 },
  { name: "May", thisYear: 17000000, lastYear: 17000000 },
  { name: "Jun", thisYear: 20000000, lastYear: 25000000 },
  { name: "Jul", thisYear: 22000000, lastYear: 27000000 },
];

const formatYAxis = (tickItem) => {
  if (tickItem === 0) return "0";
  return `${tickItem / 1000000}M`;
};

const LineChartComponent = () => {
  // Define default props here
  const defaultTicks = [0, 10000000, 20000000, 30000000];
  const defaultFormat = (value) => new Intl.NumberFormat("en").format(value);

  return (
    <ResponsiveContainer width="100%" height={215}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatYAxis} ticks={defaultTicks} />
        <Tooltip formatter={defaultFormat} />
        <Line
          type="monotone"
          dataKey="thisYear"
          stroke="#00BCE3"
          dot={false}
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="lastYear"
          stroke="#000000"
          strokeWidth={5}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
