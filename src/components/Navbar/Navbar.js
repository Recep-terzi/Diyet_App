import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.Module.css";
import { Typography } from "@mui/material";
import { logout } from "../../redux/dietSlice";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase/config";
import "alertifyjs/build/css/alertify.css";
import alertify from "alertifyjs";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  let activeClassName = "active";
  const user = useSelector((state) => state.diet.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("başarıyla çıkış yapıldı");
        dispatch(logout());
        navigate("/");
        alertify.success("Başarıyla çıkış yapıldı!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <i className="fa-solid fa-cookie-bite"></i>

            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: "30px",
                fontWeight: "bold",
                mt: 1,
                color: "white",
              }}
              className="kayan-yazi"
            >
              PyDiyet
            </Typography>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/food"
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-links"
                }
                onClick={click ? handleClick : null}
              >
                Ürünler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dietlist"
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-links"
                }
                onClick={click ? handleClick : null}
              >
                Diyet Listeleri
              </NavLink>
            </li>{" "}
            <li className="nav-item">
              <NavLink
                to="/kitle"
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-links"
                }
                onClick={click ? handleClick : null}
              >
                Vücut Kitle
              </NavLink>
            </li>{" "}
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-links"
                }
                onClick={click ? handleClick : null}
              >
                İletişim
              </NavLink>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/personel"
                    className={({ isActive }) =>
                      isActive ? activeClassName : "nav-links"
                    }
                    onClick={click ? handleClick : null}
                  >
                    Profil
                  </NavLink>
                </li>
                <li className="nav-item" onClick={handleLogout}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClassName : "nav-links"
                    }
                    onClick={click ? handleClick : null}
                  >
                    Çıkış
                  </NavLink>
                </li>
              </>
            )}
            {!user && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/login2"
                    className={({ isActive }) =>
                      isActive ? activeClassName : "nav-links"
                    }
                    onClick={click ? handleClick : null}
                  >
                    Giriş
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register2"
                    className={({ isActive }) =>
                      isActive ? activeClassName : "nav-links"
                    }
                    onClick={click ? handleClick : null}
                  >
                    Kayıt Ol
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          {/* {language === "EN" && (
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? activeClassName : "nav-links"
                  }
                  onClick={click ? handleClick : null}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    isActive ? activeClassName : "nav-links"
                  }
                  onClick={click ? handleClick : null}
                >
                  Skills
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? activeClassName : "nav-links"
                  }
                  onClick={click ? handleClick : null}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          )} */}
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
