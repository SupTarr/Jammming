import React, { useState, useEffect } from "react";
import "react-dom";
import "./App.css";
import Navbar from "../Navbar/Navbar.jsx";
import DashBoard from "../Dashboard/DashBoard";

const codeFromURL = new URLSearchParams(window.location.search).get("code");

const App = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    setCode(codeFromURL);
    window.history.replaceState({}, document.title, window.location.pathname);
  }, [codeFromURL]);

  return (
    <div>
      <Navbar code={code} onLogout={() => setCode("")} />
      <div className="App">{code && <DashBoard code={code} />}</div>
    </div>
  );
};

export default App;
