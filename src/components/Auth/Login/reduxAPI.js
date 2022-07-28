// Promise
// fetch request ( to laravel )
// axios request ( get , post , put , patch ...)
// firestore requests
// cloud function requests

import axios from "../../../axios/axiosInstance";
export function loginUser(email, password, rememberMe) {
  return axios.post("/user/login", {
    email,
    password,
    rememberMe,
  });
}
