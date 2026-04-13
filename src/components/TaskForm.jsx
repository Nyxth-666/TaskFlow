import React from "react";
import "../styles/TaskForm.css";

function TaskForm() {
  return (
    <>
      <div className="task-main">
        <form className="task-wrapper">
          <div className="task-inputs">
            <div className="task-name">
              <span>Task Name</span>
              <input type="text" placeholder="Enter Task Name..." />
            </div>
            <div className="task-desc">
              <span>Description</span>
              <input type="text" placeholder="Enter Description..." />
            </div>
          </div>
          <button className="add-task-button">Add Task</button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;
