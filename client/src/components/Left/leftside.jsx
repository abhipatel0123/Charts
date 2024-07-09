import React, { useState } from "react";

import profile from "../../assets/profile.svg";
import ecomicon from "../../assets/ecomicon.svg";
import onlinestudyicon from "../../assets/onlinestudyicon.svg";
import projecticon from "../../assets/projectsicon.svg";
import defaulticon from "../../assets/default.svg";
import vectorarrow from "../../assets/vectorarrow.svg";

const Leftside = ({ Profilename = "Bye  wind" }) => {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (tagId) => {
    setVisibleAnswers({
      ...visibleAnswers,
      [tagId]: !visibleAnswers[tagId],
    });
  };

  function logout() {
    localStorage.token = "";
    window.location.reload();
  }
  return (
    <>
      <div className="flex flex-col h-full w-1/5 border border-solid pt-4 gap-y-4 pl-5  px-5 overflow-y-auto scrollbar-hide">
        <div className="flex justify-left w-full h-10 items-center justify-between">
          <div className="flex">
            <img className="items-center" src={profile} alt="profile" />
            {Profilename}
          </div>
          <div className=" flex justify-end ">
            <button className="border border-solid" onClick={logout}>
              logout
            </button>
          </div>
        </div>
        <div className="flex justify-start gap-5 ">
          <div className="text-gray-700">Favorites</div>
          <div className="text-gray-300">Recently</div>
        </div>
        <div className=" flex items-center justify-start px-5 text-xl text-gray-400">
          <ul className="list-disc">
            <li className="">Overview</li>
            <li className="">Project</li>
          </ul>
        </div>
        <div className="flex flex-col text-base gap-2">
          <p>Dashboards</p>
          <div className="flex pl-4">
            <span>
              <img src={defaulticon} alt="default icon" />
            </span>
            <span>Default</span>
          </div>
          <div className="flex gap-2 w-full justify-start">
            <span>
              <button className="text-xl" onClick={() => toggleAnswer("tag1")}>
                <img src={vectorarrow} alt="vectorarrow icon" />
              </button>
            </span>
            <div className="flex flex-col items-center gap-3">
              <div className="flex">
                <img src={ecomicon} alt="ecommerce icon" />
                <span>eCommerce</span>
              </div>
              {visibleAnswers["tag1"] && (
                <>
                  <div className="answer ">test1</div>
                  <div className="answer ">test2</div>
                  <div className="answer ">test3</div>
                  <div className="answer ">test4</div>
                  <div className="answer ">test5</div>
                </>
              )}
            </div>
          </div>
          <div className="flex gap-2 w-full justify-start">
            <span>
              <button className="text-xl" onClick={() => toggleAnswer("tag2")}>
                <img src={vectorarrow} alt="vectorarrow icon" />
              </button>
            </span>
            <div className="flex flex-col items-center gap-3">
              <div className="flex">
                <img src={projecticon} alt="project icon" />
                <span>Projects</span>
              </div>
              {visibleAnswers["tag2"] && (
                <>
                  <div className="answer ">test1</div>
                  <div className="answer ">test2</div>
                  <div className="answer ">test3</div>
                  <div className="answer ">test4</div>
                  <div className="answer ">test5</div>
                </>
              )}
            </div>
          </div>
          <div className="flex gap-2 w-full justify-start">
            <span>
              <button className="text-xl" onClick={() => toggleAnswer("tag3")}>
                <img src={vectorarrow} alt="vectorarrow icon" />
              </button>
            </span>
            <div className="flex flex-col items-center gap-3">
              <div className="flex">
                <img src={onlinestudyicon} alt="onlinestudy icon" />
                <span>Online Courses</span>
              </div>
              {visibleAnswers["tag3"] && (
                <>
                  <div className="answer ">test1</div>
                  <div className="answer ">test2</div>
                  <div className="answer ">test3</div>
                  <div className="answer ">test4</div>
                  <div className="answer ">test5</div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col text-base gap-2">
          <p>Pages</p>
          <div className="flex gap-2 w-full justify-start">
            <span>
              <button className="text-xl" onClick={() => toggleAnswer("tag4")}>
                <img src={vectorarrow} alt="vectorarrow icon" />
              </button>
            </span>
            <div className="flex flex-col items-center gap-3">
              <div className="flex">
                <img src={ecomicon} alt="ecommerce icon" />
                <span>User Profile</span>
              </div>
              {visibleAnswers["tag4"] && (
                <>
                  <div className="answer ">test1</div>
                  <div className="answer ">test2</div>
                  <div className="answer ">test3</div>
                  <div className="answer ">test4</div>
                  <div className="answer ">test5</div>
                </>
              )}
            </div>
          </div>
          <div className="flex gap-2 w-full justify-start">
            <span>
              <button className="text-xl" onClick={() => toggleAnswer("tag5")}>
                <img src={vectorarrow} alt="vectorarrow icon" />
              </button>
            </span>
            <div className="flex flex-col items-center gap-3">
              <div className="flex">
                <img src={projecticon} alt="project icon" />
                <span>Account</span>
              </div>
              {visibleAnswers["tag5"] && (
                <>
                  <div className="answer ">test1</div>
                  <div className="answer ">test2</div>
                  <div className="answer ">test3</div>
                  <div className="answer ">test4</div>
                  <div className="answer ">test5</div>
                </>
              )}
            </div>
          </div>
          <div className="flex gap-2 w-full justify-start">
            <span>
              <button className="text-xl" onClick={() => toggleAnswer("tag6")}>
                <img src={vectorarrow} alt="vectorarrow icon" />
              </button>
            </span>
            <div className="flex flex-col items-center gap-3">
              <div className="flex">
                <img src={onlinestudyicon} alt="onlinestudy icon" />
                <span>Corporate</span>
              </div>
              {visibleAnswers["tag6"] && (
                <>
                  <div className="answer ">test1</div>
                  <div className="answer ">test2</div>
                  <div className="answer ">test3</div>
                  <div className="answer ">test4</div>
                  <div className="answer ">test5</div>
                </>
              )}
            </div>
          </div>
          <div className="flex gap-2 w-full justify-start">
            <span>
              <button className="text-xl" onClick={() => toggleAnswer("tag7")}>
                <img src={vectorarrow} alt="vectorarrow icon" />
              </button>
            </span>
            <div className="flex flex-col items-center gap-3">
              <div className="flex">
                <img src={onlinestudyicon} alt="onlinestudy icon" />
                <span>Blog</span>
              </div>
              {visibleAnswers["tag7"] && (
                <>
                  <div className="answer ">test1</div>
                  <div className="answer ">test2</div>
                  <div className="answer ">test3</div>
                  <div className="answer ">test4</div>
                  <div className="answer ">test5</div>
                </>
              )}
            </div>
          </div>
          <div className="flex gap-2 w-full justify-start">
            <span>
              <button className="text-xl" onClick={() => toggleAnswer("tag8")}>
                <img src={vectorarrow} alt="vectorarrow icon" />
              </button>
            </span>
            <div className="flex flex-col items-center gap-3">
              <div className="flex">
                <img src={onlinestudyicon} alt="onlinestudy icon" />
                <span>Social</span>
              </div>
              {visibleAnswers["tag8"] && (
                <>
                  <div className="answer ">test1</div>
                  <div className="answer ">test2</div>
                  <div className="answer ">test3</div>
                  <div className="answer ">test4</div>
                  <div className="answer ">test5</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftside;
