import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./DietList.Module.css";
import Modal from "../Modal/Modal";

import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { dietList } from "../../redux/dietSlice";
const DietList = () => {
  const user = useSelector((state) => state.diet.user);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const dietlist = useSelector((state) => state.diet.dietList);
  const handleClickOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    const ref = collection(db, "dietList");
    const q = query(ref, where("email", "==", user?.email));
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
  console.log(dietlist);
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
                  ""
                )}
              </div>

              <div className="diet-list">
                {dietlist.map((diet) => (
                  <>
                    <Link to={`/diet/${diet.id}`}>
                      <div className="diet-list-item">
                        <div className="diet-list-title">{diet.title}</div>
                        <div className="diet-list-description">
                          <p>
                            <span>Diyet Tipi :</span> {diet.type}
                          </p>
                          <p>
                            <span>Diyet Zamanı : </span> {diet.time}
                          </p>
                          <p>
                            <span>Diyet Kalorisi :</span> {diet.calory}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </>
                ))}
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
              <Link to="/login2"> giriş yapınız.</Link>
            </p>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default DietList;
