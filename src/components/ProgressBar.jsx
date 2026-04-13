import React from "react";
import { useTask } from "../hook/useTask.js";
import "../styles/ProgressBar.css";

function ProgressBar() {
  const { progress } = useTask();

  const percent = progress.toFixed(0);

  return (
    <div className="progress-main box">
      <div className="progress-wrapper">
        <div className="progress-header">
          <h2>Today's Progress</h2>
          <div className="progress-stat-circle">
            <span>{percent}% Done</span>
            <span
              className="progress-circle"
              style={{ "--progress": `${progress}%` }}
            ></span>
          </div>
        </div>
        <div className="progress-stat-bar">
          <span>{percent}% Complete</span>
          <span
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
