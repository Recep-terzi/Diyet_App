import React, { useEffect, useState } from "react";
import "./Home.Module.css";
import main1 from "../../assets/main1.jpg";
import main2 from "../../assets/main2.jpg";
import main3 from "../../assets/main3.jpg";
import main4 from "../../assets/main4.jpg";
import main6 from "../../assets/main6.jpg";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  document.body.style.backgroundImage = `none`;
  const user = useSelector((state) => state.diet.user);
  const [loading, setLoading] = useState(true);
  console.log(user);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ExtraNavbar />
          <Navbar />
          <div className="whatsapp-icon">
            <a
              href="https://wa.me/+905300996739"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp />
              <div className="whatsapp-icon-text">
                <p>İletişim için</p>
                <p>+90 530 099 67 39</p>
              </div>
            </a>
          </div>
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
                  <img
                    src={main1}
                    alt="Los Angeles"
                    className="d-block w-100 diet11-setting"
                    style={{ paddingTop: "30px" }}
                  />
                </div>
                <div className="carousel-item">
                  <img src={main2} alt="Chicago" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                  <img src={main3} alt="New York" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                  <img src={main4} alt="New York" className="d-block w-100" />
                </div>

                <div className="carousel-item">
                  <img src={main6} alt="New York" className="d-block w-100" />
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
      )}
    </>
  );
};

export default Home;
