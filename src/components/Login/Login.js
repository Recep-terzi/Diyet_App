import React, { useEffect, useState } from "react";
import "./Login.Module.css";
import loginDiet from "../../assets/login-diet.jpg";
import bg from "../../assets/bg.jpg";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
const Login = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.backgroundImage = `url(${bg})`;
      document.body.style.backgroundSize = "cover";
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="back-container">
            <Link to="/"> Anasayfa'ya dön</Link>
          </div>
          <div className="login-container">
            <div className="row">
              <div className="col-md-6 login-left">
                <img src={loginDiet} alt="" />
              </div>
              <div className="col-md-6">
                <div className="login-title">Kullanıcı Girişi</div>
                <div className="login-form">
                  <form>
                    <div className="login-username">
                      <label>Kullanıcı Adı</label>
                      <input type="text" />
                    </div>
                    <div className="login-password">
                      <label>Parola</label>

                      <input type="text" />
                    </div>
                    <button className="login-button"> Giriş Yap </button>
                    <div className="login-info">
                      Hesabınız yok mu ?
                      <Link to="/register">
                        {" "}
                        hemen kayıt olmak için tıklayın.
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
