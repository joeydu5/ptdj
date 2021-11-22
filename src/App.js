import React, { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Tennis from "./pages/category/Tennis";
import Golf from "./pages/category/Golf";
import Soccer from "./pages/category/Soccer";
import Swimming from "./pages/category/Swimming";
import Ride from "./pages/category/Ride";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Contact from "./pages/contact/contact";
import Profile from "./pages/profile/Profile";

function App() {
  const [userdata, setUserdata] = useState({
    id: "",
    category: "",
    firstname: "",
    lastname: "",
    star: "",
    image: "",
    rates: "",
    city: "",
    contact: {
      mobile: "",
      email: "",
    },
    qualification: "",
    intro: "",
    video: "",
    testimonial: [],
  });

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tennis" element={<Tennis setUserdata={setUserdata} />} />
        <Route path="/golf" element={<Golf />} />
        <Route path="/soccer" element={<Soccer />} />
        <Route path="/swimming" element={<Swimming />} />
        <Route path="/riding" element={<Ride />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile userdata={userdata} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
