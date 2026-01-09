import { AxiosError } from "axios";
import { notificationModel } from "@/entities/notifications";
import { $httpHost } from "./httpHost";

// @TODO: fix
$httpHost.interceptors.response.use(
  (response) => response,
  async (error) => {
    const ogReq: AxiosError = error;

    notificationModel.notify({
      title: `HTTP Ошибка${": " + ogReq.response?.status || ""}`,
      text: `${
        (ogReq.response?.data as { detail?: string })?.detail || ogReq.message
      }`,
    });

    // if (error.response?.status >= 400 && !ogReq._retry) {
    //   ogReq._retry = true;
    //   try {
    //     const refreshResponse = await $httpHost.post("/refresh");
    //     const { accessToken } = refreshResponse.data;
    //     authModel.setAccessToken(accessToken);
    //     ogReq.headers.Authorization = `Bearer ${accessToken}`;
    //     return $httpHost(ogReq);
    //   } catch (refreshError) {
    //     authModel.setAccessToken(null);
    //     return Promise.reject(refreshError);
    //   }
    // }
    return Promise.reject(error);
  }
);
