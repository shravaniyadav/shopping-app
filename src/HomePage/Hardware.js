import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";

const Hardware = () => {
  return (
    <div>
      <NavBar />
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
