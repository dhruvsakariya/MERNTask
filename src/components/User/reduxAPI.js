import axios from "../../axios/axiosInstance";
const token = localStorage.getItem("loginToken");

export function getUserDetails(tokenRedux) {
  return axios.get("user/profile", {
    headers: { Authorization: `Bearer ${tokenRedux||token}` },
  });
}

export function updateUserProfile(tokenRedux) {
  return axios.post("user/updateProfile", {
    headers: { Authorization: `Bearer ${tokenRedux||token}` },
  });
}
