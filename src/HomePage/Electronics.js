import React from "react";
import { Link } from "react-router-dom";
// import "./HomePage.css";
import "./Electronics.css"

const Electronics = () => {
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
          <div class="card" style={{width: `18rem`, backgroundColor: `rgb(4, 19, 20)`}}>
            <img src="https://source.unsplash.com/400x400/?headphones" class="card-img-top" alt="...">
            </img>
            <div class="card-body">
              <h5 class="card-title" style={{color: `rgb(17, 137, 167)`}}>Headphones</h5>
              <p class="card-text" style={{color: `rgb(17, 137, 167)`}}>
                $200
              </p>
              <a href="#" class="btn btn-primary">
                Purchase
              </a>
            </div>
          </div>
          <div class="card" style={{width: `18rem`, backgroundColor: `rgb(4, 19, 20)`}}>
            <img src="https://source.unsplash.com/400x400/?iphone" class="card-img-top" alt="...">
            </img>
            <div class="card-body">
              <h5 class="card-title" style={{color: `rgb(17, 137, 167)`}}>Apple iPhone</h5>
              <p class="card-text" style={{color: `rgb(17, 137, 167)`}}>
                $500
              </p>
              <a href="#" class="btn btn-primary">
                Purchase
              </a>
            </div>
          </div>
          <div class="card" style={{width: `18rem`, backgroundColor: `rgb(4, 19, 20)`}}>
            <img src="https://source.unsplash.com/400x400/?ipad" class="card-img-top" alt="...">
            </img>
            <div class="card-body">
              <h5 class="card-title" style={{color: `rgb(17, 137, 167)`}}>Apple Ipad</h5>
              <p class="card-text" style={{color: `rgb(17, 137, 167)`}}>
                $700
              </p>
              <a href="#" class="btn btn-primary">
                Purchase
              </a>
            </div>
          </div>
          <div class="card" style={{width: `18rem`, backgroundColor: `rgb(4, 19, 20)`}}>
            <img src="https://source.unsplash.com/400x400/?laptop" class="card-img-top" alt="...">
            </img>
            <div class="card-body">
              <h5 class="card-title" style={{color: `rgb(17, 137, 167)`}}>Laptop</h5>
              <p class="card-text" style={{color: `rgb(17, 137, 167)`}}>
                $1000
              </p>
              <a href="#" class="btn btn-primary">
                Purchase
              </a>
            </div>
          </div>
          <div class="card" style={{width: `18rem`, backgroundColor: `rgb(4, 19, 20)`}}>
            <img src="https://source.unsplash.com/400x400/?applewatch" class="card-img-top" alt="...">
            </img>
            <div class="card-body">
              <h5 class="card-title" style={{color: `rgb(17, 137, 167)`}}>Apple Watch</h5>
              <p class="card-text" style={{color: `rgb(17, 137, 167)`}}>
                $400
              </p>
              <a href="#" class="btn btn-primary">
                Purchase
              </a>
            </div>
          </div>
          <div class="card" style={{width: `18rem`, backgroundColor: `rgb(4, 19, 20)`}}>
            <img src="https://source.unsplash.com/400x400/?monitor" class="card-img-top" alt="...">
            </img>
            <div class="card-body">
              <h5 class="card-title" style={{color: `rgb(17, 137, 167)`}}>Monitor</h5>
              <p class="card-text" style={{color: `rgb(17, 137, 167)`}}>
                $200
              </p>
              <a href="#" class="btn btn-primary">
                Purchase
              </a>
            </div>
          </div>
          <div class="card" style={{width: `18rem`, backgroundColor: `rgb(4, 19, 20)`}}>
            <img src="https://source.unsplash.com/400x400/?keyboard" class="card-img-top" alt="...">
            </img>
            <div class="card-body">
              <h5 class="card-title" style={{color: `rgb(17, 137, 167)`}}>keyboard</h5>
              <p class="card-text" style={{color: `rgb(17, 137, 167)`}}>
                $30
              </p>
              <a href="#" class="btn btn-primary">
                Purchase
              </a>
            </div>
          </div>
          <div class="card" style={{width: `18rem`, backgroundColor: `rgb(4, 19, 20)`}}>
            <img src="https://source.unsplash.com/400x400/?mouse,electonics" class="card-img-top" alt="...">
            </img>
            <div class="card-body">
              <h5 class="card-title" style={{color: `rgb(17, 137, 167)`}}>Mouse</h5>
              <p class="card-text" style={{color: `rgb(17, 137, 167)`}}>
                $20
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

export default Electronics;
