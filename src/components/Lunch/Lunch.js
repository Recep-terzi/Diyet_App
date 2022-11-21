import React from "react";
import "./Lunch.Module.css";
const Lunch = () => {
  return (
    <div className="lunch-container">
      <div className="lunch-1 lunch-card">
        <div className="lunch-1-title">Hafif öğün</div>
        <ul type="square">
          <li>2 dilim salatalık</li>
          <li>2 dilim domates</li>
          <li>3 adet yeşil zeytin</li>
          <li>1 bardak yeşil çay</li>
          <li>1 dilim ekmek</li>
          <li>1 dilim beyaz peynir</li>
        </ul>
      </div>
      <div className="lunch-2  lunch-card">
        <div className="lunch-1-title">Orta ağır öğün</div>
        <ul type="square">
          <li>2 dilim salatalık</li>
          <li>2 dilim domates</li>
          <li>3 adet yeşil zeytin</li>
          <li>1 bardak yeşil çay</li>
          <li>1 dilim ekmek</li>
          <li>1 dilim beyaz peynir</li>
        </ul>
      </div>
      <div className="lunch-3  lunch-card">
        <div className="lunch-1-title">Ağır öğün</div>
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

export default Lunch;
