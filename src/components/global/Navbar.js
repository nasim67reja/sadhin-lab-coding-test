import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex navbar justify-between p-2 border-1">
      <div className="nav-item">Logo</div>
      <nav className="flex gap-2">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/category" className="nav-item">
          Category
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
