import React from "react";
import "./Home.Module.css";
import diet6 from "../../assets/diet6.jpg";
import diet5 from "../../assets/diet5.jpg";
import diet7 from "../../assets/diet7.jpg";
import diet8 from "../../assets/diet8.jpg";
import diet9 from "../../assets/diet9.jpg";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
const Home = () => {
  document.body.style.backgroundImage = `none`;
  const user = useSelector((state) => state.diet.user);
  console.log(user);
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      <div classNameName="home-container container">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="3"
            ></button>{" "}
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="4"
            ></button>{" "}
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="5"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={diet5} alt="Los Angeles" className="d-block w-100 " />
            </div>
            <div className="carousel-item">
              <img src={diet6} alt="Chicago" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={diet5} alt="New York" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={diet7} alt="New York" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={diet8} alt="New York" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={diet9} alt="New York" className="d-block w-100" />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Home;
