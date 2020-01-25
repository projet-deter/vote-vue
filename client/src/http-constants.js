import axios from "axios";

let baseURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:8081/";
} else {
  baseURL = "http://localhost:8081/";
}

export const HTTP = axios.create({
  baseURL: baseURL,
  json: true
});