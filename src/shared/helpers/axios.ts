import axios from "axios";

export const apiReq = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
