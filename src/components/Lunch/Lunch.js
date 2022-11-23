import React from "react";
import "./Lunch.Module.css";
const Lunch = () => {
  return (
    <div className="lunch-container">
      <div className="lunch-1 lunch-card">
        <div className="lunch-1-title">Hafif öğün</div>
        <ul type="square">
          <li>Ton balıklı kinoali salata</li>
          <li>Leblebi</li>
          <li>15 adet kuru üzüm</li>
          <li>Çiğ fındık</li>
          <li>Salatalık</li>
          <li>Tuzsuz yer fıstığı</li>
        </ul>
      </div>
      <div className="lunch-2  lunch-card">
        <div className="lunch-1-title">Orta ağır öğün</div>
        <ul type="square">
          <li>Ekmeksiz Köfte</li>
          <li>Salatalık</li>
          <li>Tam buğday makarna</li>
          <li>Çiğ badem</li>
          <li>1 adet kivi</li>
          <li>1 avuç ceviz</li>
        </ul>
      </div>
      <div className="lunch-3  lunch-card">
        <div className="lunch-1-title">Ağır öğün</div>
        <ul type="square">
          <li>Etli nohut</li>
          <li>Cacık</li>
          <li>Karabuğday pilavı</li>
          <li>Tam buğday ekmeği</li>
          <li>Az yağlı beyaz peynir</li>
          <li>Ceviz</li>
        </ul>
      </div>
    </div>
  );
};

export default Lunch;
