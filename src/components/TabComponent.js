import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import Employee from "./Employee";
import { useDispatch, useSelector } from "react-redux";
import { overlayActions } from "../store/ovarlay";
import { formActions } from "../store/form";

const TabComponent = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("admin");

  const nextbtnIsDiable = useSelector(
    (state) => state.ovarlay.nextBtnIsDisiable
  );

  console.log("nextbtnIsDiable", nextbtnIsDiable);
  const previousBtnIsDisiable = useSelector(
    (state) => state.ovarlay.previousBtnIsDisiable
  );

  // previous btn handle (working or not)
  useEffect(() => {
    // Move the logic that updates state based on 'page' to the effect
    if (page > 1) dispatch(overlayActions.previousBtnHandler(false));
    else dispatch(overlayActions.previousBtnHandler(true));
  }, [dispatch, page]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(1); // when change the tab always first page will be call
  };

  // open modal
  const addUserHandler = () => {
    dispatch(overlayActions.backdropVisible());
    dispatch(overlayActions.signUpFormVisibleHandler());
    dispatch(formActions.statusHandler("adding"));
  };

  return (
    <div className="shadow-base radius-5 h-524 relative">
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
          <button onClick={addUserHandler} className="add-user-button">
            Add User
          </button>
        </div>

        {activeTab === "admin" ? (
          <Admin page={page} />
        ) : (
          <Employee page={page} />
        )}
      </div>

      <div className="pagination-btn-box absolute right-3 bottom-4 flex gap-2">
        <button
          disabled={previousBtnIsDisiable}
          onClick={() => setPage((page) => page - 1)}
          className={`${previousBtnIsDisiable ? "not-allowed" : ""}`}
        >
          ⬅ Previous
        </button>
        <button
          disabled={nextbtnIsDiable}
          onClick={() => setPage((page) => page + 1)}
          className={`${nextbtnIsDiable ? "not-allowed" : ""}`}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default TabComponent;
