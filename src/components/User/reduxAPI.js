import axios from "../../axios/axiosInstance";
const token = localStorage.getItem("loginToken");

export function getUserDetails() {
  return axios.get("user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function updateUserProfile() {
  return axios.post("user/updateProfile", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
