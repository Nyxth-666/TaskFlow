import React from "react";
import "../styles/NextTask.css";

function NextTask() {
  return (
    <>
      <div className="next-task-main box">
        <div className="next-task-wrapper">
          <h2>Next Task:</h2>
          <div className="next-task">
            <span className="next-name"></span>
            <span className="next-time"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NextTask;
