// Promise
// fetch request ( to laravel )
// axios request ( get , post , put , patch ...)
// firestore requests
// cloud function requests

import axios from "../../../axios/axiosInstance";
const token = localStorage.getItem("loginToken");
export function loginUser(email, password, rememberMe) {
  return axios.post(
    "/user/login",
    {
      email,
      password,
      rememberMe,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}
