import React, { useEffect, useState } from "react";
import "./Login2.Module.css";
import bg from "../../assets/bg.jpg";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
const Login2 = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.backgroundImage = `url(${bg})`;
      document.body.style.backgroundSize = "cover";
    }, 2000);
  }, []);
  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="login-title">Giriş Yap</div>

          <div className="login-form">
            <div className="email">
              <label>Email Adresi</label>
              <input type="text" />
            </div>
            <div className="password">
              <label> Parola </label>
              <input type="text" />
            </div>
          </div>
          <div className="form-button">
            <button type="submit">Giriş Yap</button>
          </div>
          <div className="info">
            Do you have not account? <Link to="/register">Kayıt ol</Link>
          </div>
          <div className="social">
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
        </form>
      </div>
      <div className="back-div">
        <button>Anasayfa</button>
      </div>
    </>
  );
};

export default Login2;
