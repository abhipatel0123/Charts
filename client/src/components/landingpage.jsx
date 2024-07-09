import React, { useState } from "react";
import leftsidepan from "../assets/leftpanel.svg";
import rightpan from "../assets/rightpanel.svg";
import star from "../assets/star.svg";
import history from "../assets/history.svg";
import notify from "../assets/notify.svg";
import search from "../assets/search.svg";
import cmdicon from "../assets/cmdicon.svg";
import mode from "../assets/mode.svg";
import Leftside from "./Left/leftside";
import vectordownarrow from "../assets/vectordownarrow.svg";
import Card from "./card";
import LineChartComponent from "./Chart";
import DevicetrafficChart from "./DevicetrafficChart";
import Traffic_by_Location from "./Traffic_by_Location";
import Rightside from "./Right/Rightside";

const Landingpage = () => {
  const [leftside, setLeftside] = useState(true);
  const [rightside, setRightside] = useState(true);
  const [position, setPosition] = useState("Default");

  const [selectedTag, setSelectedTag] = useState("Overview");
  const [selectedTag1, setSelectedTag1] = useState("Total Users");

  const tags2 = ["Total Users", "Total Projects", "Operating Status"];

  const handleTagClick1 = (tag2) => {
    setSelectedTag1(tag2);
  };

  const tags = [
    "Overview",
    "Targets",
    "Budget",
    "Users",
    "Files",
    "Activity",
    "Settings",
  ];

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  // if (screen.width < 768) {
  //   setLeftside(false);
  //   setRightside(false);
  // } else if (screen.width > 768 && screen.width < 1024) {
  //   setLeftside(true);
  //   setRightside(false);
  // }
  return (
    <div className="w-screen h-screen flex items-center justify-center border border-inline overflow-x-hidden">
      {/* Left of the landing page */}
      {leftside && <Leftside />}
      {/* Center of the Landing page */}
      <div className="w-full  h-full overflow-y-auto">
        {/* Header of the page */}
        <div className=" pt-4 sticky top-0 bg-gray-100">
          <div className="flex justify-between px-5 border-b border-solid h-10 ">
            <div className="flex">
              <button onClick={() => setLeftside(!leftside)}>
                <img src={leftsidepan} alt="leftsidepan" />
              </button>
              <button onClick={() => console.log("star called")}>
                <img src={star} alt="star" />
              </button>
              <div className="px-5 flex gap-3 items-center">
                <span className="text-gray-400">dashboard</span>
                <span>/ </span>
                <span>{position}</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="relative border border-solid  flex h-fit items-center ">
                <img
                  className="absolute flex items-center left-2"
                  src={search}
                  alt="search"
                />
                {/* <div className="flex h"> */}
                <input className="" type="text" />
                {/* </div> */}
                <button
                  onClick={() => console.log("search called")}
                  className="absolute right-2 "
                >
                  <img className="flex right-2" src={cmdicon} alt="cmdicon" />
                </button>
              </div>
              <button onClick={() => console.log("mode called")}>
                <img src={mode} alt="mode" />
              </button>
              <button onClick={() => console.log("history called")}>
                <img src={history} alt="history" />
              </button>
              <button onClick={() => console.log("notify called")}>
                <img src={notify} alt="notify" />
              </button>
              <button onClick={() => setRightside(!rightside)}>
                <img src={rightpan} alt="rightpan" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-5 gap-5">
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
              <Card
                tag="Active Users"
                count="239K"
                percent="+6.08"
                col="gray"
              />
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl text-gray-500">
            <div className="flex gap-3 p-2 pl-5">
              {tags2.map((tag) => (
                <div
                  key={tag}
                  onClick={() => handleTagClick1(tag)}
                  className={`cursor-pointer ${
                    selectedTag1 === tag
                      ? "font-semibold text-black cursor-pointer"
                      : ""
                  }`}
                >
                  {tag}
                </div>
              ))}
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
            <div className="flex gap-3">
              {tags.map((tag) => (
                <div
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`cursor-pointer pl-5 ${
                    selectedTag === tag ? "font-bold text-black underline" : ""
                  }`}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3 justify-around w-full">
            <div className="bg-gray-100 rounded-xl w-full">
              <DevicetrafficChart />
            </div>
            <div className="bg-gray-100 rounded-xl w-full">
              <Traffic_by_Location />
            </div>
          </div>
        </div>
      </div>
      {/* Right of the landing page */}
      {rightside && (
        <div className=" h-full w-1/4 border border-solid pt-4 overflow-y-auto">
          <Rightside />
        </div>
      )}
    </div>
  );
};

export default Landingpage;
