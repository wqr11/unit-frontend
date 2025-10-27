import { $httpHost } from "@/shared/api";
import { API_URL } from "@/shared/config";

export class AuthApi {
  static async signUp({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    return await $httpHost.post(`${API_URL}/auth/signup`, {
      name,
      email,
      password,
    });
  }

  static async login({ email, password }: { email: string; password: string }) {
    return await $httpHost.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
  }

  static async refresh() {
    return await $httpHost.get(`${API_URL}/refresh`);
  }
}
