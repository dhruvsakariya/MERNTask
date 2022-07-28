import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import loginReducer from "../components/Auth/Login/reduxSlice";
import registerReducer from "../components/Auth/Register/reduxSlice";
import userReducer from "../components/User/reduxSlice";
import gallaryReducer from "../components/Gallary/reduxSlice";

import errorReducer from "../components/Error/reduxSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    user: userReducer,
    gallary: gallaryReducer,

    // error
    error: errorReducer,

    // auth
    login: loginReducer,
    register: registerReducer,
  },
});
