import React, { useState, useEffect } from "react";
import "react-dom";
import "./App.css";
import Navbar from "../Navbar/Navbar.jsx";
import DashBoard from "../Dashboard/DashBoard";

const clientId = import.meta.env.VITE_API_KEY;
const redirectUri = import.meta.env.VITE_FRONTEND_URL;
const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public`;

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
      <div className="App">
        {!code && (
          <a className="login-button" href={spotifyUrl}>
            Login with Spotify
          </a>
        )}
        {code && <DashBoard code={code} />}
      </div>
    </div>
  );
};

export default App;
