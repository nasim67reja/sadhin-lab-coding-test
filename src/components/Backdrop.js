import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { overlayActions } from "../store/ovarlay";

const Backdrop = () => {
  const dispatch = useDispatch();
  const backdrop = useSelector((state) => state.ovarlay.backdropVisible);

  useEffect(() => {
    if (backdrop) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [backdrop]);

  return (
    <>
      {backdrop && (
        <div
          className="backdrop-bg fixed top-0 left-0 z-1 cursor-pointer h-screen w-full"
          onClick={() => {
            dispatch(overlayActions.backdropHidden());
            dispatch(overlayActions.signUpFormHiddenHandler());
          }}
        ></div>
      )}
    </>
  );
};

export default Backdrop;
