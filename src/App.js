import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import "./App.css";
import { setIsAuth, userState } from "./components/User/reduxSlice";

// components
import Root from "./pages/Root";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(userState);
  useEffect(() => {
    const autoLogin = async () => {
      const TokenBoth = localStorage.getItem("loginToken") || token;

      if (TokenBoth) {
        try {
          dispatch(setIsAuth({ isAuth: true, token: TokenBoth }));
        } catch (error) {}
      } else {
        if (
          !(
            window.location.pathname === "/login" ||
            window.location.pathname === "/register"
          )
        ) {
          navigate("/login");
        }
      }
    };
    autoLogin();
  }, [dispatch, token, navigate]);
  return <Root />;
}

export default App;
