import React, { useEffect, useState } from "react";
import "./Login.Module.css";
import loginDiet from "../../assets/login-diet.jpg";
import bg from "../../assets/bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/dietSlice";
const Login = () => {
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
                  <form onSubmit={handleSubmit}>
                    <div className="login-username">
                      <label>Kullanıcı Adı</label>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="login-password">
                      <label>Parola</label>

                      <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button className="login-button" type="submit">
                      {" "}
                      Giriş Yap{" "}
                    </button>
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
