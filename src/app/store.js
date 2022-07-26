import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import loginReducer from "../components/Auth/Login/reduxSlice";
import registerReducer from "../components/Auth/Register/reduxSlice";
import logoutReducer from "../components/Auth/Logout/reduxSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    // auth
    login: loginReducer,
    register: registerReducer,
    logout: logoutReducer,
  },
});
