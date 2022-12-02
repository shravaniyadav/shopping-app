import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Stationary = () => {
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
              src="https://source.unsplash.com/400x400/?books"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                books
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
              src="https://source.unsplash.com/400x400/?pen"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Pens
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $7
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
              src="https://source.unsplash.com/400x400/?glitter"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Glitter
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $2
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
              src="https://source.unsplash.com/400x400/?pencil"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Pencil
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $4
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

export default Stationary;
