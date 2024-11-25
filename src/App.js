import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import TaskManager from "./components/TaskManager";
import Login from "./components/Login";
import "./App.css";
const App = () => {
  const { user } = useContext(AuthContext);

  return <div className="App">{user ? <TaskManager /> : <Login />}</div>;
};

export default App;
