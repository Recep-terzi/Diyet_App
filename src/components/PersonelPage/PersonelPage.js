import React from "react";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import avatar from "../../assets/avatar.png";
import "./PesonelPage.Module.css";
const PersonelPage = () => {
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      <div className="personelpage-container">
        <div className="container">
          <div className="row personel-row">
            <div className="col-md-3 personel-row-3">
              <img src={avatar} alt="" />
            </div>
            <div className="col-md-9 personel-row-9">
              <div className="personel-title">Kişisel Sayfam</div>
              <div className="personel-info">
                <p className="personel-title-2">Kişisel bilgiler</p>

                <div className="personel-name">
                  <span>İsim</span>
                  <input type="text" value="Recep" />
                </div>
                <div className="personel-surname">
                  <span>Soyisim</span>
                  <input type="text" value="Terzi" />
                </div>
                <div className="personel-tc">
                  <span>T.C Kimlik Numarası</span>
                  <input type="text" value="25895597886" />
                </div>
              </div>

              <div className="personel-info-2">
                <p className="personel-title-3">Kişisel Detaylar</p>

                <div className="personel-yas">
                  <span>Yaş</span>
                  <input type="text" value="20" />
                </div>
                <div className="personel-boy">
                  <span>Boy</span>
                  <input type="text" value="1.72" />
                </div>
                <div className="personel-kilo">
                  <span>Kilo</span>
                  <input type="text" value="68" />
                </div>
                <div className="personel-yemek">
                  <span>Sevdiğim Yemek</span>
                  <input type="text" value="Tavuk" />
                </div>
                <div className="personel-hedef">
                  <span>Hedef Kilom</span>
                  <input type="text" value="80" />
                </div>
                <div className="personel-ilgi">
                  <span>İlgi Alanım</span>
                  <input type="text" value="Yazılım" />
                </div>
              </div>

              <div className="personel-info-3">
                <p className="personel-title-4">Sağlık Detaylar</p>

                <div className="personel-kronik">
                  <span>Kronik Hastalık</span>
                  <input type="checkbox" />
                </div>
                <div className="personel-alerji">
                  <span>Alerji</span>
                  <input type="checkbox" />
                </div>
                <div className="personel-evli">
                  <span>Evli</span>
                  <input type="checkbox" />
                </div>
                <div className="personel-ozel">
                  <span>Özel Durum</span>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="personel-button">
                <button>Düzenle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PersonelPage;
