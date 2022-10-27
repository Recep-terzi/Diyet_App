import axios from "axios"
import React, { useState } from "react";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Food.Module.css";

const Food = () => {
  const [food, setFood] = useState();
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=cb8f4f39&app_key=%206a0e456db7ea1977cbb76658f9a9e795&ingr=${food}&nutrition-type=cooking`
      )
      .then((res) => setData(res.data.parsed));
  };
  console.log(data);
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      <div className="food-container">
        <div className="food-title">
          Ürünler, sebzeler, yemekler ve daha fazlası hakkında kalori,protein
          değerlerini öğrenmek için aşağıya ismini girmeniz yeterlidir.
        </div>
        <form onSubmit={handleSubmit}>
          <div className="food-input">
            <input
              type="text"
              value={food}
              onChange={(e) => setFood(e.target.value)}
            />
          </div>
        </form>
        {data && (
          <>
            {data.map((item) => (
              <>
                <div className="item">
                  <div className="a">
                    <div className="item-image">
                      <img src={item.food.image} alt="food" />
                    </div>
                  </div>
                  <div className="b">
                    <div className="item-title">{item.food.label}</div>

                    <div className="item-detail">
                      <p>Karbonhidrat : {item.food.nutrients.CHOCDF}</p>
                      <p>Enerji : {item.food.nutrients.ENERC_KCAL}</p>
                      <p>Yağ : {item.food.nutrients.FAT}</p>
                      <p>Lif : {item.food.nutrients.FIBTG}</p>
                      <p>Protein : {item.food.nutrients.PROCNT}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Food;
