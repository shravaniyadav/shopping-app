import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Hardware = () => {
  return (
    <div>
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
      <div className="body">
        <div className="cards">
          <div
            class="card"
            style={{ width: `18rem`, backgroundColor: `rgb(4, 19, 20)` }}
          >
            <img
              src="https://source.unsplash.com/400x400/?screwdriver"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Screwdriver
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $10
              </p>
              <a href="#" class="btn btn-primary">
                Purchase
              </a>
            </div>
          </div>
          <div
            class="card"
            style={{ width: `18rem`, backgroundColor: `rgb(4, 19, 20)` }}
          >
            <img
              src="https://source.unsplash.com/400x400/?hammer"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Hammer
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $70
              </p>
              <a href="#" class="btn btn-primary">
                Purchase
              </a>
            </div>
          </div>
          <div
            class="card"
            style={{ width: `18rem`, backgroundColor: `rgb(4, 19, 20)` }}
          >
            <img
              src="https://source.unsplash.com/400x400/?saw"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Saw
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $50
              </p>
              <a href="#" class="btn btn-primary">
                Purchase
              </a>
            </div>
          </div>
          <div
            class="card"
            style={{ width: `18rem`, backgroundColor: `rgb(4, 19, 20)` }}
          >
            <img
              src="https://source.unsplash.com/400x400/?spanner"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Spanner
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $10
              </p>
              <a href="#" class="btn btn-primary">
                Purchase
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hardware;
