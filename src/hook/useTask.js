import { useTaskContext } from "../context/TaskContext";
import { isOverdue } from "../utils/TimeUtils";
import { useMemo, useCallback } from "react";

export const useTask = () => {
  const { state, dispatch } = useTaskContext();
  const { tasks } = state;

  const addTask = useCallback(
    (title, description) => {
      dispatch({
        type: "ADD_TASK",
        payload: {
          id: Date.now().toString(), // temp simple id
          title,
          description: description || "",
          timeDrafted: new Date().toISOString(),
          done: false,
        },
      });
    },
    [dispatch],
  );

  const toggleDone = useCallback(
    (id) => {
      dispatch({ type: "TOGGLE_DONE", payload: id });
    },
    [dispatch],
  );

  const editTask = useCallback(
    (id, updates) => {
      dispatch({ type: "EDIT_TASK", payload: { id, updates } });
    },
    [dispatch],
  );

  const deleteTask = useCallback(
    (id) => {
      dispatch({ type: "DELETE_TASK", payload: id });
    },
    [dispatch],
  );

  const nextTask = useMemo(() => {
    return tasks.find((task) => !task.done) || null;
  }, [tasks]);

  const progress = useMemo(() => {
    if (tasks.length === 0) return 0;
    return (tasks.filter((t) => t.done).length / tasks.length) * 100;
  }, [tasks]);

  const filteredTasks = useCallback(
    (search = "", filter = "all") => {
      return tasks.filter((task) => {
        const matchesSearch =
          task.title.toLowerCase().includes(search.toLowerCase()) ||
          task.description.toLowerCase().includes(search.toLowerCase());
        let matchesFilter = true;
        if (filter === "done") matchesFilter = task.done;
        else if (filter === "overdue")
          matchesFilter = !task.done && isOverdue(task.timeDrafted);
        return matchesSearch && matchesFilter;
      });
    },
    [tasks],
  );

  return {
    tasks,
    addTask,
    toggleDone,
    editTask,
    deleteTask,
    nextTask,
    progress,
    filteredTasks,
  };
};
