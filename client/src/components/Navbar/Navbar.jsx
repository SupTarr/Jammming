import React from "react";
import "./Navbar.css";

const clientId = import.meta.env.VITE_API_KEY;
const redirectUri = import.meta.env.VITE_FRONTEND_URL;
const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public`;

const Navbar = ({ code }) => {
  return (
    <nav>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      {!code && (
        <a className="login-button" href={spotifyUrl}>
          LOGIN
        </a>
      )}
    </nav>
  );
};

export default Navbar;
