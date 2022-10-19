import React from "react";
import "./ExtraNavbar.Module.css";
const ExtraNavbar = () => {
  return (
    <div>
      <div className="extra-navbar-container">
        <div className="left">
          Sağlıklı yaşam, sağlıklı bir hayat için Pyson Nutritionist
        </div>
        <div className="right">
          <span>+90 530 099 67 39</span>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default ExtraNavbar;
