import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./../styles/TaskList.css";

const TaskList = () => {
  const { tasks, updateTask, deleteTask } = useContext(TaskContext);

  return (
    <ol>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={task.completed ? "completed" : ""}
        >
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                updateTask(task.id, { ...task, completed: !task.completed })
              }
            />
            {task.title}
          </div>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ol>
  );
};

export default TaskList;
