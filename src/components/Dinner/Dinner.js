import React from "react";
import "./Dinner.Module.css";
const Dinner = () => {
  return (
    <div className="dinner-container">
      <div className="dinner-1 dinner-card">
        <div className="dinner-1-title">Hafif öğün</div>
        <ul type="square">
          <li>8 yemek kaşığı sebze yemeği</li>
          <li>1 ince dilim ekmek (tam buğday, bol tahıllı, çavdar)</li>
          <li>2-3 yemek kaşığı cacık veya yoğurt</li>
          <li>Karışık salata</li>
          <li>Bir avuç lebleli</li>
          <li>1 adet armut</li>
        </ul>
      </div>
      <div className="dinner-2  dinner-card">
        <div className="dinner-1-title">Orta ağır öğün</div>
        <ul type="square">
          <li>8-10 yemek kaşığı sebze yemeği</li>
          <li>6-7 yemek kaşığı bulgur pilavı</li>
          <li>2 ince dilim ekmek (tam buğday, bol tahıllı, çavdar)</li>
          <li>4 yemek kaşığı cacık</li>
          <li>Karışık salata</li>
          <li>2 tane ince grisini</li>
        </ul>
      </div>
      <div className="dinner-3  dinner-card">
        <div className="dinner-1-title">Ağır öğün</div>
        <ul type="square">
          <li>Fırında tavuk göğüsü</li>
          <li>Zeytinyağlı bamya</li>
          <li>1 kase yoğurt</li>
          <li>Karışık bol salata</li>
          <li>1 adet armut</li>
          <li>Çiğ fındık</li>
        </ul>
      </div>
    </div>
  );
};

export default Dinner;
