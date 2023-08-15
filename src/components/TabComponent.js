import React, { useState } from "react";
import Admin from "./Admin";
import Employee from "./Employee";

const TabComponent = ({ onAddUser }) => {
  const [adminUser, setadminUser] = useState(null);
  const [employee, setemployee] = useState(null);

  const [activeTab, setActiveTab] = useState("admin");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-components radius-5">
      <div className="tab-buttons ">
        <button
          className={`cursor-pointer btn ${
            activeTab === "admin" ? "btn-active" : ""
          } `}
          onClick={() => handleTabChange("admin")}
        >
          Admin User List
        </button>
        <button
          className={`cursor-pointer btn ${
            activeTab === "employee" ? "btn-active" : ""
          } `}
          onClick={() => handleTabChange("employee")}
        >
          Employee User List
        </button>
      </div>
      <div className="tab-content">
        <button onClick={onAddUser} className="add-user-button">
          Add User
        </button>
        {activeTab === "admin" ? (
          <Admin adminuserData={adminUser} setadminUser={setadminUser} />
        ) : (
          <Employee employeeData={employee} setemployee={setemployee} />
        )}
      </div>
    </div>
  );
};

export default TabComponent;
