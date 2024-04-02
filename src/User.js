import React from "react";
import { Link } from "react-router-dom";

export default function Users({ users, }) {
  return (
    <div
      style={{
        height: "100vh",
        border: "2px solid #6e6e6e",
        padding: "16px",
        borderRadius: "8px",
        width: "40%",
      }}
    >
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

function UserItem({ user }) {


  return (
    <Link to={`/${user.id}`} style={{ textDecoration: "none" }}>    <div
      
        style={{
          padding: "8px",
          background:  "#586776",
          marginTop: 8,
          borderRadius: "8px",
          color:  "#53E0BC",
          cursor:"pointer",
        }}
      >
        <h2 >{user.name}</h2>
      </div>
    </Link>
  );
}
