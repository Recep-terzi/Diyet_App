import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./DietList.Module.css";
const DietList = () => {
  const user = useSelector((state) => state.diet.user);
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      {user ? (
        <>
          <div className="dietlist-container">
            <div className="container">
              <div className="dietlist-title">~ Diyet Listeleri ~</div>
              <div className="filter">
                <button>Sabah - Kahvaltı</button>
                <button>Öğle Yemeği</button>
                <button>Akşam Yemeği</button>
                {user ? (
                  <>
                    {user.email === "recepterzi-67@hotmail.com" && (
                      <>
                        <button>Diyet listesi oluştur</button>
                      </>
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="diet-list">
                <div className="diet-list-item">
                  <div className="diet-list-title">Ara öğün</div>
                  <div className="diet-list-description">
                    <p>
                      <span>Diyet Tipi :</span> Hafif
                    </p>
                    <p>
                      <span>Diyet Zamanı : </span> Öğle Yemeği
                    </p>
                    <p>
                      <span>Diyet Kalorisi :</span> 100 Kalori
                    </p>
                  </div>
                </div>
                <div className="diet-list-item">
                  <div className="diet-list-title">Ara öğün</div>
                  <div className="diet-list-description">
                    <p>
                      <span>Diyet Tipi :</span> Hafif
                    </p>
                    <p>
                      <span>Diyet Zamanı : </span> Öğle Yemeği
                    </p>
                    <p>
                      <span>Diyet Kalorisi :</span> 100 Kalori
                    </p>
                  </div>
                </div>
                <div className="diet-list-item">
                  <div className="diet-list-title">Ara öğün</div>
                  <div className="diet-list-description">
                    <p>
                      <span>Diyet Tipi :</span> Hafif
                    </p>
                    <p>
                      <span>Diyet Zamanı : </span> Öğle Yemeği
                    </p>
                    <p>
                      <span>Diyet Kalorisi :</span> 100 Kalori
                    </p>
                  </div>
                </div>
                <div className="diet-list-item">
                  <div className="diet-list-title">Ara öğün</div>
                  <div className="diet-list-description">
                    <p>
                      <span>Diyet Tipi :</span> Hafif
                    </p>
                    <p>
                      <span>Diyet Zamanı : </span> Öğle Yemeği
                    </p>
                    <p>
                      <span>Diyet Kalorisi :</span> 100 Kalori
                    </p>
                  </div>
                </div>
                <div className="diet-list-item">
                  <div className="diet-list-title">Ara öğün</div>
                  <div className="diet-list-description">
                    <p>
                      <span>Diyet Tipi :</span> Hafif
                    </p>
                    <p>
                      <span>Diyet Zamanı : </span> Öğle Yemeği
                    </p>
                    <p>
                      <span>Diyet Kalorisi :</span> 100 Kalori
                    </p>
                  </div>
                </div>
                <div className="diet-list-item">
                  <div className="diet-list-title">Ara öğün</div>
                  <div className="diet-list-description">
                    <p>
                      <span>Diyet Tipi :</span> Hafif
                    </p>
                    <p>
                      <span>Diyet Zamanı : </span> Öğle Yemeği
                    </p>
                    <p>
                      <span>Diyet Kalorisi :</span> 100 Kalori
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="dietlist-notuser">
            <p>
              Özel diyet listelerinizi görmek, diyet listenizi takip etmek ve
              diyet listelerini daha detaylı görmek için{" "}
              <Link to="/login"> giriş yapınız.</Link>
            </p>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default DietList;
