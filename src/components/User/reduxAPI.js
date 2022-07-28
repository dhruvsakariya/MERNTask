import axios from "../../axios/axiosInstance";

export function getUserDetails() {
  return axios.get("user/profile");
}

export function updateUserProfile() {
  return axios.post("user/updateProfile");
}
