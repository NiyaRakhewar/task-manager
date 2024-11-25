import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./../styles/Login.css";

const Login = () => {
  const { login, register } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      window.location.reload();
    } else {
      setError("Invalid credentials. Try again or register.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (register(username, password)) {
      alert("User registered! You can now log in.");
    } else {
      setError("User already exists.");
    }
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <button onClick={handleRegister}>Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
