import axios from "axios";

const baseURL = "https://merntaskserve.herokuapp.com/";
// http://localhost:4000/
// https://merntaskserve.herokuapp.com/
const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
