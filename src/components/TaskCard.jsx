import React from "react";
import { useTask } from "../hook/useTask";
import { formatDraftedTime, isOverdue } from "../utils/TimeUtils";
import "../styles/TaskCard.css";

function TaskCard({ task }) {
  const { toggleDone, editTask, deleteTask } = useTask();

  const handleToggle = () => toggleDone(task.id);
  const handleEdit = () => {
    const newTitle = prompt("Edit title:", task.title);
    const newDesc = prompt("Edit description:", task.description);
    if (newTitle !== null) {
      editTask(task.id, {
        title: newTitle.trim() || task.title,
        description: newDesc || task.description,
      });
    }
  };
  const handleDelete = () => {
    if (confirm("Delete this task?")) {
      deleteTask(task.id);
    }
  };

  return (
    <li className="task-card-main">
      <div className="task-card-wrapper">
        <div className="task-card-name">
          <input type="checkbox" checked={task.done} onChange={handleToggle} />
          <span className={`task-label ${task.done ? "done" : ""}`}>
            {task.title}
          </span>
        </div>
        <div className="card-drafts">
          <span className="draft-label">
            {formatDraftedTime(task.timeDrafted)}
          </span>
          {!task.done && isOverdue(task.timeDrafted) && (
            <span className="overdue-badge">Overdue</span>
          )}
        </div>
        <div className="card-tasks-button">
          <button className="edit" onClick={handleEdit} title="Edit">
            <img src=".\src\assets\pen.png" alt="Edit" />
          </button>
          <button className="delete" onClick={handleDelete} title="Delete">
            <img src=".\src\assets\del.png" alt="Del" />
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskCard;
