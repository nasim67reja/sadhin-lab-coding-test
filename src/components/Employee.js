import React, { useEffect } from "react";
import UserGrid from "./UserGrid";

const Employee = ({ employeeData, setemployee }) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=Employee&page=1&limit=5"
        );
        if (response.ok) {
          const data = await response.json();
          setemployee(data);
        } else {
          console.error(
            "Error fetching data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (!employeeData) fetchData();
  }, [employeeData, setemployee]);

  return <>{employeeData && <UserGrid users={employeeData} />}</>;
};

export default Employee;
