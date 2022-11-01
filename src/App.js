import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Food from "./components/Food/Food";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import PersonelPage from "./components/PersonelPage/PersonelPage";
import Register from "./components/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { login, logout } from "./redux/dietSlice";
import Loading from "./components/Loading/Loading";
function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/personel" element={<PersonelPage />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
