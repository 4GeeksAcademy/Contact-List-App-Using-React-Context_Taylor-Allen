import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/home">
        <span className="navbar-brand ms-3 h1">Taylor's Contact List</span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-success me-3 mt-1 mb-1">
            Add New Contact
          </button>
        </Link>
      </div>
    </nav>
  );
};
