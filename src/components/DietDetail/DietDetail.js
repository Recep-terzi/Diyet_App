import { getDoc, doc, updateDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { listDetail } from "../../redux/dietSlice";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import FoodItem from "../FoodItem/FoodItem";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./DietDetail.Module.css";
const DietDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const listdetail = useSelector((state) => state.diet.listDetail);
  const [sendEmail, setSendEmail] = useState();

  useEffect(() => {
    const ref = doc(db, "dietList", id);
    const data = [];
    getDoc(ref).then((snap) => {
      if (snap.exists) {
        data.push(snap.data());
      } else {
        console.log("error");
      }
      dispatch(listDetail(data));
    });
  }, [dispatch, id]);
  const updateChange = (e) => {
    e.preventDefault();
    const ref = doc(db, "dietList", id);
    updateDoc(ref, {
      email: sendEmail,
    })
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      {listdetail && (
        <>
          <div className="dietdetail-container">
            <div className="container">
              <div className="diet-detail-food">
                <p>~ Yenilecek besinler ~</p>
              </div>
              <FoodItem />

              {/* <div className="dietdetail-degerler">
                <p>Karbonhidrat :</p>
                <p>Protein :</p>
                <p>Yağ :</p>
                <p>Kalori :</p>
                <p>Şeker :</p>
                <p>Tuz :</p>
              </div> */}
            </div>
          </div>
        </>
      )}
      {/* {listdetail && (
        <div className="description">
          <div className="description-title">Diyet Açıklaması</div>
          <p>{listdetail[0].description}</p>
        </div>
      )}
      <form className="diet-list-account" onSubmit={updateChange}>
        <label> Kullanıcıya gönder </label>
        <input
          type="text"
          value={sendEmail}
          onChange={(e) => setSendEmail(e.target.value)}
        />
        <button type="submit">Gönder</button>
      </form> */}

      <div className="container">
        <div className="diet-detail-description">
          <div className="description">
            <div className="description-title">Diyet Açıklaması</div>
            {listdetail && (
              <>
                <p>{listdetail[0].description}</p>
              </>
            )}
          </div>
          <div className="update-diet-detail">
            <form className="diet-list-account" onSubmit={updateChange}>
              <label> Kullanıcıya Gönder </label>
              <input
                type="text"
                value={sendEmail}
                placeholder="Göndermek istediğiniz kullanıcının eposta adresi"
                onChange={(e) => setSendEmail(e.target.value)}
              />
              <button type="submit">Gönder</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DietDetail;
