import axios from "axios";

const http = axios.create({
  baseURL: "/data/",
});

export default http;
