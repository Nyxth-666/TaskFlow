import React from "react";
import "../styles/TaskCard.css";

function TaskCard() {
  return (
    <>
      <div className="task-card-main">
        <div className="task-card-wrapper">
          <div className="task-name">
            <input type="checkbox" />
            <span className="task-label"></span>
          </div>
          <div className="drafts">
            <span className="draft-label"></span>
          </div>
          <div className="tasks-button">
            <button className="edit">
              <img src="src\assets\pen.png" />
            </button>
            <button className="delete">
              <img src="src\assets\del.png" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
