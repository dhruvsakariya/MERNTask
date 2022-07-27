import React from "react";

// router
import { Routes, Route } from "react-router-dom";

// components
import NavbarComponent from "../components/Navbar/App";
import Projects from "../components/Projects/App";
import ContactUs from "../components/ContactUs/App";
import AboutUs from "../components/AboutUs/App";
import User from "../components/User/App";
import Gallary from "../components/Gallary/App";
import { Login } from "../components/Auth/Login/App";
import { Register } from "../components/Auth/Register/App";
import Footer from "../components/Footer/App";
import HomePage from "../components/HomePage/App";

const Root = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About-us" element={<AboutUs />} />
          <Route path="/Contact-us" element={<ContactUs />} />
          <Route path="/user/profile" element={<User />} />
          <Route path="/Gallary" element={<Gallary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Root;
