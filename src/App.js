import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Food from "./components/Food/Food";
import Home from "./components/Home/Home";
import Payment from "./components/Payment/Payment";
import PersonelPage from "./components/PersonelPage/PersonelPage";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { login, logout } from "./redux/dietSlice";
import Loading from "./components/Loading/Loading";
import Login2 from "./components/Login2/Login2";
import Register2 from "./components/Register2/Register2";
import NotFound from "./components/404/NotFound";
import DetailPerson from "./components/DetailPerson/DetailPerson";
import DietList from "./components/DietList/DietList";
import DietDetail from "./components/DietDetail/DietDetail";
import Kitle from "./components/Kitle/Kitle";
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
          <Route path="/food" element={<Food />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/login2" element={<Login2 />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/detailperson" element={<DetailPerson />}></Route>
          <Route path="/dietlist" element={<DietList />}></Route>
          <Route path="/diet/:id" element={<DietDetail />}></Route>
          <Route path="/kitle" element={<Kitle />}></Route>

          <Route path="/register2" element={<Register2 />}></Route>
          <Route path="/personel" element={<PersonelPage />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
