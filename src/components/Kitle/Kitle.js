import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import kitle from "../../assets/kitle.png";
import kitle2 from "../../assets/kitle2.png";
import "./Kitle.Module.css";
const Kitle = () => {
  const [boy, setBoy] = useState();
  const [kilo, setKilo] = useState();
  const [sonuc, setSonuc] = useState();
  const user = useSelector((state) => state.diet.user);
  const [deger, setDeger] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSonuc(kilo / (boy * boy));
  };
  useEffect(() => {
    if (sonuc < 18) {
      setDeger("Zayıf");
    } else if (sonuc >= 18 && sonuc < 25) {
      setDeger("Normal");
    } else if (sonuc >= 25 && sonuc < 30) {
      setDeger("Kilolu");
    } else if (sonuc >= 30 && sonuc < 35) {
      setDeger("Obez");
    } else if (sonuc > 35) {
      setDeger("Ciddi obez");
    }
  }, [sonuc]);
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      <img
        src={kitle}
        alt=""
        className="kitle-img animate__animated animate__backInLeft"
      />
      <img
        src={kitle2}
        alt=""
        className="kitle2-img animate__animated animate__backInRight"
      />

      <div className="kitle-container">
        <form
          onSubmit={handleSubmit}
          className="kitle-form animate__animated animate__backInDown"
        >
          <div className="kitle-title">Vücut Kitle Endeksi Hesapla</div>
          <div className="kitle-input">
            <div className="boy-input">
              <label> Boy</label>
              <input
                type="text"
                value={boy}
                onChange={(e) => setBoy(e.target.value)}
                maxLength={4}
                required
              />
            </div>
            <div className="yas-input">
              <label> Kilo</label>
              <input
                type="text"
                value={kilo}
                onChange={(e) => setKilo(e.target.value)}
                maxLength={3}
                required
              />
            </div>
          </div>
          <div className="kitle-button">
            <button>Hesapla</button>
          </div>
          {sonuc && (
            <>
              <p className="sonuc">Vücut kitle endeksi sonucunuz : {sonuc}</p>
              {deger && (
                <>
                  <p className="deger"> Vücut değeriniz : {deger}</p>
                  {user ? (
                    <>
                      <p className="kitle-description">
                        Diyet programlarımızdan yararlanmak için{" "}
                        <Link to="/contact"> bizimle iletişime geçiniz.</Link>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="kitle-description">
                        Diyet programlarımızdan ve daha sağlıklı bir yaşam için{" "}
                        <Link to="/register2"> Kayıt olunuz.</Link>
                      </p>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Kitle;
