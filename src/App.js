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
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";

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
        <Route path="/golf" element={<Golf setUserdata={setUserdata} />} />
        <Route path="/soccer" element={<Soccer setUserdata={setUserdata} />} />
        <Route
          path="/swimming"
          element={<Swimming setUserdata={setUserdata} />}
        />
        <Route path="/riding" element={<Ride setUserdata={setUserdata} />} />
        <Route
          path="/contact"
          element={<Contact setUserdata={setUserdata} />}
        />
        <Route path="/profile" element={<Profile userdata={userdata} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
