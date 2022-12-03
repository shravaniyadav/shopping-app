import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="home" to="/home">
        Home
      </Link>
      <Link className="electronics" to="/electronics">
        Electronics
      </Link>
      <Link className="clothing" to="/clothing">
        Clothing & Jewelery
      </Link>
      <Link className="hardware" to="/hardware">
        Hardware
      </Link>
      <Link className="food" to="/food">
        Food & Groceries
      </Link>
      <Link className="stationary" to="/Stationary">
        Stationary
      </Link>
      <Link className="logout" to="/">
        logout
      </Link>
    </div>
  );
};

export default NavBar;
