import React, { useContext, useEffect, useState } from "react";
import Loginpage from "./login_register/loginpage";
import { UserContext } from "./UserContext/usercontext";
import Landingpage from "./landingpage";
import axios from "axios";

const Dashboard = () => {
  const [loggedin, setloggedin] = useState(true);
  const { user, setuser } = useContext(UserContext);

  useEffect(() => {
    var token = localStorage.getItem("token") || user.token;

    if (token) {
      axios
        .post("https://charts-learnmvp.vercel.app/api/profile", { token: token })
        .then((res) => {
          if (res.data) {
            // setuser(res.data);
            console.log(res);
            setloggedin(false);
            // localStorage.token = user.token;
            // console.log(user.token);
          }
        })
        .catch((err) => {
          console.log("error in the profile" + err);
        });
    }
  }, [user, setuser]);

  return (
    <>
      {loggedin ? (
        <Loginpage setloggedin={setloggedin} />
      ) : (
        <Landingpage setloggedin={setloggedin} />
      )}
    </>
  );
};

export default Dashboard;
