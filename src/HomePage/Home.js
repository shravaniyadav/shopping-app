import React from "react";
import "./Home.css";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
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
                src="https://source.unsplash.com/1600x728/?laptops,phone,computer"
                className="d-block w-100"
                alt="..."
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>Electronics</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/1600x728/?cloathing"
                className="d-block w-100"
                alt="..."
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>Clothing</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/1600x728/?groceries"
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

export default Home;
