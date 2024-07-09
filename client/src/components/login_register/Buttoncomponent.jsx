import React from "react";

const Buttoncomponent = ({ img = null, text }) => {
  return (
    <div className="w-full h-14">
      {img != null ? (
        <div className="flex items-center  justify-center bg-blue-600 rounded-lg">
          <img src={img} className="w-16 h-16" />
          <div className="w-full text-white text-base h-full flex justify-center text-center items-center">
            {text}
          </div>
        </div>
      ) : (
        <div className="flex items-center  justify-center bg-blue-600 rounded-lg w-full text-white h-full text-center text-xl">
          {text}
        </div>
      )}
    </div>
  );
};

export default Buttoncomponent;
