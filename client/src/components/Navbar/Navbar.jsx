import React from "react";
import "./Navbar.css";

const Navbar = ({ code, onLogout }) => {
  return (
    <nav>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>

      {code && (
        <a
          className="logout-button"
          onClick={(e) => {
            e.preventDefault();
            onLogout();
          }}
        >
          Logout
        </a>
      )}
    </nav>
  );
};

export default Navbar;
