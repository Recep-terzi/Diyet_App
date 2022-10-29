import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Food from "./components/Food/Food";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </>
  );
}

export default App;
