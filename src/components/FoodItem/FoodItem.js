import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const [food1, setFood1] = useState();
  const [food2, setFood2] = useState();
  const [food3, setFood3] = useState();
  const [food4, setFood4] = useState();
  const [food5, setFood5] = useState();
  const [food6, setFood6] = useState();
  const listdetail = useSelector((state) => state.diet.listDetail);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=cb8f4f39&app_key=%206a0e456db7ea1977cbb76658f9a9e795&ingr=${listdetail[0].food1}&nutrition-type=cooking`
      )
      .then((res) => setFood1(res.data.parsed));
  }, [listdetail]);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=cb8f4f39&app_key=%206a0e456db7ea1977cbb76658f9a9e795&ingr=${listdetail[0].food2}&nutrition-type=cooking`
      )
      .then((res) => setFood2(res.data.parsed));
  }, [listdetail]);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=cb8f4f39&app_key=%206a0e456db7ea1977cbb76658f9a9e795&ingr=${listdetail[0].food3}&nutrition-type=cooking`
      )
      .then((res) => setFood3(res.data.parsed));
  }, [listdetail]);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=cb8f4f39&app_key=%206a0e456db7ea1977cbb76658f9a9e795&ingr=${listdetail[0].food4}&nutrition-type=cooking`
      )
      .then((res) => setFood4(res.data.parsed));
  }, [listdetail]);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=cb8f4f39&app_key=%206a0e456db7ea1977cbb76658f9a9e795&ingr=${listdetail[0].food5}&nutrition-type=cooking`
      )
      .then((res) => setFood5(res.data.parsed));
  }, [listdetail]);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=cb8f4f39&app_key=%206a0e456db7ea1977cbb76658f9a9e795&ingr=${listdetail[0].food6}&nutrition-type=cooking`
      )
      .then((res) => setFood6(res.data.parsed));
  }, [listdetail]);

  return (
    <>
      <>
        <div className="food">
          {food1 ? (
            <>
              <div className="food-card">
                <img src={food1[0].food.image} alt="food"></img>
                <p className="food-detail-title">{food1[0].food.label}</p>
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
            </>
          ) : (
            <>
              <p>{listdetail.food1}</p>
            </>
          )}
          {food2 ? (
            <>
              <div className="food-card">
                <img src={food2[0].food.image} alt="food"></img>
                <p className="food-detail-title">{food2[0].food.label}</p>
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
            </>
          ) : (
            <>
              <p>{listdetail.food2}</p>
            </>
          )}
          {food3 ? (
            <>
              <div className="food-card">
                <img src={food3[0].food.image} alt="food"></img>
                <p className="food-detail-title">{food3[0].food.label}</p>
                <p>
                  <span>Enerji : </span>
                  {food3[0].food.nutrients.ENERC_KCAL}
                </p>
                <p>
                  <span>Karbonhidrat : </span>
                  {food3[0].food.nutrients.CHOCDF}
                </p>
                <p>
                  <span>Yağ : </span>
                  {food3[0].food.nutrients.FAT}
                </p>
                <p>
                  <span>Lif : </span>
                  {food3[0].food.nutrients.FIBTG}
                </p>
                <p>
                  <span>Protein : </span>
                  {food3[0].food.nutrients.PROCNT}
                </p>
              </div>
            </>
          ) : (
            <>
              <p>{listdetail.food3}</p>
            </>
          )}
          {food4 ? (
            <>
              <div className="food-card">
                <img src={food4[0].food.image} alt="food"></img>
                <p className="food-detail-title">{food4[0].food.label}</p>
                <p>
                  <span>Enerji : </span>
                  {food4[0].food.nutrients.ENERC_KCAL}
                </p>
                <p>
                  <span>Karbonhidrat : </span>
                  {food4[0].food.nutrients.CHOCDF}
                </p>
                <p>
                  <span>Yağ : </span>
                  {food4[0].food.nutrients.FAT}
                </p>
                <p>
                  <span>Lif : </span>
                  {food4[0].food.nutrients.FIBTG}
                </p>
                <p>
                  <span>Protein : </span>
                  {food4[0].food.nutrients.PROCNT}
                </p>
              </div>
            </>
          ) : (
            <>
              <p>{listdetail.food4}</p>
            </>
          )}
          {food5 ? (
            <>
              <div className="food-card">
                <img src={food5[0].food.image} alt="food"></img>
                <p className="food-detail-title">{food5[0].food.label}</p>
                <p>
                  <span>Enerji : </span>
                  {food5[0].food.nutrients.ENERC_KCAL}
                </p>
                <p>
                  <span>Karbonhidrat : </span>
                  {food5[0].food.nutrients.CHOCDF}
                </p>
                <p>
                  <span>Yağ : </span>
                  {food5[0].food.nutrients.FAT}
                </p>
                <p>
                  <span>Lif : </span>
                  {food5[0].food.nutrients.FIBTG}
                </p>
                <p>
                  <span>Protein : </span>
                  {food5[0].food.nutrients.PROCNT}
                </p>
              </div>
            </>
          ) : (
            <>
              <p>{listdetail.food5}</p>
            </>
          )}
          {food6 ? (
            <>
              <div className="food-card">
                <img src={food6[0].food.image} alt="food"></img>
                <p className="food-detail-title">{food6[0].food.label}</p>
                <p>
                  <span>Enerji : </span>
                  {food6[0].food.nutrients.ENERC_KCAL}
                </p>
                <p>
                  <span>Karbonhidrat : </span>
                  {food6[0].food.nutrients.CHOCDF}
                </p>
                <p>
                  <span>Yağ : </span>
                  {food6[0].food.nutrients.FAT}
                </p>
                <p>
                  <span>Lif : </span>
                  {food6[0].food.nutrients.FIBTG}
                </p>
                <p>
                  <span>Protein : </span>
                  {food6[0].food.nutrients.PROCNT}
                </p>
              </div>
            </>
          ) : (
            <>
              <p>{listdetail.food6}</p>
            </>
          )}
        </div>
      </>
    </>
  );
};

export default FoodItem;
