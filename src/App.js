import React from "react";
import ReactDOM from "react-dom";
import SignupForm from "./components/Form";
import Backdrop from "./components/Backdrop";
import { Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":userId" element={<User />} />
      </Routes>

      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <SignupForm />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default App;
