import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { userState } from "../User/reduxSlice";

// other laibrary
import { useNavigate } from "react-router-dom";

// Bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";

// Icon
import { BsImages } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Icon } from "@iconify/react";

// Css
// import styles from "./App.module.css";
import "./App.css";

// assets
import logo from "../../assets/svg/logo.svg";
import avatar from "../../assets/img/avatar.jpg";
import { setIsAuth } from "../User/reduxSlice";

export default function NavbarComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, profileUrl } = useSelector(userState);

  const dropDownHandler = (event, navigateStr) => {
    event.preventDefault();
    navigate(navigateStr);
  };

  const ActionMenu = ({ isAuth }) => {
    if (isAuth) {
      const logoutHandler = (event) => {
        event.preventDefault();
        localStorage.removeItem("loginToken");
        dispatch(setIsAuth({ isAuth: false, token: null }));
        navigate("/login");
        window.location.reload();
      };
      return (
        <Nav className="flex-row me-0">
          <Dropdown className="w-auto h-auto m-auto px-2 ">
            <Dropdown.Toggle
              className="border  "
              variant=""
              id="userNavigation"
            >
              <img
                src={
                  isAuth
                    ? profileUrl
                      ? profileUrl
                      : "https://www.svgrepo.com/show/157053/avatar.svg"
                    : avatar
                }
                width="35"
                draggable="false"
                height="35"
                className="d-inline-block align-top m-1"
                alt="React Bootstrap logo"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="  shadow position-absolute border mt-2">
              <Dropdown.Item
                href="/"
                onClick={(e) => {
                  dropDownHandler(e, "/");
                }}
                className="  "
              >
                <Icon icon="fluent:desktop-32-regular" className="me-2" />
                Home
              </Dropdown.Item>
              <Dropdown.Divider className="p-0 mt-1" />

              <Dropdown.Item
                href="/"
                onClick={(e) => {
                  dropDownHandler(e, "/user/profile");
                }}
                className="  "
              >
                <CgProfile className="me-2" /> Profile
              </Dropdown.Item>
              <Dropdown.Item
                href="/"
                onClick={(e) => {
                  dropDownHandler(e, "/Gallary");
                }}
                className="  "
              >
                <BsImages className="me-2" /> Gallary
              </Dropdown.Item>
              <Dropdown.Divider className="p-0 m-0" />
              <Dropdown.Item href="/" onClick={logoutHandler} className="  ">
                <IoIosLogOut className="me-2" /> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      );
    } else {
      return (
        <Nav className="flex-row me-0">
          <Link to="/login" className="px-3 text-secondary ">
            Login
          </Link>
          <Link to="/register" className="px-3 text-secondary ">
            Register
          </Link>
        </Nav>
      );
    }
  };

  return (
    // <Navbar
    //   className="sticky-top py-1 px-2 d-flex justify-content-between   border-bottom"
    //   expand="lg"
    // >
    //   <Navbar id="basic-navbar-nav">
    //     <Nav className="ml-auto">
    // <Navbar.Brand className="ms-0 ">
    //   <img
    //     src={logo}
    //     width="auto"
    //     height="30"
    //     className="d-inline-block align-top"
    //     alt="React Bootstrap logo"
    //   />
    // </Navbar.Brand>
    //       <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
    //     </Nav>
    //   </Navbar>
    //   <Nav className="me-auto ms-3">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#features">About us</Nav.Link>
    //         <Nav.Link href="#pricing">Contact us</Nav.Link>
    //       </Nav>
    //   <ActionMenu />
    // </Navbar>
    <>
      <Navbar key={"sm"} bg="light" sticky="top" expand={"sm"} className="w">
        <Navbar.Brand
          className="ms-0  brandLogo"
          onClick={(e) => {
            dropDownHandler(e, "/");
          }}
        >
          <img
            src={logo}
            width="auto"
            height="30"
            className="d-inline-block align-top m-1"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton className={`${isAuth ? "" : "d-none"}`}>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={`${isAuth ? "" : "d-none"}`}>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link
                href="/"
                onClick={(e) => {
                  dropDownHandler(e, "/Projects");
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="/"
                onClick={(e) => {
                  dropDownHandler(e, "/About-us");
                }}
              >
                About us
              </Nav.Link>
              <Nav.Link
                href="/"
                onClick={(e) => {
                  dropDownHandler(e, "/Contact-us");
                }}
              >
                Contact us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <div className="d-flex  flex-row-reverse ">
          <Navbar.Toggle
            className="me-2"
            aria-controls={`offcanvasNavbar-expand-sm`}
          />
          <ActionMenu isAuth={isAuth} />
        </div>
      </Navbar>
    </>
  );
}
