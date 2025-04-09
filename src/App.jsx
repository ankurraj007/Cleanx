import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Book from "./Pages/Book";
import About from "./Pages/About";
import Franchise from "./Pages/Franchise";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/About" element={<About />} />
        <Route path="/Franchise" element={<Franchise />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
