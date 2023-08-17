import React, { useEffect, useState } from "react";
import UserGrid from "./UserGrid";
import Spinner from "./Spinner";

const Employee = ({ employeeData, setemployee }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=Employee&page=1&limit=5"
        );
        if (response.ok) {
          const data = await response.json();
          setemployee(data);
          setIsLoading(false);
        } else {
          console.error(
            "Error fetching data:",
            response.status,
            response.statusText
          );
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (!employeeData) fetchData();
  }, [employeeData, setemployee]);

  if (isError) return <div>Something went wrong</div>;
  if (isLoading) return <Spinner />;

  return <>{employeeData && <UserGrid users={employeeData} />}</>;
};

export default Employee;
