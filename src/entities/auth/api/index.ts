import { $httpHost } from "@/shared/api";
import { API_URL } from "@/shared/config";
import { IUser, SignUpFxParams } from "../model/types";

export class AuthApi {
  static async getMe() {
    return await $httpHost.get<IUser>(`${API_URL}/me`);
  }

  static async signUp(params: SignUpFxParams) {
    return await $httpHost.post(`${API_URL}/register`, params);
  }

  static async login({ email, password }: { email: string; password: string }) {
    return await $httpHost.post(`${API_URL}/login`, {
      email,
      password,
    });
  }

  static async refresh() {
    return await $httpHost.post(`${API_URL}/refresh`);
  }
}
