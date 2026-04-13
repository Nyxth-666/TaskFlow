import React from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

function TaskBoard() {
  return (
    <>
      <div className="task-board-main">
        <div className="task-board-wrapper">
          <div className="task-board-header">
            <h2>Task Board</h2>
            <div className="right">
              <SearchBar />
              <Filters />
            </div>
          </div>
          <ul className="task-list"></ul>
        </div>
      </div>
    </>
  );
}

export default TaskBoard;
