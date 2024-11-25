import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./../styles/TaskManager.css"
const TaskManager = () => {
  const { logout } = useContext(AuthContext);

  return (
  <div style={{display: "flex", justifyContent: "space-between", gap:"3rem", alignItems: "flex-start"}}>
   <div style={{marginTop: "2rem"}}>
   <TaskForm />
   <TaskList />
   </div>
   <button style={{alignSelf: "flex-start", padding:"0.5rem 0.5rem", borderRadius:"0.5rem", backgroundColor:"#e74c3c",border: "none", color: "whitesmoke"}} onClick={logout}>Logout</button>
    </div>
  );
};

export default TaskManager;
