import React, { useEffect, useState } from "react";
import "./Login2.Module.css";
import bg from "../../assets/bg.jpg";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/dietSlice";
const Login2 = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
                  />
                </div>
                <div className="password">
                  <label> Parola </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-button">
                <button type="submit">Giriş Yap</button>
              </div>
              <div className="info">
                Do you have not account? <Link to="/register2">Kayıt ol</Link>
              </div>
              <div className="social">
                <AiFillInstagram />
                <AiFillLinkedin />
                <AiFillGithub />
              </div>
            </form>
          </div>
          <div className="back-div">
            <button>
              <Link to="/">Kayıt ol</Link>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Login2;
