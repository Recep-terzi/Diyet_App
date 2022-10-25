import React from "react";
import "./Register.Module.css";
import registerDiet from "../../assets/register-diet.jpg";
import { Link } from "react-router-dom";
import "animate.css";
const Register = () => {
  document.body.style.backgroundImage = `url(${registerDiet})`;
  document.body.style.backgroundSize = "cover";

  return (
    <>
      <div className="back-container-register">
        <Link to="/"> Anasayfa'ya dön</Link>
      </div>
      <div className="register-container animate__bounceIn animate__animated">
        <div className="register-title">Kullanıcı Kayıdı</div>
        <div className="register-form">
          <form>
            <div className="register-username">
              <label>Kullanıcı Adı</label>
              <input type="text" />
            </div>
            <div className="register-email">
              <label>Kullanıcı Email</label>
              <input type="text" />
            </div>
            <div className="register-password">
              <label>Parola</label>

              <input type="text" />
            </div>
            <div className="register-password-re">
              <label>Parola Tekrar</label>

              <input type="text" />
            </div>
            <button className="register-button"> Giriş Yap </button>
            <div className="register-info">
              Hesabınız var mı?
              <Link to="/register"> hemen giriş için tıklayın.</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
