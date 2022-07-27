import axios from "../../axios/axiosInstance";

export function getUserDetails(email) {
  return axios.post("user/profile", { email });
}

export function updateUserProfile(email) {
  return axios.post("user/updateProfile", { email });
}
