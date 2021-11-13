import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Tennis from "./pages/category/Tennis";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tennis" element={<Tennis />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route exact path="/" components={Home} /> */}
        {/* <Route exact path="/" components={Home} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
