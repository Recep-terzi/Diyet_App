import React from "react";
import "./Breakfast.Module.css";
const Breakfast = () => {
  return (
    <div className="breakfast-container">
      <div className="breakfast-1 breakfast-card">
        <div className="breakfast-1-title">Hafif öğün</div>
        <ul type="square">
          <li>2 Yemek kaşığı yağsız labne peyniri</li>
          <li>1 yemek kaşığı şekersiz reçel</li>
          <li>5-6 adet çiğ badem</li>
          <li>1 dilim tam buğday ekmeği(60gr)</li>
          <li>Zeytin</li>
          <li>Ihlamur çayı</li>
        </ul>
      </div>
      <div className="breakfast-2  breakfast-card">
        <div className="breakfast-1-title">Orta ağır öğün</div>
        <ul type="square">
          <li>3 yemek kaşığı yulaf ezmesi</li>
          <li>1 su bardağı yağsız süt</li>
          <li>1 adet kırmızı elma</li>
          <li>2 tam ceviz</li>
          <li>Toz tarçın</li>
          <li>Domates - biber</li>
        </ul>
      </div>
      <div className="breakfast-3  breakfast-card">
        <div className="breakfast-1-title">Ağır öğün</div>
        <ul type="square">
          <li>2 dilim tam buğday ekmeği(60gr)</li>
          <li>1 dilim ananas</li>
          <li>30gr light kaşar</li>
          <li>2 dilim dana jambon</li>
          <li>Marul</li>
          <li>Maydonuz ile sandviç</li>
        </ul>
      </div>
    </div>
  );
};

export default Breakfast;
