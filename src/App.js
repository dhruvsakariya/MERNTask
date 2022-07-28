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
          // const response = await signInWithCustomToken(TokenBoth);
          // const user = response.data.userId;
          // if (user) {
          //   dispatch(setIsAuth({ isAuth: true }));
          // }
        } catch (error) {}
      } else {
        navigate("/login");
      }
    };
    autoLogin();
  }, [dispatch, token, navigate]);
  return <Root />;
}

export default App;
