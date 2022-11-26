import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const [food1, setFood1] = useState();
  const [food2, setFood2] = useState();
  const listdetail = useSelector((state) => state.diet.listDetail);
  useEffect(() => {
    if (listdetail) {
      axios
        .get(
          `https://api.edamam.com/api/food-database/v2/parser?app_id=cb8f4f39&app_key=%206a0e456db7ea1977cbb76658f9a9e795&ingr=${listdetail[0].food1}&nutrition-type=cooking`
        )
        .then((res) => setFood1(res.data.parsed));
    }
  }, [listdetail]);
  useEffect(() => {
    if (listdetail) {
      axios
        .get(
          `https://api.edamam.com/api/food-database/v2/parser?app_id=cb8f4f39&app_key=%206a0e456db7ea1977cbb76658f9a9e795&ingr=${listdetail[0].food2}&nutrition-type=cooking`
        )
        .then((res) => setFood2(res.data.parsed));
    }
  }, [listdetail]);
  return (
    <>
      <div className="food">
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
      </div>
    </>
  );
};

export default FoodItem;
