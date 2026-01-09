import axios from "axios";

import { authModel } from "@/entities/auth";
import { API_URL } from "../config";

export const $httpHost = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

$httpHost.interceptors.request.use(function (config) {
  const access = authModel.$accessToken.getState();
  if (!access) return config;

  config.headers.setAuthorization(`Bearer ${access}`);

  return config;
});
