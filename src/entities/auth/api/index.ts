import { $httpHost } from "@/shared/api";
import { IUser, SignUpFxParams } from "../model/types";

export class AuthApi {
  static async getMe() {
    return await $httpHost.get<IUser>("/me");
  }

  static async signUp(params: SignUpFxParams) {
    return await $httpHost.post("/register", params);
  }

  static async login({ email, password }: { email: string; password: string }) {
    return await $httpHost.post("/login", {
      email,
      password,
    });
  }

  static async logout() {
    return await $httpHost.get("/logout");
  }

  static async refresh() {
    return await $httpHost.post("/refresh");
  }
}
