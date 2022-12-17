import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./DietList.Module.css";
import Modal from "../Modal/Modal";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { dietList } from "../../redux/dietSlice";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";
const DietList = () => {
  const user = useSelector((state) => state.diet.user);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();
  const dietlist = useSelector((state) => state.diet.dietList);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const filterItem = (category) => {
    const a = dietlist.filter((x) => x.title === category);
    setFilter(a);
  };
  const filterItem2 = (hafta) => {
    const b = dietlist.filter((x) => x.hafta === hafta);
    setFilter(b);
  };
  const allItem = () => {
    setFilter(dietlist);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const ref = collection(db, "dietList");
    const q = query(ref, where("email", "==", user ? user?.email : null));
    const unsub = onSnapshot(q, (snap) => {
      dispatch(
        dietList(
          snap.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      );
    });
    return unsub;
  }, [dispatch, user]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <ExtraNavbar />
          <Navbar />
          {user ? (
            <>
              <div className="dietlist-container">
                <div className="container">
                  <div className="dietlist-title">~ Diyet Listeleri ~</div>
                  <div className="filter">
                    <button onClick={() => allItem()}>Hepsi</button>
                    <button onClick={() => filterItem("Kahvaltı")}>
                      Sabah - Kahvaltı
                    </button>
                    <button onClick={() => filterItem("Öğle Yemeği")}>
                      Öğle Yemeği
                    </button>
                    <button onClick={() => filterItem("Akşam Yemeği")}>
                      Akşam Yemeği
                    </button>
                    {user ? (
                      <>
                        {user.email === "recepterzi-67@hotmail.com" && (
                          <>
                            <Modal
                              handleClickOpen={handleClickOpen}
                              open={open}
                              setOpen={setOpen}
                            />
                            <button onClick={handleClickOpen}>
                              Diyet listesi oluştur
                            </button>
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="dietlist-flex">
                    <div className="filter-menu-diet-list">
                      <p>Zamansal filtreleme</p>
                      <ul>
                        <li
                          onClick={() => filterItem2("1.Hafta")}
                          className="filter-li"
                        >
                          <BsFillCalendarWeekFill />
                          1.Hafta
                        </li>
                        <li
                          onClick={() => filterItem2("2.Hafta")}
                          className="filter-li"
                        >
                          <BsFillCalendarWeekFill />
                          2.Hafta
                        </li>
                        <li
                          onClick={() => filterItem2("3.Hafta")}
                          className="filter-li"
                        >
                          <BsFillCalendarWeekFill />
                          3.Hafta
                        </li>
                        <li
                          onClick={() => filterItem2("4.Hafta")}
                          className="filter-li"
                        >
                          <BsFillCalendarWeekFill />
                          4.Hafta
                        </li>
                      </ul>
                    </div>

                    <div className="main-dietlist">
                      {filter ? (
                        <>
                          <div className="diet-list">
                            {filter.map((diet) => (
                              <>
                                <Link
                                  to={`/diet/${diet.id}`}
                                  className="diet-list-item"
                                >
                                  <div className="diet-list-title">
                                    {diet.title}
                                  </div>
                                  <div className="diet-list-description">
                                    <p>
                                      <span>Diyet Tipi :</span> {diet.type}
                                    </p>
                                    <p>
                                      <span>Diyet Zamanı : </span> {diet.time}
                                    </p>
                                    <p>
                                      <span>Diyet Kalorisi :</span>{" "}
                                      {diet.calory}
                                    </p>
                                  </div>
                                </Link>
                              </>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="diet-list">
                            {dietlist.map((diet) => (
                              <>
                                <motion.div
                                  className="diet-list-item"
                                  whileHover={{
                                    scale: 1.2,
                                  }}
                                >
                                  <a
                                    className="diet-list-url"
                                    href={`/diet/${diet.id}`}
                                  >
                                    <div className="diet-list-title">
                                      {diet.title}
                                    </div>
                                    <div className="diet-list-description">
                                      <p>
                                        <span>Diyet Tipi :</span> {diet.type}
                                      </p>
                                      <p>
                                        <span>Diyet Zamanı : </span> {diet.time}
                                      </p>
                                      <p>
                                        <span>Diyet Kalorisi :</span>{" "}
                                        {diet.calory}
                                      </p>
                                    </div>
                                  </a>
                                </motion.div>
                              </>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  {dietlist.length === 0 && (
                    <>
                      <div className="dietlist-err">
                        Diyet listeleri bilgileriniz bulunmamıştır. Lütfen
                        diyetisyen ile iletişime geçiniz.
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="dietlist-notuser">
              <p>
                Özel diyet listelerinizi görmek, diyet listenizi takip etmek ve
                diyet listelerini daha detaylı görmek için{" "}
                <Link to="/login2"> giriş yapınız.</Link>
              </p>
            </div>
          )}
          <Footer />
        </>
      )}
    </>
  );
};

export default DietList;
