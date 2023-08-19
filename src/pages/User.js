import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BaseUrl } from "../components/Urls";
import Spinner from "../components/Spinner";
import { overlayActions } from "../store/ovarlay";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/form";

const User = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { userId } = params;

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  const userData = useSelector((state) => state.form.data);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${BaseUrl}/${userId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();

        dispatch(formActions.addHandler(responseData));

        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred while fetching the data.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isError) return <div>Something went wrong</div>;
  if (isLoading)
    return (
      <div className="w-full h-screen center">
        <Spinner />
      </div>
    );
  const userEditHandler = () => {
    dispatch(overlayActions.backdropVisible());
    dispatch(overlayActions.signUpFormVisibleHandler());
    dispatch(formActions.statusHandler("Update"));
  };

  return (
    <div className="container ">
      <div className="mb-2">
        <Link to="/">⬅ Back</Link>
      </div>

      <div className="radius-5 shadow-base p-2 ">
        <div className="flex justify-end mb-2">
          <button onClick={userEditHandler} className="add-user-button">
            Edit
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 ">
            <div className="center">
              <img
                src="https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg"
                alt="user-img"
                className="w-70 rounded-full"
              />
            </div>
            <p className="mt-2 text-center text-2">
              User Name :{" "}
              <span className="font-semibold">
                {`${userData.first_name} ${userData.last_name}`}
              </span>
            </p>
          </div>
          <div className="flex-1">
            {["user_type", "division", "district"].map((el, i) => (
              <p key={i} className="mt-2 text-center text-2">
                {el}: <span className="font-semibold">{userData[el]}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
