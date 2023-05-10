import axios from "axios";
import { BASE_URL } from "./globals";

const axiosApi = axios.create({
  baseURL: BASE_URL,
});

export default axiosApi;
