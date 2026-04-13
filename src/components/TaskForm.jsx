import React, { useState } from "react";
import { useTask } from "../hook/useTask";
import "../styles/TaskForm.css";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title.trim(), description.trim());
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="task-main box">
      <form className="task-wrapper" onSubmit={handleSubmit}>
        <div className="task-inputs">
          <div className="task-name">
            <span>Task Name</span>
            <input
              type="text"
              placeholder="Enter Task Name..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="task-desc">
            <span>Description</span>
            <input
              type="text"
              placeholder="Enter Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="add-task-button">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
