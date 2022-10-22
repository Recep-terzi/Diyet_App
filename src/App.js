import { Routes, Route } from "react-router-dom";
import ExtraNavbar from "./components/ExtraNavbar/ExtraNavbar";
import Food from "./components/Food/Food";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/food" element={<Food />}></Route>
      </Routes>
    </>
  );
}

export default App;
