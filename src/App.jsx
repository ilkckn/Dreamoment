import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import About from './views/About/About';
import Tours from './views/Tours/Tours';
import Contact from './views/Contact/Contact'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="appContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About/>} />
          <Route path="/" element={<Tours />} />
          <Route path="/" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
