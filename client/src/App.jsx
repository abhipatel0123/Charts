// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/dashboard";
import { UserContext } from "./components/UserContext/usercontext";

function App() {
  const [user, setuser] = useState({
    token: null,
  });

  return (
    <UserContext.Provider value={{ user, setuser }}>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default App;
