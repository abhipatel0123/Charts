import React from "react";
import stockplus from "../assets/stockplus.svg";
import stockminus from "../assets/stockminus.svg";

const Card = ({
  tag = "Views",
  count = "721K",
  percent = "-11.02",
  col = "gray",
}) => {
  if (percent < 0) {
    var tag = <img src={stockminus} className="w-4 h-4" />;
  } else {
    var tag = <img src={stockplus} className="w-4 h-4" />;
  }
  return (
    <div>
      <div
        className={`h-20 w-44 rounded-xl border border-solid p-2 font-semibold flex flex-col gap-3 ${
          col == "gray" ? "bg-gray-100" : "bg-blue-100"
        }`}
      >
        <div>Views</div>
        <div className="flex gap-5 text-center items-center">
          <div className="flex justify-start text-xl">{count}</div>
          <div className="font-normal text-xs flex gap-2 ">
            {percent}
            {tag}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
