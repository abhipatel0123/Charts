import React from "react";
import Iconcard from "./iconcard";
import Contact from "./Contact";
import Female06 from "../../assets/Female06.png";

const Rightside = () => {
  return (
    <div className="gap-3 px-5">
      <div className="flex flex-col gap-2">
        Notification
        <Iconcard img1="bug" text1="You Fixed a bug" time="Just now" />
        <Iconcard
          img1="profile1"
          text1="New user registered"
          time="59 min ago"
        />
        <Iconcard img1="bug" text1="You Fixed a bug" time="12 hour ago" />
        <Iconcard
          img1="sos"
          text1="Andi lane subscribed you"
          time="Today 11.59 AM"
        />
      </div>
      <div className="flex flex-col gap-2">
        Activities
        <Iconcard
          img1="bug"
          text1="You Fixed a bug"
          time="Just now"
          showline={true}
        />
        {/* <div className="h-2 w-0 border border-solid border-black"></div> */}
        <Iconcard
          img1="profile1"
          text1="New user registered"
          time="59 min ago"
        />
        <Iconcard img1="bug" text1="You Fixed a bug" time="12 hour ago" />
        <Iconcard
          img1="sos"
          text1="Andi lane subscribed you"
          time="Today 11.59 AM"
        />
      </div>
      <div>
        Contacts
        <Contact img={Female06} name="Andi lane" />
        <Contact img={Female06} name="Andi lane" />
        <Contact img={Female06} name="Andi lane" />
        <Contact img={Female06} name="Andi lane" />
        <Contact img={Female06} name="Andi lane" />
        <Contact img={Female06} name="Andi lane" />
      </div>
    </div>
  );
};

export default Rightside;
