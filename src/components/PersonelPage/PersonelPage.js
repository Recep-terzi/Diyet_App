import React, { useEffect, useState } from "react";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import avatar from "../../assets/avatar.png";
import "./PesonelPage.Module.css";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { person } from "../../redux/dietSlice";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const PersonelPage = () => {
  const detail = useSelector((state) => state.diet.personDetail);
  const user = useSelector((state) => state.diet.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const ref = collection(db, "personDetail");
    const q = query(ref, where("email", "==", user?.email));
    const unsub = onSnapshot(q, (snap) => {
      dispatch(
        person(
          snap.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      );
    });
    return unsub;
  }, [dispatch, user]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading && (
        <>
          <Loading />
        </>
      )}
      {!loading && (
        <>
          <ExtraNavbar />
          <Navbar />
          {detail && (
            <>
              {detail.map((person) => (
                <div className="personelpage-container">
                  <div className="container">
                    <div className="row personel-row">
                      <div className="col-md-3 personel-row-3">
                        <img src={avatar} alt="" />
                      </div>

                      <div className="col-md-9 personel-row-9">
                        <div className="personel-title">
                          Kişisel Sayfam - {user.displayName}
                        </div>
                        <div className="personel-info">
                          <p className="personel-title-2">Kişisel bilgiler</p>

                          <div className="personel-name">
                            <span>İsim</span>
                            <input type="text" value={person.name} />
                          </div>
                          <div className="personel-surname">
                            <span>Soyisim</span>
                            <input type="text" value={person.surname} />
                          </div>
                          <div className="personel-tc">
                            <span>T.C Kimlik Numarası</span>
                            <input type="text" value={person.tc} />
                          </div>
                        </div>

                        <div className="personel-info-2">
                          <p className="personel-title-3">Kişisel Detaylar</p>

                          <div className="personel-yas">
                            <span>Yaş</span>
                            <input type="text" value={person.age} />
                          </div>
                          <div className="personel-boy">
                            <span>Boy</span>
                            <input type="text" value={person.boy} />
                          </div>
                          <div className="personel-kilo">
                            <span>Kilo</span>
                            <input type="text" value={person.kilo} />
                          </div>
                          <div className="personel-yemek">
                            <span>Sevdiğim Yemek</span>
                            <input type="text" value={person.yemek} />
                          </div>
                          <div className="personel-hedef">
                            <span>Hedef Kilom</span>
                            <input type="text" value={person.hedefKilo} />
                          </div>
                          <div className="personel-ilgi">
                            <span>İlgi Alanım</span>
                            <input type="text" value={person.ilgi} />
                          </div>
                        </div>

                        <div className="personel-info-3">
                          <p className="personel-title-4">Sağlık Detaylar</p>

                          <div className="personel-kronik">
                            <span>Kronik Hastalık</span>
                            <input
                              type="checkbox"
                              checked={person.kronik ? true : false}
                            />
                          </div>
                          <div className="personel-alerji">
                            <span>Alerji</span>
                            <input
                              type="checkbox"
                              checked={person.alerji ? true : false}
                            />
                          </div>
                          <div className="personel-evli">
                            <span>Evli</span>
                            <input
                              type="checkbox"
                              checked={person.evli ? true : false}
                            />
                          </div>
                          <div className="personel-ozel">
                            <span>Özel Durum</span>
                            <input
                              type="checkbox"
                              checked={person.özel ? true : false}
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
              ))}
            </>
          )}
          {detail.length === 0 && (
            <div className="personalpage-err">
              <p>
                Henüz kişisel bilgilerinizi girmediniz bilgilerinizi girmek için{" "}
                <Link to="/detailperson">tıklayınız.</Link>
              </p>
            </div>
          )}
          <Footer />
        </>
      )}
    </>
  );
};

export default PersonelPage;
