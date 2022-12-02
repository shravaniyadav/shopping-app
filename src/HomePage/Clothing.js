import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Clothing = () => {
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
              src="https://source.unsplash.com/400x400/?airforce1"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Nike Air Force 1
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $110
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
              src="https://source.unsplash.com/400x400/?dress"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Dress
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
              src="https://source.unsplash.com/400x400/?bracelet"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Bracelet
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $150
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
              src="https://source.unsplash.com/400x400/?jeans"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Jean
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $40
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
              src="https://source.unsplash.com/400x400/?shirt"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Shirt
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $20
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
              src="https://source.unsplash.com/400x400/?tshirt"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                T-shirt
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $20
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
              src="https://source.unsplash.com/400x400/?necklace"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Necklace
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $700
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
              src="https://source.unsplash.com/400x400/?ring"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title" style={{ color: `rgb(17, 137, 167)` }}>
                Ring
              </h5>
              <p class="card-text" style={{ color: `rgb(17, 137, 167)` }}>
                $2000
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

export default Clothing;
