import axios from "../../axios/axiosInstance";
const token = localStorage.getItem("loginToken");

export function getUserDetails(tokenRedux) {
  return axios.get("user/profile", {
    headers: { Authorization: `Bearer ${tokenRedux || token}` },
  });
}

export function updateUserProfile(tokenRedux, updateDetails) {
  return axios.post(
    "user/updateProfile",
    { updateDetails },
    {
      headers: { Authorization: `Bearer ${tokenRedux || token}` },
    }
  );
}
