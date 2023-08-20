import React from "react";
import User from "./User";

const UserGrid = ({ users }) => {
  return (
    <div className="user-grid">
      <div className="grid-header radius-5">
        <div className="flex-1">User First Name</div>
        <div className="flex-1 last-name">User Last Name</div>
        <div className="flex-1">Role</div>
        <div className="flex-1">Division</div>
        <div className="flex-1 district">District</div>
        <div className="flex-1 text-center">View</div>
      </div>
      <ul>
        {users.map((user) => (
          <User key={user.id} data={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserGrid;
