import React from "react";

// State management (Redux)
import { useSelector, useDispatch } from "react-redux";
import {
  loginState,
  setEmail,
  setPassword,
  toggleRememberMe,
  loginUserAsync,
} from "./reduxSlice";

// other laibrary
import { Link, useNavigate } from "react-router-dom";

// css
import styles from "./App.module.css";
import "./App.css";

// icon
import { Icon } from "@iconify/react";

export function Login() {
  const { email, password, rememberMe, loading } = useSelector(loginState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // functions
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserAsync({ email, password, navigate }));
  };

  return (
    <div className="  vh-100 ">
      <form
        onSubmit={submitHandler}
        className={` d-block mx-2 mt-3  mx-sm-auto p-lg-4  col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-6 border rounded-3 `}
      >
        <div className="mb-3">
          <h5 className="my-4">Login to your account</h5>

          {/* Email of User */}
          <label htmlFor="userEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            
            value={email}
            onChange={(e) => {
              dispatch(setEmail({ email: e.target.value }));
            }}
            className="form-control   "
            id="userEmail"
            aria-describedby="emailHelp"
            placeholder="name@address.com"
          />

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          {/* Password of User */}
          <label htmlFor="userPassword" className="form-label">
            Password
          </label>
          <a href="##" tabIndex={-1} className="float-end resetLink ">
            Forgot your password?
          </a>
          <input
            value={password}
            
            onChange={(e) => {
              dispatch(setPassword({ password: e.target.value }));
            }}
            type="password"
            placeholder="password"
            className="form-control   "
            id="userPassword"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            checked={rememberMe}
            onChange={() => {
              dispatch(toggleRememberMe());
            }}
            type="checkbox"
            className="form-check-input  "
            id="exampleCheck1"
          />
          <label className="form-check-label  " htmlFor="exampleCheck1">
            Remember me on this device
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-100 p-0 d-block mx-auto my-1"
        >
          {loading ? <Icon icon="eos-icons:bubble-loading" /> : "Login"}
        </button>
      </form>
      <div className="text-center my-2">
        <span className="">Don't have an account yet? </span>
        <Link className="register_link" to={{ pathname: "/register" }}>
          Register
        </Link>
      </div>
    </div>
  );
}
