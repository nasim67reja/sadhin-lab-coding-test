import React from "react";
import ReactDOM from "react-dom";
import SignupForm from "./components/global/Form";
import Backdrop from "./components/global/Backdrop";
import { Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";
import Navbar from "./components/global/Navbar";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />

        <Route path=":userId" element={<User />} />
      </Routes>

      {/* Ovarlay */}
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
