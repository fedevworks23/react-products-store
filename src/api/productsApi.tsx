import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const productsApi = axios.create({});
