import axios from "axios";
import React, { useEffect, useState } from "react";
import UserGrid from "./UserGrid";
import Spinner from "../global/Spinner";
import { LIMITS } from "../global/Urls";
import { employeeActions } from "../../store/employee";
import { useDispatch, useSelector } from "react-redux";

const Admin = ({ page }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const admin = useSelector((state) => state.employee.admin);
  const current = admin.slice((page - 1) * 5, page * 5);

  //  fetching data using axios (async...await)
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://60f2479f6d44f300177885e6.mockapi.io/users",
          {
            params: {
              user_type: "admin",
              page,
              limit: LIMITS,
            },
          }
        );
        dispatch(employeeActions.addAdmin(response.data));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setIsError(true);
      }
    }
    if (current.length < 1) fetchData();
  }, [current.length, dispatch, page]);

  if (isError) return <div className="center">Something went wrong</div>;
  if (isLoading) return <Spinner />;

  return <>{current && <UserGrid users={current} />}</>;
};

export default Admin;
