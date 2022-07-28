import React, { useEffect } from "react";

// State management (Redux)
import { useSelector, useDispatch } from "react-redux";
import {
  setFirstName,
  setLastName,
  setConfirmPassword,
  loginState,
  setEmail,
  setPassword,
  toggleRememberMe,
  registerUserAsync,
  clearRegisterInputs,
} from "./reduxSlice";

// other laibrary
import { Link, useNavigate } from "react-router-dom";

// css
// import styles from "./App.module.css";
import "./App.css";

// icon
import { Icon } from "@iconify/react";
import { pushErrorNotification } from "../../Error/reduxSlice";

export function Register() {
  const {
    firstName,
    lastName,
    email,
    confirmPassword,
    password,
    rememberMe,
    loading,
  } = useSelector(loginState);
  // assigning
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // clear input

  useEffect(() => {
    return () => {
      dispatch(clearRegisterInputs());
    };
  }, [dispatch]);

  // functions
  const submitHandler = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      dispatch(
        registerUserAsync({
          firstName,
          lastName,
          email,
          password,
          navigate,
        })
      );
    } else {
      dispatch(
        pushErrorNotification({
          notify: {
            iconifyIconLink: (
              <Icon icon="fluent:password-20-filled" className="rounded" />
            ),
            errorTitle: "password",
            errorMessage: "password doesn't match. both password must match ",
            theme: "danger",
            time: "now",
            autoHideTime: 3000,
            show: true,
          },
        })
      );
    }
  };

  return (
    <div className="  h-100">
      <form
        onSubmit={submitHandler}
        className={` d-block mx-2 mt-3  mx-sm-auto p-lg-4  col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-6 border  shadow-sm  rounded-3 `}
      >
        <div className="mb-3">
          <h5 className="my-4 text-tertiary ">Create an account</h5>
          <div className="row mb-3">
            <div className="col-sm-6 col-12">
              {/* First Name */}
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  dispatch(setFirstName({ firstName: e.target.value }));
                }}
                required
                className="form-control   "
                id="firstName"
                placeholder="First Name"
              />
            </div>

            <div className="col-sm-6 col-12">
              {/* Last Name */}
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                value={lastName}
                required
                onChange={(e) => {
                  dispatch(setLastName({ lastName: e.target.value }));
                }}
                className="form-control   "
                id="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="">
            {/* Email */}
            <label htmlFor="userEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => {
                dispatch(setEmail({ email: e.target.value }));
              }}
              className="form-control   "
              id="userEmail"
              aria-describedby="emailHelp"
              placeholder="name@address.com"
            />
          </div>
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="userPasswordConfirm" className="form-label">
            Password
          </label>

          <input
            value={password}
            onChange={(e) => {
              dispatch(setPassword({ password: e.target.value }));
            }}
            required
            type="password"
            placeholder="password"
            className="form-control"
            id="userPasswordConfirm"
          />
        </div>
        {/* confirm password */}
        <div className="mb-3">
          <label htmlFor="userPassword" className="form-label">
            Confirm Password
          </label>

          <input
            value={confirmPassword}
            required
            onChange={(e) => {
              dispatch(setConfirmPassword({ confirmPassword: e.target.value }));
            }}
            type="password"
            placeholder="confirm password"
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
          {loading ? <Icon icon="eos-icons:bubble-loading" /> : "Register"}
        </button>
      </form>
      <div className="text-center py-2">
        <span className="">Have an account? </span>
        <Link className="register_link" to={{ pathname: "/login" }}>
          Login
        </Link>
      </div>
    </div>
  );
}
