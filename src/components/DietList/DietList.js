import React, { useEffect, useState } from "react";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./DietList.Module.css";
const DietList = () => {
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      <div className="dietlist-container">
        <div className="container">
          <div className="diet-list-row row">
            <div className="col-md-3 ">
              <div className="diet-list-col-md-3">
                <div className="filter-title">Filterele</div>
                <div className="diet-list-filter">
                  <ul>
                    <li>Sabah - Kahvaltı</li>
                    <li>Öğle Yemeği - Lunch</li>
                    <li>Akşam Yemeği</li>
                  </ul>
                </div>
                <div className="item-add">
                  <button>Diyet listesi oluştur</button>
                </div>
              </div>
            </div>
            <div className="col-md-9 diet-list">
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
      </div>
      <Footer />
    </>
  );
};

export default DietList;
