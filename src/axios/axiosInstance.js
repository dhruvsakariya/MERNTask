import axios from "axios";

const baseURL = "http://localhost:5001/networking-pre-event-app/asia-south1/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
