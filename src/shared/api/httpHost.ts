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

// @TODO: fix
// $httpHost.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status >= 400 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshResponse = await $httpHost.post("/refresh");
//         const { accessToken } = refreshResponse.data;

//         authModel.setAccessToken(accessToken);

//         originalRequest.headers.Authorization = `Bearer ${accessToken}`;

//         return $httpHost(originalRequest);
//       } catch (refreshError) {
//         authModel.setAccessToken(null);
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
