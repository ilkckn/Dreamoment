import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import About from './views/About/About';
import Tours from './views/Tours/Tours';
import Contact from './views/Contact/Contact'
import Footer from './components/Footer/Footer'
import Booking from "./components/Booking/Booking";

function App() {
  return (
    <>
      <div className="appContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element= {<Booking />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
