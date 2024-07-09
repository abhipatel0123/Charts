import React from "react";

const Contact = ({ img, name }) => {
  return (
    <div className="flex p-2 items-center gap-3 text-black">
      <img src={img} alt="profile1" />
      <p>{name}</p>
    </div>
  );
};

export default Contact;
