// import React from "react";
// import "./Navbar.Module.css";
// const Navbar = () => {
//   return (
//     <>
//       <div className="navbar-container">
//         <div className="navbar-menu">
//           <div className="nav-left">
//             <i class="fa-solid fa-cookie-bite"></i>
//             PyDiyet
//           </div>
//           <div className="nav-right">
//             <div className="category">Category</div>
//             <div className="contact">Contact</div>
//             <div className="login">Login</div>
//             <div className="register">Register</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.Module.css";
import { Typography } from "@mui/material";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  let activeClassName = "active";
  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <i class="fa-solid fa-cookie-bite"></i>

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
                to="/projects"
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
                to="/skills"
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
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-links"
                }
                onClick={click ? handleClick : null}
              >
                İletişim
              </NavLink>
            </li>
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
