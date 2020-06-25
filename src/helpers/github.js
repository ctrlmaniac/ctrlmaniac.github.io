import axios from "axios";

export const github = axios.create({
  responseType: "json",
  baseURL: "https://api.github.com",
});
