import React from "react";
import "./HomePage.css";

import { Link } from "react-router-dom";

const HomePage = () => {
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
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/1600x728/?phone,laptop,computer"
                className="d-block w-100"
                alt="..."
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>Electronics</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/1600x728/?cloathing,shoes"
                className="d-block w-100"
                alt="..."
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>Clothing</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/1600x728/?food"
                className="d-block w-100"
                alt="..."
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>Food & Groceries</h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
