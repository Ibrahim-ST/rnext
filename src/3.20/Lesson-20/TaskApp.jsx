import React from "react";
import { TasksProvider } from "../contexts/TasksContext";

import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const TaskApp = () => {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
};

export default TaskApp;
