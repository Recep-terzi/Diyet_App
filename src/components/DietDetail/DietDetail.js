import axios from "axios";
import { getDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { listDetail } from "../../redux/dietSlice";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./DietDetail.Module.css";
const DietDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const listdetail = useSelector((state) => state.diet.listDetail);
  const [food1, setFood1] = useState();
  const [food2, setFood2] = useState();
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
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=cb8f4f39&app_key=%206a0e456db7ea1977cbb76658f9a9e795&ingr=${
          listdetail && listdetail[0].food1
        }&nutrition-type=cooking`
      )
      .then((res) => setFood1(res.data.parsed));
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=cb8f4f39&app_key=%206a0e456db7ea1977cbb76658f9a9e795&ingr=${
          listdetail && listdetail[0].food2
        }&nutrition-type=cooking`
      )
      .then((res) => setFood2(res.data.parsed));
  }, [listdetail]);
  console.log(listdetail);
  console.log(food1);
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      {listdetail && (
        <>
          <div className="dietdetail-container">
            <div className="container">
              <div className="dietdetail-title">{listdetail[0].title}</div>

              <div className="diet-detail-food">
                <p>Yenilecek besinler</p>
                {food1 && (
                  <>
                    <div className="food">
                      <div className="food-card">
                        <img src={food1[0].food.image} alt="food"></img>
                        <p className="food-detail-title">
                          {food1[0].food.label}
                        </p>
                        <p>
                          <span>Enerji : </span>
                          {food1[0].food.nutrients.ENERC_KCAL}
                        </p>
                        <p>
                          <span>Karbonhidrat : </span>
                          {food1[0].food.nutrients.CHOCDF}
                        </p>
                        <p>
                          <span>Yağ : </span>
                          {food1[0].food.nutrients.FAT}
                        </p>
                        <p>
                          <span>Lif : </span>
                          {food1[0].food.nutrients.FIBTG}
                        </p>
                        <p>
                          <span>Protein : </span>
                          {food1[0].food.nutrients.PROCNT}
                        </p>
                      </div>
                      <div className="food-card">
                        <img src={food2[0].food.image} alt="food"></img>
                        <p className="food-detail-title">
                          {food2[0].food.label}
                        </p>
                        <p>
                          <span>Enerji : </span>
                          {food2[0].food.nutrients.ENERC_KCAL}
                        </p>
                        <p>
                          <span>Karbonhidrat : </span>
                          {food2[0].food.nutrients.CHOCDF}
                        </p>
                        <p>
                          <span>Yağ : </span>
                          {food2[0].food.nutrients.FAT}
                        </p>
                        <p>
                          <span>Lif : </span>
                          {food2[0].food.nutrients.FIBTG}
                        </p>
                        <p>
                          <span>Protein : </span>
                          {food2[0].food.nutrients.PROCNT}
                        </p>
                      </div>
                      <div className="food-card">
                        <img src={food1[0].food.image} alt="food"></img>
                        <p className="food-detail-title">
                          {food1[0].food.label}
                        </p>
                        <p>
                          <span>Enerji : </span>
                          {food1[0].food.nutrients.ENERC_KCAL}
                        </p>
                        <p>
                          <span>Karbonhidrat : </span>
                          {food1[0].food.nutrients.CHOCDF}
                        </p>
                        <p>
                          <span>Yağ : </span>
                          {food1[0].food.nutrients.FAT}
                        </p>
                        <p>
                          <span>Lif : </span>
                          {food1[0].food.nutrients.FIBTG}
                        </p>
                        <p>
                          <span>Protein : </span>
                          {food1[0].food.nutrients.PROCNT}
                        </p>
                      </div>
                      <div className="food-card">
                        <img src={food1[0].food.image} alt="food"></img>
                        <p className="food-detail-title">
                          {food1[0].food.label}
                        </p>
                        <p>
                          <span>Enerji : </span>
                          {food1[0].food.nutrients.ENERC_KCAL}
                        </p>
                        <p>
                          <span>Karbonhidrat : </span>
                          {food1[0].food.nutrients.CHOCDF}
                        </p>
                        <p>
                          <span>Yağ : </span>
                          {food1[0].food.nutrients.FAT}
                        </p>
                        <p>
                          <span>Lif : </span>
                          {food1[0].food.nutrients.FIBTG}
                        </p>
                        <p>
                          <span>Protein : </span>
                          {food1[0].food.nutrients.PROCNT}
                        </p>
                      </div>
                      <div className="food-card">
                        <img src={food1[0].food.image} alt="food"></img>
                        <p className="food-detail-title">
                          {food1[0].food.label}
                        </p>
                        <p>
                          <span>Enerji : </span>
                          {food1[0].food.nutrients.ENERC_KCAL}
                        </p>
                        <p>
                          <span>Karbonhidrat : </span>
                          {food1[0].food.nutrients.CHOCDF}
                        </p>
                        <p>
                          <span>Yağ : </span>
                          {food1[0].food.nutrients.FAT}
                        </p>
                        <p>
                          <span>Lif : </span>
                          {food1[0].food.nutrients.FIBTG}
                        </p>
                        <p>
                          <span>Protein : </span>
                          {food1[0].food.nutrients.PROCNT}
                        </p>
                      </div>
                      <div className="food-card">
                        <img src={food1[0].food.image} alt="food"></img>
                        <p className="food-detail-title">
                          {food1[0].food.label}
                        </p>
                        <p>
                          <span>Enerji : </span>
                          {food1[0].food.nutrients.ENERC_KCAL}
                        </p>
                        <p>
                          <span>Karbonhidrat : </span>
                          {food1[0].food.nutrients.CHOCDF}
                        </p>
                        <p>
                          <span>Yağ : </span>
                          {food1[0].food.nutrients.FAT}
                        </p>
                        <p>
                          <span>Lif : </span>
                          {food1[0].food.nutrients.FIBTG}
                        </p>
                        <p>
                          <span>Protein : </span>
                          {food1[0].food.nutrients.PROCNT}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* <div className="dietdetail-degerler">
                <p>Karbonhidrat :</p>
                <p>Protein :</p>
                <p>Yağ :</p>
                <p>Kalori :</p>
                <p>Şeker :</p>
                <p>Tuz :</p>
              </div> */}
              <div className="dietdetail-description">
                <p>Diyet Açıklaması</p>
                <p>{listdetail[0].description}</p>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default DietDetail;
