import axios from "axios";
import store from "../vuex/store";

export const http = axios.create({
  baseURL: "http://127.0.0.1:8081/"
});

http.interceptors.request.use(
  config => {
    let token = store.state.accessToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
