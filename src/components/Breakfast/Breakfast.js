import React from "react";
import "./Breakfast.Module.css";
const Breakfast = () => {
  return (
    <div className="breakfast-container">
      <div className="breakfast-1 breakfast-card">
        <div className="breakfast-1-title">Hafif öğün</div>
        <ul type="square">
          <li>2 dilim salatalık</li>
          <li>2 dilim domates</li>
          <li>3 adet yeşil zeytin</li>
          <li>1 bardak yeşil çay</li>
          <li>1 dilim ekmek</li>
          <li>1 dilim beyaz peynir</li>
        </ul>
      </div>
      <div className="breakfast-2  breakfast-card">
        <div className="breakfast-1-title">Orta ağır öğün</div>
        <ul type="square">
          <li>2 dilim salatalık</li>
          <li>2 dilim domates</li>
          <li>3 adet yeşil zeytin</li>
          <li>1 bardak yeşil çay</li>
          <li>1 dilim ekmek</li>
          <li>1 dilim beyaz peynir</li>
        </ul>
      </div>
      <div className="breakfast-3  breakfast-card">
        <div className="breakfast-1-title">Ağır öğün</div>
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

export default Breakfast;
