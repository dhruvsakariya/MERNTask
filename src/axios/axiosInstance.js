import axios from "axios";

const baseURL = "http://localhost:4000/";
// http://localhost:4000/
// https://merntaskserve.herokuapp.com/
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
