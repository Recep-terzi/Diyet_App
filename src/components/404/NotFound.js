import React, { useEffect } from "react";
import "./NotFound.Module.css";
import img from "../../assets/404.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#497D59";
  }, []);
  return (
    <>
      <div className="notfound-container">
        <p className="error-404">404</p>
        <p className="error-404-info">Whoops... Page Not Found :(</p>
        <a href="/">
          <button className="error-404-button">Go Home</button>
        </a>
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default NotFound;
