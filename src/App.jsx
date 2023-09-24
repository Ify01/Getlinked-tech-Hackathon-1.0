import "./App.css";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {/* {loading ? (
        <Loading />
      ) : ( */}
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </>
      {/* )} */}
    </div>
  );
}

export default App;
