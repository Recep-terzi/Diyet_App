import React, { useEffect, useState } from "react";
import "./Login2.Module.css";
import bg from "../../assets/bg.jpg";

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
              <label>Email Adresiniz</label>
              <input type="text" />
            </div>
            <div className="password">
              <label> Parolanız </label>
              <input type="text" />
            </div>
          </div>
          <div className="form-button">
            <button type="submit">Giriş Yap</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login2;
