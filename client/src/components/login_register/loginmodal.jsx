import React, { useContext, useState } from "react";
import Buttoncomponent from "./Buttoncomponent";
import google from "../../assets/google.svg";
import axios from "axios";
import { UserContext } from "../UserContext/usercontext";

const Loginmodal = () => {
  const [signin, setSignin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setuser } = useContext(UserContext);

  async function handlesubmit(e) {
    e.preventDefault();
    // alert(email + " " + password);
    const url = signin ? "login" : "register";
    if (url === "register" && name === "") {
      alert("Please enter your name");
      return;
    }

    if (email === "" && password === "") {
      alert("Please enter all the fields");
      return;
    }

    try {
      let api = `https://charts-learnmvp.vercel.app/api/${url}`;
      // alert("complete");
      console.log("start try");
      console.log(`hello ${api}`);
      // var xhr = new XMLHttpRequest();
      // xhr.withCredentials = true;

      // Rest of your XMLHttpRequest code

      if (url === "register") {
        await axios
          .post(`${api}`, {
            name,
            email,
            password,
          })
          .then(async (res) => {
            //After Register
            if (res.data === "email_already_exist") {
              alert("username already exist use other username");
            } else {
              console.log(res.headers);
              console.log(res);
              console.log("Hello");
              console.log(res.Cookies);
              const d = new Date();
              d.getTime();
              d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
              let expires = "expires=" + d.toUTCString();
              document.cookies = `token=${res.data.token}; ${expires}; path=/;`;
              console.log(res);
              localStorage.setItem("token", res.data.token);
              // const userdetails = await axios.post(
              //   "http://localhost:5000/api/profile",
              //   {
              //     token: res.data.token,
              //   }
              // );

              setuser({
                token: res.data.token,
              });

              // window.location.href = "http://localhost:5173/chart";

              console.log("userdetails", userdetails.data);
            }
          })
          .catch((e) => {
            console.log("error in try of register", e);
          });
      } else if (url === "login") {
        await axios
          .post(`${api}`, {
            email,
            password,
          })
          .then(async (res) => {
            //After Register
            // console.log(res.headers);
            // console.log(res);
            // console.log("Hello")
            // console.log(res.Cookies);
            // if(res)
            if (res.data === "wrong_password") {
              alert("Wrong Password Try again");
            } else if (res.data === "no_email") {
              alert("No user found Please create your account");
            } else {
              console.log(res);
              const d = new Date();
              d.getTime();
              d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
              let expires = "expires=" + d.toUTCString();
              document.cookies = `token=${res.data.token}; ${expires}; path=/;`;

              setuser({
                token: res.data.token,
              });

              console.log(res);
              localStorage.setItem("token", res.data.token);
            }
          })
          .catch((e) => {
            console.log("error in try of login ", e);
          });
      }
    } catch (err) {
      console.log("error after try", err);
    }
  }

  return (
    <>
      {signin ? (
        <>
          <div className="w-3/4  flex flex-col justify-center items-center gap-2 ml-10">
            <div className="text-3xl font-semibold">Welcome back.</div>
            <div className="mt-5 w-full">
              <Buttoncomponent img={google} text="Sign in with Google" />
            </div>
            <div className="flex text-black w-full items-center text-center">
              <hr className="border-[#E5EAF4] w-full" />
              <span className="p-2  min-w-fit">
                Or, sign in with your email
              </span>
              <hr className="border-[#E5EAF4] w-full" />
            </div>
            <div className="items-start w-full text-[#5A7184]">
              Email address
            </div>
            <div className="w-full">
              <input
                className="w-full h-14 border border-[#E5EAF4] rounded-lg p-2"
                value={email}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="items-start w-full text-[#5A7184]">Password</div>
            <div className="w-full">
              <input
                className="w-full h-14 border border-[#E5EAF4] rounded-lg p-2"
                value={password}
                type="password"
                name="passwords"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex items-center ">
                <input
                  className="mr-2 flex items-center"
                  type="checkbox"
                  name="remember"
                />
                Keep me sign in
              </div>
              <div className="text-[#1565D8] cursor-pointer">
                Forgot password?
              </div>
            </div>
            <div className="w-full my-3">
              <button
                className="w-full cursor-pointer"
                type="submit"
                onClick={handlesubmit}
              >
                <Buttoncomponent text="Sign in" />
              </button>
            </div>
            <div className="text-left w-full">
              Don't have account?
              <span
                className="text-[#1565D8] cursor-pointer"
                onClick={() => setSignin(false)}
              >
                Sign up now
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-3/4  flex flex-col justify-center items-center gap-2 ml-10 text-[#5A7184]">
            <div className="text-3xl font-semibold text-black">
              Let's join us
            </div>
            <div className="mt-5 w-full">
              <Buttoncomponent img={google} text="Sign up with Google" />
            </div>
            <div className="flex  w-full items-center text-center">
              <hr className="border-[#E5EAF4] w-full" /> {/* Gray line */}
              <span className="p-2  min-w-fit">
                Or, sign up with your email
              </span>
              <hr className="border-[#E5EAF4] w-full" /> {/* Gray line */}
            </div>
            <div className="items-start w-full text-[#5A7184]">Your name*</div>
            <div className="w-full">
              <input
                className="w-full h-14 border border-[#E5EAF4] rounded-lg p-2"
                value={name}
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="items-start w-full text-[#5A7184]">
              Email address*
            </div>
            <div className="w-full">
              <input
                className="w-full h-14 border border-[#E5EAF4] rounded-lg p-2"
                value={email}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="items-start w-full text-[#5A7184]">Password*</div>
            <div className="w-full">
              <input
                className="w-full h-14 border border-[#E5EAF4] rounded-lg p-2"
                value={password}
                type="password"
                name="passwords"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex items-center ">
                <input
                  className="mr-2 flex items-center"
                  type="checkbox"
                  name="remember"
                />
                Agree to terms and condition
              </div>
            </div>
            <div className="w-full my-3">
              <button
                className="w-full cursor-pointer"
                type="submit"
                onClick={handlesubmit}
              >
                <Buttoncomponent text="Sign up" />
              </button>
            </div>
            <div className="text-left w-full ">
              Already have account?
              <span
                className="text-[#1565D8] ml-1 cursor-pointer"
                onClick={() => setSignin(true)}
              >
                Sign in now
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Loginmodal;
