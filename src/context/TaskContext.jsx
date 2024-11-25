import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const storedTasks = JSON.parse(localStorage.getItem(`tasks_${currentUser}`)) || [];
      setTasks(storedTasks);
    }
  }, []);

  const addTask = (task) => {
    setTasks((prev) => {
      const updatedTasks = [...prev, task];
      persistTasks(updatedTasks);
      return updatedTasks;
    });
  };

  const updateTask = (id, updatedTask) => {
    setTasks((prev) => {
      const updatedTasks = prev.map((task) => (task.id === id ? updatedTask : task));
      persistTasks(updatedTasks);
      return updatedTasks;
    });
  };

  const deleteTask = (id) => {
    setTasks((prev) => {
      const updatedTasks = prev.filter((task) => task.id !== id);
      persistTasks(updatedTasks);
      return updatedTasks;
    });
  };

  const persistTasks = (tasks) => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) localStorage.setItem(`tasks_${currentUser}`, JSON.stringify(tasks));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
