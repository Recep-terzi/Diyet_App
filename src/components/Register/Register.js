import React, { useEffect, useState } from "react";
import "./Register.Module.css";
import registerDiet from "../../assets/register-diet.jpg";
import { Link, useNavigate } from "react-router-dom";
import StepFlowWizard from "react-step-flow-wizard";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/dietSlice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
// const StartView = (props) => {
//   const { onPreviousClick, onNextClick } = props;
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [rePassword, setRePassword] = useState();
//   const dispatch = useDispatch();
//   const handleSubmit = (e) => {
//     dispatch(
//       getName({
//         username: name,
//         email: email,
//         password: password,
//         rePassword: rePassword,
//       })
//     );
//   };
//   const user = useSelector((state) => state.diet.username);
//   console.log(user);
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="register-username-email">
//           <div className="register-username">
//             <span>Kullanıcı Adı</span>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="register-email">
//             <span>Email</span>
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="register-password-repassword">
//           <div className="register-password">
//             <span>Parola</span>
//             <input
//               type="text"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="register-repassword">
//             <span>Parolayı tekrar giriniz</span>
//             <input
//               type="text"
//               value={rePassword}
//               onChange={(e) => setRePassword(e.target.value)}
//             />
//           </div>
//         </div>
//         <div>
//           {onPreviousClick && (
//             <button onClick={onPreviousClick} className="register-button">
//               Geri Dön
//             </button>
//           )}
//           {onNextClick && (
//             <button
//               className="register-button"
//               onClick={onNextClick}
//               type="submit"
//             >
//               İleri
//             </button>
//           )}
//         </div>
//       </form>

//       <div className="register-info">
//         Hesabınız var mı?
//         <Link to="/register"> hemen giriş için tıklayın.</Link>
//       </div>
//     </>
//   );
// };

// const TwoView = (props) => {
//   const { onPreviousClick, onNextClick } = props;
//   return (
//     <>
//       <div className="register-tc">
//         <span>TC Kimlik Numaranız</span>
//         <input type="text" />
//       </div>
//       <div className="register-age-kilo-boy">
//         <div className="register-age">
//           <span>Yaş</span>
//           <input type="text" />
//         </div>
//         <div className="register-kilo">
//           <span>Kilo</span>
//           <input type="text" />
//         </div>
//         <div className="register-boy">
//           <span>Boy</span>
//           <input type="text" />
//         </div>
//       </div>
//       <div className="register-food-targetkilo-interest">
//         <div className="register-food">
//           <span>Yemek</span>
//           <input type="text" />
//         </div>
//         <div className="register-targetkilo">
//           <span>Hedef Kilo</span>
//           <input type="text" />
//         </div>
//         <div className="register-interest">
//           <span>İlgi Alanım</span>
//           <input type="text" />
//         </div>
//       </div>
//       <div className="register-kronik-alerji-evli-ozel">
//         <div className="register-kronik">
//           <span>Kronik</span>
//           <input type="checkbox" />
//         </div>
//         <div className="register-alerji">
//           <span>Alerji</span>
//           <input type="checkbox" />
//         </div>
//         <div className="register-evli">
//           <span>Evli</span>
//           <input type="checkbox" />
//         </div>
//         <div className="register-ozel">
//           <span>Özel</span>
//           <input type="checkbox" />
//         </div>
//       </div>

//       <div className="button-grp">
//         {onPreviousClick && (
//           <button onClick={onPreviousClick} className="register-button">
//             Geri Dön
//           </button>
//         )}
//         {onNextClick && (
//           <button onClick={onNextClick} className="register-button">
//             İleri
//           </button>
//         )}
//         <button className="register-button"> Giriş Yap </button>
//       </div>
//       <div className="register-info">
//         Hesabınız var mı?
//         <Link to="/register"> hemen giriş için tıklayın.</Link>
//       </div>
//     </>
//   );
// };
const Register = () => {
  document.body.style.backgroundImage = `url(${registerDiet})`;
  document.body.style.backgroundSize = "cover";
  const [name, setName] = useState();
  const [email, setEmail] = useState();
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
    if (password === rePassword) {
      setEsit(true);
    } else {
      setEsit(false);
    }
  }, [password, rePassword]);
  // const screens = [
  //   {
  //     identifier: "step1",
  //     component: StartView,
  //   },
  //   {
  //     identifier: "step2",
  //     component: TwoView,
  //   },
  // ];
  return (
    <>
      {/* <div className="back-container-register">
        <Link to="/"> Anasayfa'ya dön</Link>
      </div>
      <div className="register-container animate__bounceIn animate__animated">
        <div className="register-title">Kullanıcı Kayıt</div>
        <div className="register-form">
          <div>
            <StepFlowWizard screens={screens} region="TR" />
          </div>
        </div>
      </div> */}
      <div className="back-container-register">
        <Link to="/"> Anasayfa'ya dön</Link>
      </div>
      <div className="register-container animate__bounceIn animate__animated">
        <div className="register-title">Kullanıcı Kayıt</div>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="register-username-email">
            <div className="register-username">
              <span>Kullanıcı Adı</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="register-email">
              <span>Email</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
            </div>{" "}
          </div>
          <div className="register-password-repassword">
            <div className="register-password">
              <span>Parola</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
            </div>
            <div className="register-repassword">
              <span>Parolayı tekrar giriniz</span>
              <input
                type="password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>{" "}
            {esit ? (
              <></>
            ) : (
              <div className="esit-parola">Parolalar uyuşmuyor!</div>
            )}
          </div>
          <button className="register-button" type="submit">
            Giriş Yap
          </button>
          <div className="register-info">
            Hesabınız var mı?
            <Link to="/register"> hemen giriş için tıklayın.</Link>{" "}
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
