import axios from "axios";

import { authModel } from "@/entities/auth";
import { API_URL } from "../config";

export const $httpHost = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

$httpHost.interceptors.request.use(function (config) {
  const access = authModel.$accessToken.getState();
  config.headers.setAuthorization(`Bearer ${access}`);

  return config;
});
