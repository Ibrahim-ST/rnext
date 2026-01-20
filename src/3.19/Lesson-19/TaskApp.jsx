import React from "react";
import { TasksContext, TasksDispatchContext } from "../contexts/TasksContext";
import { useReducer } from "react";

const TaskApp = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider
        value={dispatch}
      ></TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TaskApp;
