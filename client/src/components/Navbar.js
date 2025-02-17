import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#1E40AF", // Blue color
    color: "white",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "16px",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <nav style={navbarStyle}>
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>My Book </h1>
      <ul style={ulStyle}>
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/admin" style={linkStyle}>
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
