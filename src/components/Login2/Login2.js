import React, { useEffect, useState } from "react";
import "./Login2.Module.css";
import bg from "../../assets/bg.jpg";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../../redux/dietSlice";
const Login2 = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        navigate("/");
      })
      // display the error if any
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${bg})`;
      document.body.style.backgroundSize = "cover";
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="login-container animate__animated animate__fadeInLeft">
            <form onSubmit={handleSubmit}>
              <div className="login-title">Giriş Yap</div>

              <div className="login-form">
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
                    type={hidden ? "password" : "text"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {hidden ? (
                    <>
                      <AiFillEye
                        onClick={() => {
                          setHidden(!hidden);
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <AiFillEyeInvisible
                        onClick={() => {
                          setHidden(!hidden);
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
              <div className="form-button">
                <button type="submit">Giriş Yap</button>
              </div>
              <div className="info">
                Do you have not account? <Link to="/register2">Kayıt ol</Link>
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
          <div className="back-div">
            <Link to="/">
              <button>Anasayfa</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Login2;
