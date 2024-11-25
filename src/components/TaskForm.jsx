import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./../styles/TaskForm.css";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), title, completed: false });
    setTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleAddTask}>
      <input
        className="task-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button className="task-button" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
