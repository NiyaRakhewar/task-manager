import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("currentUser");
    if (loggedInUser) setUser(JSON.parse(loggedInUser));
  }, []);

  const login = (username, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || {};
    if (storedUsers[username]?.password === password) {
      localStorage.setItem("currentUser", JSON.stringify(username));
      setUser(username);
      return true;
    }
    return false;
  };

  const register = (username, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || {};
    if (storedUsers[username]) return false;
    storedUsers[username] = { password };
    localStorage.setItem("users", JSON.stringify(storedUsers));
    return true;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
