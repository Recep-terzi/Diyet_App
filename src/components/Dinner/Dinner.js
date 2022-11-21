import React from "react";
import "./Dinner.Module.css";
const Dinner = () => {
  return (
    <div className="dinner-container">
      <div className="dinner-1 dinner-card">
        <div className="dinner-1-title">Hafif öğün</div>
        <ul type="square">
          <li>2 dilim salatalık</li>
          <li>2 dilim domates</li>
          <li>3 adet yeşil zeytin</li>
          <li>1 bardak yeşil çay</li>
          <li>1 dilim ekmek</li>
          <li>1 dilim beyaz peynir</li>
        </ul>
      </div>
      <div className="dinner-2  dinner-card">
        <div className="dinner-1-title">Orta ağır öğün</div>
        <ul type="square">
          <li>2 dilim salatalık</li>
          <li>2 dilim domates</li>
          <li>3 adet yeşil zeytin</li>
          <li>1 bardak yeşil çay</li>
          <li>1 dilim ekmek</li>
          <li>1 dilim beyaz peynir</li>
        </ul>
      </div>
      <div className="dinner-3  dinner-card">
        <div className="dinner-1-title">Ağır öğün</div>
        <ul type="square">
          <li>2 dilim salatalık</li>
          <li>2 dilim domates</li>
          <li>3 adet yeşil zeytin</li>
          <li>1 bardak yeşil çay</li>
          <li>1 dilim ekmek</li>
          <li>1 dilim beyaz peynir</li>
        </ul>
      </div>
    </div>
  );
};

export default Dinner;
