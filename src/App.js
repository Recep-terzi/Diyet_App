import { Routes, Route } from "react-router-dom";
import ExtraNavbar from "./components/ExtraNavbar/ExtraNavbar";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <ExtraNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
