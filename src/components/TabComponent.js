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
      <div className="tab-buttons flex ">
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
        <div className="flex justify-end mb-2">
          <button onClick={onAddUser} className="add-user-button">
            Add User
          </button>
        </div>

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
