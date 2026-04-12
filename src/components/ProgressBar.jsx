import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ completed, total }) => {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="progress-container">
      <div className="progress-label">
        Today’s Progress: {percentage}% Complete
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="progress-info">
        {completed} of {total} tasks complete
      </div>
    </div>
  );
};

export default ProgressBar;
