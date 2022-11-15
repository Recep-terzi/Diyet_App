import React, { useEffect, useState } from "react";
import "./Register2.Module.css";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/dietSlice";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loading from "../Loading/Loading";
import bg from "../../assets/diet8.jpg";
const Register2 = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [esit, setEsit] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.diet.username);
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
        });
        console.log(res);
        navigate("/");
      })
      .catch((err) => setError(err.message, error));

    setEmail("");
    setName("");
    setPassword("");
    setRePassword("");
    console.log(user);
  };

  useEffect(() => {
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${bg})`;
      document.body.style.backgroundSize = "cover";
      setLoading(false);
    }, 2000);
    if (password === rePassword) {
      setEsit(true);
    } else {
      setEsit(false);
    }
  }, [password, rePassword]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="register-container animate__animated animate__fadeInRight">
            <form onSubmit={handleSubmit}>
              <div className="register-title">Kayıt ol</div>
              <div className="register-form">
                <div className="name">
                  <label>Kullanıcı adı</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="email">
                  <label>Email Adresi</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="password">
                  <label> Parola </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="re-password">
                  <label> Parola Tekrar </label>
                  <input
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    required
                  />
                </div>
                {esit ? (
                  <></>
                ) : (
                  <>
                    <div className="esit-info">
                      Parolalar birbirleriyle uyuşmuyor.
                    </div>
                  </>
                )}
              </div>
              <div className="form-button">
                {esit ? (
                  <>
                    <button type="submit">Giriş Yap</button>
                  </>
                ) : (
                  <>
                    <button type="submit" disabled className="disabled-button">
                      Giriş Yap
                    </button>
                  </>
                )}
              </div>
              <div className="info">
                Hesabınız var mı? <Link to="/login2">Giriş yap</Link>
              </div>
              <div className="social">
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
            </form>
          </div>
          <div className="back-div-register">
            <button>
              <Link to="/">Anasayfa</Link>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Register2;
