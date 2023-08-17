import axios from "axios";
import React, { useEffect, useState } from "react";
import UserGrid from "./UserGrid";
import Spinner from "./Spinner";

const Admin = ({ adminuserData, setadminUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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
              page: 1,
              limit: 5,
            },
          }
        );
        setadminUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setIsError(true);
      }
    }
    if (!adminuserData) fetchData();
  }, [adminuserData, setadminUser]);

  if (isError) return <div className="center">Something went wrong</div>;
  if (isLoading) return <Spinner />;

  return <>{adminuserData && <UserGrid users={adminuserData} />}</>;
};

export default Admin;
