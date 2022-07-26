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

const Root = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About-us" element={<ContactUs />} />
          <Route path="/Contact-us" element={<AboutUs />} />
          <Route path="/user/profile" element={<User />} />
          <Route path="/Gallary" element={<Gallary />} />
        </Route>
      </Routes>
    </>
  );
};

export default Root;
