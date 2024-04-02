import React, { useEffect, useState } from "react";
import Users from "./User";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetails from "./UserDetails";


export default function App() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((json) => {
        setUsers(json);
      
      });
  }, []);

  return (
    <div
      style={{
        
        background: "#2F363F",
        color: "#53E0BC",
        width: "100%",
        height: "100vh",
        padding: "16px",
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
                <Users users={users} activeUser={activeUser} setActiveUser={setActiveUser} />
      
            }
          />
          <Route
            path="/:Id"
            element={
                <UserDetails    />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}