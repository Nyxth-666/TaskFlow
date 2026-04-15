import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header className="main-head">
        <div className="head-wrapper">
          <img className="logo" src="./Task-Logo.png"></img>
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
