import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header className="main-head">
        <div className="head-wrapper">
          <div className="logo">
            <img src="/src/assets/Task-Logo.png" alt="Logo" />
          </div>
          <div className="title">
            <h1>
              Task<span>Flow</span>
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
