import axios from "axios";
import React, { useEffect } from "react";
import UserGrid from "./UserGrid";

const Admin = ({ adminuserData, setadminUser }) => {
  //  fetching data using axios (async...await)
  useEffect(() => {
    async function fetchData() {
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (!adminuserData) fetchData();
  }, [adminuserData, setadminUser]);

  return <>{adminuserData && <UserGrid users={adminuserData} />}</>;
};

export default Admin;
