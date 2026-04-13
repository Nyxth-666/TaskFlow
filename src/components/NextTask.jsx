import React from "react";
import { useTask } from "../hook/useTask.js";
import { formatDraftedTime } from "../utils/TimeUtils";
import "../styles/NextTask.css";

function NextTask() {
  const { nextTask } = useTask();

  if (!nextTask) {
    return (
      <div className="next-task-main box">
        <div className="next-task-wrapper">
          <h2>Next Task:</h2>
          <div className="next-task">
            <span className="next-name">No pending tasks</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="next-task-main box">
      <div className="next-task-wrapper">
        <h2>Next Task:</h2>
        <div className="next-task">
          <span className="next-name">{nextTask.title}</span>
          <span className="next-time">
            {formatDraftedTime(nextTask.timeDrafted)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default NextTask;
