import "./Filters.css";

function Filters() {

  const handleAllTasks = () => {
    // logic for all tasks
  };

  const handleCompleted = () => {
    // logic for completed tasks
  };

  const handleOverdue = () => {
    // logic for overdue tasks
  };

  return (
    <div className="task-tabs">
      <button className="tab-btn" onClick={handleAllTasks}>
        ALL TASKS
      </button>

      <button className="tab-btn" onClick={handleCompleted}>
        COMPLETED
      </button>

      <button className="tab-btn" onClick={handleOverdue}>
        OVERDUE
      </button>
    </div>
  );
}

export default Filters;