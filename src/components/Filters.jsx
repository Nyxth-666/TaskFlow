import React from "react";
import "../styles/Filters.css";

function Filters({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-group">
      <button
        className={`all-task ${activeFilter === "all" ? "active" : ""}`}
        onClick={() => onFilterChange("all")}
      >
        ALL TASK
      </button>
      <button
        className={`completed ${activeFilter === "done" ? "active" : ""}`}
        onClick={() => onFilterChange("done")}
      >
        COMPLETED
      </button>
      <button
        className={`overdue ${activeFilter === "overdue" ? "active" : ""}`}
        onClick={() => onFilterChange("overdue")}
      >
        OVERDUE
      </button>
    </div>
  );
}

export default Filters;
