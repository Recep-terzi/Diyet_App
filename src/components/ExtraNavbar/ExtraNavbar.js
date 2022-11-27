import React from "react";
import "./ExtraNavbar.Module.css";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const ExtraNavbar = () => {
  return (
    <div>
      <div className="extra-navbar-container">
        <div className="left">
          Sağlıklı yaşam, sağlıklı bir hayat için Pyson Nutritionist
        </div>
        <div className="right">
          <span>+90 530 099 67 39</span>
          <a href="https://instgram.com/recepterziiii">
            <AiFillInstagram />
          </a>
          <a href="https://linkedin.com/in/recepterzi">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/recep-terzi">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExtraNavbar;
