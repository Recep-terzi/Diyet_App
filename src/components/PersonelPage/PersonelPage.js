import React, { useEffect } from "react";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import avatar from "../../assets/avatar.png";
import "./PesonelPage.Module.css";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { person } from "../../redux/dietSlice";
const PersonelPage = () => {
  const detail = useSelector((state) => state.diet.personDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    const ref = collection(db, "personDetail");
    getDocs(ref).then((snap) => {
      let result = [];

      snap.forEach((doc) => {
        result.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      dispatch(person(result));
    });
    // return unsub;
  }, [dispatch]);
  console.log(detail);
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
                  <input type="text" value={detail[0].tc} />
                </div>
              </div>

              <div className="personel-info-2">
                <p className="personel-title-3">Kişisel Detaylar</p>

                <div className="personel-yas">
                  <span>Yaş</span>
                  <input type="text" value={detail[0].yas} />
                </div>
                <div className="personel-boy">
                  <span>Boy</span>
                  <input type="text" value={detail[0].boy} />
                </div>
                <div className="personel-kilo">
                  <span>Kilo</span>
                  <input type="text" value={detail[0].kilo} />
                </div>
                <div className="personel-yemek">
                  <span>Sevdiğim Yemek</span>
                  <input type="text" value={detail[0].yemek} />
                </div>
                <div className="personel-hedef">
                  <span>Hedef Kilom</span>
                  <input type="text" value={detail[0].hedefKilo} />
                </div>
                <div className="personel-ilgi">
                  <span>İlgi Alanım</span>
                  <input type="text" value={detail[0].ilgi} />
                </div>
              </div>

              <div className="personel-info-3">
                <p className="personel-title-4">Sağlık Detaylar</p>

                <div className="personel-kronik">
                  <span>Kronik Hastalık</span>
                  <input
                    type="checkbox"
                    checked={detail[0].kronik ? true : false}
                  />
                </div>
                <div className="personel-alerji">
                  <span>Alerji</span>
                  <input
                    type="checkbox"
                    checked={detail[0].alerji ? true : false}
                  />
                </div>
                <div className="personel-evli">
                  <span>Evli</span>
                  <input
                    type="checkbox"
                    checked={detail[0].evli ? true : false}
                  />
                </div>
                <div className="personel-ozel">
                  <span>Özel Durum</span>
                  <input
                    type="checkbox"
                    checked={detail[0].özel ? true : false}
                  />
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
