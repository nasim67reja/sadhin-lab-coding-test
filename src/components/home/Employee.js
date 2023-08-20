import React, { useEffect, useState } from "react";
import UserGrid from "./UserGrid";
import Spinner from "../global/Spinner";
import { LIMITS } from "../global/Urls";
import { useDispatch, useSelector } from "react-redux";
import { overlayActions } from "../../store/ovarlay";
import { employeeActions } from "../../store/employee";

const Employee = ({ page }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const employeeU = useSelector((state) => state.employee.employee);
  const current = employeeU.slice((page - 1) * 5, page * 5);
  console.log((page - 1) * 5, page * 5);
  console.log(current, "current", employeeU);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=Employee&page=${page}&limit=${LIMITS}`
        );
        if (response.ok) {
          const data = await response.json();
          dispatch(employeeActions.addEmployee(data));
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
    if (current.length < 1) fetchData();
  }, [page, current.length, dispatch]);

  useEffect(() => {
    if (current && current.length === 0) {
      dispatch(overlayActions.nextsBtnHandler(true));
    } else {
      dispatch(overlayActions.nextsBtnHandler(false));
    }
  }, [current, dispatch]);

  if (isError) return <div>Something went wrong</div>;
  if (isLoading) return <Spinner />;

  return <>{current && <UserGrid users={current} />}</>;
};

export default Employee;
