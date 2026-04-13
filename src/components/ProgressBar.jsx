import React from "react";
import "../styles/ProgressBar.css";

function ProgressBar() {
  return (
    <>
      <div className="progress-main">
        <div className="progress-wrapper">
          <div className="progress-header">
            <h2>Today's Progress</h2>
            <div className="progress-stat-circle">
              <span>0% Done</span>
              <span className="progress-circle"></span>
            </div>
          </div>
          <div className="progress-bar">
            <span>0% Complete</span>
            <span className="progress-bar"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
