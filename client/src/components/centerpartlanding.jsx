import React from "react";

import vectordownarrow from "../assets/vectordownarrow.svg";
import Card from "./card";
import LineChartComponent from "./Chart";

const Centerpartlandingpage = () => {
  return (
    <div className="flex flex-col  p-8 gap-5">
      <div className="flex gap-1 items-center text-center">
        Today
        <span>
          <button>
            <img src={vectordownarrow} alt="vectordownarrow" />
          </button>
        </span>
      </div>
      <div className="flex justify-around">
        <div>
          <Card tag="Views" count="721K" percent="+11.02" col="blue" />
        </div>
        <div>
          <Card tag="Visit" count="367K" percent="-0.03" col="gray" />
        </div>
        <div>
          <Card tag="New Users" count="1,156" percent="+15.03" col="blue" />
        </div>
        <div>
          <Card tag="Active Users" count="239K" percent="+6.08" col="gray" />
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl p-2 text-gray-500">
        <div className="flex gap-3 p-3 pl-5">
          <div className="font-semibold text-black">Total Users</div>
          <div>Total Projects</div>
          <div>Operating Status</div>
          <div>|</div>
          <div className="flex gap-4">
            <div className="flex gap-1 items-center">
              <div className="h-1 w-1 bg-cyan-700 rounded-full"></div>
              <div className=""> This year</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="h-1 w-1 bg-black rounded-full"></div>
              <div className=""> Last year</div>
            </div>
          </div>
        </div>
        <LineChartComponent />
      </div>
      <div>traffic</div>
    </div>
  );
};

export default Centerpartlandingpage;
