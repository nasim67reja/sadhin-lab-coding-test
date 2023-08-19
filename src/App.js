import React from "react";
import ReactDOM from "react-dom";
import SignupForm from "./components/Form";
import Backdrop from "./components/Backdrop";
import { Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";
import Test from "./pages/Category";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/another" element={<Test />} />

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
