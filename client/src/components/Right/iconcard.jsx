import React from "react";
import bug from "../../assets/bug.svg";
import profile1 from "../../assets/profile1.svg";
import sos from "../../assets/sos.svg";

const Iconcard = ({
  img1,
  text1 = "Bug report",
  time = "1 hour ago",
  showLine,
}) => {
  let imgSrc;

  if (img1 === "bug") {
    imgSrc = bug;
  } else if (img1 === "profile1") {
    imgSrc = profile1;
  } else if (img1 === "sos") {
    imgSrc = sos;
  }

  return (
    <div className="flex items-center">
      <img className="p-2" src={imgSrc} alt={img1} />
      <div className="flex flex-col text-xs">
        <div className="font-bold">{text1}</div>
        <div className="text-gray-500">{time}</div>
      </div>
      {showLine && (
        <div className="h-2 w-0 border border-solid border-black flex pl-5 "></div>
      )}
    </div>
  );
};

export default Iconcard;
