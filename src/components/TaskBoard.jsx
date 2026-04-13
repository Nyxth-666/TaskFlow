import React, { useState } from "react";
import { useTask } from "../hook/useTask";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import TaskCard from "./TaskCard";
import "../styles/TaskBoard.css";

function TaskBoard() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const { filteredTasks, tasks } = useTask();

  const filtered = filteredTasks(search, filter);

  return (
    <div className="task-board-main box">
      <div className="task-board-wrapper">
        <div className="task-board-header">
          <h2>Task Board ({tasks.length})</h2>
          <div className="right">
            <SearchBar value={search} onChange={setSearch} />
            <Filters activeFilter={filter} onFilterChange={setFilter} />
          </div>
        </div>
        <ul className="task-list">
          {filtered.length === 0 ? (
            <li className="no-tasks">No tasks found.</li>
          ) : (
            filtered.map((task) => <TaskCard key={task.id} task={task} />)
          )}
        </ul>
      </div>
    </div>
  );
}

export default TaskBoard;
