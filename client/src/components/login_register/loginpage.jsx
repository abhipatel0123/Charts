import React from "react";
import Loginmodal from "./loginmodal";

import room_view from "../../assets/room_view.svg";

const Loginpage = ({ setloggedin }) => {
  return (
    <div className="flex w-full justify-evenly items-center h-screen">
      <div className="w-full h-full flex items-center max-md:hidden">
        <div className="relative overflow-hidden h-full flex items-center">
          <div className="absolute -m-20 inset-0 bg-[#d6d6d6] transform top-1/4 skew-y-6  h-2/4 w-11/12"></div>
          <div className="absolute -m-20  bg-[#d6d6d6] transform bottom-1/4 top-1/2 -skew-y-6  h-2/4 w-11/12"></div>
          <img src={room_view} className="relative z-10 h-full " />
        </div>
      </div>
      <div className="w-full h-full items-center flex">
        <Loginmodal setloggedin={setloggedin} />
      </div>
    </div>
  );
};

export default Loginpage;
