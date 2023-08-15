import React from "react";
import User from "./User";

const UserGrid = ({ users }) => {
  return (
    <div className="user-grid">
      <div className="grid-header radius-5">
        <div className="flex-1">User First Name</div>
        <div className="flex-1">User Last Name</div>
        <div className="flex-1">Role</div>
        <div className="flex-1">Division</div>
        <div className="flex-1">District</div>
      </div>
      <ul>
        {users.map((user, index) => (
          <User key={index} data={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserGrid;
